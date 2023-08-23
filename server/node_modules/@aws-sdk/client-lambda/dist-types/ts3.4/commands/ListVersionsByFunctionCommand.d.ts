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
  ListVersionsByFunctionRequest,
  ListVersionsByFunctionResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListVersionsByFunctionCommandInput
  extends ListVersionsByFunctionRequest {}
export interface ListVersionsByFunctionCommandOutput
  extends ListVersionsByFunctionResponse,
    __MetadataBearer {}
export declare class ListVersionsByFunctionCommand extends $Command<
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: ListVersionsByFunctionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListVersionsByFunctionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListVersionsByFunctionCommandInput,
    ListVersionsByFunctionCommandOutput
  >;
  private serialize;
  private deserialize;
}
