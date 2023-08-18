const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda');

const warmingController = {};

warmingController.warmFunction = async (req, res, next) => {
  const { functionArn, intervalVar, maxDuration } = req.body;
  try {
    const client = new LambdaClient({
      credentials: res.locals.creds.roleCreds,
      region: res.locals.creds.region, //this should come from front end - req.query
    });

    const params = {
      FunctionName: functionArn,
    };

    const command = new InvokeCommand(params);

    let counter = 0;
    // const warming = setInterval(async () => {

    //   response = await client.send(command)
    //   // increment = userMaxInput / intervalVar 
    //   // increment: 168
    //   counter += intervalVar;
    //   // counter + intervalVar

    //   if(counter >= maxDuration){
    //     clearInterval(warming);
    //     console.log('finished')
    //   }
    // }, intervalVar); // req.body

    // intervalVar: 3600000 (once every hour)
    // userMaxInput: 604800000 (run for a week)

    const interval = 5000;
    const maxInput = 60000;
    const warmingTest = setInterval(async () => {

      counter += interval
      console.log(`increment at ${counter} ms`)

      if(counter >= maxInput){
        clearInterval(warmingTest);
        console.log('finished')
      }
    }, interval)
    
    console.log('response: ', response);

    res.locals.statusCodeRes = response.StatusCode;
      res.locals.statusCodeRes = 'started warming'
    return next();
  } catch (err) {
    return next({
      log: `The following error occured in warmFunction: ${err}`,
      status: 400,
      message: 'An error occured when trying to warm the function',
    });
  }
};

module.exports = warmingController;
