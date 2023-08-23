import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  BlobPayloadInputTypes,
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";
import {
  LambdaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaClient";
import { InvocationRequest, InvocationResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export type InvokeCommandInputType = Pick<
  InvocationRequest,
  Exclude<keyof InvocationRequest, "Payload">
> & {
  Payload?: BlobPayloadInputTypes;
};
export interface InvokeCommandInput extends InvokeCommandInputType {}
export type InvokeCommandOutputType = Pick<
  InvocationResponse,
  Exclude<keyof InvocationResponse, "Payload">
> & {
  Payload?: Uint8ArrayBlobAdapter;
};
export interface InvokeCommandOutput
  extends InvokeCommandOutputType,
    __MetadataBearer {}
export declare class InvokeCommand extends $Command<
  InvokeCommandInput,
  InvokeCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: InvokeCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: InvokeCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeCommandInput, InvokeCommandOutput>;
  private serialize;
  private deserialize;
}
