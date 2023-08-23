import { Paginator } from "@smithy/types";
import { FilterLogEventsCommandInput, FilterLogEventsCommandOutput } from "../commands/FilterLogEventsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateFilterLogEvents(config: CloudWatchLogsPaginationConfiguration, input: FilterLogEventsCommandInput, ...additionalArguments: any): Paginator<FilterLogEventsCommandOutput>;
