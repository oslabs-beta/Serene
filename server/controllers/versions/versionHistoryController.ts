// import necessary AWS commands
import { LambdaClient, ListVersionsByFunctionCommand, GetFunctionCommand, ListAliasesCommand, ListVersionsByFunctionCommandOutput, GetFunctionCommandOutput, ListAliasesCommandOutput } from '@aws-sdk/client-lambda';
// import types
import { VersionHistoryController, FuncNameBody, VersionObject, FunctionArnBody, VersionInfo, AliasList } from '../../types';

const versionHistoryController = {} as VersionHistoryController;

/*
Notes:
-LambdaClient typing
-In getAlias, we altered the output directly which messed up some typing
  -list is type any for now
*/


// takes in the function name from the user and returns an array of the versions of that function
versionHistoryController.viewVersionList = async (req, res, next) => {
  const { funcName }: FuncNameBody = req.body;
  try {
    const client: LambdaClient = new LambdaClient({
      credentials: res.locals.creds.roleCreds,
      region: res.locals.creds.region,  //this should come from front end - req.query
    });

    const params = {
      FunctionName: funcName
    }

    // create and send command from client
    const command: ListVersionsByFunctionCommand = new ListVersionsByFunctionCommand(params)
    const versionRes: ListVersionsByFunctionCommandOutput = await client.send(command)

    // fix any type
    const versions = {} as any;

    versionRes.Versions.forEach(func => {
      versions[func.Version] = func.FunctionArn
    })

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

// takes in the function ARN from the user and returns an object housing info about that version
versionHistoryController.viewFunctionVersion = async (req, res, next) => {
  const { functionArn }: FunctionArnBody = req.body;
  try {
    const client: LambdaClient = new LambdaClient({
      credentials: res.locals.creds.roleCreds,
      region: res.locals.creds.region, 
    });

    const input = {
      FunctionName: functionArn
    }

    // create and send command from client
    const command: GetFunctionCommand = new GetFunctionCommand(input)
    const response: GetFunctionCommandOutput = await client.send(command)

    // we are updating the timeout such that we can manipulate it and send it back easier
    let timeout: number | string;

    (response.Configuration.Timeout > 60) ? timeout = '> 1 min' : timeout = response.Configuration.Timeout;

    // extracting only the information we want from the response to send to frontend
    const versionInfo = {
      description: response.Configuration.Description,
      memory: response.Configuration.MemorySize + ' MB',
      timeout: timeout + ' sec',
      ephemeralStorage: response.Configuration.EphemeralStorage.Size + ' MB',
      linkToFunc: response.Code.Location
    } as VersionInfo

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

// takes in function name from user and returns an array of aliases of that function
versionHistoryController.getAlias = async (req, res, next) => {
  const { funcName }: FuncNameBody = req.body;
  try {
    const client: LambdaClient = new LambdaClient({
      credentials: res.locals.creds.roleCreds,
      region: res.locals.creds.region,  //this should come from front end - req.query
    });

    const input = {
      FunctionName: funcName
    }

    // create and send command from client
    const command: ListAliasesCommand = new ListAliasesCommand(input);
    const aliasList: ListAliasesCommandOutput = await client.send(command);
    
    // extract the array of aliases from the response
    const list: any = aliasList.Aliases

    // the alias only has weight if it has multiple versions on it
    // we wrote this so that if the alias was only pointing to one version, it would show a weight of 100%
    list.forEach((alias: any)=> {
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

export default versionHistoryController;