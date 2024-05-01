import { Request, Response, NextFunction } from 'express';

export class UserMiddleware {
  log(req: Request, res: Response, next: NextFunction) {
    console.log('ini middleware');
    next();
  }
}
