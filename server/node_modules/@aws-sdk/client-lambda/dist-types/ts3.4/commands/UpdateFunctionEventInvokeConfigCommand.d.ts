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
  UpdateFunctionEventInvokeConfigRequest,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateFunctionEventInvokeConfigCommandInput
  extends UpdateFunctionEventInvokeConfigRequest {}
export interface UpdateFunctionEventInvokeConfigCommandOutput
  extends FunctionEventInvokeConfig,
    __MetadataBearer {}
export declare class UpdateFunctionEventInvokeConfigCommand extends $Command<
  UpdateFunctionEventInvokeConfigCommandInput,
  UpdateFunctionEventInvokeConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: UpdateFunctionEventInvokeConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateFunctionEventInvokeConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateFunctionEventInvokeConfigCommandInput,
    UpdateFunctionEventInvokeConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
