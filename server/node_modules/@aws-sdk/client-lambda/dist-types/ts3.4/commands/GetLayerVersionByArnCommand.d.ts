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
  GetLayerVersionByArnRequest,
  GetLayerVersionResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetLayerVersionByArnCommandInput
  extends GetLayerVersionByArnRequest {}
export interface GetLayerVersionByArnCommandOutput
  extends GetLayerVersionResponse,
    __MetadataBearer {}
export declare class GetLayerVersionByArnCommand extends $Command<
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetLayerVersionByArnCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetLayerVersionByArnCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetLayerVersionByArnCommandInput,
    GetLayerVersionByArnCommandOutput
  >;
  private serialize;
  private deserialize;
}
