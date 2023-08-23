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
import { DeleteProvisionedConcurrencyConfigRequest } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteProvisionedConcurrencyConfigCommandInput
  extends DeleteProvisionedConcurrencyConfigRequest {}
export interface DeleteProvisionedConcurrencyConfigCommandOutput
  extends __MetadataBearer {}
export declare class DeleteProvisionedConcurrencyConfigCommand extends $Command<
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: DeleteProvisionedConcurrencyConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteProvisionedConcurrencyConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteProvisionedConcurrencyConfigCommandInput,
    DeleteProvisionedConcurrencyConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
