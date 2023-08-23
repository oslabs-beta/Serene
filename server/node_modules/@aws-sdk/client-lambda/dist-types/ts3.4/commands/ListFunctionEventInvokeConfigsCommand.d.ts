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
  ListFunctionEventInvokeConfigsRequest,
  ListFunctionEventInvokeConfigsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListFunctionEventInvokeConfigsCommandInput
  extends ListFunctionEventInvokeConfigsRequest {}
export interface ListFunctionEventInvokeConfigsCommandOutput
  extends ListFunctionEventInvokeConfigsResponse,
    __MetadataBearer {}
export declare class ListFunctionEventInvokeConfigsCommand extends $Command<
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: ListFunctionEventInvokeConfigsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListFunctionEventInvokeConfigsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListFunctionEventInvokeConfigsCommandInput,
    ListFunctionEventInvokeConfigsCommandOutput
  >;
  private serialize;
  private deserialize;
}
