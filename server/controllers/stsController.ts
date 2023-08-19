// boilerplate
// import necessary AWS commands and types
import { STSClient, AssumeRoleCommand, AssumeRoleCommandOutput, AssumeRoleCommandInput } from '@aws-sdk/client-sts';
const dotenv = require('dotenv').config();
import { Request, Response, NextFunction } from 'express';
// import model
import User from '../models/userModel.js';
// import types
import { STSController, UserInfo, RoleCreds } from '../types'


const stsController = {} as STSController;

// grabs the user cookie which corresponds to their MongoDB ID
// with user info from DB and .env credentials, generate credentials to be used in other middleware
stsController.getCredentials = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
    const foundUser: UserInfo = await User.findOne({ _id: req.cookies.SSID })
  
    const { ARN, region } = foundUser;
  
    const accessKeyId: string = process.env.accessKeyId;
    const secretAccessKey: string = process.env.secretAccessKey
  
    const credentials = {
      region: region,
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
      },
    };

    const stsClient: STSClient = new STSClient(credentials);

    const params: AssumeRoleCommandInput = {
      RoleArn: ARN, //this is IAM role arn that we get from frontend
      RoleSessionName: 'Komodo_Session',
    };
    
    // create and send the command from the client
    const command: AssumeRoleCommand = new AssumeRoleCommand(params);
    const data: AssumeRoleCommandOutput = await stsClient.send(command);

    const roleCreds = {
      accessKeyId: data.Credentials.AccessKeyId,
      secretAccessKey: data.Credentials.SecretAccessKey,
      sessionToken: data.Credentials.SessionToken,
    } as RoleCreds;
    
    // roleCreds/region will be passed into every AWS-centric middleware as necessary credentials
    res.locals.creds = {roleCreds, region};
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to get user credentials' }
    });
  }
};

export default stsController;