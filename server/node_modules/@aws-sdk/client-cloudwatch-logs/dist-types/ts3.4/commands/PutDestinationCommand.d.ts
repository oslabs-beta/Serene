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
  PutDestinationRequest,
  PutDestinationResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutDestinationCommandInput extends PutDestinationRequest {}
export interface PutDestinationCommandOutput
  extends PutDestinationResponse,
    __MetadataBearer {}
export declare class PutDestinationCommand extends $Command<
  PutDestinationCommandInput,
  PutDestinationCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: PutDestinationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutDestinationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDestinationCommandInput, PutDestinationCommandOutput>;
  private serialize;
  private deserialize;
}
