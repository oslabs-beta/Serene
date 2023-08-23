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
import { DeleteLayerVersionRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteLayerVersionCommandInput
  extends DeleteLayerVersionRequest {}
export interface DeleteLayerVersionCommandOutput extends __MetadataBearer {}
export declare class DeleteLayerVersionCommand extends $Command<
  DeleteLayerVersionCommandInput,
  DeleteLayerVersionCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: DeleteLayerVersionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteLayerVersionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLayerVersionCommandInput, DeleteLayerVersionCommandOutput>;
  private serialize;
  private deserialize;
}
