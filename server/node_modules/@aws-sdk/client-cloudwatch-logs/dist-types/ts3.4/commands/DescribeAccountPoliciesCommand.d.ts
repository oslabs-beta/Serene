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
  DescribeAccountPoliciesRequest,
  DescribeAccountPoliciesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeAccountPoliciesCommandInput
  extends DescribeAccountPoliciesRequest {}
export interface DescribeAccountPoliciesCommandOutput
  extends DescribeAccountPoliciesResponse,
    __MetadataBearer {}
export declare class DescribeAccountPoliciesCommand extends $Command<
  DescribeAccountPoliciesCommandInput,
  DescribeAccountPoliciesCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DescribeAccountPoliciesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeAccountPoliciesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeAccountPoliciesCommandInput,
    DescribeAccountPoliciesCommandOutput
  >;
  private serialize;
  private deserialize;
}
