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
import { CreateLogStreamRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateLogStreamCommandInput extends CreateLogStreamRequest {}
export interface CreateLogStreamCommandOutput extends __MetadataBearer {}
export declare class CreateLogStreamCommand extends $Command<
  CreateLogStreamCommandInput,
  CreateLogStreamCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: CreateLogStreamCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateLogStreamCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLogStreamCommandInput, CreateLogStreamCommandOutput>;
  private serialize;
  private deserialize;
}
