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
  GetFunctionUrlConfigRequest,
  GetFunctionUrlConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetFunctionUrlConfigCommandInput
  extends GetFunctionUrlConfigRequest {}
export interface GetFunctionUrlConfigCommandOutput
  extends GetFunctionUrlConfigResponse,
    __MetadataBearer {}
export declare class GetFunctionUrlConfigCommand extends $Command<
  GetFunctionUrlConfigCommandInput,
  GetFunctionUrlConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetFunctionUrlConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetFunctionUrlConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetFunctionUrlConfigCommandInput,
    GetFunctionUrlConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
