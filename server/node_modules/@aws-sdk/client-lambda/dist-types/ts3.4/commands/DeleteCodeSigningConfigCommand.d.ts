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
  DeleteCodeSigningConfigRequest,
  DeleteCodeSigningConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteCodeSigningConfigCommandInput
  extends DeleteCodeSigningConfigRequest {}
export interface DeleteCodeSigningConfigCommandOutput
  extends DeleteCodeSigningConfigResponse,
    __MetadataBearer {}
export declare class DeleteCodeSigningConfigCommand extends $Command<
  DeleteCodeSigningConfigCommandInput,
  DeleteCodeSigningConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: DeleteCodeSigningConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteCodeSigningConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteCodeSigningConfigCommandInput,
    DeleteCodeSigningConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
