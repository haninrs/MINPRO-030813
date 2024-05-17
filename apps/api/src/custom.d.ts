type User = {
  id: number;
  username: string;
  email: string;
  referral: string;
  accountType: string;
};

type Orginazer = {
  username: string;
  id: number;
};

declare namespace Express {
  export interface Request {
    user?: User;
    orginazer?: Orginazer;
  }
}
