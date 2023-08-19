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

export type STSController = {
  getCredentials: (req: Request, res: Response, next: NextFunction) => Promise <void>
}

export type LambdaController = {
  getFunctions: (req: Request, res: Response, next: NextFunction) => Promise <void>
}
export type CreateUserInfo =  {
  username: string,
  password: string,
  ARN: string,
  region: string
}

export type UserInfo = {
  _id: string,
  username: string,
  password: string,
  ARN: string,
  region: string
}

export type Login = {
  username: string,
  password: string
}

export type UpdatedUserInfo = {
  newRegion: string,
  newARN: string
}

export type RoleCreds = {
  accessKeyId: string,
  secretAccessKey: string,
  sessionToken: string
}