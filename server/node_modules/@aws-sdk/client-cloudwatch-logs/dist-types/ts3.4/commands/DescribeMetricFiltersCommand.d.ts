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
  DescribeMetricFiltersRequest,
  DescribeMetricFiltersResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeMetricFiltersCommandInput
  extends DescribeMetricFiltersRequest {}
export interface DescribeMetricFiltersCommandOutput
  extends DescribeMetricFiltersResponse,
    __MetadataBearer {}
export declare class DescribeMetricFiltersCommand extends $Command<
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DescribeMetricFiltersCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeMetricFiltersCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeMetricFiltersCommandInput,
    DescribeMetricFiltersCommandOutput
  >;
  private serialize;
  private deserialize;
}
