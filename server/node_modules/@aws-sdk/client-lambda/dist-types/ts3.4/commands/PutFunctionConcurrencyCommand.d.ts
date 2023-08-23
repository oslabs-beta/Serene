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
import { Concurrency, PutFunctionConcurrencyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutFunctionConcurrencyCommandInput
  extends PutFunctionConcurrencyRequest {}
export interface PutFunctionConcurrencyCommandOutput
  extends Concurrency,
    __MetadataBearer {}
export declare class PutFunctionConcurrencyCommand extends $Command<
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: PutFunctionConcurrencyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutFunctionConcurrencyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutFunctionConcurrencyCommandInput,
    PutFunctionConcurrencyCommandOutput
  >;
  private serialize;
  private deserialize;
}
