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
import { GetPolicyRequest, GetPolicyResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetPolicyCommandInput extends GetPolicyRequest {}
export interface GetPolicyCommandOutput
  extends GetPolicyResponse,
    __MetadataBearer {}
export declare class GetPolicyCommand extends $Command<
  GetPolicyCommandInput,
  GetPolicyCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: GetPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPolicyCommandInput, GetPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
