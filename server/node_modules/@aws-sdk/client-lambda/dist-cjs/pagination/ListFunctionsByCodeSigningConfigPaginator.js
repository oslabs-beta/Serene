"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFunctionsByCodeSigningConfig = void 0;
const ListFunctionsByCodeSigningConfigCommand_1 = require("../commands/ListFunctionsByCodeSigningConfigCommand");
const LambdaClient_1 = require("../LambdaClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListFunctionsByCodeSigningConfigCommand_1.ListFunctionsByCodeSigningConfigCommand(input), ...args);
};
async function* paginateListFunctionsByCodeSigningConfig(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxItems"] = config.pageSize;
        if (config.client instanceof LambdaClient_1.LambdaClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Lambda | LambdaClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextMarker;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListFunctionsByCodeSigningConfig = paginateListFunctionsByCodeSigningConfig;
