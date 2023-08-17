const { LambdaClient, ListVersionsByFunctionCommand, GetFunctionCommand, ListAliasesCommand } = require('@aws-sdk/client-lambda');

const versionHistoryController = {};

//list of version history for specific func - need to grab arn for diff versions
//output: object - key: function name, value: funciton version arn
versionHistoryController.viewVersionList = async (req, res, next) => {
  const { funcName } = req.body;
  try {
    const client = new LambdaClient({
      credentials: res.locals.creds.roleCreds,
      region: res.locals.creds.region,  //this should come from front end - req.query
    });
    console.log('funcName', funcName)
    const params = {
      FunctionName: funcName
    }

    const command = new ListVersionsByFunctionCommand(params)
    const versionRes = await client.send(command)

    console.log('versionRes: ', versionRes.Versions)
    
    const versions = {};

    versionRes.Versions.forEach(func => {
      versions[func.Version] = func.FunctionArn
    })

    // console.log('versions: ', versions)

    res.locals.versionList = versions
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: 'An error occured when trying to view the version list'
    }) 
  }
}

//use version arn to view function definition
versionHistoryController.viewFunctionVersion = async (req, res, next) => {
  const { region, functionArn } = req.body;
  try {
    const client = new LambdaClient({
      credentials: res.locals.creds.roleCreds,
      region: res.locals.creds.region,  //this should come from front end - req.query
    });

    const input = {
      FunctionName: functionArn
    }

    const command = new GetFunctionCommand(input)
    const response = await client.send(command)
    // console.log('response: ', response.Code.Location)

    let timeout;

    (response.Configuration.Timeout > 60) ? timeout = '> 1 min' : timeout = response.Configuration.Timeout;

    const versionInfo = {
      description: response.Configuration.Description,
      memory: response.Configuration.MemorySize + ' MB',
      timeout: timeout + ' sec',
      ephemeralStorage: response.Configuration.EphemeralStorage.Size + ' MB',
      linkToFunc: response.Code.Location
    }
    res.locals.versionInfo = versionInfo;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: 'An error occured when trying to view the function version details'
    }) 
  }
}

versionHistoryController.getAlias = async (req, res, next) => {
  const { funcName } = req.body;
  try {
    const client = new LambdaClient({
      credentials: res.locals.creds.roleCreds,
      region: res.locals.creds.region,  //this should come from front end - req.query
    });
    const input = {
      FunctionName: funcName
    }
    const command = new ListAliasesCommand(input);
    const aliasList = await client.send(command);
    const list = aliasList.Aliases
    list.forEach(alias => {
      if(!alias.RoutingConfig)  alias.weight = 1.00;   
      else{
        console.log('alias.RoutingConfig: ', alias.RoutingConfig);
        let val;
        for(let key in alias.RoutingConfig.AdditionalVersionWeights){
          val = alias.RoutingConfig.AdditionalVersionWeights[key];
          console.log('val: ', val);
        }
        alias.weight = 1.00 - val;
      }
    })
    
    res.locals.aliasList = list;
    return next();
  } catch(err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: 'An error occured when trying to view the function alias details'
    }) 
  }
}

module.exports = versionHistoryController;