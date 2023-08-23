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
import { DeleteFunctionConcurrencyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteFunctionConcurrencyCommandInput
  extends DeleteFunctionConcurrencyRequest {}
export interface DeleteFunctionConcurrencyCommandOutput
  extends __MetadataBearer {}
export declare class DeleteFunctionConcurrencyCommand extends $Command<
  DeleteFunctionConcurrencyCommandInput,
  DeleteFunctionConcurrencyCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: DeleteFunctionConcurrencyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteFunctionConcurrencyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteFunctionConcurrencyCommandInput,
    DeleteFunctionConcurrencyCommandOutput
  >;
  private serialize;
  private deserialize;
}
