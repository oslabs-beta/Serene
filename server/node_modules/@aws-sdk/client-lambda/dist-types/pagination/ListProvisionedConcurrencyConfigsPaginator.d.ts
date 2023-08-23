import { Paginator } from "@smithy/types";
import { ListProvisionedConcurrencyConfigsCommandInput, ListProvisionedConcurrencyConfigsCommandOutput } from "../commands/ListProvisionedConcurrencyConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListProvisionedConcurrencyConfigs(config: LambdaPaginationConfiguration, input: ListProvisionedConcurrencyConfigsCommandInput, ...additionalArguments: any): Paginator<ListProvisionedConcurrencyConfigsCommandOutput>;
