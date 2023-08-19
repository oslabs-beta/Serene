import { LambdaClient, InvokeCommand, InvokeCommandOutput } from '@aws-sdk/client-lambda';
import { Request, Response, NextFunction } from 'express';

import { WarmingController, WarmingReqBody } from '../../types';

const warmingController = {} as WarmingController;


/*
Notes:
-Unsure how to type the LambdaClient inputs
*/
warmingController.warmFunction = async (req: Request, res: Response, next: NextFunction) => {
  const { functionArn, intervalVar, maxDuration }: WarmingReqBody = req.body;
  try {
    const client: LambdaClient = new LambdaClient({
      credentials: res.locals.creds.roleCreds,
      region: res.locals.creds.region, //this should come from front end - req.query
    });

    const params = {
      FunctionName: functionArn,
    };

    const command: InvokeCommand = new InvokeCommand(params);

    let counter: number = 0;
    const warming = setInterval(async () => {

      const response: InvokeCommandOutput = await client.send(command)

      counter += intervalVar;

      if(counter >= maxDuration){
        clearInterval(warming);
        console.log('finished')
      }
    }, intervalVar); // req.body

    // intervalVar: 3600000 (once every hour)
    // userMaxInput: 604800000 (run for a week)

    // const interval = 5000;
    // const maxInput = 60000;
    // const warmingTest = setInterval(async () => {

    //   counter += interval
    //   console.log(`increment at ${counter} ms`)

    //   if(counter >= maxInput){
    //     clearInterval(warmingTest);
    //     console.log('finished')
    //   }
    // }, interval)
    

    // res.locals.statusCodeRes = response.StatusCode;
    // res.locals.statusCodeRes = 'started warming'
    return next();
  } catch (err) {
    return next({
      log: `The following error occured in warmFunction: ${err}`,
      status: 400,
      message: 'An error occured when trying to warm the function',
    });
  }
};

export default warmingController;
