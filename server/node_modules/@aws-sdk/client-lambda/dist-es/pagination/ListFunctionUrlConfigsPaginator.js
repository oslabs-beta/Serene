import { ListFunctionUrlConfigsCommand, } from "../commands/ListFunctionUrlConfigsCommand";
import { LambdaClient } from "../LambdaClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListFunctionUrlConfigsCommand(input), ...args);
};
export async function* paginateListFunctionUrlConfigs(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.Marker = token;
        input["MaxItems"] = config.pageSize;
        if (config.client instanceof LambdaClient) {
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
