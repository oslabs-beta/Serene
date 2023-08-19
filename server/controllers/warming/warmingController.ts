import { LambdaClient, InvokeCommand, InvokeCommandOutput } from '@aws-sdk/client-lambda';
import { Request, Response, NextFunction } from 'express';

import { WarmingController, WarmingReqBody } from '../../types';

const warmingController = {} as WarmingController;


/*
Notes:
-Unsure how to type the LambdaClient inputs
*/

// takes in the function ARN, intervalVar (frequency of invocation), and maxDuration (total duration of invoking period) from user
// only sends back a status
// allows user to navigate site while the algorithm completes
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

    // create command
    const command: InvokeCommand = new InvokeCommand(params);

    let counter: number = 0;
    const warming = setInterval(async () => {
      // invoke the function once every interval
      const response: InvokeCommandOutput = await client.send(command)

      // increment the counter by the interval every invocation
      counter += intervalVar;

      // once the counter is greater than or equal to the maxDuration, kill the interval
      if(counter >= maxDuration){
        clearInterval(warming);
        console.log('finished')
      }
    }, intervalVar); // frequency of invocation

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
