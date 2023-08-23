import { Paginator } from "@smithy/types";
import { ListCodeSigningConfigsCommandInput, ListCodeSigningConfigsCommandOutput } from "../commands/ListCodeSigningConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListCodeSigningConfigs(config: LambdaPaginationConfiguration, input: ListCodeSigningConfigsCommandInput, ...additionalArguments: any): Paginator<ListCodeSigningConfigsCommandOutput>;
