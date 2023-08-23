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
  CreateCodeSigningConfigRequest,
  CreateCodeSigningConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateCodeSigningConfigCommandInput
  extends CreateCodeSigningConfigRequest {}
export interface CreateCodeSigningConfigCommandOutput
  extends CreateCodeSigningConfigResponse,
    __MetadataBearer {}
export declare class CreateCodeSigningConfigCommand extends $Command<
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: CreateCodeSigningConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateCodeSigningConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateCodeSigningConfigCommandInput,
    CreateCodeSigningConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
