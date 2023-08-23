import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  StreamingBlobPayloadInputTypes,
} from "@smithy/types";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import { InvokeAsyncRequest, InvokeAsyncResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface InvokeAsyncCommandInput
  extends Pick<
    InvokeAsyncRequest,
    Exclude<keyof InvokeAsyncRequest, "InvokeArgs">
  > {
  InvokeArgs: StreamingBlobPayloadInputTypes;
}
export interface InvokeAsyncCommandOutput
  extends InvokeAsyncResponse,
    __MetadataBearer {}
export declare class InvokeAsyncCommand extends $Command<
  InvokeAsyncCommandInput,
  InvokeAsyncCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: InvokeAsyncCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: InvokeAsyncCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeAsyncCommandInput, InvokeAsyncCommandOutput>;
  private serialize;
  private deserialize;
}
