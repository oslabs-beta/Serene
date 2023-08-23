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
import { DeleteLogStreamRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteLogStreamCommandInput extends DeleteLogStreamRequest {}
export interface DeleteLogStreamCommandOutput extends __MetadataBearer {}
export declare class DeleteLogStreamCommand extends $Command<
  DeleteLogStreamCommandInput,
  DeleteLogStreamCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DeleteLogStreamCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteLogStreamCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLogStreamCommandInput, DeleteLogStreamCommandOutput>;
  private serialize;
  private deserialize;
}
