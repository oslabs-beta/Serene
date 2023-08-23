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
  GetCodeSigningConfigRequest,
  GetCodeSigningConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetCodeSigningConfigCommandInput
  extends GetCodeSigningConfigRequest {}
export interface GetCodeSigningConfigCommandOutput
  extends GetCodeSigningConfigResponse,
    __MetadataBearer {}
export declare class GetCodeSigningConfigCommand extends $Command<
  GetCodeSigningConfigCommandInput,
  GetCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetCodeSigningConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetCodeSigningConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetCodeSigningConfigCommandInput,
    GetCodeSigningConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
