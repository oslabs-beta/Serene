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
  PutQueryDefinitionRequest,
  PutQueryDefinitionResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutQueryDefinitionCommandInput
  extends PutQueryDefinitionRequest {}
export interface PutQueryDefinitionCommandOutput
  extends PutQueryDefinitionResponse,
    __MetadataBearer {}
export declare class PutQueryDefinitionCommand extends $Command<
  PutQueryDefinitionCommandInput,
  PutQueryDefinitionCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: PutQueryDefinitionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutQueryDefinitionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutQueryDefinitionCommandInput, PutQueryDefinitionCommandOutput>;
  private serialize;
  private deserialize;
}
