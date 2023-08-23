import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListCodeSigningConfigsRequest, ListCodeSigningConfigsResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCodeSigningConfigsCommand}.
 */
export interface ListCodeSigningConfigsCommandInput extends ListCodeSigningConfigsRequest {
}
/**
 * @public
 *
 * The output of {@link ListCodeSigningConfigsCommand}.
 */
export interface ListCodeSigningConfigsCommandOutput extends ListCodeSigningConfigsResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code
 *         signing configurations</a>. A request returns up to 10,000 configurations per
 *       call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListCodeSigningConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListCodeSigningConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListCodeSigningConfigsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListCodeSigningConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeSigningConfigsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   CodeSigningConfigs: [ // CodeSigningConfigList
 * //     { // CodeSigningConfig
 * //       CodeSigningConfigId: "STRING_VALUE", // required
 * //       CodeSigningConfigArn: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       AllowedPublishers: { // AllowedPublishers
 * //         SigningProfileVersionArns: [ // SigningProfileVersionArns // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CodeSigningPolicies: { // CodeSigningPolicies
 * //         UntrustedArtifactOnDeployment: "Warn" || "Enforce",
 * //       },
 * //       LastModified: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCodeSigningConfigsCommandInput - {@link ListCodeSigningConfigsCommandInput}
 * @returns {@link ListCodeSigningConfigsCommandOutput}
 * @see {@link ListCodeSigningConfigsCommandInput} for command's `input` shape.
 * @see {@link ListCodeSigningConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 */
export declare class ListCodeSigningConfigsCommand extends $Command<ListCodeSigningConfigsCommandInput, ListCodeSigningConfigsCommandOutput, LambdaClientResolvedConfig> {
    readonly input: ListCodeSigningConfigsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListCodeSigningConfigsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCodeSigningConfigsCommandInput, ListCodeSigningConfigsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
