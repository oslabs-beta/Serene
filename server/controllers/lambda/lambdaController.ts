// import necessary AWS commands
import { LambdaClient, ListFunctionsCommand, ListFunctionsCommandOutput } from '@aws-sdk/client-lambda';
// import types
import { LambdaController, ArrayFiller } from '../../types';

const lambdaController = {} as LambdaController;

// finds the user in MongoDB by the current cookie and grabs their ARN
// from there we are able to return an array of all their functions in the given region
lambdaController.getFunctions = async (req, res, next) => {
  try {
    const client: LambdaClient = new LambdaClient({
      credentials: res.locals.creds.roleCreds,
      region: res.locals.creds.region,  //this should come from front end - req.query
    });
  
    // create and send the command from the client
    const listFunctions: ListFunctionsCommand = new ListFunctionsCommand({});
    const data: ListFunctionsCommandOutput = await client.send(listFunctions);

    const funcList = data.Functions;

    const functions: ArrayFiller[] = [];

    // iterate through the returned function list and push the desired info into our new array
    funcList.forEach(el => {
      functions.push({
        name: el.FunctionName,
        description: el.Description,
        arn: el.FunctionArn,
      });
    });
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

export default lambdaController;
