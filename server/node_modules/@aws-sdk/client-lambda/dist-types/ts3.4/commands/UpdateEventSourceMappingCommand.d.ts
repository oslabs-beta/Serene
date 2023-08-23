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
  EventSourceMappingConfiguration,
  UpdateEventSourceMappingRequest,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateEventSourceMappingCommandInput
  extends UpdateEventSourceMappingRequest {}
export interface UpdateEventSourceMappingCommandOutput
  extends EventSourceMappingConfiguration,
    __MetadataBearer {}
export declare class UpdateEventSourceMappingCommand extends $Command<
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: UpdateEventSourceMappingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateEventSourceMappingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateEventSourceMappingCommandInput,
    UpdateEventSourceMappingCommandOutput
  >;
  private serialize;
  private deserialize;
}
