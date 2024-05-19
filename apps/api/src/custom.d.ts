type User = {
  id: number;
  username: string;
  email?: string;
  referral?: string;
  accountType: string;
  userId?: number;
  isActive?: boolean;
};

declare namespace Express {
  export interface Request {
    user?: User;
  }
}
