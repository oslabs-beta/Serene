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
import { DeleteRetentionPolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteRetentionPolicyCommandInput
  extends DeleteRetentionPolicyRequest {}
export interface DeleteRetentionPolicyCommandOutput extends __MetadataBearer {}
export declare class DeleteRetentionPolicyCommand extends $Command<
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DeleteRetentionPolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteRetentionPolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteRetentionPolicyCommandInput,
    DeleteRetentionPolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
