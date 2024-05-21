import { transporter } from '@/helpers/nodemailer';
import { PrismaClient } from '@prisma/client';
import { compare, genSalt, hash } from 'bcrypt';
import { Request, Response } from 'express';
import fs from 'fs';
import { sign } from 'jsonwebtoken';
import path from 'path';
import Handlebars from 'handlebars';

const prisma = new PrismaClient();

export class PromotorController {
  async getPromotor(req: Request, res: Response) {
    try {
      const promotor = await prisma.user_Promotor.findFirst({
        where: {
          id: req.user?.id,
        },
      });

      res.status(200).send({
        status: 'ok',
        promotor,
      });
    } catch (error) {
      res.status(400).send('eror');
    }
  }

  async promotorRegister(req: Request, res: Response) {
    try {
      const { username, email, password, confirmPw } = req.body;
      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);
      const hashconfirmPw = await hash(confirmPw, salt);

      let user = await prisma.user_Promotor.findUnique({
        where: {
          email,
        },
      });
      let nameUser = await prisma.user_Promotor.findUnique({
        where: {
          username,
        },
      });
      if (user?.isActive == true || user) throw 'Email already exist';
      if (nameUser?.isActive == true || nameUser)
        throw 'Username already exist';

      const promotor = await prisma.user_Promotor.create({
        data: {
          username,
          email,
          password: hashPassword,
          confirmPw: hashconfirmPw,
        },
      });

      const payload = {
        id: promotor.id,
        username: promotor?.username,
        email: promotor?.email,
        accountType: promotor.accountType,
      };

      const token = sign(payload, process.env.KEY_JWT!, { expiresIn: '1h' });
      const link = `http://localhost:3000/verify/${token}`;

      // panggil template email
      const templatePath = path.join(
        __dirname,
        '../templates',
        'registerPromotor.html',
      );
      const templateSource = fs.readFileSync(templatePath, 'utf-8');
      const compiledTemplate = Handlebars.compile(templateSource);
      const html = compiledTemplate({
        name: promotor.username,
        link,
      });

      await transporter.sendMail({
        from: 'hanitrp@gmail.com',
        to: promotor.email,
        subject: 'Welcome to HAREFEVENT',
        html,
      });

      res.status(201).send({
        status: 'ok',
        promotor,
        token,
        accountType: promotor.accountType,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: 'error',
        message: error,
      });
    }
  }

  async verifyPromotor(req: Request, res: Response) {
    try {
      if (req.user?.accountType == 'orginazer') {
        const orginazer = await prisma.user_Promotor.update({
          where: {
            id: req.user?.id,
          },
          data: {
            isActive: true,
          },
        });
        const payload = {
          id: orginazer.id,
          accountType: orginazer.accountType,
        };
        const token = sign(payload, process.env.KEY_JWT!, { expiresIn: '1d' });
        res.status(201).send({
          status: 'ok',
          token,
          userData: {
            id: orginazer.id,
            username: orginazer.username,
            email: orginazer.email,
            image: orginazer.image,
            accountType: orginazer.accountType,
          },
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: 'error',
        message: error,
      });
    }
  }

  async loginPromotor(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      const user = await prisma.user_Promotor.findFirst({
        where: {
          username,
        },
      });

      if (user == null) throw 'User Not Found';
      if (!user.isActive) throw 'Cannot login, please activate your account';

      const isValidPass = await compare(password, user.password);
      if (!isValidPass) throw 'Incorrect Password';

      const event = await prisma.event.findMany({
        where: {
          userPromotorId: user.id,
        },
      });

      const totalEvent = await prisma.event.count({
        where: {
          userPromotorId: user.id,
        },
      });

      // const tesemail = user.email
     
      // console.log(tesemail);


      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        isActive: user.isActive,
        accountType: user.accountType,
        image: user.image,
        totalEvent,
        event: { event },
      };
      const token = sign(payload, process.env.KEY_JWT as string, {
        expiresIn: '1d',
      });
      // console.log(token);

      res.status(200).send({
        status: 'ok',
        message: 'suscess login',
        promotor: user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: 'error',
        message: error,
      });
    }
  }

  async getSession(req: Request, res: Response) {
    try {
      const session = await prisma.user_Promotor.findUnique({
        where: {
          id: req.user?.id,
        },
        select: {
          username: true,
          email: true,
          image: true,
          accountType: true,
        },
      });
      // console.log(session);

      res.status(200).json(session);
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: 'error',
        message: error,
      });
    }
  }

  async profilePict(req: Request, res: Response) {
    try {
      const { file } = req;
      if (!file) throw 'No file Uploaded';
      const imageUrl = `http://localhost:8000/public/images/${file.fieldname}`;
      await prisma.user_Promotor.update({
        data: {
          image: imageUrl,
        },
        where: {
          id: req.user?.id,
        },
      });

      res.status(200).send({
        status: 'ok',
        message: 'Upload Image Successfully!',
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: 'error',
        message: error,
      });
    }
  }

  async getEventByPromotor(req: Request, res: Response) {
    try {
      console.log(req.user?.accountType);

      const orginazer = await prisma.user_Promotor.findFirst({
        where: {
          id: req.user?.id,
        },
      });

      const events = await prisma.event.findMany({
        where: {
          userPromotorId: req.user?.id,
        },
      });

      const totalEvent = await prisma.event.count({
        where: {
          userPromotorId: req.user?.id,
        },
      });
      // console.log(events, totalEvent);

      res.status(200).send({
        status: 'ok',
        events: events,
        totalEvent,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        status: 'error',
        message: err,
      });
    }
  }

  async emailVerification(req: Request, res: Response) {
    try {
      const user = await prisma.user_Promotor.findUnique({
        where: {
          id: req.user?.id,
        },
      });

      if (user?.email !== req.body.email) {
        const payload = {
          id: user?.id,
          email: req.body.email,
          accountType: user?.accountType,
        };
        const token = sign(payload, process.env.KEY_JWT as string);
        const link = `http://localhost:3000/update-email/${token}`;
        const templatePath = path.join(
          __dirname,
          '../templates/updateEmail.html',
        );
        const templateSource = fs.readFileSync(templatePath, 'utf-8');
        const compiledTemplate = Handlebars.compile(templateSource);
        const html = compiledTemplate({
          name: user?.username,
          link,
        });

        await transporter.sendMail({
          from: process.env.MAIL_USER!,
          to: user?.email,
          subject:
            'Update Email Verification has been sent to your email address',
        });
        res.status(200).send({
          status: 'ok',
          message: 'Email Updated',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: 'error',
        message: error,
      });
    }
  }

  async updateEmail(req: Request, res: Response) {
    try {
      const user = await prisma.user_Promotor.findUnique({
        where: {
          id: req.user?.id,
        },
      });

      if (!user) throw 'User Not Found';
      const updateUser = await prisma.user_Promotor.update({
        where: {
          id: req.user?.id,
        },
        data: {
          email: req.body.email,
        },
      });
      res.status(200).send({
        status: 'ok',
        message: 'Email Updated',
        email: updateUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: 'error',
        message: error,
      });
    }
  }

  updateUsername(req: Request, res: Response) {
    try {
      const { username } = req.body;
      let user = prisma.user_Promotor.findUnique({
        where: {
          id: req.user?.id,
        },
      });

      if (!user) throw 'User Not Found';
      user = prisma.user_Promotor.update({
        where: {
          id: req.user?.id,
        },
        data: {
          username: username,
        },
      });
      res.status(200).send({
        status: 'ok',
        message: 'Username Updated',
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        status: 'error',
        message: error,
      });
    }
  }

  async updatePassword(req: Request, res: Response) {
    try {
      const { password } = req.body;
      let user = prisma.user_Promotor.findUnique({
        where: {
          id: req.user?.id,
        },
      });
      if (!user) throw 'User Not Found';
      user = prisma.user_Promotor.update({
        where: {
          id: req.user?.id,
        },
        data: {
          password: password,
        },
      });
      res.status(200).send({
        status: 'ok',
        message: 'Password Updated',
      });
    } catch (eror) {
      console.log(eror);
      res.status(400).send({
        status: 'error',
        message: eror,
      });
    }
  }
}
