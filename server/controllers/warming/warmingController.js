const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda');

const warmingController = {};

warmingController.warmFunction = async (req, res, next) => {
  const { functionArn, intervalVar } = req.body;
  try {
    const client = new LambdaClient({
      credentials: res.locals.creds.roleCreds,
      region: res.locals.creds.region, //this should come from front end - req.query
    });

    const params = {
      FunctionName: functionArn,
    };

    const command = new InvokeCommand(params);

    // const intervalVar = 1000;
    let counter = 0;
    let userMaxInput = 10;

    const warming = setInterval(async () => {
      // const response = await client.send(command)

      counter += 1;
      console.log(counter);

      if (counter === userMaxInput) {
        clearInterval(warming);
        console.log('finished');
      }
    }, intervalVar); // req.body

    //parameter to stop the warming after x amount of hours or days or weeks

    const response = await client.send(command);

    console.log('response: ', response);

    res.locals.statusCodeRes = response.StatusCode;
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
