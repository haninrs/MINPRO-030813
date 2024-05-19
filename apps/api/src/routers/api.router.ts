import { Router } from 'express';
import { UserRouter } from './user.router';
import { SampleRouter } from './sample.router';
import { PromotorRouter } from './promotor.router';
import { AccountController } from '@/controllers/account.controller';
import { AccountRouter } from './account.router';

export class ApiRouter {
  private userRouter: UserRouter;
  private sampleRouter: SampleRouter;
  private promotorRouter: PromotorRouter;
  private accountRouter: AccountRouter;
  private router: Router;

  constructor() {
    this.router = Router();
    this.userRouter = new UserRouter();
    this.promotorRouter = new PromotorRouter();
    this.accountRouter = new AccountRouter();
    this.sampleRouter = new SampleRouter();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.use('/users', this.userRouter.getRouter());
    this.router.use('/promotors', this.promotorRouter.getRouter());
    this.router.use('/accounts', this.accountRouter.getRouter());
    this.router.use('/sample', this.sampleRouter.getRouter());
  }

  getRouter(): Router {
    return this.router;
  }
}
