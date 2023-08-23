import { Paginator } from "@smithy/types";
import { ListEventSourceMappingsCommandInput, ListEventSourceMappingsCommandOutput } from "../commands/ListEventSourceMappingsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListEventSourceMappings(config: LambdaPaginationConfiguration, input: ListEventSourceMappingsCommandInput, ...additionalArguments: any): Paginator<ListEventSourceMappingsCommandOutput>;
