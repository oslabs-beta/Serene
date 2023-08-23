import { Paginator } from "@smithy/types";
import {
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
} from "../commands/ListFunctionsByCodeSigningConfigCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
export declare function paginateListFunctionsByCodeSigningConfig(
  config: LambdaPaginationConfiguration,
  input: ListFunctionsByCodeSigningConfigCommandInput,
  ...additionalArguments: any
): Paginator<ListFunctionsByCodeSigningConfigCommandOutput>;
