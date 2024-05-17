import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export class UserMiddleware {
  //   log(req: Request, res: Response, next: NextFunction) {
  //     console.log('ini middleware');
  //     next();
  //   }

 async veryfyToken(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers.authorization?.replace('Bearer ', '');
      // console.log(token);
      if (!token) throw 'Token Empty';

      const verifyUser = verify(token, process.env.KEY_JWT!);
      req.user = verifyUser as User;
      console.log(verifyUser);

      next();
    } catch (err) {
      res.status(400).send({
        status: 'error',
        message: err,
      });
    }
  }
}
