import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeQueriesRequest, DescribeQueriesResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeQueriesCommand}.
 */
export interface DescribeQueriesCommandInput extends DescribeQueriesRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeQueriesCommand}.
 */
export interface DescribeQueriesCommandOutput extends DescribeQueriesResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have
 *       been run recently in this account. You can request all queries or limit it to queries of a
 *       specific log group or queries with a certain status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeQueriesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeQueriesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeQueriesRequest
 *   logGroupName: "STRING_VALUE",
 *   status: "Scheduled" || "Running" || "Complete" || "Failed" || "Cancelled" || "Timeout" || "Unknown",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeQueriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQueriesResponse
 * //   queries: [ // QueryInfoList
 * //     { // QueryInfo
 * //       queryId: "STRING_VALUE",
 * //       queryString: "STRING_VALUE",
 * //       status: "Scheduled" || "Running" || "Complete" || "Failed" || "Cancelled" || "Timeout" || "Unknown",
 * //       createTime: Number("long"),
 * //       logGroupName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeQueriesCommandInput - {@link DescribeQueriesCommandInput}
 * @returns {@link DescribeQueriesCommandOutput}
 * @see {@link DescribeQueriesCommandInput} for command's `input` shape.
 * @see {@link DescribeQueriesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
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
export declare class DescribeQueriesCommand extends $Command<DescribeQueriesCommandInput, DescribeQueriesCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeQueriesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DescribeQueriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeQueriesCommandInput, DescribeQueriesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
