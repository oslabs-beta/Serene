const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts');
const dotenv = require('dotenv').config();

const stsController = {};

// arn:aws:iam::097265058099:role/komodoStack-KomodoRole-24EZX3ST7E28

stsController.getCredentials = async (req, res, next) => {
  // console.log('in stsController');
  // const { region, RoleArn } = req.body
  const region = 'us-east-1'
  const RoleArn = process.env.RoleArn
  const credentials = {
    region: region,
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey
    },
  };
  const stsClient = new STSClient(credentials);
  console.log('made it here')
  // arn:aws:cloudformation:us-east-1:097265058099:stack/komodoStack/02fcee50-3196-11ee-8e69-12ff026c8c53
  // arn:aws:iam::097265058099:role/komodoStack-KomodoRole-1SUYS4WE06EP8
  const params = {
    RoleArn: process.env.RoleArn , //this is IAM role arn that we get from frontend
    RoleSessionName: 'Komodo_Session',
  };
  console.log('line25 of getcredentials')
  try {
    console.log('line27 of getcredentials')
    const command = new AssumeRoleCommand(params);
    console.log('command is: ', command)
    const data = await stsClient.send(command);
    console.log('data is: ', data)
    roleCreds = {
      accessKeyId: data.Credentials.AccessKeyId,
      secretAccessKey: data.Credentials.SecretAccessKey,
      sessionToken: data.Credentials.SessionToken,
    };
    // console.log('roleCreds: ', roleCreds);
    res.locals.creds = roleCreds;
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
