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
import { AliasConfiguration, GetAliasRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetAliasCommandInput extends GetAliasRequest {}
export interface GetAliasCommandOutput
  extends AliasConfiguration,
    __MetadataBearer {}
export declare class GetAliasCommand extends $Command<
  GetAliasCommandInput,
  GetAliasCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetAliasCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetAliasCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAliasCommandInput, GetAliasCommandOutput>;
  private serialize;
  private deserialize;
}
