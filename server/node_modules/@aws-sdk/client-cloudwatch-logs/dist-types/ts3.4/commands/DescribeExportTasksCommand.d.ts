import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  DescribeExportTasksRequest,
  DescribeExportTasksResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeExportTasksCommandInput
  extends DescribeExportTasksRequest {}
export interface DescribeExportTasksCommandOutput
  extends DescribeExportTasksResponse,
    __MetadataBearer {}
export declare class DescribeExportTasksCommand extends $Command<
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DescribeExportTasksCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeExportTasksCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput>;
  private serialize;
  private deserialize;
}
