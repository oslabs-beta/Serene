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
import { DeleteFunctionCodeSigningConfigRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteFunctionCodeSigningConfigCommandInput
  extends DeleteFunctionCodeSigningConfigRequest {}
export interface DeleteFunctionCodeSigningConfigCommandOutput
  extends __MetadataBearer {}
export declare class DeleteFunctionCodeSigningConfigCommand extends $Command<
  DeleteFunctionCodeSigningConfigCommandInput,
  DeleteFunctionCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: DeleteFunctionCodeSigningConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteFunctionCodeSigningConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteFunctionCodeSigningConfigCommandInput,
    DeleteFunctionCodeSigningConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
