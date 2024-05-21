import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export class UserMiddleware {
  //   log(req: Request, res: Response, next: NextFunction) {
  //     console.log('ini middleware');
  //     next();
  //   }

  async veryfyToken(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers.cookie?.replace('session=', '');
      // let token1 = req.headers.authorization?.replace('Bearer ', '');
      // console.log(token);
      if (token == undefined) throw 'Token Empty';
      let tokenSplit = token?.split(';')[0];
      console.log(tokenSplit);

      let verifyUser = verify(tokenSplit, process.env.KEY_JWT!);
      req.user = verifyUser as User;
      // console.log(verifyUser);
      // console.log(req.headers.cookie);

      next();
    } catch (err) {
      console.log(err);

      res.status(400).send({
        status: 'error',
        message: err,
      });
    }
  }
}
