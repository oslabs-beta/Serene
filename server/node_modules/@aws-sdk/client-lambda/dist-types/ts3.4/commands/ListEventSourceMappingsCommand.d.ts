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
  ListEventSourceMappingsRequest,
  ListEventSourceMappingsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListEventSourceMappingsCommandInput
  extends ListEventSourceMappingsRequest {}
export interface ListEventSourceMappingsCommandOutput
  extends ListEventSourceMappingsResponse,
    __MetadataBearer {}
export declare class ListEventSourceMappingsCommand extends $Command<
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: ListEventSourceMappingsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListEventSourceMappingsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListEventSourceMappingsCommandInput,
    ListEventSourceMappingsCommandOutput
  >;
  private serialize;
  private deserialize;
}
