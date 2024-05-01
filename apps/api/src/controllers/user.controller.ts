import { Request, Response } from 'express';

export class UserController {
  async getUser(req: Request, res: Response) {
    try {
      const users = [{ id: 1, name: 'andi', age: 20 }];
      res.status(200).send({
        status : "ok",
        users
      })
    } catch (error) {
        res.status(400).send('eror')
    }
  }

  async userRegister (req:Request, res:Response){

  }
}
