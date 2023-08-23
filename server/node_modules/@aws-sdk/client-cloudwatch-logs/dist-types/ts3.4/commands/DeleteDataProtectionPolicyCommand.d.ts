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
import { DeleteDataProtectionPolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteDataProtectionPolicyCommandInput
  extends DeleteDataProtectionPolicyRequest {}
export interface DeleteDataProtectionPolicyCommandOutput
  extends __MetadataBearer {}
export declare class DeleteDataProtectionPolicyCommand extends $Command<
  DeleteDataProtectionPolicyCommandInput,
  DeleteDataProtectionPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DeleteDataProtectionPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteDataProtectionPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteDataProtectionPolicyCommandInput,
    DeleteDataProtectionPolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
