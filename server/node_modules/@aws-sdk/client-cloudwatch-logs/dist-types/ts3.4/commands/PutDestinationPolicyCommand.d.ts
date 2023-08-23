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
import { PutDestinationPolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutDestinationPolicyCommandInput
  extends PutDestinationPolicyRequest {}
export interface PutDestinationPolicyCommandOutput extends __MetadataBearer {}
export declare class PutDestinationPolicyCommand extends $Command<
  PutDestinationPolicyCommandInput,
  PutDestinationPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: PutDestinationPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutDestinationPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutDestinationPolicyCommandInput,
    PutDestinationPolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
