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
  PutProvisionedConcurrencyConfigRequest,
  PutProvisionedConcurrencyConfigResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutProvisionedConcurrencyConfigCommandInput
  extends PutProvisionedConcurrencyConfigRequest {}
export interface PutProvisionedConcurrencyConfigCommandOutput
  extends PutProvisionedConcurrencyConfigResponse,
    __MetadataBearer {}
export declare class PutProvisionedConcurrencyConfigCommand extends $Command<
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput,
  LambdaClientResolvedConfig
> {
  readonly input: PutProvisionedConcurrencyConfigCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutProvisionedConcurrencyConfigCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutProvisionedConcurrencyConfigCommandInput,
    PutProvisionedConcurrencyConfigCommandOutput
  >;
  private serialize;
  private deserialize;
}
