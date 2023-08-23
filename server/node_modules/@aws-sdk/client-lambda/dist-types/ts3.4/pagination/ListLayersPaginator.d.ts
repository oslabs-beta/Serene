import { Paginator } from "@smithy/types";
import {
  ListLayersCommandInput,
  ListLayersCommandOutput,
} from "../commands/ListLayersCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
export declare function paginateListLayers(
  config: LambdaPaginationConfiguration,
  input: ListLayersCommandInput,
  ...additionalArguments: any
): Paginator<ListLayersCommandOutput>;
