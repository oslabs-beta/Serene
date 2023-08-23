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
  GetFunctionConcurrencyRequest,
  GetFunctionConcurrencyResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetFunctionConcurrencyCommandInput
  extends GetFunctionConcurrencyRequest {}
export interface GetFunctionConcurrencyCommandOutput
  extends GetFunctionConcurrencyResponse,
    __MetadataBearer {}
export declare class GetFunctionConcurrencyCommand extends $Command<
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetFunctionConcurrencyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetFunctionConcurrencyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetFunctionConcurrencyCommandInput,
    GetFunctionConcurrencyCommandOutput
  >;
  private serialize;
  private deserialize;
}
