import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export class AccountController {
    // async getAccount(req: Request, res: Response) {
    //     try {
    //         if (req.user?.accountType == "user") {
    //             const user = await prisma.user_Promotor.findUnique({
    //                 where: {
    //                     id: req.user?.id
    //                 },
    //                 include: {
    //                     PointUser: true
    //                 }
    //             })
    //             const getPoint = await prisma.pointUser.findFirst({
    //                 where: {
    //                     userId: user?.id,
    //                     isRedeem: false
    //                 },
    //             })
    //             if (getPoint !== null) {
    //                 const userPoint = await prisma.pointUser.aggregate({
    //                         where: {
    //                             userId: user?.id,
    //                             isRedeem: false
    //                         },
    //                         _sum: {
    //                             point: true
    //                         },
    //                         _min: {
    //                             expireAt: true
    //                         }
    //                     })
    //                 const expireSoonPoint = await prisma.pointUser.aggregate({
    //                     where: {
    //                         expireAt: new Date(userPoint._min?.expireAt!),
    //                         isRedeem: false
    //                     },
    //                     _sum: {
    //                         point: true
    //                     }
    //                 })
    //                 return res.status(200).send({
    //                     status: 'ok',
    //                     message: 'user found',
    //                     userData: {
    //                         id: user?.id,
    //                         name: user?.name,
    //                         email: user?.email,
    //                         referral: user?.referral,
    //                         accountType: user?.accountType,
    //                         sumPoint: userPoint._sum.point,
    //                         expireSoonPoint: expireSoonPoint._sum.point,
    //                         expireDate: userPoint._min.expireAt,
    //                         profilePicture: user?.profilePicture
    //                     }
    //                 })
    //             }
    //             return res.status(200).send({
    //                 status: "ok",
    //                 message: 'account found',
    //                 userData: {
    //                     id: user?.id,
    //                     name: user?.name,
    //                     email: user?.email,
    //                     referral: user?.referral,
    //                     accountType: user?.accountType,
    //                     sumPoint: 0,
    //                 }

    //             })
    //         }
    //         if (req.user?.accountType == "organizer") {
    //             const account = await prisma.organizer.findUnique({
    //                 where: {
    //                     id: req.user?.id
    //                 }
    //             })
    //             res.status(200).send({
    //                 status: "ok",
    //                 message: 'account found',
    //                 userData: {
    //                     ...account
    //                 }
    //             })
    //         }
    //     } catch (error) {
    //         res.status(400).send({
    //             status: "error",
    //             message: error
    //         })      
    //     }
    // }

    async getAccountType(req: Request, res: Response) {
        try {
            const accountType = req.user?.accountType
            res.status(200).send(({
                status: 'ok',
                message: 'accountType found',
                accountType
            }))
        } catch (error) {
            res.status(400).send({
                status: 'error',
                message: error
            })
        }
    }

}