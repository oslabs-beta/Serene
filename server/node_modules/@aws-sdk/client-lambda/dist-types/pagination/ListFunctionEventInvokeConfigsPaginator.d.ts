import { Paginator } from "@smithy/types";
import { ListFunctionEventInvokeConfigsCommandInput, ListFunctionEventInvokeConfigsCommandOutput } from "../commands/ListFunctionEventInvokeConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListFunctionEventInvokeConfigs(config: LambdaPaginationConfiguration, input: ListFunctionEventInvokeConfigsCommandInput, ...additionalArguments: any): Paginator<ListFunctionEventInvokeConfigsCommandOutput>;
