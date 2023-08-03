const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts');

const stsController = {};

stsController.getCredentials = async (req, res, next) => {
  console.log('in stsController');
  const creds = {
    region: 'us-east-1',
    credentials: {
      accessKeyId: '',
      secretAccessKey: '',
    },
  };
  const stsClient = new STSClient(creds);

  const params = {
    RoleArn: 'aws:lambda:us-east-1:287836476382:function:sampleee',
    RoleSessionName: 'Komodo_Session',
  };
  try {
    res.locals.stsClient = stsClient;
    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = stsController;
