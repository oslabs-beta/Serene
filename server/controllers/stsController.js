const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts');
const session = require('express-session')
const Session = require('../models/sessionModel.js');
const User = require('../models/userModel.js');
const dotenv = require('dotenv').config();

const stsController = {};

stsController.getCredentials = async (req, res, next) => {
  // console.log('in stsController');
  // const { region, RoleArn } = req.body

  // const region = 'us-east-1'
  // const ARN = process.env.RoleArn

  console.log('sessionID: ', req.cookies.SSID)

  const foundUser = await User.findOne({ _id: req.cookies.SSID })
  // console.log('foundUser: ', foundUser)

  const { ARN, region } = foundUser;

  // console.log('region: ', region)
  // console.log('ARN: ', ARN)

  const credentials = {
    region: region,
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey
    },
  };
  const stsClient = new STSClient(credentials);
  const params = {
    RoleArn: ARN, //this is IAM role arn that we get from frontend
    RoleSessionName: 'Komodo_Session',
  };
  try {
    const command = new AssumeRoleCommand(params);
    const data = await stsClient.send(command);
    roleCreds = {
      accessKeyId: data.Credentials.AccessKeyId,
      secretAccessKey: data.Credentials.SecretAccessKey,
      sessionToken: data.Credentials.SessionToken,
    };
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

module.exports = stsController;

//https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/quickcreate?templateURL=https://komodobucket1.s3.amazonaws.com/komodoTestTemplate.json&stackName=komodoStack
