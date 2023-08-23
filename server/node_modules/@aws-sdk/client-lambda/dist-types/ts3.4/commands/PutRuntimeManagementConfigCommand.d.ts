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
  PutRuntimeManagementConfigRequest,
  PutRuntimeManagementConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutRuntimeManagementConfigCommandInput
  extends PutRuntimeManagementConfigRequest {}
export interface PutRuntimeManagementConfigCommandOutput
  extends PutRuntimeManagementConfigResponse,
    __MetadataBearer {}
export declare class PutRuntimeManagementConfigCommand extends $Command<
  PutRuntimeManagementConfigCommandInput,
  PutRuntimeManagementConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: PutRuntimeManagementConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutRuntimeManagementConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutRuntimeManagementConfigCommandInput,
    PutRuntimeManagementConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
