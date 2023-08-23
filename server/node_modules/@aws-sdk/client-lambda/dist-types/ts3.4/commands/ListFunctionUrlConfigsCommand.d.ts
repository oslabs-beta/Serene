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
  ListFunctionUrlConfigsRequest,
  ListFunctionUrlConfigsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListFunctionUrlConfigsCommandInput
  extends ListFunctionUrlConfigsRequest {}
export interface ListFunctionUrlConfigsCommandOutput
  extends ListFunctionUrlConfigsResponse,
    __MetadataBearer {}
export declare class ListFunctionUrlConfigsCommand extends $Command<
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: ListFunctionUrlConfigsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListFunctionUrlConfigsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListFunctionUrlConfigsCommandInput,
    ListFunctionUrlConfigsCommandOutput
  >;
  private serialize;
  private deserialize;
}
