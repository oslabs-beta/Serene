import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
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
  InvokeWithResponseStreamRequest,
  InvokeWithResponseStreamResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export type InvokeWithResponseStreamCommandInputType = Pick<
  InvokeWithResponseStreamRequest,
  Exclude<keyof InvokeWithResponseStreamRequest, "Payload">
> & {
  Payload?: BlobPayloadInputTypes;
};
export interface InvokeWithResponseStreamCommandInput
  extends InvokeWithResponseStreamCommandInputType {}
export interface InvokeWithResponseStreamCommandOutput
  extends InvokeWithResponseStreamResponse,
    __MetadataBearer {}
export declare class InvokeWithResponseStreamCommand extends $Command<
  InvokeWithResponseStreamCommandInput,
  InvokeWithResponseStreamCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: InvokeWithResponseStreamCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: InvokeWithResponseStreamCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    InvokeWithResponseStreamCommandInput,
    InvokeWithResponseStreamCommandOutput
  >;
  private serialize;
  private deserialize;
}
