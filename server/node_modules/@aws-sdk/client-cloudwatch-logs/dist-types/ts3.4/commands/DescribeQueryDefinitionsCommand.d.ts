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
  DescribeQueryDefinitionsRequest,
  DescribeQueryDefinitionsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeQueryDefinitionsCommandInput
  extends DescribeQueryDefinitionsRequest {}
export interface DescribeQueryDefinitionsCommandOutput
  extends DescribeQueryDefinitionsResponse,
    __MetadataBearer {}
export declare class DescribeQueryDefinitionsCommand extends $Command<
  DescribeQueryDefinitionsCommandInput,
  DescribeQueryDefinitionsCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DescribeQueryDefinitionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeQueryDefinitionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeQueryDefinitionsCommandInput,
    DescribeQueryDefinitionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
