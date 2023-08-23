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
  DescribeDestinationsRequest,
  DescribeDestinationsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeDestinationsCommandInput
  extends DescribeDestinationsRequest {}
export interface DescribeDestinationsCommandOutput
  extends DescribeDestinationsResponse,
    __MetadataBearer {}
export declare class DescribeDestinationsCommand extends $Command<
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DescribeDestinationsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeDestinationsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeDestinationsCommandInput,
    DescribeDestinationsCommandOutput
  >;
  private serialize;
  private deserialize;
}
