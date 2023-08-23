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
import { StopQueryRequest, StopQueryResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface StopQueryCommandInput extends StopQueryRequest {}
export interface StopQueryCommandOutput
  extends StopQueryResponse,
    __MetadataBearer {}
export declare class StopQueryCommand extends $Command<
  StopQueryCommandInput,
  StopQueryCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: StopQueryCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StopQueryCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopQueryCommandInput, StopQueryCommandOutput>;
  private serialize;
  private deserialize;
}
