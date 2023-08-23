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
  FunctionConfiguration,
  PublishVersionRequest,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PublishVersionCommandInput extends PublishVersionRequest {}
export interface PublishVersionCommandOutput
  extends FunctionConfiguration,
    __MetadataBearer {}
export declare class PublishVersionCommand extends $Command<
  PublishVersionCommandInput,
  PublishVersionCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: PublishVersionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PublishVersionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishVersionCommandInput, PublishVersionCommandOutput>;
  private serialize;
  private deserialize;
}
