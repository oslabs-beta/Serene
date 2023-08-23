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
  ListCodeSigningConfigsRequest,
  ListCodeSigningConfigsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListCodeSigningConfigsCommandInput
  extends ListCodeSigningConfigsRequest {}
export interface ListCodeSigningConfigsCommandOutput
  extends ListCodeSigningConfigsResponse,
    __MetadataBearer {}
export declare class ListCodeSigningConfigsCommand extends $Command<
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: ListCodeSigningConfigsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListCodeSigningConfigsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListCodeSigningConfigsCommandInput,
    ListCodeSigningConfigsCommandOutput
  >;
  private serialize;
  private deserialize;
}
