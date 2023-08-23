import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeAccountPoliciesRequest, DescribeAccountPoliciesResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountPoliciesCommand}.
 */
export interface DescribeAccountPoliciesCommandInput extends DescribeAccountPoliciesRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeAccountPoliciesCommand}.
 */
export interface DescribeAccountPoliciesCommandOutput extends DescribeAccountPoliciesResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Returns a list of all CloudWatch Logs account policies in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeAccountPoliciesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeAccountPoliciesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeAccountPoliciesRequest
 *   policyType: "DATA_PROTECTION_POLICY", // required
 *   policyName: "STRING_VALUE",
 *   accountIdentifiers: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAccountPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountPoliciesResponse
 * //   accountPolicies: [ // AccountPolicies
 * //     { // AccountPolicy
 * //       policyName: "STRING_VALUE",
 * //       policyDocument: "STRING_VALUE",
 * //       lastUpdatedTime: Number("long"),
 * //       policyType: "DATA_PROTECTION_POLICY",
 * //       scope: "ALL",
 * //       accountId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAccountPoliciesCommandInput - {@link DescribeAccountPoliciesCommandInput}
 * @returns {@link DescribeAccountPoliciesCommandOutput}
 * @see {@link DescribeAccountPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export declare class DescribeAccountPoliciesCommand extends $Command<DescribeAccountPoliciesCommandInput, DescribeAccountPoliciesCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeAccountPoliciesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeAccountPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountPoliciesCommandInput, DescribeAccountPoliciesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
