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
  GetAccountSettingsRequest,
  GetAccountSettingsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetAccountSettingsCommandInput
  extends GetAccountSettingsRequest {}
export interface GetAccountSettingsCommandOutput
  extends GetAccountSettingsResponse,
    __MetadataBearer {}
export declare class GetAccountSettingsCommand extends $Command<
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetAccountSettingsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetAccountSettingsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput>;
  private serialize;
  private deserialize;
}
