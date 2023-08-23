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
import { DeleteAccountPolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteAccountPolicyCommandInput
  extends DeleteAccountPolicyRequest {}
export interface DeleteAccountPolicyCommandOutput extends __MetadataBearer {}
export declare class DeleteAccountPolicyCommand extends $Command<
  DeleteAccountPolicyCommandInput,
  DeleteAccountPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DeleteAccountPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteAccountPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccountPolicyCommandInput, DeleteAccountPolicyCommandOutput>;
  private serialize;
  private deserialize;
}
