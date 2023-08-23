import { PaginationConfiguration } from "@smithy/types";
import { CloudWatchClient } from "../CloudWatchClient";
export interface CloudWatchPaginationConfiguration
  extends PaginationConfiguration {
  client: CloudWatchClient;
}
