import { Paginator } from "@smithy/types";
import { DescribeLogGroupsCommandInput, DescribeLogGroupsCommandOutput } from "../commands/DescribeLogGroupsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateDescribeLogGroups(config: CloudWatchLogsPaginationConfiguration, input: DescribeLogGroupsCommandInput, ...additionalArguments: any): Paginator<DescribeLogGroupsCommandOutput>;
