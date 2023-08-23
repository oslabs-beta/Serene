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
import { PutMetricFilterRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutMetricFilterCommandInput extends PutMetricFilterRequest {}
export interface PutMetricFilterCommandOutput extends __MetadataBearer {}
export declare class PutMetricFilterCommand extends $Command<
  PutMetricFilterCommandInput,
  PutMetricFilterCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: PutMetricFilterCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutMetricFilterCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutMetricFilterCommandInput, PutMetricFilterCommandOutput>;
  private serialize;
  private deserialize;
}
