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
import { DeleteSubscriptionFilterRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteSubscriptionFilterCommandInput
  extends DeleteSubscriptionFilterRequest {}
export interface DeleteSubscriptionFilterCommandOutput
  extends __MetadataBearer {}
export declare class DeleteSubscriptionFilterCommand extends $Command<
  DeleteSubscriptionFilterCommandInput,
  DeleteSubscriptionFilterCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DeleteSubscriptionFilterCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteSubscriptionFilterCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteSubscriptionFilterCommandInput,
    DeleteSubscriptionFilterCommandOutput
  >;
  private serialize;
  private deserialize;
}
