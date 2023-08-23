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
import { DeleteMetricFilterRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteMetricFilterCommandInput
  extends DeleteMetricFilterRequest {}
export interface DeleteMetricFilterCommandOutput extends __MetadataBearer {}
export declare class DeleteMetricFilterCommand extends $Command<
  DeleteMetricFilterCommandInput,
  DeleteMetricFilterCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: DeleteMetricFilterCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteMetricFilterCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMetricFilterCommandInput, DeleteMetricFilterCommandOutput>;
  private serialize;
  private deserialize;
}
