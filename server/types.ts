import { Request, Response, NextFunction} from 'express';

// server.ts
export type ServerError = {
  log: string;
  status: number;
  message: { err: string }
}

// userController.ts
export type UserController = {
  createUser: (req: Request, res: Response, next: NextFunction) => Promise <void>
  getAllUsers: (req: Request, res: Response, next: NextFunction) => Promise <void>
  login: (req: Request, res: Response, next: NextFunction) => Promise <void>
  updateUser: (req: Request, res: Response, next: NextFunction) => Promise <void>,
  deleteUser: (req: Request, res: Response, next: NextFunction) => Promise <void>
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


// cookieController.ts
export type CookieController = {
  setSSIDCookie: (req: Request, res: Response, next: NextFunction) => Promise <void>,
  newSession: (req: Request, res: Response, next: NextFunction) => Promise <void>,
  endSession: (req: Request, res: Response, next: NextFunction) => Promise <void>
}


// stsController.ts
export type STSController = {
  getCredentials: (req: Request, res: Response, next: NextFunction) => Promise <void>
}

export type RoleCreds = {
  accessKeyId: string,
  secretAccessKey: string,
  sessionToken: string
}



// lambdaController.ts
export type LambdaController = {
  getFunctions: (req: Request, res: Response, next: NextFunction) => Promise <void>
}

export type ArrayFiller = {
  name: string,
  description: string,
  arn: string
}


// warmingController.ts
export type WarmingController = {
  warmFunction: (req: Request, res: Response, next: NextFunction) => Promise <void>
}

export type WarmingReqBody = {
  functionArn: string,
  intervalVar: number,
  maxDuration: number
}


// versionHistoryController.ts
export type VersionHistoryController = {
  viewVersionList: (req: Request, res: Response, next: NextFunction) => Promise <void>,
  viewFunctionVersion: (req: Request, res: Response, next: NextFunction) => Promise <void>,
  getAlias: (req: Request, res: Response, next: NextFunction) => Promise <void>
}


export type VersionObject = {
  key: string
}


export type VersionInfo = {
  description: string,
  timeout: string,
  ephemeralStorage: string,
  linkToFunc: string
}

export type AliasList = {
  AliasArn: string,
  Description: string,
  FunctionVersion: string,
  Name: string,
  RevisionId: string,
  weight: number,
  RoutingConfig?: {
    AdditionalVersionWeights?: {
      key: number
    }
  }
}


// cloudWatchLogController.ts
export type CloudWatchLogController = {
  viewFunctionStreams: (req: Request, res: Response, next: NextFunction) => Promise <void>,
  viewStreamInfo: (req: Request, res: Response, next: NextFunction) => Promise <void>
}

export type StreamInfoBody = {
  streamName: string,
  logName: string
}


// cloudWatchMetricsController.ts
export type CloudWatchMetricsController = {
  getMetrics: (req: Request, res: Response, next: NextFunction) => Promise <void>
}

export type MetricBody = {
  funcName: string,
  sortBy: string,
  period: string,
  startDate: string
}

// export type MetricObject = {
//   duration: string,
//   invocations: ,
//   throttles: ,
//   errors: ,
//   concurrentExecutions:
// }


// misc - repeated type
export type FuncNameBody = {
  funcName: string
}

export type FunctionArnBody = {
  functionArn: string
}
