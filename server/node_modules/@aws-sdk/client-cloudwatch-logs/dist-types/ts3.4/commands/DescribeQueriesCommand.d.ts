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
  DescribeQueriesRequest,
  DescribeQueriesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeQueriesCommandInput extends DescribeQueriesRequest {}
export interface DescribeQueriesCommandOutput
  extends DescribeQueriesResponse,
    __MetadataBearer {}
export declare class DescribeQueriesCommand extends $Command<
  DescribeQueriesCommandInput,
  DescribeQueriesCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DescribeQueriesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeQueriesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeQueriesCommandInput, DescribeQueriesCommandOutput>;
  private serialize;
  private deserialize;
}
