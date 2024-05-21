import { PrismaClient } from '@prisma/client';
import { compare, genSalt, hash } from 'bcrypt';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import { transporter } from '@/helpers/nodemailer';

const prisma = new PrismaClient();

export class UserController {
  async getUser(req: Request, res: Response) {
    try {
      const users = await prisma.user_Costumer.findMany();
      res.status(200).send({
        status: 'ok',
        users,
      });
    } catch (error) {
      res.status(400).send('eror');
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const profile = await prisma.user_Costumer.findUnique({
        where: {
          id: req.user?.id,
        },
      });
      res.status(200).send({
        status: 'ok',
        profile,
      });
    } catch (error) {
      res.status(400).send('eror');
    }
  }

  // register blum
  async userRegister(req: Request, res: Response) {
    try {
      const { username, email, password, confirmPw, referral } = req.body;
      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);
      const hashconfirmPw = await hash(confirmPw, salt);

      let user = await prisma.user_Costumer.findUnique({
        where: {
          email,
        },
      });

      let userName = await prisma.user_Costumer.findUnique({
        where: {
          username,
        },
      });
      if (user?.isActive == true) throw 'Email already exist';
      if (userName?.isActive == true) throw 'Username already exist';

      let referralAda;
      // handle pakai refferal
      if (referral !== '' && referral !== undefined && referral !== null) {
        referralAda = await prisma.user_Costumer.findUnique({
          where: {
            referral: referral,
            isActive: true,
          },
        });
        // cek refferal gak ada
        if (referralAda === null) throw 'Invalid referral code';

        // cek refferal ada
        user = await prisma.user_Costumer.create({
          data: {
            username,
            email,
            password: hashPassword,
            confirmPw: hashconfirmPw,
          },
        });
      }
      // handle gak pakai refferal
      else {
        user = await prisma.user_Costumer.create({
          data: {
            username,
            email,
            password: hashPassword,
            confirmPw: hashconfirmPw,
          },
        });
      }

      const payload = {
        id: user.id,
        username: user?.username,
        email: user?.email,
        referral: referral || null,
        accountType: user.accountType,
      };

      const token = sign(payload, process.env.KEY_JWT!, { expiresIn: '1h' });
      const link = `http://localhost:3000/verify/${token}`;

      // panggil template email
      const templatePath = path.join(
        __dirname,
        '../templates',
        'register.html',
      );
      const templateSource = fs.readFileSync(templatePath, 'utf-8');
      const compiledTemplate = Handlebars.compile(templateSource);
      const html = compiledTemplate({
        name: user.username,
        link,
      });

      await transporter.sendMail({
        from: 'hanitrp@gmail.com',
        to: user.email,
        subject: 'Welcome to HAREFEVENT',
        html,
      });
      console.log(token);

      res.status(201).send({
        status: 'ok',
        message: 'User Registered!',
        user,
        token,
        
      });
    } catch (error) {
      res.status(400).send({
        status: 'error',
        message: error,
      });
    }
  }

  // verify account
  async verifyUser(req: Request, res: Response) {
    try {
      // console.log(req.user?.referral);
      // refferal own get point
      if (req.user?.accountType == 'user') {
        if (req.user?.referral) {
          const refOwn = await prisma.user_Costumer.findUnique({
            where: {
              referral: req.user.referral,
            },
          });

          if (!refOwn) throw 'Invalid referral code';
          await prisma.points.create({
            data: {
              user_CostumerId: refOwn.id,
              points: 10000,
              experationDate: new Date(
                Date.now() + 3 * 30 * 24 * 60 * 60 * 1000,
              ),
            },
          });
          await prisma.discountCoupon.create({
            data: {
              user_CostumerId: req.user.id,
              experationDate: new Date(
                Date.now() + 3 * 30 * 24 * 60 * 60 * 1000,
              ),
            },
          });
        }

        const refferalUser =
          req.user?.username[0]! +
          req.user?.username[1]! +
          (Math.floor(Math.random() * (999 - 100 + 1)) + 100) +
          req.user?.id!;

        const activateUser = await prisma.user_Costumer.update({
          data: {
            isActive: true,
            referral: refferalUser,
            
          },
          where: {
            id: req.user?.id,
          },
        });
        res.json(activateUser);
      }

      if (req.user?.accountType == 'orginazer') {
        const activatePromotor = await prisma.user_Promotor.update({
          data: {
            isActive: true,
          },
          where: {
            id: req.user?.id,
          },
        });
        res.json(activatePromotor);
      }
    } catch (err) {
      console.log(err);
      res.status(400).send({
        status: 'error',
        message: err,
      });
    }
  }

  // user login
  async userLogin(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      const user = await prisma.user_Costumer.findFirst({
        where: {
          username,
        },
      });

      if (user == null) throw 'User Not Found';
      if (!user.isActive) throw 'User Not Active';

      const isValidPass = await compare(password, user.password);
      if (!isValidPass) throw 'Incorrect Password';
      const referal = await prisma.user_Costumer.findFirst({
        where: {
          referral: user.referral,
        },
      });

      const point = await prisma.points.aggregate({
        _sum: {
          points: true,
        },
        where: {
          user_CostumerId: user.id,
        },
      });
      console.log(point._sum.points);

      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        isActive: user.isActive,
        accountType: user.accountType,
        image: user.image,
        referal: user.referral,
        point: point,
      };
      const token = sign(payload, process.env.KEY_JWT as string, {
        expiresIn: '1d',
      });

      res.status(200).send({
        status: 'ok',
        userData: {
          id: user.id,
          username: user.username,
          email: user.email,
          image: user.image,
          accountType: user.accountType,
          isActive: user.isActive,
          referral: user.referral,
        },
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        status: 'error',
        message: err,
      });
    }
  }

  // session
  async getSession(req: Request, res: Response) {
    try {
      const session = await prisma.user_Costumer.findUnique({
        where: {
          id: req.user?.id,
        },
        select: {
          username: true,
          email: true,
          image: true,
          accountType: true,
          isActive: true,
          DiscountCoupon: true,
          Points: true,
        },
      });
      res.status(200).json(session);
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: 'error',
        message: error,
      });
    }
  }
}
