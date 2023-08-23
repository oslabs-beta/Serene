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
import { GetLogRecordRequest, GetLogRecordResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetLogRecordCommandInput extends GetLogRecordRequest {}
export interface GetLogRecordCommandOutput
  extends GetLogRecordResponse,
    __MetadataBearer {}
export declare class GetLogRecordCommand extends $Command<
  GetLogRecordCommandInput,
  GetLogRecordCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: GetLogRecordCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetLogRecordCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLogRecordCommandInput, GetLogRecordCommandOutput>;
  private serialize;
  private deserialize;
}
