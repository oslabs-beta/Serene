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
  GetFunctionEventInvokeConfigRequest,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetFunctionEventInvokeConfigCommandInput
  extends GetFunctionEventInvokeConfigRequest {}
export interface GetFunctionEventInvokeConfigCommandOutput
  extends FunctionEventInvokeConfig,
    __MetadataBearer {}
export declare class GetFunctionEventInvokeConfigCommand extends $Command<
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetFunctionEventInvokeConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetFunctionEventInvokeConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetFunctionEventInvokeConfigCommandInput,
    GetFunctionEventInvokeConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
