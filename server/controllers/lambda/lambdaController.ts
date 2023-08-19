import { LambdaClient, ListFunctionsCommand, ListFunctionsCommandOutput } from '@aws-sdk/client-lambda';
import { Request, Response, NextFunction} from 'express'

import { LambdaController } from '../../types';

const lambdaController = {} as LambdaController;

// fetch request would be called on useEffect
lambdaController.getFunctions = async (req: Request, res: Response, next: NextFunction) => {
  // const { region } = req.body;
  // console.log('region', res.locals.creds.region);
  const client: LambdaClient = new LambdaClient({
    credentials: res.locals.creds.roleCreds,
    region: res.locals.creds.region,  //this should come from front end - req.query
  });

  const listFunctions: ListFunctionsCommand = new ListFunctionsCommand({});
  // console.log('got listFunctions');
  try {
    const data: ListFunctionsCommandOutput = await client.send(listFunctions);
    // console.log('data: ', data);

    const funcList = data.Functions;
    const functions = [];
    funcList.forEach(el => {
      functions.push({
        name: el.FunctionName,
        description: el.Description,
        arn: el.FunctionArn,
      });
    });

    // console.log('functions: ', functions);
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

export default lambdaController;
