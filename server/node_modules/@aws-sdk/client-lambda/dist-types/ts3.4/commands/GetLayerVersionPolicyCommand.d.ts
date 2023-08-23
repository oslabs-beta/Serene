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
  GetLayerVersionPolicyRequest,
  GetLayerVersionPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetLayerVersionPolicyCommandInput
  extends GetLayerVersionPolicyRequest {}
export interface GetLayerVersionPolicyCommandOutput
  extends GetLayerVersionPolicyResponse,
    __MetadataBearer {}
export declare class GetLayerVersionPolicyCommand extends $Command<
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetLayerVersionPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetLayerVersionPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetLayerVersionPolicyCommandInput,
    GetLayerVersionPolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
