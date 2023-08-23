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
  DescribeSubscriptionFiltersRequest,
  DescribeSubscriptionFiltersResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeSubscriptionFiltersCommandInput
  extends DescribeSubscriptionFiltersRequest {}
export interface DescribeSubscriptionFiltersCommandOutput
  extends DescribeSubscriptionFiltersResponse,
    __MetadataBearer {}
export declare class DescribeSubscriptionFiltersCommand extends $Command<
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DescribeSubscriptionFiltersCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeSubscriptionFiltersCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeSubscriptionFiltersCommandInput,
    DescribeSubscriptionFiltersCommandOutput
  >;
  private serialize;
  private deserialize;
}
