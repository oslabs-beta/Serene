import { Paginator } from "@smithy/types";
import { ListFunctionUrlConfigsCommandInput, ListFunctionUrlConfigsCommandOutput } from "../commands/ListFunctionUrlConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListFunctionUrlConfigs(config: LambdaPaginationConfiguration, input: ListFunctionUrlConfigsCommandInput, ...additionalArguments: any): Paginator<ListFunctionUrlConfigsCommandOutput>;
