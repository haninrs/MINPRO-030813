import { AccountController } from '@/controllers/account.controller';
import { UserMiddleware } from '@/middleware/user.middleware';
import { Router } from 'express';

export class AccountRouter {
  private router: Router;
  private verifyToken: UserMiddleware;
  private accountController: AccountController;

  constructor() {
    this.accountController = new AccountController();
    this.verifyToken = new UserMiddleware();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      '/accountType',
      this.verifyToken.veryfyToken,
      this.accountController.getAccountType,
    );
  }
  getRouter(): Router {
    return this.router;
  }
}
