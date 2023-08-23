import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import {
  PutAccountPolicyRequest,
  PutAccountPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutAccountPolicyCommandInput extends PutAccountPolicyRequest {}
export interface PutAccountPolicyCommandOutput
  extends PutAccountPolicyResponse,
    __MetadataBearer {}
export declare class PutAccountPolicyCommand extends $Command<
  PutAccountPolicyCommandInput,
  PutAccountPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: PutAccountPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutAccountPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountPolicyCommandInput, PutAccountPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
