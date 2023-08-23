import { Paginator } from "@smithy/types";
import {
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
} from "../commands/DescribeSubscriptionFiltersCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeSubscriptionFilters(
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeSubscriptionFiltersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSubscriptionFiltersCommandOutput>;
