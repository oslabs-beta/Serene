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
  PutDataProtectionPolicyRequest,
  PutDataProtectionPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutDataProtectionPolicyCommandInput
  extends PutDataProtectionPolicyRequest {}
export interface PutDataProtectionPolicyCommandOutput
  extends PutDataProtectionPolicyResponse,
    __MetadataBearer {}
export declare class PutDataProtectionPolicyCommand extends $Command<
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: PutDataProtectionPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutDataProtectionPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutDataProtectionPolicyCommandInput,
    PutDataProtectionPolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
