import { UserController } from '@/controllers/user.controller';
import { UserMiddleware } from '@/middleware/user.middleware';
import { validateRegister } from '@/middleware/validator.middleware';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;
  private userMiddleware: UserMiddleware;

  constructor() {
    this.userController = new UserController();
    this.userMiddleware = new UserMiddleware();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // this.router.get('/', this.userMiddleware.log, this.userController.getUser);
    this.router.post('/', validateRegister, this.userController.userRegister);
    this.router.post('/login', this.userController.userLogin);
    this.router.get(
      '/keep-login',
      this.userMiddleware.veryfyToken,
      this.userController.keepLogin,
    );
    this.router.patch(
      '/verify',
      this.userMiddleware.veryfyToken,
      this.userController.verifyUser,
    );
    this.router.get(
      '/profile',
      this.userMiddleware.veryfyToken,
      this.userController.getSession,
    );
  }

  //   function buat ambil
  getRouter() {
    return this.router;
  }
}
