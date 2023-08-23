import { Paginator } from "@smithy/types";
import { DescribeDestinationsCommandInput, DescribeDestinationsCommandOutput } from "../commands/DescribeDestinationsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeDestinations(config: CloudWatchLogsPaginationConfiguration, input: DescribeDestinationsCommandInput, ...additionalArguments: any): Paginator<DescribeDestinationsCommandOutput>;
