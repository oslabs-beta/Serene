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
  DeleteQueryDefinitionRequest,
  DeleteQueryDefinitionResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteQueryDefinitionCommandInput
  extends DeleteQueryDefinitionRequest {}
export interface DeleteQueryDefinitionCommandOutput
  extends DeleteQueryDefinitionResponse,
    __MetadataBearer {}
export declare class DeleteQueryDefinitionCommand extends $Command<
  DeleteQueryDefinitionCommandInput,
  DeleteQueryDefinitionCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DeleteQueryDefinitionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteQueryDefinitionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteQueryDefinitionCommandInput,
    DeleteQueryDefinitionCommandOutput
  >;
  private serialize;
  private deserialize;
}
