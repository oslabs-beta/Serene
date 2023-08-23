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
  CreateEventSourceMappingRequest,
  EventSourceMappingConfiguration,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateEventSourceMappingCommandInput
  extends CreateEventSourceMappingRequest {}
export interface CreateEventSourceMappingCommandOutput
  extends EventSourceMappingConfiguration,
    __MetadataBearer {}
export declare class CreateEventSourceMappingCommand extends $Command<
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: CreateEventSourceMappingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateEventSourceMappingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateEventSourceMappingCommandInput,
    CreateEventSourceMappingCommandOutput
  >;
  private serialize;
  private deserialize;
}
