import { Paginator } from "@smithy/types";
import {
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
} from "../commands/DescribeMetricFiltersCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
export declare function paginateDescribeMetricFilters(
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeMetricFiltersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMetricFiltersCommandOutput>;
