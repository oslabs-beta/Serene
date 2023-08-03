const {
  LambdaClient,
  GetFunctionUrlConfigCommand,
  ListFunctionsCommand,
} = require('@aws-sdk/client-lambda');

const lambdaController = {};

lambdaController.getFunctions = (req, res, next) => {};

module.exports = lambdaController;
