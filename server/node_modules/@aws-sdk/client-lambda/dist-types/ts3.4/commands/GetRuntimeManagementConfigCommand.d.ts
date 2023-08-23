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
  GetRuntimeManagementConfigRequest,
  GetRuntimeManagementConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetRuntimeManagementConfigCommandInput
  extends GetRuntimeManagementConfigRequest {}
export interface GetRuntimeManagementConfigCommandOutput
  extends GetRuntimeManagementConfigResponse,
    __MetadataBearer {}
export declare class GetRuntimeManagementConfigCommand extends $Command<
  GetRuntimeManagementConfigCommandInput,
  GetRuntimeManagementConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetRuntimeManagementConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetRuntimeManagementConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetRuntimeManagementConfigCommandInput,
    GetRuntimeManagementConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
