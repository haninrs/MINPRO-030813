import { PromotorController } from '@/controllers/promotor.controller';
import { UserMiddleware } from '@/middleware/user.middleware';
import { validateRegister } from '@/middleware/validator.middleware';
import { Router } from 'express';

export class PromotorRouter {
  private router: Router;
  private promotorController: PromotorController;
  private userMiddleware: UserMiddleware;
  constructor() {
    this.promotorController = new PromotorController();
    this.userMiddleware = new UserMiddleware();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.promotorController.getPromotor);
    this.router.post(
      '/',
      validateRegister,
      this.promotorController.promotorRegister,
    );
    this.router.post('/login', this.promotorController.loginPromotor);
    this.router.patch(
      '/verify',
      this.userMiddleware.veryfyToken,
      this.promotorController.verifyPromotor,
    );
    this.router.get(
      '/profile',
      this.userMiddleware.veryfyToken,
      this.promotorController.getSession,
    );
  }

  getRouter() {
    return this.router;
  }
}
