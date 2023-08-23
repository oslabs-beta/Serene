import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import { DescribeSubscriptionFiltersCommand, } from "../commands/DescribeSubscriptionFiltersCommand";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new DescribeSubscriptionFiltersCommand(input), ...args);
};
export async function* paginateDescribeSubscriptionFilters(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["limit"] = config.pageSize;
        if (config.client instanceof CloudWatchLogsClient) {
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
