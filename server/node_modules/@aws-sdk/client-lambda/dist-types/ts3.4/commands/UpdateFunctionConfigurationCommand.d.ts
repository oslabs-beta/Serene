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
  FunctionConfiguration,
  UpdateFunctionConfigurationRequest,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateFunctionConfigurationCommandInput
  extends UpdateFunctionConfigurationRequest {}
export interface UpdateFunctionConfigurationCommandOutput
  extends FunctionConfiguration,
    __MetadataBearer {}
export declare class UpdateFunctionConfigurationCommand extends $Command<
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: UpdateFunctionConfigurationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateFunctionConfigurationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateFunctionConfigurationCommandInput,
    UpdateFunctionConfigurationCommandOutput
  >;
  private serialize;
  private deserialize;
}
