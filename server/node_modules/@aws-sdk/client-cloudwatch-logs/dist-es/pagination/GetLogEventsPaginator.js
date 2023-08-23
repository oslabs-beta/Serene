import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import { GetLogEventsCommand, } from "../commands/GetLogEventsCommand";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new GetLogEventsCommand(input), ...args);
};
export async function* paginateGetLogEvents(config, input, ...additionalArguments) {
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
        token = page.nextForwardToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
