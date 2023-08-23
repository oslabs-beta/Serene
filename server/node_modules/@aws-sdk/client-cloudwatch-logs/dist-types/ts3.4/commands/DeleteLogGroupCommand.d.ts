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
import { DeleteLogGroupRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteLogGroupCommandInput extends DeleteLogGroupRequest {}
export interface DeleteLogGroupCommandOutput extends __MetadataBearer {}
export declare class DeleteLogGroupCommand extends $Command<
  DeleteLogGroupCommandInput,
  DeleteLogGroupCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DeleteLogGroupCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteLogGroupCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLogGroupCommandInput, DeleteLogGroupCommandOutput>;
  private serialize;
  private deserialize;
}
