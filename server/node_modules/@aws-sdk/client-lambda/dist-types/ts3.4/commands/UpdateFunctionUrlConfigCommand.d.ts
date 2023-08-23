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
  UpdateFunctionUrlConfigRequest,
  UpdateFunctionUrlConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateFunctionUrlConfigCommandInput
  extends UpdateFunctionUrlConfigRequest {}
export interface UpdateFunctionUrlConfigCommandOutput
  extends UpdateFunctionUrlConfigResponse,
    __MetadataBearer {}
export declare class UpdateFunctionUrlConfigCommand extends $Command<
  UpdateFunctionUrlConfigCommandInput,
  UpdateFunctionUrlConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: UpdateFunctionUrlConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateFunctionUrlConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateFunctionUrlConfigCommandInput,
    UpdateFunctionUrlConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
