const { LambdaClient, GetFunctionUrlConfigCommand, ListFunctionsCommand } = require('@aws-sdk/client-lambda');

const lambdaController = {};

lambdaController.getFunctions = async (req, res, next) => {
  console.log('in getFunctions')
  const client = new LambdaClient({ credentials: res.locals.creds, region: 'us-east-1'});
  
  const listFunctions = new ListFunctionsCommand({});
  console.log('got listFunctions')
  try {
    const data = await client.send(listFunctions);
    console.log('data: ', data);
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to get the user\'s lambda functions' }
    });
  }
};

module.exports = lambdaController;
