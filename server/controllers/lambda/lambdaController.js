const {
  LambdaClient,
  GetFunctionUrlConfigCommand,
  ListFunctionsCommand,
} = require('@aws-sdk/client-lambda');

const lambdaController = {};

// fetch request would be called on useEffect
lambdaController.getFunctions = async (req, res, next) => {
  // const { region } = req.body;
  const region = 'us-east-1'
  console.log('in getFunctions');
  const client = new LambdaClient({
    credentials: res.locals.creds,
    region: region,  //this should come from front end - req.query
  });

  const listFunctions = new ListFunctionsCommand({});
  console.log('got listFunctions');
  try {
    const data = await client.send(listFunctions);
    console.log('data: ', data);

    const funcList = data.Functions;
    const functions = [];
    funcList.forEach(el => {
      functions.push({
        name: el.FunctionName,
        description: el.Description,
        arn: el.FunctionArn,
      });
    });

    console.log('functions: ', functions);
    //these get sent to front end for user to see/choose which function to select
    res.locals.functions = functions;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: {
        err: "An error occured while trying to get the user's lambda functions",
      },
    });
  }
};

module.exports = lambdaController;
