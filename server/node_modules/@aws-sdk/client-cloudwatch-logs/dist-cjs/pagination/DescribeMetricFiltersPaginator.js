"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateDescribeMetricFilters = void 0;
const CloudWatchLogsClient_1 = require("../CloudWatchLogsClient");
const DescribeMetricFiltersCommand_1 = require("../commands/DescribeMetricFiltersCommand");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeMetricFiltersCommand_1.DescribeMetricFiltersCommand(input), ...args);
};
async function* paginateDescribeMetricFilters(config, input, ...additionalArguments) {
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
exports.paginateDescribeMetricFilters = paginateDescribeMetricFilters;
