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
  PublishLayerVersionRequest,
  PublishLayerVersionResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PublishLayerVersionCommandInput
  extends PublishLayerVersionRequest {}
export interface PublishLayerVersionCommandOutput
  extends PublishLayerVersionResponse,
    __MetadataBearer {}
export declare class PublishLayerVersionCommand extends $Command<
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: PublishLayerVersionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PublishLayerVersionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishLayerVersionCommandInput, PublishLayerVersionCommandOutput>;
  private serialize;
  private deserialize;
}
