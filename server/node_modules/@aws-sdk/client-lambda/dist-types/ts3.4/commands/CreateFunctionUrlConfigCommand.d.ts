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
  CreateFunctionUrlConfigRequest,
  CreateFunctionUrlConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateFunctionUrlConfigCommandInput
  extends CreateFunctionUrlConfigRequest {}
export interface CreateFunctionUrlConfigCommandOutput
  extends CreateFunctionUrlConfigResponse,
    __MetadataBearer {}
export declare class CreateFunctionUrlConfigCommand extends $Command<
  CreateFunctionUrlConfigCommandInput,
  CreateFunctionUrlConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: CreateFunctionUrlConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateFunctionUrlConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateFunctionUrlConfigCommandInput,
    CreateFunctionUrlConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
