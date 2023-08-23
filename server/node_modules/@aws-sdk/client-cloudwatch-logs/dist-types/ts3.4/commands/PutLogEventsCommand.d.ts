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
import { PutLogEventsRequest, PutLogEventsResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutLogEventsCommandInput extends PutLogEventsRequest {}
export interface PutLogEventsCommandOutput
  extends PutLogEventsResponse,
    __MetadataBearer {}
export declare class PutLogEventsCommand extends $Command<
  PutLogEventsCommandInput,
  PutLogEventsCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: PutLogEventsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutLogEventsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutLogEventsCommandInput, PutLogEventsCommandOutput>;
  private serialize;
  private deserialize;
}
