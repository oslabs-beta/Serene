import { Paginator } from "@smithy/types";
import { GetLogEventsCommandInput, GetLogEventsCommandOutput } from "../commands/GetLogEventsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateGetLogEvents(config: CloudWatchLogsPaginationConfiguration, input: GetLogEventsCommandInput, ...additionalArguments: any): Paginator<GetLogEventsCommandOutput>;
