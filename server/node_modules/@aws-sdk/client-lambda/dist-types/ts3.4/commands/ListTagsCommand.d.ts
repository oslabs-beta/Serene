import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import { ListTagsRequest, ListTagsResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListTagsCommandInput extends ListTagsRequest {}
export interface ListTagsCommandOutput
  extends ListTagsResponse,
    __MetadataBearer {}
export declare class ListTagsCommand extends $Command<
  ListTagsCommandInput,
  ListTagsCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: ListTagsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListTagsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsCommandInput, ListTagsCommandOutput>;
  private serialize;
  private deserialize;
}
