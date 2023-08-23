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
import { DeleteFunctionEventInvokeConfigRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteFunctionEventInvokeConfigCommandInput
  extends DeleteFunctionEventInvokeConfigRequest {}
export interface DeleteFunctionEventInvokeConfigCommandOutput
  extends __MetadataBearer {}
export declare class DeleteFunctionEventInvokeConfigCommand extends $Command<
  DeleteFunctionEventInvokeConfigCommandInput,
  DeleteFunctionEventInvokeConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: DeleteFunctionEventInvokeConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteFunctionEventInvokeConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteFunctionEventInvokeConfigCommandInput,
    DeleteFunctionEventInvokeConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
