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
  GetEventSourceMappingRequest,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetEventSourceMappingCommandInput
  extends GetEventSourceMappingRequest {}
export interface GetEventSourceMappingCommandOutput
  extends EventSourceMappingConfiguration,
    __MetadataBearer {}
export declare class GetEventSourceMappingCommand extends $Command<
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetEventSourceMappingCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetEventSourceMappingCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetEventSourceMappingCommandInput,
    GetEventSourceMappingCommandOutput
  >;
  private serialize;
  private deserialize;
}
