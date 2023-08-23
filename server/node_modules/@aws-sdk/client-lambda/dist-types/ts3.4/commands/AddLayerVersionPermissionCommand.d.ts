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
  AddLayerVersionPermissionRequest,
  AddLayerVersionPermissionResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface AddLayerVersionPermissionCommandInput
  extends AddLayerVersionPermissionRequest {}
export interface AddLayerVersionPermissionCommandOutput
  extends AddLayerVersionPermissionResponse,
    __MetadataBearer {}
export declare class AddLayerVersionPermissionCommand extends $Command<
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: AddLayerVersionPermissionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: AddLayerVersionPermissionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AddLayerVersionPermissionCommandInput,
    AddLayerVersionPermissionCommandOutput
  >;
  private serialize;
  private deserialize;
}
