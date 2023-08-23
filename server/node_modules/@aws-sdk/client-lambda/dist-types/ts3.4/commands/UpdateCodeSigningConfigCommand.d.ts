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
  UpdateCodeSigningConfigRequest,
  UpdateCodeSigningConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateCodeSigningConfigCommandInput
  extends UpdateCodeSigningConfigRequest {}
export interface UpdateCodeSigningConfigCommandOutput
  extends UpdateCodeSigningConfigResponse,
    __MetadataBearer {}
export declare class UpdateCodeSigningConfigCommand extends $Command<
  UpdateCodeSigningConfigCommandInput,
  UpdateCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: UpdateCodeSigningConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateCodeSigningConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateCodeSigningConfigCommandInput,
    UpdateCodeSigningConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
