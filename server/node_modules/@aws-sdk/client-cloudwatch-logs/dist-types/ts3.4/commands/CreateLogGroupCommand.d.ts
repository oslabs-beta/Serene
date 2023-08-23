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
import { CreateLogGroupRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateLogGroupCommandInput extends CreateLogGroupRequest {}
export interface CreateLogGroupCommandOutput extends __MetadataBearer {}
export declare class CreateLogGroupCommand extends $Command<
  CreateLogGroupCommandInput,
  CreateLogGroupCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: CreateLogGroupCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateLogGroupCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLogGroupCommandInput, CreateLogGroupCommandOutput>;
  private serialize;
  private deserialize;
}
