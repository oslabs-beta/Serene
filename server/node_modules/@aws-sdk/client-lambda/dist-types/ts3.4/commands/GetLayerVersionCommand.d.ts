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
  GetLayerVersionRequest,
  GetLayerVersionResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetLayerVersionCommandInput extends GetLayerVersionRequest {}
export interface GetLayerVersionCommandOutput
  extends GetLayerVersionResponse,
    __MetadataBearer {}
export declare class GetLayerVersionCommand extends $Command<
  GetLayerVersionCommandInput,
  GetLayerVersionCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetLayerVersionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetLayerVersionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLayerVersionCommandInput, GetLayerVersionCommandOutput>;
  private serialize;
  private deserialize;
}
