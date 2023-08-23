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
import {
  ListLayerVersionsRequest,
  ListLayerVersionsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListLayerVersionsCommandInput
  extends ListLayerVersionsRequest {}
export interface ListLayerVersionsCommandOutput
  extends ListLayerVersionsResponse,
    __MetadataBearer {}
export declare class ListLayerVersionsCommand extends $Command<
  ListLayerVersionsCommandInput,
  ListLayerVersionsCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: ListLayerVersionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListLayerVersionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLayerVersionsCommandInput, ListLayerVersionsCommandOutput>;
  private serialize;
  private deserialize;
}
