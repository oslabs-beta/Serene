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
  DescribeLogStreamsRequest,
  DescribeLogStreamsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeLogStreamsCommandInput
  extends DescribeLogStreamsRequest {}
export interface DescribeLogStreamsCommandOutput
  extends DescribeLogStreamsResponse,
    __MetadataBearer {}
export declare class DescribeLogStreamsCommand extends $Command<
  DescribeLogStreamsCommandInput,
  DescribeLogStreamsCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DescribeLogStreamsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeLogStreamsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLogStreamsCommandInput, DescribeLogStreamsCommandOutput>;
  private serialize;
  private deserialize;
}
