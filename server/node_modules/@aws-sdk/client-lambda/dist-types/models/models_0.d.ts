import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { StreamingBlobTypes } from "@smithy/types";
import { LambdaServiceException as __BaseException } from "./LambdaServiceException";
/**
 * @public
 * <p>Limits that are related to concurrency and storage. All file and storage sizes are in bytes.</p>
 */
export interface AccountLimit {
    /**
     * @public
     * <p>The amount of storage space that you can use for all deployment packages and layer archives.</p>
     */
    TotalCodeSize?: number;
    /**
     * @public
     * <p>The maximum size of a function's deployment package and layers when they're extracted.</p>
     */
    CodeSizeUnzipped?: number;
    /**
     * @public
     * <p>The maximum size of a deployment package when it's uploaded directly to Lambda. Use Amazon S3 for larger
     *       files.</p>
     */
    CodeSizeZipped?: number;
    /**
     * @public
     * <p>The maximum number of simultaneous function executions.</p>
     */
    ConcurrentExecutions?: number;
    /**
     * @public
     * <p>The maximum number of simultaneous function executions, minus the capacity that's reserved for individual
     *       functions with <a>PutFunctionConcurrency</a>.</p>
     */
    UnreservedConcurrentExecutions?: number;
}
/**
 * @public
 * <p>The number of functions and amount of storage in use.</p>
 */
export interface AccountUsage {
    /**
     * @public
     * <p>The amount of storage space, in bytes, that's being used by deployment packages and layer archives.</p>
     */
    TotalCodeSize?: number;
    /**
     * @public
     * <p>The number of Lambda functions.</p>
     */
    FunctionCount?: number;
}
/**
 * @public
 */
export interface AddLayerVersionPermissionRequest {
    /**
     * @public
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * @public
     * <p>The version number.</p>
     */
    VersionNumber: number | undefined;
    /**
     * @public
     * <p>An identifier that distinguishes the policy from others on the same layer version.</p>
     */
    StatementId: string | undefined;
    /**
     * @public
     * <p>The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.</p>
     */
    Action: string | undefined;
    /**
     * @public
     * <p>An account ID, or <code>*</code> to grant layer usage permission to all
     *       accounts in an organization, or all Amazon Web Services accounts (if <code>organizationId</code> is not specified).
     *       For the last case, make sure that you really do want all Amazon Web Services accounts to have usage permission to this layer.
     *     </p>
     */
    Principal: string | undefined;
    /**
     * @public
     * <p>With the principal set to <code>*</code>, grant permission to all accounts in the specified
     *       organization.</p>
     */
    OrganizationId?: string;
    /**
     * @public
     * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a
     *       policy that has changed since you last read it.</p>
     */
    RevisionId?: string;
}
/**
 * @public
 */
export interface AddLayerVersionPermissionResponse {
    /**
     * @public
     * <p>The permission statement.</p>
     */
    Statement?: string;
    /**
     * @public
     * <p>A unique identifier for the current revision of the policy.</p>
     */
    RevisionId?: string;
}
/**
 * @public
 * <p>One of the parameters in the request is not valid.</p>
 */
export declare class InvalidParameterValueException extends __BaseException {
    readonly name: "InvalidParameterValueException";
    readonly $fault: "client";
    /**
     * @public
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>);
}
/**
 * @public
 * <p>The permissions policy for the resource is too large. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 */
export declare class PolicyLengthExceededException extends __BaseException {
    readonly name: "PolicyLengthExceededException";
    readonly $fault: "client";
    Type?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<PolicyLengthExceededException, __BaseException>);
}
/**
 * @public
 * <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code>
 *       API operation to retrieve the latest RevisionId for your resource.</p>
 */
export declare class PreconditionFailedException extends __BaseException {
    readonly name: "PreconditionFailedException";
    readonly $fault: "client";
    /**
     * @public
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>);
}
/**
 * @public
 * <p>The resource already exists, or another operation is in progress.</p>
 */
export declare class ResourceConflictException extends __BaseException {
    readonly name: "ResourceConflictException";
    readonly $fault: "client";
    /**
     * @public
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>);
}
/**
 * @public
 * <p>The resource specified in the request does not exist.</p>
 */
export declare class ResourceNotFoundException extends __BaseException {
    readonly name: "ResourceNotFoundException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>);
}
/**
 * @public
 * <p>The Lambda service encountered an internal error.</p>
 */
export declare class ServiceException extends __BaseException {
    readonly name: "ServiceException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>);
}
/**
 * @public
 * @enum
 */
export declare const ThrottleReason: {
    readonly CallerRateLimitExceeded: "CallerRateLimitExceeded";
    readonly ConcurrentInvocationLimitExceeded: "ConcurrentInvocationLimitExceeded";
    readonly ConcurrentSnapshotCreateLimitExceeded: "ConcurrentSnapshotCreateLimitExceeded";
    readonly FunctionInvocationRateLimitExceeded: "FunctionInvocationRateLimitExceeded";
    readonly ReservedFunctionConcurrentInvocationLimitExceeded: "ReservedFunctionConcurrentInvocationLimitExceeded";
    readonly ReservedFunctionInvocationRateLimitExceeded: "ReservedFunctionInvocationRateLimitExceeded";
};
/**
 * @public
 */
export type ThrottleReason = (typeof ThrottleReason)[keyof typeof ThrottleReason];
/**
 * @public
 * <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 */
export declare class TooManyRequestsException extends __BaseException {
    readonly name: "TooManyRequestsException";
    readonly $fault: "client";
    /**
     * @public
     * <p>The number of seconds the caller should wait before retrying.</p>
     */
    retryAfterSeconds?: string;
    Type?: string;
    Reason?: ThrottleReason | string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>);
}
/**
 * @public
 * @enum
 */
export declare const FunctionUrlAuthType: {
    readonly AWS_IAM: "AWS_IAM";
    readonly NONE: "NONE";
};
/**
 * @public
 */
export type FunctionUrlAuthType = (typeof FunctionUrlAuthType)[keyof typeof FunctionUrlAuthType];
/**
 * @public
 */
export interface AddPermissionRequest {
    /**
     * @public
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>A statement identifier that differentiates the statement from others in the same policy.</p>
     */
    StatementId: string | undefined;
    /**
     * @public
     * <p>The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or
     *         <code>lambda:GetFunction</code>.</p>
     */
    Action: string | undefined;
    /**
     * @public
     * <p>The Amazon Web Service or Amazon Web Services account that invokes the function. If you specify a
     *       service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through
     *       that service.</p>
     */
    Principal: string | undefined;
    /**
     * @public
     * <p>For Amazon Web Services, the ARN of the Amazon Web Services resource that invokes the function. For
     *       example, an Amazon S3 bucket or Amazon SNS topic.</p>
     *          <p>Note that Lambda configures the comparison using the <code>StringLike</code> operator.</p>
     */
    SourceArn?: string;
    /**
     * @public
     * <p>For Amazon Web Service, the ID of the Amazon Web Services account that owns the resource. Use this
     *       together with <code>SourceArn</code> to ensure that the specified account owns the resource. It is possible for an
     *         Amazon S3 bucket to be deleted by its owner and recreated by another account.</p>
     */
    SourceAccount?: string;
    /**
     * @public
     * <p>For Alexa Smart Home functions, a token that the invoker must supply.</p>
     */
    EventSourceToken?: string;
    /**
     * @public
     * <p>Specify a version or alias to add permissions to a published version of the function.</p>
     */
    Qualifier?: string;
    /**
     * @public
     * <p>Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a
     *       policy that has changed since you last read it.</p>
     */
    RevisionId?: string;
    /**
     * @public
     * <p>The identifier for your organization in Organizations. Use this to grant permissions to all the
     *         Amazon Web Services accounts under this organization.</p>
     */
    PrincipalOrgID?: string;
    /**
     * @public
     * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated
     *   users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information,
     *   see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.</p>
     */
    FunctionUrlAuthType?: FunctionUrlAuthType | string;
}
/**
 * @public
 */
export interface AddPermissionResponse {
    /**
     * @public
     * <p>The permission statement that's added to the function policy.</p>
     */
    Statement?: string;
}
/**
 * @public
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.</p>
 */
export interface AliasRoutingConfiguration {
    /**
     * @public
     * <p>The second version, and the percentage of traffic that's routed to it.</p>
     */
    AdditionalVersionWeights?: Record<string, number>;
}
/**
 * @public
 * <p>Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.</p>
 */
export interface AliasConfiguration {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the alias.</p>
     */
    AliasArn?: string;
    /**
     * @public
     * <p>The name of the alias.</p>
     */
    Name?: string;
    /**
     * @public
     * <p>The function version that the alias invokes.</p>
     */
    FunctionVersion?: string;
    /**
     * @public
     * <p>A description of the alias.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">routing
     *         configuration</a> of the alias.</p>
     */
    RoutingConfig?: AliasRoutingConfiguration;
    /**
     * @public
     * <p>A unique identifier that changes when you update the alias.</p>
     */
    RevisionId?: string;
}
/**
 * @public
 * <p>List of signing profiles that can sign a code package. </p>
 */
export interface AllowedPublishers {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user
     *       who can sign a code package. </p>
     */
    SigningProfileVersionArns: string[] | undefined;
}
/**
 * @public
 * <p>Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.</p>
 */
export interface AmazonManagedKafkaEventSourceConfig {
    /**
     * @public
     * <p>The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources.
     *   After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see
     *   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id">Customizable consumer group ID</a>.</p>
     */
    ConsumerGroupId?: string;
}
/**
 * @public
 * @enum
 */
export declare const Architecture: {
    readonly arm64: "arm64";
    readonly x86_64: "x86_64";
};
/**
 * @public
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];
/**
 * @public
 */
export interface CreateAliasRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The name of the alias.</p>
     */
    Name: string | undefined;
    /**
     * @public
     * <p>The function version that the alias invokes.</p>
     */
    FunctionVersion: string | undefined;
    /**
     * @public
     * <p>A description of the alias.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing
     *         configuration</a> of the alias.</p>
     */
    RoutingConfig?: AliasRoutingConfiguration;
}
/**
 * @public
 * @enum
 */
export declare const CodeSigningPolicy: {
    readonly Enforce: "Enforce";
    readonly Warn: "Warn";
};
/**
 * @public
 */
export type CodeSigningPolicy = (typeof CodeSigningPolicy)[keyof typeof CodeSigningPolicy];
/**
 * @public
 * <p>Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or
 *        expiry.</p>
 */
export interface CodeSigningPolicies {
    /**
     * @public
     * <p>Code signing configuration policy for deployment validation failure. If you set the policy to
     *       <code>Enforce</code>, Lambda blocks the deployment request if signature validation checks fail. If you set the
     *       policy to <code>Warn</code>, Lambda allows the deployment and creates a CloudWatch log. </p>
     *          <p>Default value: <code>Warn</code>
     *          </p>
     */
    UntrustedArtifactOnDeployment?: CodeSigningPolicy | string;
}
/**
 * @public
 */
export interface CreateCodeSigningConfigRequest {
    /**
     * @public
     * <p>Descriptive name for this code signing configuration.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>Signing profiles for this code signing configuration.</p>
     */
    AllowedPublishers: AllowedPublishers | undefined;
    /**
     * @public
     * <p>The code signing policies define the actions to take if the validation checks fail. </p>
     */
    CodeSigningPolicies?: CodeSigningPolicies;
}
/**
 * @public
 * <p>Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>. </p>
 */
export interface CodeSigningConfig {
    /**
     * @public
     * <p>Unique identifer for the Code signing configuration.</p>
     */
    CodeSigningConfigId: string | undefined;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the Code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * @public
     * <p>Code signing configuration description.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>List of allowed publishers.</p>
     */
    AllowedPublishers: AllowedPublishers | undefined;
    /**
     * @public
     * <p>The code signing policy controls the validation failure action for signature mismatch or expiry.</p>
     */
    CodeSigningPolicies: CodeSigningPolicies | undefined;
    /**
     * @public
     * <p>The date and time that the Code signing configuration was last modified, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD). </p>
     */
    LastModified: string | undefined;
}
/**
 * @public
 */
export interface CreateCodeSigningConfigResponse {
    /**
     * @public
     * <p>The code signing configuration.</p>
     */
    CodeSigningConfig: CodeSigningConfig | undefined;
}
/**
 * @public
 * <p>A destination for events that failed processing.</p>
 */
export interface OnFailure {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the destination resource.</p>
     */
    Destination?: string;
}
/**
 * @public
 * <p>A destination for events that were processed successfully.</p>
 */
export interface OnSuccess {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the destination resource.</p>
     */
    Destination?: string;
}
/**
 * @public
 * <p>A configuration object that specifies the destination of an event after Lambda processes it.</p>
 */
export interface DestinationConfig {
    /**
     * @public
     * <p>The destination configuration for successful invocations.</p>
     */
    OnSuccess?: OnSuccess;
    /**
     * @public
     * <p>The destination configuration for failed invocations.</p>
     */
    OnFailure?: OnFailure;
}
/**
 * @public
 * @enum
 */
export declare const FullDocument: {
    readonly Default: "Default";
    readonly UpdateLookup: "UpdateLookup";
};
/**
 * @public
 */
export type FullDocument = (typeof FullDocument)[keyof typeof FullDocument];
/**
 * @public
 * <p>
 *       Specific configuration settings for a DocumentDB event source.
 *     </p>
 */
export interface DocumentDBEventSourceConfig {
    /**
     * @public
     * <p>
     *       The name of the database to consume within the DocumentDB cluster.
     *     </p>
     */
    DatabaseName?: string;
    /**
     * @public
     * <p>
     *       The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections.
     *     </p>
     */
    CollectionName?: string;
    /**
     * @public
     * <p>
     *       Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.
     *     </p>
     */
    FullDocument?: FullDocument | string;
}
/**
 * @public
 * <p>
 *       A structure within a <code>FilterCriteria</code> object that defines an event filtering pattern.
 *     </p>
 */
export interface Filter {
    /**
     * @public
     * <p>
     *       A filter pattern. For more information on the syntax of a filter pattern, see
     *       <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax">
     *         Filter rule syntax</a>.
     *     </p>
     */
    Pattern?: string;
}
/**
 * @public
 * <p>
 *       An object that contains the filters for an event source.
 *     </p>
 */
export interface FilterCriteria {
    /**
     * @public
     * <p>
     *       A list of filters.
     *     </p>
     */
    Filters?: Filter[];
}
/**
 * @public
 * @enum
 */
export declare const FunctionResponseType: {
    readonly ReportBatchItemFailures: "ReportBatchItemFailures";
};
/**
 * @public
 */
export type FunctionResponseType = (typeof FunctionResponseType)[keyof typeof FunctionResponseType];
/**
 * @public
 * <p>(Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.</p>
 */
export interface ScalingConfig {
    /**
     * @public
     * <p>Limits the number of concurrent instances that the Amazon SQS event source can invoke.</p>
     */
    MaximumConcurrency?: number;
}
/**
 * @public
 * @enum
 */
export declare const EndPointType: {
    readonly KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS";
};
/**
 * @public
 */
export type EndPointType = (typeof EndPointType)[keyof typeof EndPointType];
/**
 * @public
 * <p>The self-managed Apache Kafka cluster for your event source.</p>
 */
export interface SelfManagedEventSource {
    /**
     * @public
     * <p>The list of bootstrap servers for your Kafka brokers in the following format: <code>"KAFKA_BOOTSTRAP_SERVERS":
     *         ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]</code>.</p>
     */
    Endpoints?: Record<string, string[]>;
}
/**
 * @public
 * <p>Specific configuration settings for a self-managed Apache Kafka event source.</p>
 */
export interface SelfManagedKafkaEventSourceConfig {
    /**
     * @public
     * <p>The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources.
     *   After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see
     *   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id">Customizable consumer group ID</a>.</p>
     */
    ConsumerGroupId?: string;
}
/**
 * @public
 * @enum
 */
export declare const SourceAccessType: {
    readonly BASIC_AUTH: "BASIC_AUTH";
    readonly CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH";
    readonly SASL_SCRAM_256_AUTH: "SASL_SCRAM_256_AUTH";
    readonly SASL_SCRAM_512_AUTH: "SASL_SCRAM_512_AUTH";
    readonly SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE";
    readonly VIRTUAL_HOST: "VIRTUAL_HOST";
    readonly VPC_SECURITY_GROUP: "VPC_SECURITY_GROUP";
    readonly VPC_SUBNET: "VPC_SUBNET";
};
/**
 * @public
 */
export type SourceAccessType = (typeof SourceAccessType)[keyof typeof SourceAccessType];
/**
 * @public
 * <p>To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.</p>
 */
export interface SourceAccessConfiguration {
    /**
     * @public
     * <p>The type of authentication protocol, VPC components, or virtual host for your event source. For example: <code>"Type":"SASL_SCRAM_512_AUTH"</code>.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>BASIC_AUTH</code> – (Amazon MQ) The Secrets Manager secret that stores your broker credentials.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>BASIC_AUTH</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VPC_SUBNET</code> – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VPC_SECURITY_GROUP</code> – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SASL_SCRAM_256_AUTH</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SASL_SCRAM_512_AUTH</code> – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VIRTUAL_HOST</code> –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source.
     *   This property cannot be specified in an UpdateEventSourceMapping API call.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>CLIENT_CERTIFICATE_TLS_AUTH</code> – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM),
     *   private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SERVER_ROOT_CA_CERTIFICATE</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.
     *   </p>
     *             </li>
     *          </ul>
     */
    Type?: SourceAccessType | string;
    /**
     * @public
     * <p>The value for your chosen configuration in <code>Type</code>. For example: <code>"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"</code>.</p>
     */
    URI?: string;
}
/**
 * @public
 * @enum
 */
export declare const EventSourcePosition: {
    readonly AT_TIMESTAMP: "AT_TIMESTAMP";
    readonly LATEST: "LATEST";
    readonly TRIM_HORIZON: "TRIM_HORIZON";
};
/**
 * @public
 */
export type EventSourcePosition = (typeof EventSourcePosition)[keyof typeof EventSourcePosition];
/**
 * @public
 */
export interface CreateEventSourceMappingRequest {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the event source.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon MQ</b> – The ARN of the broker.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p>
     *             </li>
     *          </ul>
     */
    EventSourceArn?: string;
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p>
     *          <p>Default: True</p>
     */
    Enabled?: boolean;
    /**
     * @public
     * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation
     *   (6 MB).</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>DocumentDB</b> – Default 100. Max 10,000.</p>
     *             </li>
     *          </ul>
     */
    BatchSize?: number;
    /**
     * @public
     * <p>An object that defines the filter criteria that
     *     determine whether Lambda should process an event. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html">Lambda event filtering</a>.</p>
     */
    FilterCriteria?: FilterCriteria;
    /**
     * @public
     * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
     *   You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p>
     *          <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default
     *   batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it.
     *   To restore the default batching window, you must create a new event source mapping.</p>
     *          <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
     */
    MaximumBatchingWindowInSeconds?: number;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.</p>
     */
    ParallelizationFactor?: number;
    /**
     * @public
     * <p>The position in a stream from which to start reading. Required for Amazon Kinesis and
     *       Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for
     *       Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.</p>
     */
    StartingPosition?: EventSourcePosition | string;
    /**
     * @public
     * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start
     *       reading. <code>StartingPositionTimestamp</code> cannot be in the future.</p>
     */
    StartingPositionTimestamp?: Date;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) A standard Amazon SQS queue or standard Amazon SNS topic destination for discarded records.</p>
     */
    DestinationConfig?: DestinationConfig;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).</p>
     */
    MaximumRecordAgeInSeconds?: number;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.</p>
     */
    BisectBatchOnFunctionError?: boolean;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.</p>
     */
    TumblingWindowInSeconds?: number;
    /**
     * @public
     * <p>The name of the Kafka topic.</p>
     */
    Topics?: string[];
    /**
     * @public
     * <p> (MQ) The name of the Amazon MQ broker destination queue to consume. </p>
     */
    Queues?: string[];
    /**
     * @public
     * <p>An array of authentication protocols or VPC components required to secure your event source.</p>
     */
    SourceAccessConfigurations?: SourceAccessConfiguration[];
    /**
     * @public
     * <p>The self-managed Apache Kafka cluster to receive records from.</p>
     */
    SelfManagedEventSource?: SelfManagedEventSource;
    /**
     * @public
     * <p>(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.</p>
     */
    FunctionResponseTypes?: (FunctionResponseType | string)[];
    /**
     * @public
     * <p>Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.</p>
     */
    AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
    /**
     * @public
     * <p>Specific configuration settings for a self-managed Apache Kafka event source.</p>
     */
    SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
    /**
     * @public
     * <p>(Amazon SQS only) The scaling configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency">Configuring maximum concurrency for Amazon SQS event sources</a>.</p>
     */
    ScalingConfig?: ScalingConfig;
    /**
     * @public
     * <p>Specific configuration settings for a DocumentDB event source.</p>
     */
    DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
}
/**
 * @public
 * <p>A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.</p>
 */
export interface EventSourceMappingConfiguration {
    /**
     * @public
     * <p>The identifier of the event source mapping.</p>
     */
    UUID?: string;
    /**
     * @public
     * <p>The position in a stream from which to start reading. Required for Amazon Kinesis and
     *       Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for
     *       Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.</p>
     */
    StartingPosition?: EventSourcePosition | string;
    /**
     * @public
     * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start
     *       reading. <code>StartingPositionTimestamp</code> cannot be in the future.</p>
     */
    StartingPositionTimestamp?: Date;
    /**
     * @public
     * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p>
     *          <p>Default value: Varies by service. For Amazon SQS, the default is 10. For all other services, the default is 100.</p>
     *          <p>Related setting: When you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
     */
    BatchSize?: number;
    /**
     * @public
     * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
     *   You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p>
     *          <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default
     *   batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it.
     *   To restore the default batching window, you must create a new event source mapping.</p>
     *          <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
     */
    MaximumBatchingWindowInSeconds?: number;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
     */
    ParallelizationFactor?: number;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the event source.</p>
     */
    EventSourceArn?: string;
    /**
     * @public
     * <p>An object that defines the filter criteria that
     *     determine whether Lambda should process an event. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html">Lambda event filtering</a>.</p>
     */
    FilterCriteria?: FilterCriteria;
    /**
     * @public
     * <p>The ARN of the Lambda function.</p>
     */
    FunctionArn?: string;
    /**
     * @public
     * <p>The date that the event source mapping was last updated or that its state changed.</p>
     */
    LastModified?: Date;
    /**
     * @public
     * <p>The result of the last Lambda invocation of your function.</p>
     */
    LastProcessingResult?: string;
    /**
     * @public
     * <p>The state of the event source mapping. It can be one of the following: <code>Creating</code>,
     *         <code>Enabling</code>, <code>Enabled</code>, <code>Disabling</code>, <code>Disabled</code>,
     *         <code>Updating</code>, or <code>Deleting</code>.</p>
     */
    State?: string;
    /**
     * @public
     * <p>Indicates whether a user or Lambda made the last change to the event source mapping.</p>
     */
    StateTransitionReason?: string;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
     */
    DestinationConfig?: DestinationConfig;
    /**
     * @public
     * <p>The name of the Kafka topic.</p>
     */
    Topics?: string[];
    /**
     * @public
     * <p> (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.</p>
     */
    Queues?: string[];
    /**
     * @public
     * <p>An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.</p>
     */
    SourceAccessConfigurations?: SourceAccessConfiguration[];
    /**
     * @public
     * <p>The self-managed Apache Kafka cluster for your event source.</p>
     */
    SelfManagedEventSource?: SelfManagedEventSource;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is -1,
     * which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.</p>
     *          <note>
     *             <p>The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed</p>
     *          </note>
     */
    MaximumRecordAgeInSeconds?: number;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.</p>
     */
    BisectBatchOnFunctionError?: boolean;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is -1,
     * which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.</p>
     */
    TumblingWindowInSeconds?: number;
    /**
     * @public
     * <p>(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.</p>
     */
    FunctionResponseTypes?: (FunctionResponseType | string)[];
    /**
     * @public
     * <p>Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.</p>
     */
    AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
    /**
     * @public
     * <p>Specific configuration settings for a self-managed Apache Kafka event source.</p>
     */
    SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
    /**
     * @public
     * <p>(Amazon SQS only) The scaling configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency">Configuring maximum concurrency for Amazon SQS event sources</a>.</p>
     */
    ScalingConfig?: ScalingConfig;
    /**
     * @public
     * <p>Specific configuration settings for a DocumentDB event source.</p>
     */
    DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
}
/**
 * @public
 * <p>The specified code signing configuration does not exist.</p>
 */
export declare class CodeSigningConfigNotFoundException extends __BaseException {
    readonly name: "CodeSigningConfigNotFoundException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<CodeSigningConfigNotFoundException, __BaseException>);
}
/**
 * @public
 * <p>Your Amazon Web Services account has exceeded its maximum total code size. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 */
export declare class CodeStorageExceededException extends __BaseException {
    readonly name: "CodeStorageExceededException";
    readonly $fault: "client";
    /**
     * @public
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<CodeStorageExceededException, __BaseException>);
}
/**
 * @public
 * <p>The code signature failed one or more of the validation checks for signature mismatch or expiry, and the code
 *       signing policy is set to ENFORCE. Lambda blocks the deployment.</p>
 */
export declare class CodeVerificationFailedException extends __BaseException {
    readonly name: "CodeVerificationFailedException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<CodeVerificationFailedException, __BaseException>);
}
/**
 * @public
 * <p>The code for the Lambda function. You can either specify an object in Amazon S3, upload a
 *       .zip file archive deployment package directly, or specify the URI of a container image.</p>
 */
export interface FunctionCode {
    /**
     * @public
     * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for
     *   you.</p>
     */
    ZipFile?: Uint8Array;
    /**
     * @public
     * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.</p>
     */
    S3Bucket?: string;
    /**
     * @public
     * <p>The Amazon S3 key of the deployment package.</p>
     */
    S3Key?: string;
    /**
     * @public
     * <p>For versioned objects, the version of the deployment package object to use.</p>
     */
    S3ObjectVersion?: string;
    /**
     * @public
     * <p>URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the
     *         Amazon ECR registry.</p>
     */
    ImageUri?: string;
}
/**
 * @public
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for
 *       failed asynchronous invocations.</p>
 */
export interface DeadLetterConfig {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.</p>
     */
    TargetArn?: string;
}
/**
 * @public
 * <p>A function's environment variable settings. You can use environment variables to adjust your function's
 *       behavior without updating code. An environment variable is a pair of strings that are stored in a function's
 *       version-specific configuration.</p>
 */
export interface Environment {
    /**
     * @public
     * <p>Environment variable key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">Using Lambda environment variables</a>.</p>
     */
    Variables?: Record<string, string>;
}
/**
 * @public
 * <p>The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but it can be any
 *       whole number between 512 and 10,240 MB.</p>
 */
export interface EphemeralStorage {
    /**
     * @public
     * <p>The size of the function's <code>/tmp</code> directory.</p>
     */
    Size: number | undefined;
}
/**
 * @public
 * <p>Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.</p>
 */
export interface FileSystemConfig {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file
     *       system.</p>
     */
    Arn: string | undefined;
    /**
     * @public
     * <p>The path where the function can access the file system, starting with <code>/mnt/</code>.</p>
     */
    LocalMountPath: string | undefined;
}
/**
 * @public
 * <p>Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image
 *       settings</a>.</p>
 */
export interface ImageConfig {
    /**
     * @public
     * <p>Specifies the entry point to their application, which is typically the location of the runtime
     *       executable.</p>
     */
    EntryPoint?: string[];
    /**
     * @public
     * <p>Specifies parameters that you want to pass in with ENTRYPOINT.</p>
     */
    Command?: string[];
    /**
     * @public
     * <p>Specifies the working directory.</p>
     */
    WorkingDirectory?: string;
}
/**
 * @public
 * @enum
 */
export declare const PackageType: {
    readonly Image: "Image";
    readonly Zip: "Zip";
};
/**
 * @public
 */
export type PackageType = (typeof PackageType)[keyof typeof PackageType];
/**
 * @public
 * @enum
 */
export declare const Runtime: {
    readonly dotnet6: "dotnet6";
    readonly dotnetcore10: "dotnetcore1.0";
    readonly dotnetcore20: "dotnetcore2.0";
    readonly dotnetcore21: "dotnetcore2.1";
    readonly dotnetcore31: "dotnetcore3.1";
    readonly go1x: "go1.x";
    readonly java11: "java11";
    readonly java17: "java17";
    readonly java8: "java8";
    readonly java8al2: "java8.al2";
    readonly nodejs: "nodejs";
    readonly nodejs10x: "nodejs10.x";
    readonly nodejs12x: "nodejs12.x";
    readonly nodejs14x: "nodejs14.x";
    readonly nodejs16x: "nodejs16.x";
    readonly nodejs18x: "nodejs18.x";
    readonly nodejs43: "nodejs4.3";
    readonly nodejs43edge: "nodejs4.3-edge";
    readonly nodejs610: "nodejs6.10";
    readonly nodejs810: "nodejs8.10";
    readonly provided: "provided";
    readonly providedal2: "provided.al2";
    readonly python27: "python2.7";
    readonly python310: "python3.10";
    readonly python311: "python3.11";
    readonly python36: "python3.6";
    readonly python37: "python3.7";
    readonly python38: "python3.8";
    readonly python39: "python3.9";
    readonly ruby25: "ruby2.5";
    readonly ruby27: "ruby2.7";
    readonly ruby32: "ruby3.2";
};
/**
 * @public
 */
export type Runtime = (typeof Runtime)[keyof typeof Runtime];
/**
 * @public
 * @enum
 */
export declare const SnapStartApplyOn: {
    readonly None: "None";
    readonly PublishedVersions: "PublishedVersions";
};
/**
 * @public
 */
export type SnapStartApplyOn = (typeof SnapStartApplyOn)[keyof typeof SnapStartApplyOn];
/**
 * @public
 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a
 *       snapshot of the initialized execution environment when you publish a function version.</p>
 */
export interface SnapStart {
    /**
     * @public
     * <p>Set to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.</p>
     */
    ApplyOn?: SnapStartApplyOn | string;
}
/**
 * @public
 * @enum
 */
export declare const TracingMode: {
    readonly Active: "Active";
    readonly PassThrough: "PassThrough";
};
/**
 * @public
 */
export type TracingMode = (typeof TracingMode)[keyof typeof TracingMode];
/**
 * @public
 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration.
 *       To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.</p>
 */
export interface TracingConfig {
    /**
     * @public
     * <p>The tracing mode.</p>
     */
    Mode?: TracingMode | string;
}
/**
 * @public
 * <p>The VPC security groups and subnets that are attached to a Lambda function. For more information,
 *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda
 *         function to access resources in a VPC</a>.</p>
 */
export interface VpcConfig {
    /**
     * @public
     * <p>A list of VPC subnet IDs.</p>
     */
    SubnetIds?: string[];
    /**
     * @public
     * <p>A list of VPC security group IDs.</p>
     */
    SecurityGroupIds?: string[];
}
/**
 * @public
 */
export interface CreateFunctionRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p>
     *          <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
     */
    Runtime?: Runtime | string;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
     */
    Role: string | undefined;
    /**
     * @public
     * <p>The name of the method within your code that Lambda calls to run your function.
     * Handler is required if the deployment package is a .zip file archive. The format includes the
     *       file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information,
     *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.</p>
     */
    Handler?: string;
    /**
     * @public
     * <p>The code for the function.</p>
     */
    Code: FunctionCode | undefined;
    /**
     * @public
     * <p>A description of the function.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The
     *       maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.</p>
     */
    Timeout?: number;
    /**
     * @public
     * <p>The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime.
     *       Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.</p>
     */
    MemorySize?: number;
    /**
     * @public
     * <p>Set to true to publish the first version of the function during creation.</p>
     */
    Publish?: boolean;
    /**
     * @public
     * <p>For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC.
     *       When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more
     *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.</p>
     */
    VpcConfig?: VpcConfig;
    /**
     * @public
     * <p>The type of deployment package. Set to <code>Image</code> for container image and set to <code>Zip</code> for .zip file archive.</p>
     */
    PackageType?: PackageType | string;
    /**
     * @public
     * <p>A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events
     *       when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">Dead-letter queues</a>.</p>
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * @public
     * <p>Environment variables that are accessible from function code during execution.</p>
     */
    Environment?: Environment;
    /**
     * @public
     * <p>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, Lambda also uses
     * this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to
     * encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR).
     * If you don't provide a customer managed key, Lambda uses a default service key.</p>
     */
    KMSKeyArn?: string;
    /**
     * @public
     * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a>.</p>
     */
    TracingConfig?: TracingConfig;
    /**
     * @public
     * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the
     *       function.</p>
     */
    Tags?: Record<string, string>;
    /**
     * @public
     * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a>
     *       to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
     */
    Layers?: string[];
    /**
     * @public
     * <p>Connection settings for an Amazon EFS file system.</p>
     */
    FileSystemConfigs?: FileSystemConfig[];
    /**
     * @public
     * <p>Container image <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-images.html#configuration-images-settings">configuration
     *       values</a> that override the values in the container image Dockerfile.</p>
     */
    ImageConfig?: ImageConfig;
    /**
     * @public
     * <p>To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration
     * includes a set of signing profiles, which define the trusted publishers for this function.</p>
     */
    CodeSigningConfigArn?: string;
    /**
     * @public
     * <p>The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64).
     *      The default value is <code>x86_64</code>.</p>
     */
    Architectures?: (Architecture | string)[];
    /**
     * @public
     * <p>The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but can be any whole
     *       number between 512 and 10,240 MB.</p>
     */
    EphemeralStorage?: EphemeralStorage;
    /**
     * @public
     * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.</p>
     */
    SnapStart?: SnapStart;
}
/**
 * @public
 * <p>Error messages for environment variables that couldn't be applied.</p>
 */
export interface EnvironmentError {
    /**
     * @public
     * <p>The error code.</p>
     */
    ErrorCode?: string;
    /**
     * @public
     * <p>The error message.</p>
     */
    Message?: string;
}
/**
 * @public
 * <p>The results of an operation to update or read environment variables. If the operation succeeds, the response
 *       contains the environment variables. If it fails, the response contains details about the error.</p>
 */
export interface EnvironmentResponse {
    /**
     * @public
     * <p>Environment variable key-value pairs. Omitted from CloudTrail logs.</p>
     */
    Variables?: Record<string, string>;
    /**
     * @public
     * <p>Error messages for environment variables that couldn't be applied.</p>
     */
    Error?: EnvironmentError;
}
/**
 * @public
 * <p>Error response to <code>GetFunctionConfiguration</code>.</p>
 */
export interface ImageConfigError {
    /**
     * @public
     * <p>Error code.</p>
     */
    ErrorCode?: string;
    /**
     * @public
     * <p>Error message.</p>
     */
    Message?: string;
}
/**
 * @public
 * <p>Response to a <code>GetFunctionConfiguration</code> request.</p>
 */
export interface ImageConfigResponse {
    /**
     * @public
     * <p>Configuration values that override the container image Dockerfile.</p>
     */
    ImageConfig?: ImageConfig;
    /**
     * @public
     * <p>Error response to <code>GetFunctionConfiguration</code>.</p>
     */
    Error?: ImageConfigError;
}
/**
 * @public
 * @enum
 */
export declare const LastUpdateStatus: {
    readonly Failed: "Failed";
    readonly InProgress: "InProgress";
    readonly Successful: "Successful";
};
/**
 * @public
 */
export type LastUpdateStatus = (typeof LastUpdateStatus)[keyof typeof LastUpdateStatus];
/**
 * @public
 * @enum
 */
export declare const LastUpdateStatusReasonCode: {
    readonly DisabledKMSKey: "DisabledKMSKey";
    readonly EFSIOError: "EFSIOError";
    readonly EFSMountConnectivityError: "EFSMountConnectivityError";
    readonly EFSMountFailure: "EFSMountFailure";
    readonly EFSMountTimeout: "EFSMountTimeout";
    readonly EniLimitExceeded: "EniLimitExceeded";
    readonly FunctionError: "FunctionError";
    readonly ImageAccessDenied: "ImageAccessDenied";
    readonly ImageDeleted: "ImageDeleted";
    readonly InsufficientRolePermissions: "InsufficientRolePermissions";
    readonly InternalError: "InternalError";
    readonly InvalidConfiguration: "InvalidConfiguration";
    readonly InvalidImage: "InvalidImage";
    readonly InvalidRuntime: "InvalidRuntime";
    readonly InvalidSecurityGroup: "InvalidSecurityGroup";
    readonly InvalidStateKMSKey: "InvalidStateKMSKey";
    readonly InvalidSubnet: "InvalidSubnet";
    readonly InvalidZipFileException: "InvalidZipFileException";
    readonly KMSKeyAccessDenied: "KMSKeyAccessDenied";
    readonly KMSKeyNotFound: "KMSKeyNotFound";
    readonly SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses";
};
/**
 * @public
 */
export type LastUpdateStatusReasonCode = (typeof LastUpdateStatusReasonCode)[keyof typeof LastUpdateStatusReasonCode];
/**
 * @public
 * <p>An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>.</p>
 */
export interface Layer {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the function layer.</p>
     */
    Arn?: string;
    /**
     * @public
     * <p>The size of the layer archive in bytes.</p>
     */
    CodeSize?: number;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) for a signing profile version.</p>
     */
    SigningProfileVersionArn?: string;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN)  of a signing job.</p>
     */
    SigningJobArn?: string;
}
/**
 * @public
 * <p>Any error returned when the runtime version information for the function could not be retrieved.</p>
 */
export interface RuntimeVersionError {
    /**
     * @public
     * <p>The error code.</p>
     */
    ErrorCode?: string;
    /**
     * @public
     * <p>The error message.</p>
     */
    Message?: string;
}
/**
 * @public
 * <p>The ARN of the runtime and any errors that occured.</p>
 */
export interface RuntimeVersionConfig {
    /**
     * @public
     * <p>The ARN of the runtime version you want the function to use.</p>
     */
    RuntimeVersionArn?: string;
    /**
     * @public
     * <p>Error response when Lambda is unable to retrieve the runtime version for a function.</p>
     */
    Error?: RuntimeVersionError;
}
/**
 * @public
 * @enum
 */
export declare const SnapStartOptimizationStatus: {
    readonly Off: "Off";
    readonly On: "On";
};
/**
 * @public
 */
export type SnapStartOptimizationStatus = (typeof SnapStartOptimizationStatus)[keyof typeof SnapStartOptimizationStatus];
/**
 * @public
 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.</p>
 */
export interface SnapStartResponse {
    /**
     * @public
     * <p>When set to <code>PublishedVersions</code>, Lambda creates a snapshot of the execution environment when you publish a function version.</p>
     */
    ApplyOn?: SnapStartApplyOn | string;
    /**
     * @public
     * <p>When you provide a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using">qualified Amazon Resource Name (ARN)</a>, this response element indicates whether SnapStart is activated for the specified function version.</p>
     */
    OptimizationStatus?: SnapStartOptimizationStatus | string;
}
/**
 * @public
 * @enum
 */
export declare const State: {
    readonly Active: "Active";
    readonly Failed: "Failed";
    readonly Inactive: "Inactive";
    readonly Pending: "Pending";
};
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];
/**
 * @public
 * @enum
 */
export declare const StateReasonCode: {
    readonly Creating: "Creating";
    readonly DisabledKMSKey: "DisabledKMSKey";
    readonly EFSIOError: "EFSIOError";
    readonly EFSMountConnectivityError: "EFSMountConnectivityError";
    readonly EFSMountFailure: "EFSMountFailure";
    readonly EFSMountTimeout: "EFSMountTimeout";
    readonly EniLimitExceeded: "EniLimitExceeded";
    readonly FunctionError: "FunctionError";
    readonly Idle: "Idle";
    readonly ImageAccessDenied: "ImageAccessDenied";
    readonly ImageDeleted: "ImageDeleted";
    readonly InsufficientRolePermissions: "InsufficientRolePermissions";
    readonly InternalError: "InternalError";
    readonly InvalidConfiguration: "InvalidConfiguration";
    readonly InvalidImage: "InvalidImage";
    readonly InvalidRuntime: "InvalidRuntime";
    readonly InvalidSecurityGroup: "InvalidSecurityGroup";
    readonly InvalidStateKMSKey: "InvalidStateKMSKey";
    readonly InvalidSubnet: "InvalidSubnet";
    readonly InvalidZipFileException: "InvalidZipFileException";
    readonly KMSKeyAccessDenied: "KMSKeyAccessDenied";
    readonly KMSKeyNotFound: "KMSKeyNotFound";
    readonly Restoring: "Restoring";
    readonly SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses";
};
/**
 * @public
 */
export type StateReasonCode = (typeof StateReasonCode)[keyof typeof StateReasonCode];
/**
 * @public
 * <p>The function's X-Ray tracing configuration.</p>
 */
export interface TracingConfigResponse {
    /**
     * @public
     * <p>The tracing mode.</p>
     */
    Mode?: TracingMode | string;
}
/**
 * @public
 * <p>The VPC security groups and subnets that are attached to a Lambda function.</p>
 */
export interface VpcConfigResponse {
    /**
     * @public
     * <p>A list of VPC subnet IDs.</p>
     */
    SubnetIds?: string[];
    /**
     * @public
     * <p>A list of VPC security group IDs.</p>
     */
    SecurityGroupIds?: string[];
    /**
     * @public
     * <p>The ID of the VPC.</p>
     */
    VpcId?: string;
}
/**
 * @public
 * <p>Details about a function's configuration.</p>
 */
export interface FunctionConfiguration {
    /**
     * @public
     * <p>The name of the function.</p>
     */
    FunctionName?: string;
    /**
     * @public
     * <p>The function's Amazon Resource Name (ARN).</p>
     */
    FunctionArn?: string;
    /**
     * @public
     * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p>
     *          <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
     */
    Runtime?: Runtime | string;
    /**
     * @public
     * <p>The function's execution role.</p>
     */
    Role?: string;
    /**
     * @public
     * <p>The function that Lambda calls to begin running your function.</p>
     */
    Handler?: string;
    /**
     * @public
     * <p>The size of the function's deployment package, in bytes.</p>
     */
    CodeSize?: number;
    /**
     * @public
     * <p>The function's description.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>The amount of time in seconds that Lambda allows a function to run before stopping it.</p>
     */
    Timeout?: number;
    /**
     * @public
     * <p>The amount of memory available to the function at runtime.</p>
     */
    MemorySize?: number;
    /**
     * @public
     * <p>The date and time that the function was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    LastModified?: string;
    /**
     * @public
     * <p>The SHA256 hash of the function's deployment package.</p>
     */
    CodeSha256?: string;
    /**
     * @public
     * <p>The version of the Lambda function.</p>
     */
    Version?: string;
    /**
     * @public
     * <p>The function's networking configuration.</p>
     */
    VpcConfig?: VpcConfigResponse;
    /**
     * @public
     * <p>The function's dead letter queue.</p>
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * @public
     * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">environment variables</a>. Omitted from CloudTrail logs.</p>
     */
    Environment?: EnvironmentResponse;
    /**
     * @public
     * <p>The KMS key that's used to encrypt the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, this key is also used to encrypt the function's snapshot. This key is
     *       returned only if you've configured a customer managed key.</p>
     */
    KMSKeyArn?: string;
    /**
     * @public
     * <p>The function's X-Ray tracing configuration.</p>
     */
    TracingConfig?: TracingConfigResponse;
    /**
     * @public
     * <p>For Lambda@Edge functions, the ARN of the main function.</p>
     */
    MasterArn?: string;
    /**
     * @public
     * <p>The latest updated revision of the function or alias.</p>
     */
    RevisionId?: string;
    /**
     * @public
     * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">layers</a>.</p>
     */
    Layers?: Layer[];
    /**
     * @public
     * <p>The current state of the function. When the state is <code>Inactive</code>, you can reactivate the function by
     *       invoking it.</p>
     */
    State?: State | string;
    /**
     * @public
     * <p>The reason for the function's current state.</p>
     */
    StateReason?: string;
    /**
     * @public
     * <p>The reason code for the function's current state. When the code is <code>Creating</code>, you can't invoke or
     *       modify the function.</p>
     */
    StateReasonCode?: StateReasonCode | string;
    /**
     * @public
     * <p>The status of the last update that was performed on the function. This is first set to <code>Successful</code>
     *       after function creation completes.</p>
     */
    LastUpdateStatus?: LastUpdateStatus | string;
    /**
     * @public
     * <p>The reason for the last update that was performed on the function.</p>
     */
    LastUpdateStatusReason?: string;
    /**
     * @public
     * <p>The reason code for the last update that was performed on the function.</p>
     */
    LastUpdateStatusReasonCode?: LastUpdateStatusReasonCode | string;
    /**
     * @public
     * <p>Connection settings for an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.</p>
     */
    FileSystemConfigs?: FileSystemConfig[];
    /**
     * @public
     * <p>The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for .zip file archive.</p>
     */
    PackageType?: PackageType | string;
    /**
     * @public
     * <p>The function's image configuration values.</p>
     */
    ImageConfigResponse?: ImageConfigResponse;
    /**
     * @public
     * <p>The ARN of the signing profile version.</p>
     */
    SigningProfileVersionArn?: string;
    /**
     * @public
     * <p>The ARN of the signing job.</p>
     */
    SigningJobArn?: string;
    /**
     * @public
     * <p>The instruction set architecture that the function supports. Architecture is a string array with one of the
     *       valid values. The default architecture value is <code>x86_64</code>.</p>
     */
    Architectures?: (Architecture | string)[];
    /**
     * @public
     * <p>The size of the function’s <code>/tmp</code> directory in MB. The default value is 512, but it can be any
     *       whole number between 512 and 10,240 MB.</p>
     */
    EphemeralStorage?: EphemeralStorage;
    /**
     * @public
     * <p>Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution
     *       environment when you publish a function version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Improving startup performance with Lambda SnapStart</a>.</p>
     */
    SnapStart?: SnapStartResponse;
    /**
     * @public
     * <p>The ARN of the runtime and any errors that occured.</p>
     */
    RuntimeVersionConfig?: RuntimeVersionConfig;
}
/**
 * @public
 * <p>The code signature failed the integrity check. If the integrity check fails, then Lambda blocks
 *       deployment, even if the code signing policy is set to WARN.</p>
 */
export declare class InvalidCodeSignatureException extends __BaseException {
    readonly name: "InvalidCodeSignatureException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidCodeSignatureException, __BaseException>);
}
/**
 * @public
 * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing
 *         (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL
 *       from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your
 *       function URL.</p>
 */
export interface Cors {
    /**
     * @public
     * <p>Whether to allow cookies or other credentials in requests to your function URL. The default is
     *         <code>false</code>.</p>
     */
    AllowCredentials?: boolean;
    /**
     * @public
     * <p>The HTTP headers that origins can include in requests to your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>,
     *       <code>X-Custom-Header</code>.</p>
     */
    AllowHeaders?: string[];
    /**
     * @public
     * <p>The HTTP methods that are allowed when calling your function URL. For example: <code>GET</code>, <code>POST</code>, <code>DELETE</code>,
     *       or the wildcard character (<code>*</code>).</p>
     */
    AllowMethods?: string[];
    /**
     * @public
     * <p>The origins that can access your function URL. You can list any number of specific origins, separated by a comma. For example:
     *       <code>https://www.example.com</code>, <code>http://localhost:60905</code>.</p>
     *          <p>Alternatively, you can grant access to all origins using the wildcard character (<code>*</code>).</p>
     */
    AllowOrigins?: string[];
    /**
     * @public
     * <p>The HTTP headers in your function response that you want to expose to origins that call your function URL. For example:
     *       <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.</p>
     */
    ExposeHeaders?: string[];
    /**
     * @public
     * <p>The maximum amount of time, in seconds, that web browsers can cache results of a preflight request. By
     *       default, this is set to <code>0</code>, which means that the browser doesn't cache results.</p>
     */
    MaxAge?: number;
}
/**
 * @public
 * @enum
 */
export declare const InvokeMode: {
    readonly BUFFERED: "BUFFERED";
    readonly RESPONSE_STREAM: "RESPONSE_STREAM";
};
/**
 * @public
 */
export type InvokeMode = (typeof InvokeMode)[keyof typeof InvokeMode];
/**
 * @public
 */
export interface CreateFunctionUrlConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The alias name.</p>
     */
    Qualifier?: string;
    /**
     * @public
     * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated
     *   users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information,
     *   see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.</p>
     */
    AuthType: FunctionUrlAuthType | string | undefined;
    /**
     * @public
     * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings
     *   for your function URL.</p>
     */
    Cors?: Cors;
    /**
     * @public
     * <p>Use one of the following options:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results
     *         are available when the payload is complete. The maximum payload size is 6 MB.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using
     *         the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p>
     *             </li>
     *          </ul>
     */
    InvokeMode?: InvokeMode | string;
}
/**
 * @public
 */
export interface CreateFunctionUrlConfigResponse {
    /**
     * @public
     * <p>The HTTP URL endpoint for your function.</p>
     */
    FunctionUrl: string | undefined;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of your function.</p>
     */
    FunctionArn: string | undefined;
    /**
     * @public
     * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated
     *   users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information,
     *   see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.</p>
     */
    AuthType: FunctionUrlAuthType | string | undefined;
    /**
     * @public
     * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings
     *   for your function URL.</p>
     */
    Cors?: Cors;
    /**
     * @public
     * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    CreationTime: string | undefined;
    /**
     * @public
     * <p>Use one of the following options:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results
     *         are available when the payload is complete. The maximum payload size is 6 MB.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using
     *         the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p>
     *             </li>
     *          </ul>
     */
    InvokeMode?: InvokeMode | string;
}
/**
 * @public
 */
export interface DeleteAliasRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The name of the alias.</p>
     */
    Name: string | undefined;
}
/**
 * @public
 */
export interface DeleteCodeSigningConfigRequest {
    /**
     * @public
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
}
/**
 * @public
 */
export interface DeleteCodeSigningConfigResponse {
}
/**
 * @public
 */
export interface DeleteEventSourceMappingRequest {
    /**
     * @public
     * <p>The identifier of the event source mapping.</p>
     */
    UUID: string | undefined;
}
/**
 * @public
 * <p>The operation conflicts with the resource's availability. For example, you tried to update an event source
 *       mapping in the CREATING state, or you tried to delete an event source mapping currently UPDATING.</p>
 */
export declare class ResourceInUseException extends __BaseException {
    readonly name: "ResourceInUseException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>);
}
/**
 * @public
 */
export interface DeleteFunctionRequest {
    /**
     * @public
     * <p>The name of the Lambda function or version.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:1</code> (with version).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify a version to delete. You can't delete a version that an alias references.</p>
     */
    Qualifier?: string;
}
/**
 * @public
 */
export interface DeleteFunctionCodeSigningConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
/**
 * @public
 */
export interface DeleteFunctionConcurrencyRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
/**
 * @public
 */
export interface DeleteFunctionEventInvokeConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>A version number or alias name.</p>
     */
    Qualifier?: string;
}
/**
 * @public
 */
export interface DeleteFunctionUrlConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The alias name.</p>
     */
    Qualifier?: string;
}
/**
 * @public
 */
export interface DeleteLayerVersionRequest {
    /**
     * @public
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * @public
     * <p>The version number.</p>
     */
    VersionNumber: number | undefined;
}
/**
 * @public
 */
export interface DeleteProvisionedConcurrencyConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The version number or alias name.</p>
     */
    Qualifier: string | undefined;
}
/**
 * @public
 */
export interface GetAccountSettingsRequest {
}
/**
 * @public
 */
export interface GetAccountSettingsResponse {
    /**
     * @public
     * <p>Limits that are related to concurrency and code storage.</p>
     */
    AccountLimit?: AccountLimit;
    /**
     * @public
     * <p>The number of functions and amount of storage in use.</p>
     */
    AccountUsage?: AccountUsage;
}
/**
 * @public
 */
export interface GetAliasRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The name of the alias.</p>
     */
    Name: string | undefined;
}
/**
 * @public
 */
export interface GetCodeSigningConfigRequest {
    /**
     * @public
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration. </p>
     */
    CodeSigningConfigArn: string | undefined;
}
/**
 * @public
 */
export interface GetCodeSigningConfigResponse {
    /**
     * @public
     * <p>The code signing configuration</p>
     */
    CodeSigningConfig: CodeSigningConfig | undefined;
}
/**
 * @public
 */
export interface GetEventSourceMappingRequest {
    /**
     * @public
     * <p>The identifier of the event source mapping.</p>
     */
    UUID: string | undefined;
}
/**
 * @public
 */
export interface GetFunctionRequest {
    /**
     * @public
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify a version or alias to get details about a published version of the function.</p>
     */
    Qualifier?: string;
}
/**
 * @public
 * <p>Details about a function's deployment package.</p>
 */
export interface FunctionCodeLocation {
    /**
     * @public
     * <p>The service that's hosting the file.</p>
     */
    RepositoryType?: string;
    /**
     * @public
     * <p>A presigned URL that you can use to download the deployment package.</p>
     */
    Location?: string;
    /**
     * @public
     * <p>URI of a container image in the Amazon ECR registry.</p>
     */
    ImageUri?: string;
    /**
     * @public
     * <p>The resolved URI for the image.</p>
     */
    ResolvedImageUri?: string;
}
/**
 * @public
 */
export interface Concurrency {
    /**
     * @public
     * <p>The number of concurrent executions that are reserved for this function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html">Managing Lambda reserved
     *         concurrency</a>.</p>
     */
    ReservedConcurrentExecutions?: number;
}
/**
 * @public
 */
export interface GetFunctionResponse {
    /**
     * @public
     * <p>The configuration of the function or version.</p>
     */
    Configuration?: FunctionConfiguration;
    /**
     * @public
     * <p>The deployment package of the function or version.</p>
     */
    Code?: FunctionCodeLocation;
    /**
     * @public
     * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>.</p>
     */
    Tags?: Record<string, string>;
    /**
     * @public
     * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">reserved
     *         concurrency</a>.</p>
     */
    Concurrency?: Concurrency;
}
/**
 * @public
 */
export interface GetFunctionCodeSigningConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
/**
 * @public
 */
export interface GetFunctionCodeSigningConfigResponse {
    /**
     * @public
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
/**
 * @public
 */
export interface GetFunctionConcurrencyRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
/**
 * @public
 */
export interface GetFunctionConcurrencyResponse {
    /**
     * @public
     * <p>The number of simultaneous executions that are reserved for the function.</p>
     */
    ReservedConcurrentExecutions?: number;
}
/**
 * @public
 */
export interface GetFunctionConfigurationRequest {
    /**
     * @public
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify a version or alias to get details about a published version of the function.</p>
     */
    Qualifier?: string;
}
/**
 * @public
 */
export interface FunctionEventInvokeConfig {
    /**
     * @public
     * <p>The date and time that the configuration was last updated.</p>
     */
    LastModified?: Date;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the function.</p>
     */
    FunctionArn?: string;
    /**
     * @public
     * <p>The maximum number of times to retry when the function returns an error.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * @public
     * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
     */
    MaximumEventAgeInSeconds?: number;
    /**
     * @public
     * <p>A destination for events after they have been sent to a function for processing.</p>
     *          <p class="title">
     *             <b>Destinations</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Queue</b> - The ARN of a standard SQS queue.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Topic</b> - The ARN of a standard SNS topic.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
     *             </li>
     *          </ul>
     */
    DestinationConfig?: DestinationConfig;
}
/**
 * @public
 */
export interface GetFunctionEventInvokeConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>A version number or alias name.</p>
     */
    Qualifier?: string;
}
/**
 * @public
 */
export interface GetFunctionUrlConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The alias name.</p>
     */
    Qualifier?: string;
}
/**
 * @public
 */
export interface GetFunctionUrlConfigResponse {
    /**
     * @public
     * <p>The HTTP URL endpoint for your function.</p>
     */
    FunctionUrl: string | undefined;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of your function.</p>
     */
    FunctionArn: string | undefined;
    /**
     * @public
     * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated
     *   users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information,
     *   see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.</p>
     */
    AuthType: FunctionUrlAuthType | string | undefined;
    /**
     * @public
     * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings
     *   for your function URL.</p>
     */
    Cors?: Cors;
    /**
     * @public
     * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    CreationTime: string | undefined;
    /**
     * @public
     * <p>When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    LastModifiedTime: string | undefined;
    /**
     * @public
     * <p>Use one of the following options:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results
     *         are available when the payload is complete. The maximum payload size is 6 MB.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using
     *         the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p>
     *             </li>
     *          </ul>
     */
    InvokeMode?: InvokeMode | string;
}
/**
 * @public
 */
export interface GetLayerVersionRequest {
    /**
     * @public
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * @public
     * <p>The version number.</p>
     */
    VersionNumber: number | undefined;
}
/**
 * @public
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>.</p>
 */
export interface LayerVersionContentOutput {
    /**
     * @public
     * <p>A link to the layer archive in Amazon S3 that is valid for 10 minutes.</p>
     */
    Location?: string;
    /**
     * @public
     * <p>The SHA-256 hash of the layer archive.</p>
     */
    CodeSha256?: string;
    /**
     * @public
     * <p>The size of the layer archive in bytes.</p>
     */
    CodeSize?: number;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) for a signing profile version.</p>
     */
    SigningProfileVersionArn?: string;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN)  of a signing job.</p>
     */
    SigningJobArn?: string;
}
/**
 * @public
 */
export interface GetLayerVersionResponse {
    /**
     * @public
     * <p>Details about the layer version.</p>
     */
    Content?: LayerVersionContentOutput;
    /**
     * @public
     * <p>The ARN of the layer.</p>
     */
    LayerArn?: string;
    /**
     * @public
     * <p>The ARN of the layer version.</p>
     */
    LayerVersionArn?: string;
    /**
     * @public
     * <p>The description of the version.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    CreatedDate?: string;
    /**
     * @public
     * <p>The version number.</p>
     */
    Version?: number;
    /**
     * @public
     * <p>The layer's compatible runtimes.</p>
     *          <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
     */
    CompatibleRuntimes?: (Runtime | string)[];
    /**
     * @public
     * <p>The layer's software license.</p>
     */
    LicenseInfo?: string;
    /**
     * @public
     * <p>A list of compatible
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
     */
    CompatibleArchitectures?: (Architecture | string)[];
}
/**
 * @public
 */
export interface GetLayerVersionByArnRequest {
    /**
     * @public
     * <p>The ARN of the layer version.</p>
     */
    Arn: string | undefined;
}
/**
 * @public
 */
export interface GetLayerVersionPolicyRequest {
    /**
     * @public
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * @public
     * <p>The version number.</p>
     */
    VersionNumber: number | undefined;
}
/**
 * @public
 */
export interface GetLayerVersionPolicyResponse {
    /**
     * @public
     * <p>The policy document.</p>
     */
    Policy?: string;
    /**
     * @public
     * <p>A unique identifier for the current revision of the policy.</p>
     */
    RevisionId?: string;
}
/**
 * @public
 */
export interface GetPolicyRequest {
    /**
     * @public
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify a version or alias to get the policy for that resource.</p>
     */
    Qualifier?: string;
}
/**
 * @public
 */
export interface GetPolicyResponse {
    /**
     * @public
     * <p>The resource-based policy.</p>
     */
    Policy?: string;
    /**
     * @public
     * <p>A unique identifier for the current revision of the policy.</p>
     */
    RevisionId?: string;
}
/**
 * @public
 */
export interface GetProvisionedConcurrencyConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The version number or alias name.</p>
     */
    Qualifier: string | undefined;
}
/**
 * @public
 * @enum
 */
export declare const ProvisionedConcurrencyStatusEnum: {
    readonly FAILED: "FAILED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly READY: "READY";
};
/**
 * @public
 */
export type ProvisionedConcurrencyStatusEnum = (typeof ProvisionedConcurrencyStatusEnum)[keyof typeof ProvisionedConcurrencyStatusEnum];
/**
 * @public
 */
export interface GetProvisionedConcurrencyConfigResponse {
    /**
     * @public
     * <p>The amount of provisioned concurrency requested.</p>
     */
    RequestedProvisionedConcurrentExecutions?: number;
    /**
     * @public
     * <p>The amount of provisioned concurrency available.</p>
     */
    AvailableProvisionedConcurrentExecutions?: number;
    /**
     * @public
     * <p>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</p>
     */
    AllocatedProvisionedConcurrentExecutions?: number;
    /**
     * @public
     * <p>The status of the allocation process.</p>
     */
    Status?: ProvisionedConcurrencyStatusEnum | string;
    /**
     * @public
     * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
     */
    StatusReason?: string;
    /**
     * @public
     * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
     */
    LastModified?: string;
}
/**
 * @public
 * <p>The specified configuration does not exist.</p>
 */
export declare class ProvisionedConcurrencyConfigNotFoundException extends __BaseException {
    readonly name: "ProvisionedConcurrencyConfigNotFoundException";
    readonly $fault: "client";
    Type?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ProvisionedConcurrencyConfigNotFoundException, __BaseException>);
}
/**
 * @public
 */
export interface GetRuntimeManagementConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify a version of the function. This can be <code>$LATEST</code> or a published version number. If no value is specified, the configuration for the
     *     <code>$LATEST</code> version is returned.</p>
     */
    Qualifier?: string;
}
/**
 * @public
 * @enum
 */
export declare const UpdateRuntimeOn: {
    readonly Auto: "Auto";
    readonly FunctionUpdate: "FunctionUpdate";
    readonly Manual: "Manual";
};
/**
 * @public
 */
export type UpdateRuntimeOn = (typeof UpdateRuntimeOn)[keyof typeof UpdateRuntimeOn];
/**
 * @public
 */
export interface GetRuntimeManagementConfigResponse {
    /**
     * @public
     * <p>The current runtime update mode of the function.</p>
     */
    UpdateRuntimeOn?: UpdateRuntimeOn | string;
    /**
     * @public
     * <p>The ARN of the runtime the function is configured to use. If the runtime update mode is <b>Manual</b>, the ARN is returned, otherwise <code>null</code>
     *       is returned.</p>
     */
    RuntimeVersionArn?: string;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of your function.</p>
     */
    FunctionArn?: string;
}
/**
 * @public
 * <p>Need additional permissions to configure VPC settings.</p>
 */
export declare class EC2AccessDeniedException extends __BaseException {
    readonly name: "EC2AccessDeniedException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<EC2AccessDeniedException, __BaseException>);
}
/**
 * @public
 * <p>Amazon EC2 throttled Lambda during Lambda function initialization using
 *       the execution role provided for the function.</p>
 */
export declare class EC2ThrottledException extends __BaseException {
    readonly name: "EC2ThrottledException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<EC2ThrottledException, __BaseException>);
}
/**
 * @public
 * <p>Lambda received an unexpected Amazon EC2 client exception while setting up for the
 *         Lambda function.</p>
 */
export declare class EC2UnexpectedException extends __BaseException {
    readonly name: "EC2UnexpectedException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    EC2ErrorCode?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<EC2UnexpectedException, __BaseException>);
}
/**
 * @public
 * <p>An error occurred when reading from or writing to a connected file system.</p>
 */
export declare class EFSIOException extends __BaseException {
    readonly name: "EFSIOException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<EFSIOException, __BaseException>);
}
/**
 * @public
 * <p>The Lambda function couldn't make a network connection to the configured file system.</p>
 */
export declare class EFSMountConnectivityException extends __BaseException {
    readonly name: "EFSMountConnectivityException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<EFSMountConnectivityException, __BaseException>);
}
/**
 * @public
 * <p>The Lambda function couldn't mount the configured file system due to a permission or configuration
 *       issue.</p>
 */
export declare class EFSMountFailureException extends __BaseException {
    readonly name: "EFSMountFailureException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<EFSMountFailureException, __BaseException>);
}
/**
 * @public
 * <p>The Lambda function made a network connection to the configured file system, but the mount
 *       operation timed out.</p>
 */
export declare class EFSMountTimeoutException extends __BaseException {
    readonly name: "EFSMountTimeoutException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<EFSMountTimeoutException, __BaseException>);
}
/**
 * @public
 * <p>Lambda couldn't create an elastic network interface in the VPC, specified as part of Lambda function configuration, because the limit for network interfaces has been reached. For more
 *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda
 *         quotas</a>.</p>
 */
export declare class ENILimitReachedException extends __BaseException {
    readonly name: "ENILimitReachedException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ENILimitReachedException, __BaseException>);
}
/**
 * @public
 * <p>The request body could not be parsed as JSON.</p>
 */
export declare class InvalidRequestContentException extends __BaseException {
    readonly name: "InvalidRequestContentException";
    readonly $fault: "client";
    /**
     * @public
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidRequestContentException, __BaseException>);
}
/**
 * @public
 * <p>The runtime or runtime version specified is not supported.</p>
 */
export declare class InvalidRuntimeException extends __BaseException {
    readonly name: "InvalidRuntimeException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidRuntimeException, __BaseException>);
}
/**
 * @public
 * <p>The security group ID provided in the Lambda function VPC configuration is not valid.</p>
 */
export declare class InvalidSecurityGroupIDException extends __BaseException {
    readonly name: "InvalidSecurityGroupIDException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidSecurityGroupIDException, __BaseException>);
}
/**
 * @public
 * <p>The subnet ID provided in the Lambda function VPC configuration is not valid.</p>
 */
export declare class InvalidSubnetIDException extends __BaseException {
    readonly name: "InvalidSubnetIDException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidSubnetIDException, __BaseException>);
}
/**
 * @public
 * <p>Lambda could not unzip the deployment package.</p>
 */
export declare class InvalidZipFileException extends __BaseException {
    readonly name: "InvalidZipFileException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<InvalidZipFileException, __BaseException>);
}
/**
 * @public
 * @enum
 */
export declare const InvocationType: {
    readonly DryRun: "DryRun";
    readonly Event: "Event";
    readonly RequestResponse: "RequestResponse";
};
/**
 * @public
 */
export type InvocationType = (typeof InvocationType)[keyof typeof InvocationType];
/**
 * @public
 * @enum
 */
export declare const LogType: {
    readonly None: "None";
    readonly Tail: "Tail";
};
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];
/**
 * @public
 */
export interface InvocationRequest {
    /**
     * @public
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Choose from the following options.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the connection open until
     *           the function returns a response or times out. The API response includes the function response and additional
     *           data.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Event</code> – Invoke the function asynchronously. Send events that fail multiple times to the
     *           function's dead-letter queue (if one is configured). The API response only includes a status code.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>DryRun</code> – Validate parameter values and verify that the user or role has permission to invoke
     *           the function.</p>
     *             </li>
     *          </ul>
     */
    InvocationType?: InvocationType | string;
    /**
     * @public
     * <p>Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.</p>
     */
    LogType?: LogType | string;
    /**
     * @public
     * <p>Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context
     *       object.</p>
     */
    ClientContext?: string;
    /**
     * @public
     * <p>The JSON that you want to provide to your Lambda function as input.</p>
     *          <p>You can enter the JSON directly. For example, <code>--payload '\{ "key": "value" \}'</code>. You can also
     *       specify a file path. For example, <code>--payload file://payload.json</code>.</p>
     */
    Payload?: Uint8Array;
    /**
     * @public
     * <p>Specify a version or alias to invoke a published version of the function.</p>
     */
    Qualifier?: string;
}
/**
 * @public
 */
export interface InvocationResponse {
    /**
     * @public
     * <p>The HTTP status code is in the 200 range for a successful request. For the <code>RequestResponse</code>
     *       invocation type, this status code is 200. For the <code>Event</code> invocation type, this status code is 202. For
     *       the <code>DryRun</code> invocation type, the status code is 204.</p>
     */
    StatusCode?: number;
    /**
     * @public
     * <p>If present, indicates that an error occurred during function execution. Details about the error are included
     *       in the response payload.</p>
     */
    FunctionError?: string;
    /**
     * @public
     * <p>The last 4 KB of the execution log, which is base64-encoded.</p>
     */
    LogResult?: string;
    /**
     * @public
     * <p>The response from the function, or an error object.</p>
     */
    Payload?: Uint8Array;
    /**
     * @public
     * <p>The version of the function that executed. When you invoke a function with an alias, this indicates which
     *       version the alias resolved to.</p>
     */
    ExecutedVersion?: string;
}
/**
 * @public
 * <p>Lambda couldn't decrypt the environment variables because KMS access was denied.
 *       Check the Lambda function's KMS permissions.</p>
 */
export declare class KMSAccessDeniedException extends __BaseException {
    readonly name: "KMSAccessDeniedException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<KMSAccessDeniedException, __BaseException>);
}
/**
 * @public
 * <p>Lambda couldn't decrypt the environment variables because the KMS key used is
 *       disabled. Check the Lambda function's KMS key settings.</p>
 */
export declare class KMSDisabledException extends __BaseException {
    readonly name: "KMSDisabledException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<KMSDisabledException, __BaseException>);
}
/**
 * @public
 * <p>Lambda couldn't decrypt the environment variables because the state of the KMS key used is not valid for Decrypt. Check the function's KMS key settings.</p>
 */
export declare class KMSInvalidStateException extends __BaseException {
    readonly name: "KMSInvalidStateException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<KMSInvalidStateException, __BaseException>);
}
/**
 * @public
 * <p>Lambda couldn't decrypt the environment variables because the KMS key was not
 *       found. Check the function's KMS key settings.</p>
 */
export declare class KMSNotFoundException extends __BaseException {
    readonly name: "KMSNotFoundException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<KMSNotFoundException, __BaseException>);
}
/**
 * @public
 * <p>Lambda has detected your function being invoked in a recursive loop with other Amazon Web Services resources and stopped your function's invocation.</p>
 */
export declare class RecursiveInvocationException extends __BaseException {
    readonly name: "RecursiveInvocationException";
    readonly $fault: "client";
    /**
     * @public
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * @public
     * <p>The exception message.</p>
     */
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<RecursiveInvocationException, __BaseException>);
}
/**
 * @public
 * <p>The request payload exceeded the <code>Invoke</code> request body JSON input quota. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda
 *       quotas</a>.</p>
 */
export declare class RequestTooLargeException extends __BaseException {
    readonly name: "RequestTooLargeException";
    readonly $fault: "client";
    Type?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<RequestTooLargeException, __BaseException>);
}
/**
 * @public
 * <p>The function is inactive and its VPC connection is no longer available. Wait for the VPC connection to
 *       reestablish and try again.</p>
 */
export declare class ResourceNotReadyException extends __BaseException {
    readonly name: "ResourceNotReadyException";
    readonly $fault: "server";
    /**
     * @public
     * <p>The exception type.</p>
     */
    Type?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>);
}
/**
 * @public
 * <p>The <code>afterRestore()</code>
 *             <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-runtime-hooks.html">runtime hook</a> encountered an error. For more information, check the Amazon CloudWatch logs.</p>
 */
export declare class SnapStartException extends __BaseException {
    readonly name: "SnapStartException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<SnapStartException, __BaseException>);
}
/**
 * @public
 * <p>Lambda is initializing your function. You can invoke the function when the <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">function state</a> becomes <code>Active</code>.</p>
 */
export declare class SnapStartNotReadyException extends __BaseException {
    readonly name: "SnapStartNotReadyException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<SnapStartNotReadyException, __BaseException>);
}
/**
 * @public
 * <p>Lambda couldn't restore the snapshot within the timeout limit.</p>
 */
export declare class SnapStartTimeoutException extends __BaseException {
    readonly name: "SnapStartTimeoutException";
    readonly $fault: "client";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<SnapStartTimeoutException, __BaseException>);
}
/**
 * @public
 * <p>Lambda couldn't set up VPC access for the Lambda function because one or more
 *       configured subnets has no available IP addresses.</p>
 */
export declare class SubnetIPAddressLimitReachedException extends __BaseException {
    readonly name: "SubnetIPAddressLimitReachedException";
    readonly $fault: "server";
    Type?: string;
    Message?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<SubnetIPAddressLimitReachedException, __BaseException>);
}
/**
 * @public
 * <p>The content type of the <code>Invoke</code> request body is not JSON.</p>
 */
export declare class UnsupportedMediaTypeException extends __BaseException {
    readonly name: "UnsupportedMediaTypeException";
    readonly $fault: "client";
    Type?: string;
    /**
     * @internal
     */
    constructor(opts: __ExceptionOptionType<UnsupportedMediaTypeException, __BaseException>);
}
/**
 * @public
 */
export interface InvokeAsyncRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The JSON that you want to provide to your Lambda function as input.</p>
     */
    InvokeArgs: StreamingBlobTypes | undefined;
}
/**
 * @public
 * @deprecated
 *
 * <p>A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation.</p>
 */
export interface InvokeAsyncResponse {
    /**
     * @public
     * <p>The status code.</p>
     */
    Status?: number;
}
/**
 * @public
 * @enum
 */
export declare const ResponseStreamingInvocationType: {
    readonly DryRun: "DryRun";
    readonly RequestResponse: "RequestResponse";
};
/**
 * @public
 */
export type ResponseStreamingInvocationType = (typeof ResponseStreamingInvocationType)[keyof typeof ResponseStreamingInvocationType];
/**
 * @public
 */
export interface InvokeWithResponseStreamRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Use one of the following options:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the
     *           connection open until the function returns a response or times out. The API operation
     *           response includes the function response and additional data.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>DryRun</code> – Validate parameter values and verify that the IAM user or role has permission to invoke
     *           the function.</p>
     *             </li>
     *          </ul>
     */
    InvocationType?: ResponseStreamingInvocationType | string;
    /**
     * @public
     * <p>Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.</p>
     */
    LogType?: LogType | string;
    /**
     * @public
     * <p>Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context
     *       object.</p>
     */
    ClientContext?: string;
    /**
     * @public
     * <p>The alias name.</p>
     */
    Qualifier?: string;
    /**
     * @public
     * <p>The JSON that you want to provide to your Lambda function as input.</p>
     *          <p>You can enter the JSON directly. For example, <code>--payload '\{ "key": "value" \}'</code>. You can also
     *       specify a file path. For example, <code>--payload file://payload.json</code>.</p>
     */
    Payload?: Uint8Array;
}
/**
 * @public
 * <p>A response confirming that the event stream is complete.</p>
 */
export interface InvokeWithResponseStreamCompleteEvent {
    /**
     * @public
     * <p>An error code.</p>
     */
    ErrorCode?: string;
    /**
     * @public
     * <p>The details of any returned error.</p>
     */
    ErrorDetails?: string;
    /**
     * @public
     * <p>The last 4 KB of the execution log, which is base64-encoded.</p>
     */
    LogResult?: string;
}
/**
 * @public
 * <p>A chunk of the streamed response payload.</p>
 */
export interface InvokeResponseStreamUpdate {
    /**
     * @public
     * <p>Data returned by your Lambda function.</p>
     */
    Payload?: Uint8Array;
}
/**
 * @public
 * <p>An object that includes a chunk of the response payload. When the stream has ended, Lambda includes a <code>InvokeComplete</code> object.</p>
 */
export type InvokeWithResponseStreamResponseEvent = InvokeWithResponseStreamResponseEvent.InvokeCompleteMember | InvokeWithResponseStreamResponseEvent.PayloadChunkMember | InvokeWithResponseStreamResponseEvent.$UnknownMember;
/**
 * @public
 */
export declare namespace InvokeWithResponseStreamResponseEvent {
    /**
     * @public
     * <p>A chunk of the streamed response payload.</p>
     */
    interface PayloadChunkMember {
        PayloadChunk: InvokeResponseStreamUpdate;
        InvokeComplete?: never;
        $unknown?: never;
    }
    /**
     * @public
     * <p>An object that's returned when the stream has ended and all the payload chunks have been
     *       returned.</p>
     */
    interface InvokeCompleteMember {
        PayloadChunk?: never;
        InvokeComplete: InvokeWithResponseStreamCompleteEvent;
        $unknown?: never;
    }
    /**
     * @public
     */
    interface $UnknownMember {
        PayloadChunk?: never;
        InvokeComplete?: never;
        $unknown: [string, any];
    }
    interface Visitor<T> {
        PayloadChunk: (value: InvokeResponseStreamUpdate) => T;
        InvokeComplete: (value: InvokeWithResponseStreamCompleteEvent) => T;
        _: (name: string, value: any) => T;
    }
    const visit: <T>(value: InvokeWithResponseStreamResponseEvent, visitor: Visitor<T>) => T;
}
/**
 * @public
 */
export interface InvokeWithResponseStreamResponse {
    /**
     * @public
     * <p>For a successful request, the HTTP status code is in the 200 range. For the
     *         <code>RequestResponse</code> invocation type, this status code is 200. For the <code>DryRun</code>
     *       invocation type, this status code is 204.</p>
     */
    StatusCode?: number;
    /**
     * @public
     * <p>The version of the function that executed. When you invoke a function with an alias, this
     *       indicates which version the alias resolved to.</p>
     */
    ExecutedVersion?: string;
    /**
     * @public
     * <p>The stream of response payloads.</p>
     */
    EventStream?: AsyncIterable<InvokeWithResponseStreamResponseEvent>;
    /**
     * @public
     * <p>The type of data the stream is returning.</p>
     */
    ResponseStreamContentType?: string;
}
/**
 * @public
 */
export interface ListAliasesRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify a function version to only list aliases that invoke that version.</p>
     */
    FunctionVersion?: string;
    /**
     * @public
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>Limit the number of aliases returned.</p>
     */
    MaxItems?: number;
}
/**
 * @public
 */
export interface ListAliasesResponse {
    /**
     * @public
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
    /**
     * @public
     * <p>A list of aliases.</p>
     */
    Aliases?: AliasConfiguration[];
}
/**
 * @public
 */
export interface ListCodeSigningConfigsRequest {
    /**
     * @public
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>Maximum number of items to return.</p>
     */
    MaxItems?: number;
}
/**
 * @public
 */
export interface ListCodeSigningConfigsResponse {
    /**
     * @public
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
    /**
     * @public
     * <p>The code signing configurations</p>
     */
    CodeSigningConfigs?: CodeSigningConfig[];
}
/**
 * @public
 */
export interface ListEventSourceMappingsRequest {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the event source.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon MQ</b> – The ARN of the broker.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p>
     *             </li>
     *          </ul>
     */
    EventSourceArn?: string;
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
     *       characters in length.</p>
     */
    FunctionName?: string;
    /**
     * @public
     * <p>A pagination token returned by a previous call.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>The maximum number of event source mappings to return. Note that ListEventSourceMappings returns a maximum of
     *       100 items in each response, even if you set the number higher.</p>
     */
    MaxItems?: number;
}
/**
 * @public
 */
export interface ListEventSourceMappingsResponse {
    /**
     * @public
     * <p>A pagination token that's returned when the response doesn't contain all event source mappings.</p>
     */
    NextMarker?: string;
    /**
     * @public
     * <p>A list of event source mappings.</p>
     */
    EventSourceMappings?: EventSourceMappingConfiguration[];
}
/**
 * @public
 */
export interface ListFunctionEventInvokeConfigsRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>The maximum number of configurations to return.</p>
     */
    MaxItems?: number;
}
/**
 * @public
 */
export interface ListFunctionEventInvokeConfigsResponse {
    /**
     * @public
     * <p>A list of configurations.</p>
     */
    FunctionEventInvokeConfigs?: FunctionEventInvokeConfig[];
    /**
     * @public
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
}
/**
 * @public
 * @enum
 */
export declare const FunctionVersion: {
    readonly ALL: "ALL";
};
/**
 * @public
 */
export type FunctionVersion = (typeof FunctionVersion)[keyof typeof FunctionVersion];
/**
 * @public
 */
export interface ListFunctionsRequest {
    /**
     * @public
     * <p>For Lambda@Edge functions, the Amazon Web Services Region of the master function. For example,
     *         <code>us-east-1</code> filters the list of functions to include only Lambda@Edge functions replicated from a
     *       master function in US East (N. Virginia). If specified, you must set <code>FunctionVersion</code> to
     *         <code>ALL</code>.</p>
     */
    MasterRegion?: string;
    /**
     * @public
     * <p>Set to <code>ALL</code> to include entries for all published versions of each function.</p>
     */
    FunctionVersion?: FunctionVersion | string;
    /**
     * @public
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>The maximum number of functions to return in the response. Note that <code>ListFunctions</code> returns a maximum of 50 items in each response,
     *       even if you set the number higher.</p>
     */
    MaxItems?: number;
}
/**
 * @public
 * <p>A list of Lambda functions.</p>
 */
export interface ListFunctionsResponse {
    /**
     * @public
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
    /**
     * @public
     * <p>A list of Lambda functions.</p>
     */
    Functions?: FunctionConfiguration[];
}
/**
 * @public
 */
export interface ListFunctionsByCodeSigningConfigRequest {
    /**
     * @public
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * @public
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>Maximum number of items to return.</p>
     */
    MaxItems?: number;
}
/**
 * @public
 */
export interface ListFunctionsByCodeSigningConfigResponse {
    /**
     * @public
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
    /**
     * @public
     * <p>The function ARNs. </p>
     */
    FunctionArns?: string[];
}
/**
 * @public
 */
export interface ListFunctionUrlConfigsRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>The maximum number of function URLs to return in the response. Note that <code>ListFunctionUrlConfigs</code>
     *       returns a maximum of 50 items in each response, even if you set the number higher.</p>
     */
    MaxItems?: number;
}
/**
 * @public
 * <p>Details about a Lambda function URL.</p>
 */
export interface FunctionUrlConfig {
    /**
     * @public
     * <p>The HTTP URL endpoint for your function.</p>
     */
    FunctionUrl: string | undefined;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of your function.</p>
     */
    FunctionArn: string | undefined;
    /**
     * @public
     * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    CreationTime: string | undefined;
    /**
     * @public
     * <p>When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    LastModifiedTime: string | undefined;
    /**
     * @public
     * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings
     *   for your function URL.</p>
     */
    Cors?: Cors;
    /**
     * @public
     * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated
     *   users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information,
     *   see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.</p>
     */
    AuthType: FunctionUrlAuthType | string | undefined;
    /**
     * @public
     * <p>Use one of the following options:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>BUFFERED</code> – This is the default option. Lambda invokes your function
     *         using the <code>Invoke</code> API operation. Invocation results are available when the
     *         payload is complete. The maximum payload size is 6 MB.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available.
     *         Lambda invokes your function using the <code>InvokeWithResponseStream</code>
     *         API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p>
     *             </li>
     *          </ul>
     */
    InvokeMode?: InvokeMode | string;
}
/**
 * @public
 */
export interface ListFunctionUrlConfigsResponse {
    /**
     * @public
     * <p>A list of function URL configurations.</p>
     */
    FunctionUrlConfigs: FunctionUrlConfig[] | undefined;
    /**
     * @public
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
}
/**
 * @public
 */
export interface ListLayersRequest {
    /**
     * @public
     * <p>A runtime identifier. For example, <code>go1.x</code>.</p>
     *          <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
     */
    CompatibleRuntime?: Runtime | string;
    /**
     * @public
     * <p>A pagination token returned by a previous call.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>The maximum number of layers to return.</p>
     */
    MaxItems?: number;
    /**
     * @public
     * <p>The compatible
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.</p>
     */
    CompatibleArchitecture?: Architecture | string;
}
/**
 * @public
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>.</p>
 */
export interface LayerVersionsListItem {
    /**
     * @public
     * <p>The ARN of the layer version.</p>
     */
    LayerVersionArn?: string;
    /**
     * @public
     * <p>The version number.</p>
     */
    Version?: number;
    /**
     * @public
     * <p>The description of the version.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>The date that the version was created, in ISO 8601 format. For example, <code>2018-11-27T15:10:45.123+0000</code>.</p>
     */
    CreatedDate?: string;
    /**
     * @public
     * <p>The layer's compatible runtimes.</p>
     *          <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
     */
    CompatibleRuntimes?: (Runtime | string)[];
    /**
     * @public
     * <p>The layer's open-source license.</p>
     */
    LicenseInfo?: string;
    /**
     * @public
     * <p>A list of compatible
     *       <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
     */
    CompatibleArchitectures?: (Architecture | string)[];
}
/**
 * @public
 * <p>Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>.</p>
 */
export interface LayersListItem {
    /**
     * @public
     * <p>The name of the layer.</p>
     */
    LayerName?: string;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the function layer.</p>
     */
    LayerArn?: string;
    /**
     * @public
     * <p>The newest version of the layer.</p>
     */
    LatestMatchingVersion?: LayerVersionsListItem;
}
/**
 * @public
 */
export interface ListLayersResponse {
    /**
     * @public
     * <p>A pagination token returned when the response doesn't contain all layers.</p>
     */
    NextMarker?: string;
    /**
     * @public
     * <p>A list of function layers.</p>
     */
    Layers?: LayersListItem[];
}
/**
 * @public
 */
export interface ListLayerVersionsRequest {
    /**
     * @public
     * <p>A runtime identifier. For example, <code>go1.x</code>.</p>
     *          <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
     */
    CompatibleRuntime?: Runtime | string;
    /**
     * @public
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * @public
     * <p>A pagination token returned by a previous call.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>The maximum number of versions to return.</p>
     */
    MaxItems?: number;
    /**
     * @public
     * <p>The compatible
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.</p>
     */
    CompatibleArchitecture?: Architecture | string;
}
/**
 * @public
 */
export interface ListLayerVersionsResponse {
    /**
     * @public
     * <p>A pagination token returned when the response doesn't contain all versions.</p>
     */
    NextMarker?: string;
    /**
     * @public
     * <p>A list of versions.</p>
     */
    LayerVersions?: LayerVersionsListItem[];
}
/**
 * @public
 */
export interface ListProvisionedConcurrencyConfigsRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>Specify a number to limit the number of configurations returned.</p>
     */
    MaxItems?: number;
}
/**
 * @public
 * <p>Details about the provisioned concurrency configuration for a function alias or version.</p>
 */
export interface ProvisionedConcurrencyConfigListItem {
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the alias or version.</p>
     */
    FunctionArn?: string;
    /**
     * @public
     * <p>The amount of provisioned concurrency requested.</p>
     */
    RequestedProvisionedConcurrentExecutions?: number;
    /**
     * @public
     * <p>The amount of provisioned concurrency available.</p>
     */
    AvailableProvisionedConcurrentExecutions?: number;
    /**
     * @public
     * <p>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</p>
     */
    AllocatedProvisionedConcurrentExecutions?: number;
    /**
     * @public
     * <p>The status of the allocation process.</p>
     */
    Status?: ProvisionedConcurrencyStatusEnum | string;
    /**
     * @public
     * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
     */
    StatusReason?: string;
    /**
     * @public
     * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
     */
    LastModified?: string;
}
/**
 * @public
 */
export interface ListProvisionedConcurrencyConfigsResponse {
    /**
     * @public
     * <p>A list of provisioned concurrency configurations.</p>
     */
    ProvisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[];
    /**
     * @public
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
}
/**
 * @public
 */
export interface ListTagsRequest {
    /**
     * @public
     * <p>The function's Amazon Resource Name (ARN).
     *       Note: Lambda does not support adding tags to aliases or versions.</p>
     */
    Resource: string | undefined;
}
/**
 * @public
 */
export interface ListTagsResponse {
    /**
     * @public
     * <p>The function's tags.</p>
     */
    Tags?: Record<string, string>;
}
/**
 * @public
 */
export interface ListVersionsByFunctionRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
     */
    Marker?: string;
    /**
     * @public
     * <p>The maximum number of versions to return. Note that <code>ListVersionsByFunction</code> returns a maximum of 50 items in each response,
     *       even if you set the number higher.</p>
     */
    MaxItems?: number;
}
/**
 * @public
 */
export interface ListVersionsByFunctionResponse {
    /**
     * @public
     * <p>The pagination token that's included if more results are available.</p>
     */
    NextMarker?: string;
    /**
     * @public
     * <p>A list of Lambda function versions.</p>
     */
    Versions?: FunctionConfiguration[];
}
/**
 * @public
 * <p>A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>. You can specify either an Amazon S3 location,
 *       or upload a layer archive directly.</p>
 */
export interface LayerVersionContentInput {
    /**
     * @public
     * <p>The Amazon S3 bucket of the layer archive.</p>
     */
    S3Bucket?: string;
    /**
     * @public
     * <p>The Amazon S3 key of the layer archive.</p>
     */
    S3Key?: string;
    /**
     * @public
     * <p>For versioned objects, the version of the layer archive object to use.</p>
     */
    S3ObjectVersion?: string;
    /**
     * @public
     * <p>The base64-encoded contents of the layer archive. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for
     *       you.</p>
     */
    ZipFile?: Uint8Array;
}
/**
 * @public
 */
export interface PublishLayerVersionRequest {
    /**
     * @public
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * @public
     * <p>The description of the version.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>The function layer archive.</p>
     */
    Content: LayerVersionContentInput | undefined;
    /**
     * @public
     * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function
     *         runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.</p>
     *          <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
     */
    CompatibleRuntimes?: (Runtime | string)[];
    /**
     * @public
     * <p>The layer's software license. It can be any of the following:</p>
     *          <ul>
     *             <li>
     *                <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example,
     *           <code>MIT</code>.</p>
     *             </li>
     *             <li>
     *                <p>The URL of a license hosted on the internet. For example,
     *           <code>https://opensource.org/licenses/MIT</code>.</p>
     *             </li>
     *             <li>
     *                <p>The full text of the license.</p>
     *             </li>
     *          </ul>
     */
    LicenseInfo?: string;
    /**
     * @public
     * <p>A list of compatible
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
     */
    CompatibleArchitectures?: (Architecture | string)[];
}
/**
 * @public
 */
export interface PublishLayerVersionResponse {
    /**
     * @public
     * <p>Details about the layer version.</p>
     */
    Content?: LayerVersionContentOutput;
    /**
     * @public
     * <p>The ARN of the layer.</p>
     */
    LayerArn?: string;
    /**
     * @public
     * <p>The ARN of the layer version.</p>
     */
    LayerVersionArn?: string;
    /**
     * @public
     * <p>The description of the version.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    CreatedDate?: string;
    /**
     * @public
     * <p>The version number.</p>
     */
    Version?: number;
    /**
     * @public
     * <p>The layer's compatible runtimes.</p>
     *          <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
     */
    CompatibleRuntimes?: (Runtime | string)[];
    /**
     * @public
     * <p>The layer's software license.</p>
     */
    LicenseInfo?: string;
    /**
     * @public
     * <p>A list of compatible
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
     */
    CompatibleArchitectures?: (Architecture | string)[];
}
/**
 * @public
 */
export interface PublishVersionRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Only publish a version if the hash value matches the value that's specified. Use this option to avoid
     *       publishing a version if the function code has changed since you last updated it. You can get the hash for the
     *       version that you uploaded from the output of <a>UpdateFunctionCode</a>.</p>
     */
    CodeSha256?: string;
    /**
     * @public
     * <p>A description for the version to override the description in the function configuration.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid
     *       publishing a version if the function configuration has changed since you last updated it.</p>
     */
    RevisionId?: string;
}
/**
 * @public
 */
export interface PutFunctionCodeSigningConfigRequest {
    /**
     * @public
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
/**
 * @public
 */
export interface PutFunctionCodeSigningConfigResponse {
    /**
     * @public
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
}
/**
 * @public
 */
export interface PutFunctionConcurrencyRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The number of simultaneous executions to reserve for the function.</p>
     */
    ReservedConcurrentExecutions: number | undefined;
}
/**
 * @public
 */
export interface PutFunctionEventInvokeConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>A version number or alias name.</p>
     */
    Qualifier?: string;
    /**
     * @public
     * <p>The maximum number of times to retry when the function returns an error.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * @public
     * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
     */
    MaximumEventAgeInSeconds?: number;
    /**
     * @public
     * <p>A destination for events after they have been sent to a function for processing.</p>
     *          <p class="title">
     *             <b>Destinations</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Queue</b> - The ARN of a standard SQS queue.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Topic</b> - The ARN of a standard SNS topic.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
     *             </li>
     *          </ul>
     */
    DestinationConfig?: DestinationConfig;
}
/**
 * @public
 */
export interface PutProvisionedConcurrencyConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The version number or alias name.</p>
     */
    Qualifier: string | undefined;
    /**
     * @public
     * <p>The amount of provisioned concurrency to allocate for the version or alias.</p>
     */
    ProvisionedConcurrentExecutions: number | undefined;
}
/**
 * @public
 */
export interface PutProvisionedConcurrencyConfigResponse {
    /**
     * @public
     * <p>The amount of provisioned concurrency requested.</p>
     */
    RequestedProvisionedConcurrentExecutions?: number;
    /**
     * @public
     * <p>The amount of provisioned concurrency available.</p>
     */
    AvailableProvisionedConcurrentExecutions?: number;
    /**
     * @public
     * <p>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</p>
     */
    AllocatedProvisionedConcurrentExecutions?: number;
    /**
     * @public
     * <p>The status of the allocation process.</p>
     */
    Status?: ProvisionedConcurrencyStatusEnum | string;
    /**
     * @public
     * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
     */
    StatusReason?: string;
    /**
     * @public
     * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
     */
    LastModified?: string;
}
/**
 * @public
 */
export interface PutRuntimeManagementConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Specify a version of the function. This can be <code>$LATEST</code> or a published version number. If no value is specified, the configuration for the
     *       <code>$LATEST</code> version is returned.</p>
     */
    Qualifier?: string;
    /**
     * @public
     * <p>Specify the runtime update mode.</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Auto (default)</b> - Automatically update to the most recent and secure runtime version using a <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase">Two-phase runtime version rollout</a>. This is the best
     *         choice for most customers to ensure they always benefit from runtime updates.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function update</b> - Lambda updates the runtime of your function  to the most recent and secure runtime version when you update your
     *         function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and
     *         mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Manual</b> - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely.
     *         In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information,
     *         see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback">Roll back a runtime version</a>.</p>
     *             </li>
     *          </ul>
     */
    UpdateRuntimeOn: UpdateRuntimeOn | string | undefined;
    /**
     * @public
     * <p>The ARN of the runtime version you want the function to use.</p>
     *          <note>
     *             <p>This is only required if you're using the <b>Manual</b> runtime update mode.</p>
     *          </note>
     */
    RuntimeVersionArn?: string;
}
/**
 * @public
 */
export interface PutRuntimeManagementConfigResponse {
    /**
     * @public
     * <p>The runtime update mode.</p>
     */
    UpdateRuntimeOn: UpdateRuntimeOn | string | undefined;
    /**
     * @public
     * <p>The ARN of the function</p>
     */
    FunctionArn: string | undefined;
    /**
     * @public
     * <p>The ARN of the runtime the function is configured to use. If the runtime update mode is <b>manual</b>, the ARN is returned, otherwise <code>null</code>
     *       is returned.</p>
     */
    RuntimeVersionArn?: string;
}
/**
 * @public
 */
export interface RemoveLayerVersionPermissionRequest {
    /**
     * @public
     * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
     */
    LayerName: string | undefined;
    /**
     * @public
     * <p>The version number.</p>
     */
    VersionNumber: number | undefined;
    /**
     * @public
     * <p>The identifier that was specified when the statement was added.</p>
     */
    StatementId: string | undefined;
    /**
     * @public
     * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a
     *       policy that has changed since you last read it.</p>
     */
    RevisionId?: string;
}
/**
 * @public
 */
export interface RemovePermissionRequest {
    /**
     * @public
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>Statement ID of the permission to remove.</p>
     */
    StatementId: string | undefined;
    /**
     * @public
     * <p>Specify a version or alias to remove permissions from a published version of the function.</p>
     */
    Qualifier?: string;
    /**
     * @public
     * <p>Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a
     *       policy that has changed since you last read it.</p>
     */
    RevisionId?: string;
}
/**
 * @public
 */
export interface TagResourceRequest {
    /**
     * @public
     * <p>The function's Amazon Resource Name (ARN).</p>
     */
    Resource: string | undefined;
    /**
     * @public
     * <p>A list of tags to apply to the function.</p>
     */
    Tags: Record<string, string> | undefined;
}
/**
 * @public
 */
export interface UntagResourceRequest {
    /**
     * @public
     * <p>The function's Amazon Resource Name (ARN).</p>
     */
    Resource: string | undefined;
    /**
     * @public
     * <p>A list of tag keys to remove from the function.</p>
     */
    TagKeys: string[] | undefined;
}
/**
 * @public
 */
export interface UpdateAliasRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The name of the alias.</p>
     */
    Name: string | undefined;
    /**
     * @public
     * <p>The function version that the alias invokes.</p>
     */
    FunctionVersion?: string;
    /**
     * @public
     * <p>A description of the alias.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing
     *         configuration</a> of the alias.</p>
     */
    RoutingConfig?: AliasRoutingConfiguration;
    /**
     * @public
     * <p>Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying
     *       an alias that has changed since you last read it.</p>
     */
    RevisionId?: string;
}
/**
 * @public
 */
export interface UpdateCodeSigningConfigRequest {
    /**
     * @public
     * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
     */
    CodeSigningConfigArn: string | undefined;
    /**
     * @public
     * <p>Descriptive name for this code signing configuration.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>Signing profiles for this code signing configuration.</p>
     */
    AllowedPublishers?: AllowedPublishers;
    /**
     * @public
     * <p>The code signing policy.</p>
     */
    CodeSigningPolicies?: CodeSigningPolicies;
}
/**
 * @public
 */
export interface UpdateCodeSigningConfigResponse {
    /**
     * @public
     * <p>The code signing configuration</p>
     */
    CodeSigningConfig: CodeSigningConfig | undefined;
}
/**
 * @public
 */
export interface UpdateEventSourceMappingRequest {
    /**
     * @public
     * <p>The identifier of the event source mapping.</p>
     */
    UUID: string | undefined;
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
     *       characters in length.</p>
     */
    FunctionName?: string;
    /**
     * @public
     * <p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p>
     *          <p>Default: True</p>
     */
    Enabled?: boolean;
    /**
     * @public
     * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation
     *   (6 MB).</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>DocumentDB</b> – Default 100. Max 10,000.</p>
     *             </li>
     *          </ul>
     */
    BatchSize?: number;
    /**
     * @public
     * <p>An object that defines the filter criteria that
     *     determine whether Lambda should process an event. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html">Lambda event filtering</a>.</p>
     */
    FilterCriteria?: FilterCriteria;
    /**
     * @public
     * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
     *   You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p>
     *          <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default
     *   batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it.
     *   To restore the default batching window, you must create a new event source mapping.</p>
     *          <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
     */
    MaximumBatchingWindowInSeconds?: number;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) A standard Amazon SQS queue or standard Amazon SNS topic destination for discarded records.</p>
     */
    DestinationConfig?: DestinationConfig;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).</p>
     */
    MaximumRecordAgeInSeconds?: number;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.</p>
     */
    BisectBatchOnFunctionError?: boolean;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.</p>
     */
    ParallelizationFactor?: number;
    /**
     * @public
     * <p>An array of authentication protocols or VPC components required to secure your event source.</p>
     */
    SourceAccessConfigurations?: SourceAccessConfiguration[];
    /**
     * @public
     * <p>(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.</p>
     */
    TumblingWindowInSeconds?: number;
    /**
     * @public
     * <p>(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.</p>
     */
    FunctionResponseTypes?: (FunctionResponseType | string)[];
    /**
     * @public
     * <p>(Amazon SQS only) The scaling configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency">Configuring maximum concurrency for Amazon SQS event sources</a>.</p>
     */
    ScalingConfig?: ScalingConfig;
    /**
     * @public
     * <p>Specific configuration settings for a DocumentDB event source.</p>
     */
    DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
}
/**
 * @public
 */
export interface UpdateFunctionCodeRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients
     * handle the encoding for you. Use only with a function defined with a .zip file archive deployment package.</p>
     */
    ZipFile?: Uint8Array;
    /**
     * @public
     * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different
     * Amazon Web Services account. Use only with a function defined with a .zip file archive deployment package.</p>
     */
    S3Bucket?: string;
    /**
     * @public
     * <p>The Amazon S3 key of the deployment package. Use only with a function defined with a .zip file archive deployment package.</p>
     */
    S3Key?: string;
    /**
     * @public
     * <p>For versioned objects, the version of the deployment package object to use.</p>
     */
    S3ObjectVersion?: string;
    /**
     * @public
     * <p>URI of a container image in the Amazon ECR registry. Do not use for a function defined with a .zip
     *       file archive.</p>
     */
    ImageUri?: string;
    /**
     * @public
     * <p>Set to true to publish a new version of the function after updating the code. This has the same effect as
     *       calling <a>PublishVersion</a> separately.</p>
     */
    Publish?: boolean;
    /**
     * @public
     * <p>Set to true to validate the request parameters and access permissions without modifying the function
     *       code.</p>
     */
    DryRun?: boolean;
    /**
     * @public
     * <p>Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a
     *       function that has changed since you last read it.</p>
     */
    RevisionId?: string;
    /**
     * @public
     * <p>The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64).
     *      The default value is <code>x86_64</code>.</p>
     */
    Architectures?: (Architecture | string)[];
}
/**
 * @public
 */
export interface UpdateFunctionConfigurationRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
     */
    Role?: string;
    /**
     * @public
     * <p>The name of the method within your code that Lambda calls to run your function.
     * Handler is required if the deployment package is a .zip file archive. The format includes the
     *       file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information,
     *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.</p>
     */
    Handler?: string;
    /**
     * @public
     * <p>A description of the function.</p>
     */
    Description?: string;
    /**
     * @public
     * <p>The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The
     *       maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.</p>
     */
    Timeout?: number;
    /**
     * @public
     * <p>The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime.
     *       Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.</p>
     */
    MemorySize?: number;
    /**
     * @public
     * <p>For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC.
     *       When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more
     *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.</p>
     */
    VpcConfig?: VpcConfig;
    /**
     * @public
     * <p>Environment variables that are accessible from function code during execution.</p>
     */
    Environment?: Environment;
    /**
     * @public
     * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>. Runtime is required if the deployment package is a .zip file archive.</p>
     *          <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
     */
    Runtime?: Runtime | string;
    /**
     * @public
     * <p>A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events
     *       when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">Dead-letter queues</a>.</p>
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * @public
     * <p>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>. When
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> is activated, Lambda also uses
     * this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to
     * encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR).
     * If you don't provide a customer managed key, Lambda uses a default service key.</p>
     */
    KMSKeyArn?: string;
    /**
     * @public
     * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with
     * <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a>.</p>
     */
    TracingConfig?: TracingConfig;
    /**
     * @public
     * <p>Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a
     *       function that has changed since you last read it.</p>
     */
    RevisionId?: string;
    /**
     * @public
     * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a>
     *       to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
     */
    Layers?: string[];
    /**
     * @public
     * <p>Connection settings for an Amazon EFS file system.</p>
     */
    FileSystemConfigs?: FileSystemConfig[];
    /**
     * @public
     * <p>
     *             <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-parms.html">Container image configuration
     *         values</a> that override the values in the container image Docker file.</p>
     */
    ImageConfig?: ImageConfig;
    /**
     * @public
     * <p>The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but can be any whole
     *       number between 512 and 10,240 MB.</p>
     */
    EphemeralStorage?: EphemeralStorage;
    /**
     * @public
     * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.</p>
     */
    SnapStart?: SnapStart;
}
/**
 * @public
 */
export interface UpdateFunctionEventInvokeConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function, version, or alias.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
     *       If you specify only the function name, it is limited to 64 characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>A version number or alias name.</p>
     */
    Qualifier?: string;
    /**
     * @public
     * <p>The maximum number of times to retry when the function returns an error.</p>
     */
    MaximumRetryAttempts?: number;
    /**
     * @public
     * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
     */
    MaximumEventAgeInSeconds?: number;
    /**
     * @public
     * <p>A destination for events after they have been sent to a function for processing.</p>
     *          <p class="title">
     *             <b>Destinations</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Queue</b> - The ARN of a standard SQS queue.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Topic</b> - The ARN of a standard SNS topic.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
     *             </li>
     *          </ul>
     */
    DestinationConfig?: DestinationConfig;
}
/**
 * @public
 */
export interface UpdateFunctionUrlConfigRequest {
    /**
     * @public
     * <p>The name of the Lambda function.</p>
     *          <p class="title">
     *             <b>Name formats</b>
     *          </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Function name</b> – <code>my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p>
     *             </li>
     *          </ul>
     *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
     *       characters in length.</p>
     */
    FunctionName: string | undefined;
    /**
     * @public
     * <p>The alias name.</p>
     */
    Qualifier?: string;
    /**
     * @public
     * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated
     *   users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information,
     *   see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.</p>
     */
    AuthType?: FunctionUrlAuthType | string;
    /**
     * @public
     * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings
     *   for your function URL.</p>
     */
    Cors?: Cors;
    /**
     * @public
     * <p>Use one of the following options:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results
     *         are available when the payload is complete. The maximum payload size is 6 MB.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using
     *         the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p>
     *             </li>
     *          </ul>
     */
    InvokeMode?: InvokeMode | string;
}
/**
 * @public
 */
export interface UpdateFunctionUrlConfigResponse {
    /**
     * @public
     * <p>The HTTP URL endpoint for your function.</p>
     */
    FunctionUrl: string | undefined;
    /**
     * @public
     * <p>The Amazon Resource Name (ARN) of your function.</p>
     */
    FunctionArn: string | undefined;
    /**
     * @public
     * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated
     *   users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information,
     *   see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.</p>
     */
    AuthType: FunctionUrlAuthType | string | undefined;
    /**
     * @public
     * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings
     *   for your function URL.</p>
     */
    Cors?: Cors;
    /**
     * @public
     * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    CreationTime: string | undefined;
    /**
     * @public
     * <p>When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
     */
    LastModifiedTime: string | undefined;
    /**
     * @public
     * <p>Use one of the following options:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results
     *         are available when the payload is complete. The maximum payload size is 6 MB.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using
     *         the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 20 MB, however, you can <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">request a quota increase</a>.</p>
     *             </li>
     *          </ul>
     */
    InvokeMode?: InvokeMode | string;
}
/**
 * @internal
 */
export declare const FunctionCodeFilterSensitiveLog: (obj: FunctionCode) => any;
/**
 * @internal
 */
export declare const EnvironmentFilterSensitiveLog: (obj: Environment) => any;
/**
 * @internal
 */
export declare const CreateFunctionRequestFilterSensitiveLog: (obj: CreateFunctionRequest) => any;
/**
 * @internal
 */
export declare const EnvironmentErrorFilterSensitiveLog: (obj: EnvironmentError) => any;
/**
 * @internal
 */
export declare const EnvironmentResponseFilterSensitiveLog: (obj: EnvironmentResponse) => any;
/**
 * @internal
 */
export declare const ImageConfigErrorFilterSensitiveLog: (obj: ImageConfigError) => any;
/**
 * @internal
 */
export declare const ImageConfigResponseFilterSensitiveLog: (obj: ImageConfigResponse) => any;
/**
 * @internal
 */
export declare const RuntimeVersionErrorFilterSensitiveLog: (obj: RuntimeVersionError) => any;
/**
 * @internal
 */
export declare const RuntimeVersionConfigFilterSensitiveLog: (obj: RuntimeVersionConfig) => any;
/**
 * @internal
 */
export declare const FunctionConfigurationFilterSensitiveLog: (obj: FunctionConfiguration) => any;
/**
 * @internal
 */
export declare const GetFunctionResponseFilterSensitiveLog: (obj: GetFunctionResponse) => any;
/**
 * @internal
 */
export declare const InvocationRequestFilterSensitiveLog: (obj: InvocationRequest) => any;
/**
 * @internal
 */
export declare const InvocationResponseFilterSensitiveLog: (obj: InvocationResponse) => any;
/**
 * @internal
 */
export declare const InvokeAsyncRequestFilterSensitiveLog: (obj: InvokeAsyncRequest) => any;
/**
 * @internal
 */
export declare const InvokeWithResponseStreamRequestFilterSensitiveLog: (obj: InvokeWithResponseStreamRequest) => any;
/**
 * @internal
 */
export declare const InvokeResponseStreamUpdateFilterSensitiveLog: (obj: InvokeResponseStreamUpdate) => any;
/**
 * @internal
 */
export declare const InvokeWithResponseStreamResponseEventFilterSensitiveLog: (obj: InvokeWithResponseStreamResponseEvent) => any;
/**
 * @internal
 */
export declare const InvokeWithResponseStreamResponseFilterSensitiveLog: (obj: InvokeWithResponseStreamResponse) => any;
/**
 * @internal
 */
export declare const ListFunctionsResponseFilterSensitiveLog: (obj: ListFunctionsResponse) => any;
/**
 * @internal
 */
export declare const ListVersionsByFunctionResponseFilterSensitiveLog: (obj: ListVersionsByFunctionResponse) => any;
/**
 * @internal
 */
export declare const LayerVersionContentInputFilterSensitiveLog: (obj: LayerVersionContentInput) => any;
/**
 * @internal
 */
export declare const PublishLayerVersionRequestFilterSensitiveLog: (obj: PublishLayerVersionRequest) => any;
/**
 * @internal
 */
export declare const UpdateFunctionCodeRequestFilterSensitiveLog: (obj: UpdateFunctionCodeRequest) => any;
/**
 * @internal
 */
export declare const UpdateFunctionConfigurationRequestFilterSensitiveLog: (obj: UpdateFunctionConfigurationRequest) => any;
