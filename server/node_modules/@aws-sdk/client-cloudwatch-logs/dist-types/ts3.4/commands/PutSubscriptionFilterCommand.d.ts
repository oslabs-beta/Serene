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
import { PutSubscriptionFilterRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutSubscriptionFilterCommandInput
  extends PutSubscriptionFilterRequest {}
export interface PutSubscriptionFilterCommandOutput extends __MetadataBearer {}
export declare class PutSubscriptionFilterCommand extends $Command<
  PutSubscriptionFilterCommandInput,
  PutSubscriptionFilterCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: PutSubscriptionFilterCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutSubscriptionFilterCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutSubscriptionFilterCommandInput,
    PutSubscriptionFilterCommandOutput
  >;
  private serialize;
  private deserialize;
}
