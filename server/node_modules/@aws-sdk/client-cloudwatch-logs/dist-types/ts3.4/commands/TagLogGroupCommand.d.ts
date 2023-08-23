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
import { TagLogGroupRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface TagLogGroupCommandInput extends TagLogGroupRequest {}
export interface TagLogGroupCommandOutput extends __MetadataBearer {}
export declare class TagLogGroupCommand extends $Command<
  TagLogGroupCommandInput,
  TagLogGroupCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: TagLogGroupCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: TagLogGroupCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagLogGroupCommandInput, TagLogGroupCommandOutput>;
  private serialize;
  private deserialize;
}
