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
import { DeleteFunctionUrlConfigRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteFunctionUrlConfigCommandInput
  extends DeleteFunctionUrlConfigRequest {}
export interface DeleteFunctionUrlConfigCommandOutput
  extends __MetadataBearer {}
export declare class DeleteFunctionUrlConfigCommand extends $Command<
  DeleteFunctionUrlConfigCommandInput,
  DeleteFunctionUrlConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: DeleteFunctionUrlConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteFunctionUrlConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteFunctionUrlConfigCommandInput,
    DeleteFunctionUrlConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
