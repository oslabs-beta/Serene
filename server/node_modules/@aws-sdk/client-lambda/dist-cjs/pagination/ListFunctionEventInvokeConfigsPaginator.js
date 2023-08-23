"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListFunctionEventInvokeConfigs = void 0;
const ListFunctionEventInvokeConfigsCommand_1 = require("../commands/ListFunctionEventInvokeConfigsCommand");
const LambdaClient_1 = require("../LambdaClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListFunctionEventInvokeConfigsCommand_1.ListFunctionEventInvokeConfigsCommand(input), ...args);
};
async function* paginateListFunctionEventInvokeConfigs(config, input, ...additionalArguments) {
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
exports.paginateListFunctionEventInvokeConfigs = paginateListFunctionEventInvokeConfigs;
