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
  GetQueryResultsRequest,
  GetQueryResultsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetQueryResultsCommandInput extends GetQueryResultsRequest {}
export interface GetQueryResultsCommandOutput
  extends GetQueryResultsResponse,
    __MetadataBearer {}
export declare class GetQueryResultsCommand extends $Command<
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: GetQueryResultsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetQueryResultsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryResultsCommandInput, GetQueryResultsCommandOutput>;
  private serialize;
  private deserialize;
}
