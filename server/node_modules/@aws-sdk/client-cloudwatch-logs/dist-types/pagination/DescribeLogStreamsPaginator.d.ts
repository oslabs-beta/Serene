import { Paginator } from "@smithy/types";
import { DescribeLogStreamsCommandInput, DescribeLogStreamsCommandOutput } from "../commands/DescribeLogStreamsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeLogStreams(config: CloudWatchLogsPaginationConfiguration, input: DescribeLogStreamsCommandInput, ...additionalArguments: any): Paginator<DescribeLogStreamsCommandOutput>;
