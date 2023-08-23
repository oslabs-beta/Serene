import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import {
  DeleteEventSourceMappingRequest,
  EventSourceMappingConfiguration,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteEventSourceMappingCommandInput
  extends DeleteEventSourceMappingRequest {}
export interface DeleteEventSourceMappingCommandOutput
  extends EventSourceMappingConfiguration,
    __MetadataBearer {}
export declare class DeleteEventSourceMappingCommand extends $Command<
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: DeleteEventSourceMappingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteEventSourceMappingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteEventSourceMappingCommandInput,
    DeleteEventSourceMappingCommandOutput
  >;
  private serialize;
  private deserialize;
}
