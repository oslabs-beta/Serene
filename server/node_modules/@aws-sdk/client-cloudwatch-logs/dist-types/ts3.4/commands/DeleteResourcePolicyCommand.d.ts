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
import { DeleteResourcePolicyRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteResourcePolicyCommandInput
  extends DeleteResourcePolicyRequest {}
export interface DeleteResourcePolicyCommandOutput extends __MetadataBearer {}
export declare class DeleteResourcePolicyCommand extends $Command<
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DeleteResourcePolicyCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteResourcePolicyCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteResourcePolicyCommandInput,
    DeleteResourcePolicyCommandOutput
  >;
  private serialize;
  private deserialize;
}
