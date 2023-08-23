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
import { UntagLogGroupRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UntagLogGroupCommandInput extends UntagLogGroupRequest {}
export interface UntagLogGroupCommandOutput extends __MetadataBearer {}
export declare class UntagLogGroupCommand extends $Command<
  UntagLogGroupCommandInput,
  UntagLogGroupCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: UntagLogGroupCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UntagLogGroupCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagLogGroupCommandInput, UntagLogGroupCommandOutput>;
  private serialize;
  private deserialize;
}
