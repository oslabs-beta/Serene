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
  DescribeResourcePoliciesRequest,
  DescribeResourcePoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeResourcePoliciesCommandInput
  extends DescribeResourcePoliciesRequest {}
export interface DescribeResourcePoliciesCommandOutput
  extends DescribeResourcePoliciesResponse,
    __MetadataBearer {}
export declare class DescribeResourcePoliciesCommand extends $Command<
  DescribeResourcePoliciesCommandInput,
  DescribeResourcePoliciesCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DescribeResourcePoliciesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeResourcePoliciesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeResourcePoliciesCommandInput,
    DescribeResourcePoliciesCommandOutput
  >;
  private serialize;
  private deserialize;
}
