import { Paginator } from "@smithy/types";
import {
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "../commands/ListProvisionedConcurrencyConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
export declare function paginateListProvisionedConcurrencyConfigs(
  config: LambdaPaginationConfiguration,
  input: ListProvisionedConcurrencyConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListProvisionedConcurrencyConfigsCommandOutput>;
