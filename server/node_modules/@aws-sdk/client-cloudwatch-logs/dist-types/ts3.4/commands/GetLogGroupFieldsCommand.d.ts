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
  GetLogGroupFieldsRequest,
  GetLogGroupFieldsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface GetLogGroupFieldsCommandInput
  extends GetLogGroupFieldsRequest {}
export interface GetLogGroupFieldsCommandOutput
  extends GetLogGroupFieldsResponse,
    __MetadataBearer {}
export declare class GetLogGroupFieldsCommand extends $Command<
  GetLogGroupFieldsCommandInput,
  GetLogGroupFieldsCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
  readonly input: GetLogGroupFieldsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetLogGroupFieldsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLogGroupFieldsCommandInput, GetLogGroupFieldsCommandOutput>;
  private serialize;
  private deserialize;
}
