import { PaginationConfiguration } from "@smithy/types";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
export interface CloudWatchLogsPaginationConfiguration
  extends PaginationConfiguration {
  client: CloudWatchLogsClient;
}
