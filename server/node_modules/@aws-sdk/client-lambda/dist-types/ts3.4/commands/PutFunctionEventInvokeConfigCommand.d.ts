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
  FunctionEventInvokeConfig,
  PutFunctionEventInvokeConfigRequest,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutFunctionEventInvokeConfigCommandInput
  extends PutFunctionEventInvokeConfigRequest {}
export interface PutFunctionEventInvokeConfigCommandOutput
  extends FunctionEventInvokeConfig,
    __MetadataBearer {}
export declare class PutFunctionEventInvokeConfigCommand extends $Command<
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: PutFunctionEventInvokeConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutFunctionEventInvokeConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutFunctionEventInvokeConfigCommandInput,
    PutFunctionEventInvokeConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
