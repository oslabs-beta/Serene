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
  GetFunctionConfigurationRequest,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetFunctionConfigurationCommandInput
  extends GetFunctionConfigurationRequest {}
export interface GetFunctionConfigurationCommandOutput
  extends FunctionConfiguration,
    __MetadataBearer {}
export declare class GetFunctionConfigurationCommand extends $Command<
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetFunctionConfigurationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetFunctionConfigurationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetFunctionConfigurationCommandInput,
    GetFunctionConfigurationCommandOutput
  >;
  private serialize;
  private deserialize;
}
