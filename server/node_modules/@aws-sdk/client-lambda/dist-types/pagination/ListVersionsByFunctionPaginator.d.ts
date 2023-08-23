import { Paginator } from "@smithy/types";
import { ListVersionsByFunctionCommandInput, ListVersionsByFunctionCommandOutput } from "../commands/ListVersionsByFunctionCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListVersionsByFunction(config: LambdaPaginationConfiguration, input: ListVersionsByFunctionCommandInput, ...additionalArguments: any): Paginator<ListVersionsByFunctionCommandOutput>;
