"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeDestinations = void 0;
const CloudWatchLogsClient_1 = require("../CloudWatchLogsClient");
const DescribeDestinationsCommand_1 = require("../commands/DescribeDestinationsCommand");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeDestinationsCommand_1.DescribeDestinationsCommand(input), ...args);
};
async function* paginateDescribeDestinations(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof CloudWatchLogsClient_1.CloudWatchLogsClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
        }
        yield page;
        const prevToken = token;
        token = page.nextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateDescribeDestinations = paginateDescribeDestinations;
