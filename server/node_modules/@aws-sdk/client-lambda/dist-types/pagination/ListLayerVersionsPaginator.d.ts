import { Paginator } from "@smithy/types";
import { ListLayerVersionsCommandInput, ListLayerVersionsCommandOutput } from "../commands/ListLayerVersionsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListLayerVersions(config: LambdaPaginationConfiguration, input: ListLayerVersionsCommandInput, ...additionalArguments: any): Paginator<ListLayerVersionsCommandOutput>;
