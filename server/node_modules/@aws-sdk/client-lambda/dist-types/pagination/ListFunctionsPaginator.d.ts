import { Paginator } from "@smithy/types";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "../commands/ListFunctionsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListFunctions(config: LambdaPaginationConfiguration, input: ListFunctionsCommandInput, ...additionalArguments: any): Paginator<ListFunctionsCommandOutput>;
