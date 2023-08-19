import { Request, Response, NextFunction} from 'express';

export type ServerError = {
  log: string;
  status: number;
  message: { err: string }
}

export type UserController = {
  createUser: (req: Request, res: Response, next: NextFunction) => Promise <void>
  getAllUsers: (req: Request, res: Response, next: NextFunction) => Promise <void>
  login: (req: Request, res: Response, next: NextFunction) => Promise <void>
  updateUser: (req: Request, res: Response, next: NextFunction) => Promise <void>
}

export type CreateUserInfo =  {
  username: string,
  password: string,
  ARN: string,
  region: string
}