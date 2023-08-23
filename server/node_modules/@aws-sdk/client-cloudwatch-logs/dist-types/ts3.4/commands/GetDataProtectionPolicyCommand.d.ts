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
  GetDataProtectionPolicyRequest,
  GetDataProtectionPolicyResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetDataProtectionPolicyCommandInput
  extends GetDataProtectionPolicyRequest {}
export interface GetDataProtectionPolicyCommandOutput
  extends GetDataProtectionPolicyResponse,
    __MetadataBearer {}
export declare class GetDataProtectionPolicyCommand extends $Command<
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: GetDataProtectionPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetDataProtectionPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetDataProtectionPolicyCommandInput,
    GetDataProtectionPolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
