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
  PutFunctionCodeSigningConfigRequest,
  PutFunctionCodeSigningConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutFunctionCodeSigningConfigCommandInput
  extends PutFunctionCodeSigningConfigRequest {}
export interface PutFunctionCodeSigningConfigCommandOutput
  extends PutFunctionCodeSigningConfigResponse,
    __MetadataBearer {}
export declare class PutFunctionCodeSigningConfigCommand extends $Command<
  PutFunctionCodeSigningConfigCommandInput,
  PutFunctionCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: PutFunctionCodeSigningConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutFunctionCodeSigningConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutFunctionCodeSigningConfigCommandInput,
    PutFunctionCodeSigningConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
