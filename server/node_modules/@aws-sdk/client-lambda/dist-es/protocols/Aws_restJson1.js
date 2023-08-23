import { HttpRequest as __HttpRequest } from "@smithy/protocol-http";
import { _json, collectBody, decorateServiceException as __decorateServiceException, expectBoolean as __expectBoolean, expectInt32 as __expectInt32, expectLong as __expectLong, expectNonNull as __expectNonNull, expectNumber as __expectNumber, expectObject as __expectObject, expectString as __expectString, limitedParseDouble as __limitedParseDouble, map, parseEpochTimestamp as __parseEpochTimestamp, resolvedPath as __resolvedPath, serializeFloat as __serializeFloat, take, withBaseException, } from "@smithy/smithy-client";
import { LambdaServiceException as __BaseException } from "../models/LambdaServiceException";
import { CodeSigningConfigNotFoundException, CodeStorageExceededException, CodeVerificationFailedException, EC2AccessDeniedException, EC2ThrottledException, EC2UnexpectedException, EFSIOException, EFSMountConnectivityException, EFSMountFailureException, EFSMountTimeoutException, ENILimitReachedException, InvalidCodeSignatureException, InvalidParameterValueException, InvalidRequestContentException, InvalidRuntimeException, InvalidSecurityGroupIDException, InvalidSubnetIDException, InvalidZipFileException, KMSAccessDeniedException, KMSDisabledException, KMSInvalidStateException, KMSNotFoundException, PolicyLengthExceededException, PreconditionFailedException, ProvisionedConcurrencyConfigNotFoundException, RecursiveInvocationException, RequestTooLargeException, ResourceConflictException, ResourceInUseException, ResourceNotFoundException, ResourceNotReadyException, ServiceException, SnapStartException, SnapStartNotReadyException, SnapStartTimeoutException, SubnetIPAddressLimitReachedException, TooManyRequestsException, UnsupportedMediaTypeException, } from "../models/models_0";
export const se_AddLayerVersionPermissionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
    resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    resolvedPath = __resolvedPath(resolvedPath, input, "VersionNumber", () => input.VersionNumber.toString(), "{VersionNumber}", false);
    const query = map({
        RevisionId: [, input.RevisionId],
    });
    let body;
    body = JSON.stringify(take(input, {
        Action: [],
        OrganizationId: [],
        Principal: [],
        StatementId: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_AddPermissionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/policy";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify(take(input, {
        Action: [],
        EventSourceToken: [],
        FunctionUrlAuthType: [],
        Principal: [],
        PrincipalOrgID: [],
        RevisionId: [],
        SourceAccount: [],
        SourceArn: [],
        StatementId: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_CreateAliasCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/aliases";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify(take(input, {
        Description: [],
        FunctionVersion: [],
        Name: [],
        RoutingConfig: (_) => se_AliasRoutingConfiguration(_, context),
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_CreateCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-04-22/code-signing-configs";
    let body;
    body = JSON.stringify(take(input, {
        AllowedPublishers: (_) => _json(_),
        CodeSigningPolicies: (_) => _json(_),
        Description: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_CreateEventSourceMappingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings";
    let body;
    body = JSON.stringify(take(input, {
        AmazonManagedKafkaEventSourceConfig: (_) => _json(_),
        BatchSize: [],
        BisectBatchOnFunctionError: [],
        DestinationConfig: (_) => _json(_),
        DocumentDBEventSourceConfig: (_) => _json(_),
        Enabled: [],
        EventSourceArn: [],
        FilterCriteria: (_) => _json(_),
        FunctionName: [],
        FunctionResponseTypes: (_) => _json(_),
        MaximumBatchingWindowInSeconds: [],
        MaximumRecordAgeInSeconds: [],
        MaximumRetryAttempts: [],
        ParallelizationFactor: [],
        Queues: (_) => _json(_),
        ScalingConfig: (_) => _json(_),
        SelfManagedEventSource: (_) => _json(_),
        SelfManagedKafkaEventSourceConfig: (_) => _json(_),
        SourceAccessConfigurations: (_) => _json(_),
        StartingPosition: [],
        StartingPositionTimestamp: (_) => Math.round(_.getTime() / 1000),
        Topics: (_) => _json(_),
        TumblingWindowInSeconds: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_CreateFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions";
    let body;
    body = JSON.stringify(take(input, {
        Architectures: (_) => _json(_),
        Code: (_) => se_FunctionCode(_, context),
        CodeSigningConfigArn: [],
        DeadLetterConfig: (_) => _json(_),
        Description: [],
        Environment: (_) => _json(_),
        EphemeralStorage: (_) => _json(_),
        FileSystemConfigs: (_) => _json(_),
        FunctionName: [],
        Handler: [],
        ImageConfig: (_) => _json(_),
        KMSKeyArn: [],
        Layers: (_) => _json(_),
        MemorySize: [],
        PackageType: [],
        Publish: [],
        Role: [],
        Runtime: [],
        SnapStart: (_) => _json(_),
        Tags: (_) => _json(_),
        Timeout: [],
        TracingConfig: (_) => _json(_),
        VpcConfig: (_) => _json(_),
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_CreateFunctionUrlConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify(take(input, {
        AuthType: [],
        Cors: (_) => _json(_),
        InvokeMode: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_DeleteAliasCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_DeleteCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
    resolvedPath = __resolvedPath(resolvedPath, input, "CodeSigningConfigArn", () => input.CodeSigningConfigArn, "{CodeSigningConfigArn}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_DeleteEventSourceMappingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
    resolvedPath = __resolvedPath(resolvedPath, input, "UUID", () => input.UUID, "{UUID}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_DeleteFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_DeleteFunctionCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-06-30/functions/{FunctionName}/code-signing-config";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_DeleteFunctionConcurrencyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2017-10-31/functions/{FunctionName}/concurrency";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_DeleteFunctionEventInvokeConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_DeleteFunctionUrlConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_DeleteLayerVersionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
    resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    resolvedPath = __resolvedPath(resolvedPath, input, "VersionNumber", () => input.VersionNumber.toString(), "{VersionNumber}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_DeleteProvisionedConcurrencyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, __expectNonNull(input.Qualifier, `Qualifier`)],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_GetAccountSettingsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2016-08-19/account-settings";
    let body;
    body = "";
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetAliasCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
    resolvedPath = __resolvedPath(resolvedPath, input, "CodeSigningConfigArn", () => input.CodeSigningConfigArn, "{CodeSigningConfigArn}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetEventSourceMappingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
    resolvedPath = __resolvedPath(resolvedPath, input, "UUID", () => input.UUID, "{UUID}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_GetFunctionCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-06-30/functions/{FunctionName}/code-signing-config";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetFunctionConcurrencyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-30/functions/{FunctionName}/concurrency";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetFunctionConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/configuration";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_GetFunctionEventInvokeConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_GetFunctionUrlConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_GetLayerVersionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
    resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    resolvedPath = __resolvedPath(resolvedPath, input, "VersionNumber", () => input.VersionNumber.toString(), "{VersionNumber}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetLayerVersionByArnCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers";
    const query = map({
        find: [, "LayerVersion"],
        Arn: [, __expectNonNull(input.Arn, `Arn`)],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_GetLayerVersionPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
    resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    resolvedPath = __resolvedPath(resolvedPath, input, "VersionNumber", () => input.VersionNumber.toString(), "{VersionNumber}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_GetPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/policy";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_GetProvisionedConcurrencyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, __expectNonNull(input.Qualifier, `Qualifier`)],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_GetRuntimeManagementConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2021-07-20/functions/{FunctionName}/runtime-management-config";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_InvokeCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/octet-stream",
        "x-amz-invocation-type": input.InvocationType,
        "x-amz-log-type": input.LogType,
        "x-amz-client-context": input.ClientContext,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/invocations";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    if (input.Payload !== undefined) {
        body = input.Payload;
    }
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_InvokeAsyncCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/octet-stream",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2014-11-13/functions/{FunctionName}/invoke-async";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    if (input.InvokeArgs !== undefined) {
        body = input.InvokeArgs;
    }
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_InvokeWithResponseStreamCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = map({}, isSerializableHeaderValue, {
        "content-type": "application/octet-stream",
        "x-amz-invocation-type": input.InvocationType,
        "x-amz-log-type": input.LogType,
        "x-amz-client-context": input.ClientContext,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2021-11-15/functions/{FunctionName}/response-streaming-invocations";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    if (input.Payload !== undefined) {
        body = input.Payload;
    }
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListAliasesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/aliases";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        FunctionVersion: [, input.FunctionVersion],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListCodeSigningConfigsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-04-22/code-signing-configs";
    const query = map({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListEventSourceMappingsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings";
    const query = map({
        EventSourceArn: [, input.EventSourceArn],
        FunctionName: [, input.FunctionName],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListFunctionEventInvokeConfigsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-25/functions/{FunctionName}/event-invoke-config/list";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListFunctionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions";
    const query = map({
        MasterRegion: [, input.MasterRegion],
        FunctionVersion: [, input.FunctionVersion],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListFunctionsByCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions";
    resolvedPath = __resolvedPath(resolvedPath, input, "CodeSigningConfigArn", () => input.CodeSigningConfigArn, "{CodeSigningConfigArn}", false);
    const query = map({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListFunctionUrlConfigsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/urls";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListLayersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers";
    const query = map({
        CompatibleRuntime: [, input.CompatibleRuntime],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
        CompatibleArchitecture: [, input.CompatibleArchitecture],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListLayerVersionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers/{LayerName}/versions";
    resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    const query = map({
        CompatibleRuntime: [, input.CompatibleRuntime],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
        CompatibleArchitecture: [, input.CompatibleArchitecture],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListProvisionedConcurrencyConfigsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        List: [, "ALL"],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_ListTagsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
    resolvedPath = __resolvedPath(resolvedPath, input, "Resource", () => input.Resource, "{Resource}", false);
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_ListVersionsByFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/versions";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_PublishLayerVersionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers/{LayerName}/versions";
    resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    let body;
    body = JSON.stringify(take(input, {
        CompatibleArchitectures: (_) => _json(_),
        CompatibleRuntimes: (_) => _json(_),
        Content: (_) => se_LayerVersionContentInput(_, context),
        Description: [],
        LicenseInfo: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_PublishVersionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/versions";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify(take(input, {
        CodeSha256: [],
        Description: [],
        RevisionId: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_PutFunctionCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-06-30/functions/{FunctionName}/code-signing-config";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify(take(input, {
        CodeSigningConfigArn: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_PutFunctionConcurrencyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2017-10-31/functions/{FunctionName}/concurrency";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify(take(input, {
        ReservedConcurrentExecutions: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_PutFunctionEventInvokeConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify(take(input, {
        DestinationConfig: (_) => _json(_),
        MaximumEventAgeInSeconds: [],
        MaximumRetryAttempts: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_PutProvisionedConcurrencyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, __expectNonNull(input.Qualifier, `Qualifier`)],
    });
    let body;
    body = JSON.stringify(take(input, {
        ProvisionedConcurrentExecutions: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_PutRuntimeManagementConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2021-07-20/functions/{FunctionName}/runtime-management-config";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify(take(input, {
        RuntimeVersionArn: [],
        UpdateRuntimeOn: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_RemoveLayerVersionPermissionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}";
    resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    resolvedPath = __resolvedPath(resolvedPath, input, "VersionNumber", () => input.VersionNumber.toString(), "{VersionNumber}", false);
    resolvedPath = __resolvedPath(resolvedPath, input, "StatementId", () => input.StatementId, "{StatementId}", false);
    const query = map({
        RevisionId: [, input.RevisionId],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_RemovePermissionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/policy/{StatementId}";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    resolvedPath = __resolvedPath(resolvedPath, input, "StatementId", () => input.StatementId, "{StatementId}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
        RevisionId: [, input.RevisionId],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_TagResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
    resolvedPath = __resolvedPath(resolvedPath, input, "Resource", () => input.Resource, "{Resource}", false);
    let body;
    body = JSON.stringify(take(input, {
        Tags: (_) => _json(_),
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_UntagResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
    resolvedPath = __resolvedPath(resolvedPath, input, "Resource", () => input.Resource, "{Resource}", false);
    const query = map({
        tagKeys: [
            __expectNonNull(input.TagKeys, `TagKeys`) != null,
            () => (input.TagKeys || []).map((_entry) => _entry),
        ],
    });
    let body;
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_UpdateAliasCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    body = JSON.stringify(take(input, {
        Description: [],
        FunctionVersion: [],
        RevisionId: [],
        RoutingConfig: (_) => se_AliasRoutingConfiguration(_, context),
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_UpdateCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
    resolvedPath = __resolvedPath(resolvedPath, input, "CodeSigningConfigArn", () => input.CodeSigningConfigArn, "{CodeSigningConfigArn}", false);
    let body;
    body = JSON.stringify(take(input, {
        AllowedPublishers: (_) => _json(_),
        CodeSigningPolicies: (_) => _json(_),
        Description: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_UpdateEventSourceMappingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
    resolvedPath = __resolvedPath(resolvedPath, input, "UUID", () => input.UUID, "{UUID}", false);
    let body;
    body = JSON.stringify(take(input, {
        BatchSize: [],
        BisectBatchOnFunctionError: [],
        DestinationConfig: (_) => _json(_),
        DocumentDBEventSourceConfig: (_) => _json(_),
        Enabled: [],
        FilterCriteria: (_) => _json(_),
        FunctionName: [],
        FunctionResponseTypes: (_) => _json(_),
        MaximumBatchingWindowInSeconds: [],
        MaximumRecordAgeInSeconds: [],
        MaximumRetryAttempts: [],
        ParallelizationFactor: [],
        ScalingConfig: (_) => _json(_),
        SourceAccessConfigurations: (_) => _json(_),
        TumblingWindowInSeconds: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_UpdateFunctionCodeCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}/code";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify(take(input, {
        Architectures: (_) => _json(_),
        DryRun: [],
        ImageUri: [],
        Publish: [],
        RevisionId: [],
        S3Bucket: [],
        S3Key: [],
        S3ObjectVersion: [],
        ZipFile: (_) => context.base64Encoder(_),
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_UpdateFunctionConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/configuration";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify(take(input, {
        DeadLetterConfig: (_) => _json(_),
        Description: [],
        Environment: (_) => _json(_),
        EphemeralStorage: (_) => _json(_),
        FileSystemConfigs: (_) => _json(_),
        Handler: [],
        ImageConfig: (_) => _json(_),
        KMSKeyArn: [],
        Layers: (_) => _json(_),
        MemorySize: [],
        RevisionId: [],
        Role: [],
        Runtime: [],
        SnapStart: (_) => _json(_),
        Timeout: [],
        TracingConfig: (_) => _json(_),
        VpcConfig: (_) => _json(_),
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
export const se_UpdateFunctionEventInvokeConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify(take(input, {
        DestinationConfig: (_) => _json(_),
        MaximumEventAgeInSeconds: [],
        MaximumRetryAttempts: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const se_UpdateFunctionUrlConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
    resolvedPath = __resolvedPath(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = map({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify(take(input, {
        AuthType: [],
        Cors: (_) => _json(_),
        InvokeMode: [],
    }));
    return new __HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
export const de_AddLayerVersionPermissionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_AddLayerVersionPermissionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        RevisionId: __expectString,
        Statement: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_AddLayerVersionPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "PolicyLengthExceededException":
        case "com.amazonaws.lambda#PolicyLengthExceededException":
            throw await de_PolicyLengthExceededExceptionRes(parsedOutput, context);
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_AddPermissionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_AddPermissionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Statement: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_AddPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "PolicyLengthExceededException":
        case "com.amazonaws.lambda#PolicyLengthExceededException":
            throw await de_PolicyLengthExceededExceptionRes(parsedOutput, context);
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreateAliasCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateAliasCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AliasArn: __expectString,
        Description: __expectString,
        FunctionVersion: __expectString,
        Name: __expectString,
        RevisionId: __expectString,
        RoutingConfig: (_) => de_AliasRoutingConfiguration(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CreateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreateCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateCodeSigningConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        CodeSigningConfig: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CreateCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreateEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return de_CreateEventSourceMappingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AmazonManagedKafkaEventSourceConfig: _json,
        BatchSize: __expectInt32,
        BisectBatchOnFunctionError: __expectBoolean,
        DestinationConfig: _json,
        DocumentDBEventSourceConfig: _json,
        EventSourceArn: __expectString,
        FilterCriteria: _json,
        FunctionArn: __expectString,
        FunctionResponseTypes: _json,
        LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastProcessingResult: __expectString,
        MaximumBatchingWindowInSeconds: __expectInt32,
        MaximumRecordAgeInSeconds: __expectInt32,
        MaximumRetryAttempts: __expectInt32,
        ParallelizationFactor: __expectInt32,
        Queues: _json,
        ScalingConfig: _json,
        SelfManagedEventSource: _json,
        SelfManagedKafkaEventSourceConfig: _json,
        SourceAccessConfigurations: _json,
        StartingPosition: __expectString,
        StartingPositionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
        StateTransitionReason: __expectString,
        Topics: _json,
        TumblingWindowInSeconds: __expectInt32,
        UUID: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CreateEventSourceMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreateFunctionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateFunctionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Architectures: _json,
        CodeSha256: __expectString,
        CodeSize: __expectLong,
        DeadLetterConfig: _json,
        Description: __expectString,
        Environment: _json,
        EphemeralStorage: _json,
        FileSystemConfigs: _json,
        FunctionArn: __expectString,
        FunctionName: __expectString,
        Handler: __expectString,
        ImageConfigResponse: _json,
        KMSKeyArn: __expectString,
        LastModified: __expectString,
        LastUpdateStatus: __expectString,
        LastUpdateStatusReason: __expectString,
        LastUpdateStatusReasonCode: __expectString,
        Layers: _json,
        MasterArn: __expectString,
        MemorySize: __expectInt32,
        PackageType: __expectString,
        RevisionId: __expectString,
        Role: __expectString,
        Runtime: __expectString,
        RuntimeVersionConfig: _json,
        SigningJobArn: __expectString,
        SigningProfileVersionArn: __expectString,
        SnapStart: _json,
        State: __expectString,
        StateReason: __expectString,
        StateReasonCode: __expectString,
        Timeout: __expectInt32,
        TracingConfig: _json,
        Version: __expectString,
        VpcConfig: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CreateFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeSigningConfigNotFoundException":
        case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            throw await de_CodeSigningConfigNotFoundExceptionRes(parsedOutput, context);
        case "CodeStorageExceededException":
        case "com.amazonaws.lambda#CodeStorageExceededException":
            throw await de_CodeStorageExceededExceptionRes(parsedOutput, context);
        case "CodeVerificationFailedException":
        case "com.amazonaws.lambda#CodeVerificationFailedException":
            throw await de_CodeVerificationFailedExceptionRes(parsedOutput, context);
        case "InvalidCodeSignatureException":
        case "com.amazonaws.lambda#InvalidCodeSignatureException":
            throw await de_InvalidCodeSignatureExceptionRes(parsedOutput, context);
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_CreateFunctionUrlConfigCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateFunctionUrlConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AuthType: __expectString,
        Cors: _json,
        CreationTime: __expectString,
        FunctionArn: __expectString,
        FunctionUrl: __expectString,
        InvokeMode: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CreateFunctionUrlConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteAliasCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteAliasCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteCodeSigningConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return de_DeleteEventSourceMappingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AmazonManagedKafkaEventSourceConfig: _json,
        BatchSize: __expectInt32,
        BisectBatchOnFunctionError: __expectBoolean,
        DestinationConfig: _json,
        DocumentDBEventSourceConfig: _json,
        EventSourceArn: __expectString,
        FilterCriteria: _json,
        FunctionArn: __expectString,
        FunctionResponseTypes: _json,
        LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastProcessingResult: __expectString,
        MaximumBatchingWindowInSeconds: __expectInt32,
        MaximumRecordAgeInSeconds: __expectInt32,
        MaximumRetryAttempts: __expectInt32,
        ParallelizationFactor: __expectInt32,
        Queues: _json,
        ScalingConfig: _json,
        SelfManagedEventSource: _json,
        SelfManagedKafkaEventSourceConfig: _json,
        SourceAccessConfigurations: _json,
        StartingPosition: __expectString,
        StartingPositionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
        StateTransitionReason: __expectString,
        Topics: _json,
        TumblingWindowInSeconds: __expectInt32,
        UUID: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_DeleteEventSourceMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.lambda#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteFunctionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteFunctionCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionCodeSigningConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteFunctionCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeSigningConfigNotFoundException":
        case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            throw await de_CodeSigningConfigNotFoundExceptionRes(parsedOutput, context);
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteFunctionConcurrencyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionConcurrencyCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteFunctionConcurrencyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteFunctionEventInvokeConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteFunctionUrlConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionUrlConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteFunctionUrlConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteLayerVersionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteLayerVersionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteLayerVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteProvisionedConcurrencyConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteProvisionedConcurrencyConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteProvisionedConcurrencyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetAccountSettingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetAccountSettingsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AccountLimit: _json,
        AccountUsage: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetAccountSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetAliasCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AliasArn: __expectString,
        Description: __expectString,
        FunctionVersion: __expectString,
        Name: __expectString,
        RevisionId: __expectString,
        RoutingConfig: (_) => de_AliasRoutingConfiguration(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetCodeSigningConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        CodeSigningConfig: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetEventSourceMappingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AmazonManagedKafkaEventSourceConfig: _json,
        BatchSize: __expectInt32,
        BisectBatchOnFunctionError: __expectBoolean,
        DestinationConfig: _json,
        DocumentDBEventSourceConfig: _json,
        EventSourceArn: __expectString,
        FilterCriteria: _json,
        FunctionArn: __expectString,
        FunctionResponseTypes: _json,
        LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastProcessingResult: __expectString,
        MaximumBatchingWindowInSeconds: __expectInt32,
        MaximumRecordAgeInSeconds: __expectInt32,
        MaximumRetryAttempts: __expectInt32,
        ParallelizationFactor: __expectInt32,
        Queues: _json,
        ScalingConfig: _json,
        SelfManagedEventSource: _json,
        SelfManagedKafkaEventSourceConfig: _json,
        SourceAccessConfigurations: _json,
        StartingPosition: __expectString,
        StartingPositionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
        StateTransitionReason: __expectString,
        Topics: _json,
        TumblingWindowInSeconds: __expectInt32,
        UUID: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetEventSourceMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Code: _json,
        Concurrency: _json,
        Configuration: _json,
        Tags: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetFunctionCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionCodeSigningConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        CodeSigningConfigArn: __expectString,
        FunctionName: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetFunctionCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetFunctionConcurrencyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionConcurrencyCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        ReservedConcurrentExecutions: __expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetFunctionConcurrencyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetFunctionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Architectures: _json,
        CodeSha256: __expectString,
        CodeSize: __expectLong,
        DeadLetterConfig: _json,
        Description: __expectString,
        Environment: _json,
        EphemeralStorage: _json,
        FileSystemConfigs: _json,
        FunctionArn: __expectString,
        FunctionName: __expectString,
        Handler: __expectString,
        ImageConfigResponse: _json,
        KMSKeyArn: __expectString,
        LastModified: __expectString,
        LastUpdateStatus: __expectString,
        LastUpdateStatusReason: __expectString,
        LastUpdateStatusReasonCode: __expectString,
        Layers: _json,
        MasterArn: __expectString,
        MemorySize: __expectInt32,
        PackageType: __expectString,
        RevisionId: __expectString,
        Role: __expectString,
        Runtime: __expectString,
        RuntimeVersionConfig: _json,
        SigningJobArn: __expectString,
        SigningProfileVersionArn: __expectString,
        SnapStart: _json,
        State: __expectString,
        StateReason: __expectString,
        StateReasonCode: __expectString,
        Timeout: __expectInt32,
        TracingConfig: _json,
        Version: __expectString,
        VpcConfig: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetFunctionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        DestinationConfig: _json,
        FunctionArn: __expectString,
        LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        MaximumEventAgeInSeconds: __expectInt32,
        MaximumRetryAttempts: __expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetFunctionEventInvokeConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetFunctionUrlConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionUrlConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AuthType: __expectString,
        Cors: _json,
        CreationTime: __expectString,
        FunctionArn: __expectString,
        FunctionUrl: __expectString,
        InvokeMode: __expectString,
        LastModifiedTime: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetFunctionUrlConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetLayerVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetLayerVersionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        CompatibleArchitectures: _json,
        CompatibleRuntimes: _json,
        Content: _json,
        CreatedDate: __expectString,
        Description: __expectString,
        LayerArn: __expectString,
        LayerVersionArn: __expectString,
        LicenseInfo: __expectString,
        Version: __expectLong,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetLayerVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetLayerVersionByArnCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetLayerVersionByArnCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        CompatibleArchitectures: _json,
        CompatibleRuntimes: _json,
        Content: _json,
        CreatedDate: __expectString,
        Description: __expectString,
        LayerArn: __expectString,
        LayerVersionArn: __expectString,
        LicenseInfo: __expectString,
        Version: __expectLong,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetLayerVersionByArnCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetLayerVersionPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetLayerVersionPolicyCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Policy: __expectString,
        RevisionId: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetLayerVersionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPolicyCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Policy: __expectString,
        RevisionId: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetProvisionedConcurrencyConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetProvisionedConcurrencyConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AllocatedProvisionedConcurrentExecutions: __expectInt32,
        AvailableProvisionedConcurrentExecutions: __expectInt32,
        LastModified: __expectString,
        RequestedProvisionedConcurrentExecutions: __expectInt32,
        Status: __expectString,
        StatusReason: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetProvisionedConcurrencyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ProvisionedConcurrencyConfigNotFoundException":
        case "com.amazonaws.lambda#ProvisionedConcurrencyConfigNotFoundException":
            throw await de_ProvisionedConcurrencyConfigNotFoundExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_GetRuntimeManagementConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetRuntimeManagementConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        FunctionArn: __expectString,
        RuntimeVersionArn: __expectString,
        UpdateRuntimeOn: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetRuntimeManagementConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_InvokeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_InvokeCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        FunctionError: [, output.headers["x-amz-function-error"]],
        LogResult: [, output.headers["x-amz-log-result"]],
        ExecutedVersion: [, output.headers["x-amz-executed-version"]],
    });
    const data = await collectBody(output.body, context);
    contents.Payload = data;
    map(contents, {
        StatusCode: [, output.statusCode],
    });
    return contents;
};
const de_InvokeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EC2AccessDeniedException":
        case "com.amazonaws.lambda#EC2AccessDeniedException":
            throw await de_EC2AccessDeniedExceptionRes(parsedOutput, context);
        case "EC2ThrottledException":
        case "com.amazonaws.lambda#EC2ThrottledException":
            throw await de_EC2ThrottledExceptionRes(parsedOutput, context);
        case "EC2UnexpectedException":
        case "com.amazonaws.lambda#EC2UnexpectedException":
            throw await de_EC2UnexpectedExceptionRes(parsedOutput, context);
        case "EFSIOException":
        case "com.amazonaws.lambda#EFSIOException":
            throw await de_EFSIOExceptionRes(parsedOutput, context);
        case "EFSMountConnectivityException":
        case "com.amazonaws.lambda#EFSMountConnectivityException":
            throw await de_EFSMountConnectivityExceptionRes(parsedOutput, context);
        case "EFSMountFailureException":
        case "com.amazonaws.lambda#EFSMountFailureException":
            throw await de_EFSMountFailureExceptionRes(parsedOutput, context);
        case "EFSMountTimeoutException":
        case "com.amazonaws.lambda#EFSMountTimeoutException":
            throw await de_EFSMountTimeoutExceptionRes(parsedOutput, context);
        case "ENILimitReachedException":
        case "com.amazonaws.lambda#ENILimitReachedException":
            throw await de_ENILimitReachedExceptionRes(parsedOutput, context);
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "InvalidRequestContentException":
        case "com.amazonaws.lambda#InvalidRequestContentException":
            throw await de_InvalidRequestContentExceptionRes(parsedOutput, context);
        case "InvalidRuntimeException":
        case "com.amazonaws.lambda#InvalidRuntimeException":
            throw await de_InvalidRuntimeExceptionRes(parsedOutput, context);
        case "InvalidSecurityGroupIDException":
        case "com.amazonaws.lambda#InvalidSecurityGroupIDException":
            throw await de_InvalidSecurityGroupIDExceptionRes(parsedOutput, context);
        case "InvalidSubnetIDException":
        case "com.amazonaws.lambda#InvalidSubnetIDException":
            throw await de_InvalidSubnetIDExceptionRes(parsedOutput, context);
        case "InvalidZipFileException":
        case "com.amazonaws.lambda#InvalidZipFileException":
            throw await de_InvalidZipFileExceptionRes(parsedOutput, context);
        case "KMSAccessDeniedException":
        case "com.amazonaws.lambda#KMSAccessDeniedException":
            throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
        case "KMSDisabledException":
        case "com.amazonaws.lambda#KMSDisabledException":
            throw await de_KMSDisabledExceptionRes(parsedOutput, context);
        case "KMSInvalidStateException":
        case "com.amazonaws.lambda#KMSInvalidStateException":
            throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
        case "KMSNotFoundException":
        case "com.amazonaws.lambda#KMSNotFoundException":
            throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
        case "RecursiveInvocationException":
        case "com.amazonaws.lambda#RecursiveInvocationException":
            throw await de_RecursiveInvocationExceptionRes(parsedOutput, context);
        case "RequestTooLargeException":
        case "com.amazonaws.lambda#RequestTooLargeException":
            throw await de_RequestTooLargeExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ResourceNotReadyException":
        case "com.amazonaws.lambda#ResourceNotReadyException":
            throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "SnapStartException":
        case "com.amazonaws.lambda#SnapStartException":
            throw await de_SnapStartExceptionRes(parsedOutput, context);
        case "SnapStartNotReadyException":
        case "com.amazonaws.lambda#SnapStartNotReadyException":
            throw await de_SnapStartNotReadyExceptionRes(parsedOutput, context);
        case "SnapStartTimeoutException":
        case "com.amazonaws.lambda#SnapStartTimeoutException":
            throw await de_SnapStartTimeoutExceptionRes(parsedOutput, context);
        case "SubnetIPAddressLimitReachedException":
        case "com.amazonaws.lambda#SubnetIPAddressLimitReachedException":
            throw await de_SubnetIPAddressLimitReachedExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnsupportedMediaTypeException":
        case "com.amazonaws.lambda#UnsupportedMediaTypeException":
            throw await de_UnsupportedMediaTypeExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_InvokeAsyncCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return de_InvokeAsyncCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    map(contents, {
        Status: [, output.statusCode],
    });
    await collectBody(output.body, context);
    return contents;
};
const de_InvokeAsyncCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestContentException":
        case "com.amazonaws.lambda#InvalidRequestContentException":
            throw await de_InvalidRequestContentExceptionRes(parsedOutput, context);
        case "InvalidRuntimeException":
        case "com.amazonaws.lambda#InvalidRuntimeException":
            throw await de_InvalidRuntimeExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_InvokeWithResponseStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_InvokeWithResponseStreamCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
        ExecutedVersion: [, output.headers["x-amz-executed-version"]],
        ResponseStreamContentType: [, output.headers["content-type"]],
    });
    const data = output.body;
    contents.EventStream = de_InvokeWithResponseStreamResponseEvent(data, context);
    map(contents, {
        StatusCode: [, output.statusCode],
    });
    return contents;
};
const de_InvokeWithResponseStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EC2AccessDeniedException":
        case "com.amazonaws.lambda#EC2AccessDeniedException":
            throw await de_EC2AccessDeniedExceptionRes(parsedOutput, context);
        case "EC2ThrottledException":
        case "com.amazonaws.lambda#EC2ThrottledException":
            throw await de_EC2ThrottledExceptionRes(parsedOutput, context);
        case "EC2UnexpectedException":
        case "com.amazonaws.lambda#EC2UnexpectedException":
            throw await de_EC2UnexpectedExceptionRes(parsedOutput, context);
        case "EFSIOException":
        case "com.amazonaws.lambda#EFSIOException":
            throw await de_EFSIOExceptionRes(parsedOutput, context);
        case "EFSMountConnectivityException":
        case "com.amazonaws.lambda#EFSMountConnectivityException":
            throw await de_EFSMountConnectivityExceptionRes(parsedOutput, context);
        case "EFSMountFailureException":
        case "com.amazonaws.lambda#EFSMountFailureException":
            throw await de_EFSMountFailureExceptionRes(parsedOutput, context);
        case "EFSMountTimeoutException":
        case "com.amazonaws.lambda#EFSMountTimeoutException":
            throw await de_EFSMountTimeoutExceptionRes(parsedOutput, context);
        case "ENILimitReachedException":
        case "com.amazonaws.lambda#ENILimitReachedException":
            throw await de_ENILimitReachedExceptionRes(parsedOutput, context);
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "InvalidRequestContentException":
        case "com.amazonaws.lambda#InvalidRequestContentException":
            throw await de_InvalidRequestContentExceptionRes(parsedOutput, context);
        case "InvalidRuntimeException":
        case "com.amazonaws.lambda#InvalidRuntimeException":
            throw await de_InvalidRuntimeExceptionRes(parsedOutput, context);
        case "InvalidSecurityGroupIDException":
        case "com.amazonaws.lambda#InvalidSecurityGroupIDException":
            throw await de_InvalidSecurityGroupIDExceptionRes(parsedOutput, context);
        case "InvalidSubnetIDException":
        case "com.amazonaws.lambda#InvalidSubnetIDException":
            throw await de_InvalidSubnetIDExceptionRes(parsedOutput, context);
        case "InvalidZipFileException":
        case "com.amazonaws.lambda#InvalidZipFileException":
            throw await de_InvalidZipFileExceptionRes(parsedOutput, context);
        case "KMSAccessDeniedException":
        case "com.amazonaws.lambda#KMSAccessDeniedException":
            throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
        case "KMSDisabledException":
        case "com.amazonaws.lambda#KMSDisabledException":
            throw await de_KMSDisabledExceptionRes(parsedOutput, context);
        case "KMSInvalidStateException":
        case "com.amazonaws.lambda#KMSInvalidStateException":
            throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
        case "KMSNotFoundException":
        case "com.amazonaws.lambda#KMSNotFoundException":
            throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
        case "RecursiveInvocationException":
        case "com.amazonaws.lambda#RecursiveInvocationException":
            throw await de_RecursiveInvocationExceptionRes(parsedOutput, context);
        case "RequestTooLargeException":
        case "com.amazonaws.lambda#RequestTooLargeException":
            throw await de_RequestTooLargeExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ResourceNotReadyException":
        case "com.amazonaws.lambda#ResourceNotReadyException":
            throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "SnapStartException":
        case "com.amazonaws.lambda#SnapStartException":
            throw await de_SnapStartExceptionRes(parsedOutput, context);
        case "SnapStartNotReadyException":
        case "com.amazonaws.lambda#SnapStartNotReadyException":
            throw await de_SnapStartNotReadyExceptionRes(parsedOutput, context);
        case "SnapStartTimeoutException":
        case "com.amazonaws.lambda#SnapStartTimeoutException":
            throw await de_SnapStartTimeoutExceptionRes(parsedOutput, context);
        case "SubnetIPAddressLimitReachedException":
        case "com.amazonaws.lambda#SubnetIPAddressLimitReachedException":
            throw await de_SubnetIPAddressLimitReachedExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnsupportedMediaTypeException":
        case "com.amazonaws.lambda#UnsupportedMediaTypeException":
            throw await de_UnsupportedMediaTypeExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListAliasesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListAliasesCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Aliases: (_) => de_AliasList(_, context),
        NextMarker: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListCodeSigningConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListCodeSigningConfigsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        CodeSigningConfigs: _json,
        NextMarker: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListCodeSigningConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListEventSourceMappingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListEventSourceMappingsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        EventSourceMappings: (_) => de_EventSourceMappingsList(_, context),
        NextMarker: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListEventSourceMappingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListFunctionEventInvokeConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFunctionEventInvokeConfigsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        FunctionEventInvokeConfigs: (_) => de_FunctionEventInvokeConfigList(_, context),
        NextMarker: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListFunctionEventInvokeConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListFunctionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFunctionsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Functions: _json,
        NextMarker: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListFunctionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListFunctionsByCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFunctionsByCodeSigningConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        FunctionArns: _json,
        NextMarker: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListFunctionsByCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListFunctionUrlConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFunctionUrlConfigsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        FunctionUrlConfigs: _json,
        NextMarker: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListFunctionUrlConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListLayersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListLayersCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Layers: _json,
        NextMarker: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListLayersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListLayerVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListLayerVersionsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        LayerVersions: _json,
        NextMarker: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListLayerVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListProvisionedConcurrencyConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListProvisionedConcurrencyConfigsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        NextMarker: __expectString,
        ProvisionedConcurrencyConfigs: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListProvisionedConcurrencyConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListTagsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListTagsCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Tags: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListVersionsByFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListVersionsByFunctionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        NextMarker: __expectString,
        Versions: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListVersionsByFunctionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PublishLayerVersionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_PublishLayerVersionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        CompatibleArchitectures: _json,
        CompatibleRuntimes: _json,
        Content: _json,
        CreatedDate: __expectString,
        Description: __expectString,
        LayerArn: __expectString,
        LayerVersionArn: __expectString,
        LicenseInfo: __expectString,
        Version: __expectLong,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_PublishLayerVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeStorageExceededException":
        case "com.amazonaws.lambda#CodeStorageExceededException":
            throw await de_CodeStorageExceededExceptionRes(parsedOutput, context);
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PublishVersionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_PublishVersionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Architectures: _json,
        CodeSha256: __expectString,
        CodeSize: __expectLong,
        DeadLetterConfig: _json,
        Description: __expectString,
        Environment: _json,
        EphemeralStorage: _json,
        FileSystemConfigs: _json,
        FunctionArn: __expectString,
        FunctionName: __expectString,
        Handler: __expectString,
        ImageConfigResponse: _json,
        KMSKeyArn: __expectString,
        LastModified: __expectString,
        LastUpdateStatus: __expectString,
        LastUpdateStatusReason: __expectString,
        LastUpdateStatusReasonCode: __expectString,
        Layers: _json,
        MasterArn: __expectString,
        MemorySize: __expectInt32,
        PackageType: __expectString,
        RevisionId: __expectString,
        Role: __expectString,
        Runtime: __expectString,
        RuntimeVersionConfig: _json,
        SigningJobArn: __expectString,
        SigningProfileVersionArn: __expectString,
        SnapStart: _json,
        State: __expectString,
        StateReason: __expectString,
        StateReasonCode: __expectString,
        Timeout: __expectInt32,
        TracingConfig: _json,
        Version: __expectString,
        VpcConfig: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_PublishVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeStorageExceededException":
        case "com.amazonaws.lambda#CodeStorageExceededException":
            throw await de_CodeStorageExceededExceptionRes(parsedOutput, context);
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutFunctionCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutFunctionCodeSigningConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        CodeSigningConfigArn: __expectString,
        FunctionName: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_PutFunctionCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeSigningConfigNotFoundException":
        case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            throw await de_CodeSigningConfigNotFoundExceptionRes(parsedOutput, context);
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutFunctionConcurrencyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutFunctionConcurrencyCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        ReservedConcurrentExecutions: __expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_PutFunctionConcurrencyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        DestinationConfig: _json,
        FunctionArn: __expectString,
        LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        MaximumEventAgeInSeconds: __expectInt32,
        MaximumRetryAttempts: __expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_PutFunctionEventInvokeConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutProvisionedConcurrencyConfigCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return de_PutProvisionedConcurrencyConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AllocatedProvisionedConcurrentExecutions: __expectInt32,
        AvailableProvisionedConcurrentExecutions: __expectInt32,
        LastModified: __expectString,
        RequestedProvisionedConcurrentExecutions: __expectInt32,
        Status: __expectString,
        StatusReason: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_PutProvisionedConcurrencyConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutRuntimeManagementConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutRuntimeManagementConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        FunctionArn: __expectString,
        RuntimeVersionArn: __expectString,
        UpdateRuntimeOn: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_PutRuntimeManagementConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_RemoveLayerVersionPermissionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_RemoveLayerVersionPermissionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_RemoveLayerVersionPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_RemovePermissionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_RemovePermissionCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_RemovePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_TagResourceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_UntagResourceCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateAliasCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AliasArn: __expectString,
        Description: __expectString,
        FunctionVersion: __expectString,
        Name: __expectString,
        RevisionId: __expectString,
        RoutingConfig: (_) => de_AliasRoutingConfiguration(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
const de_UpdateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateCodeSigningConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        CodeSigningConfig: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_UpdateCodeSigningConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return de_UpdateEventSourceMappingCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AmazonManagedKafkaEventSourceConfig: _json,
        BatchSize: __expectInt32,
        BisectBatchOnFunctionError: __expectBoolean,
        DestinationConfig: _json,
        DocumentDBEventSourceConfig: _json,
        EventSourceArn: __expectString,
        FilterCriteria: _json,
        FunctionArn: __expectString,
        FunctionResponseTypes: _json,
        LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastProcessingResult: __expectString,
        MaximumBatchingWindowInSeconds: __expectInt32,
        MaximumRecordAgeInSeconds: __expectInt32,
        MaximumRetryAttempts: __expectInt32,
        ParallelizationFactor: __expectInt32,
        Queues: _json,
        ScalingConfig: _json,
        SelfManagedEventSource: _json,
        SelfManagedKafkaEventSourceConfig: _json,
        SourceAccessConfigurations: _json,
        StartingPosition: __expectString,
        StartingPositionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
        StateTransitionReason: __expectString,
        Topics: _json,
        TumblingWindowInSeconds: __expectInt32,
        UUID: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_UpdateEventSourceMappingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.lambda#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateFunctionCodeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFunctionCodeCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Architectures: _json,
        CodeSha256: __expectString,
        CodeSize: __expectLong,
        DeadLetterConfig: _json,
        Description: __expectString,
        Environment: _json,
        EphemeralStorage: _json,
        FileSystemConfigs: _json,
        FunctionArn: __expectString,
        FunctionName: __expectString,
        Handler: __expectString,
        ImageConfigResponse: _json,
        KMSKeyArn: __expectString,
        LastModified: __expectString,
        LastUpdateStatus: __expectString,
        LastUpdateStatusReason: __expectString,
        LastUpdateStatusReasonCode: __expectString,
        Layers: _json,
        MasterArn: __expectString,
        MemorySize: __expectInt32,
        PackageType: __expectString,
        RevisionId: __expectString,
        Role: __expectString,
        Runtime: __expectString,
        RuntimeVersionConfig: _json,
        SigningJobArn: __expectString,
        SigningProfileVersionArn: __expectString,
        SnapStart: _json,
        State: __expectString,
        StateReason: __expectString,
        StateReasonCode: __expectString,
        Timeout: __expectInt32,
        TracingConfig: _json,
        Version: __expectString,
        VpcConfig: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_UpdateFunctionCodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeSigningConfigNotFoundException":
        case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            throw await de_CodeSigningConfigNotFoundExceptionRes(parsedOutput, context);
        case "CodeStorageExceededException":
        case "com.amazonaws.lambda#CodeStorageExceededException":
            throw await de_CodeStorageExceededExceptionRes(parsedOutput, context);
        case "CodeVerificationFailedException":
        case "com.amazonaws.lambda#CodeVerificationFailedException":
            throw await de_CodeVerificationFailedExceptionRes(parsedOutput, context);
        case "InvalidCodeSignatureException":
        case "com.amazonaws.lambda#InvalidCodeSignatureException":
            throw await de_InvalidCodeSignatureExceptionRes(parsedOutput, context);
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateFunctionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFunctionConfigurationCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        Architectures: _json,
        CodeSha256: __expectString,
        CodeSize: __expectLong,
        DeadLetterConfig: _json,
        Description: __expectString,
        Environment: _json,
        EphemeralStorage: _json,
        FileSystemConfigs: _json,
        FunctionArn: __expectString,
        FunctionName: __expectString,
        Handler: __expectString,
        ImageConfigResponse: _json,
        KMSKeyArn: __expectString,
        LastModified: __expectString,
        LastUpdateStatus: __expectString,
        LastUpdateStatusReason: __expectString,
        LastUpdateStatusReasonCode: __expectString,
        Layers: _json,
        MasterArn: __expectString,
        MemorySize: __expectInt32,
        PackageType: __expectString,
        RevisionId: __expectString,
        Role: __expectString,
        Runtime: __expectString,
        RuntimeVersionConfig: _json,
        SigningJobArn: __expectString,
        SigningProfileVersionArn: __expectString,
        SnapStart: _json,
        State: __expectString,
        StateReason: __expectString,
        StateReasonCode: __expectString,
        Timeout: __expectInt32,
        TracingConfig: _json,
        Version: __expectString,
        VpcConfig: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_UpdateFunctionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CodeSigningConfigNotFoundException":
        case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
            throw await de_CodeSigningConfigNotFoundExceptionRes(parsedOutput, context);
        case "CodeVerificationFailedException":
        case "com.amazonaws.lambda#CodeVerificationFailedException":
            throw await de_CodeVerificationFailedExceptionRes(parsedOutput, context);
        case "InvalidCodeSignatureException":
        case "com.amazonaws.lambda#InvalidCodeSignatureException":
            throw await de_InvalidCodeSignatureExceptionRes(parsedOutput, context);
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "PreconditionFailedException":
        case "com.amazonaws.lambda#PreconditionFailedException":
            throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        DestinationConfig: _json,
        FunctionArn: __expectString,
        LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        MaximumEventAgeInSeconds: __expectInt32,
        MaximumRetryAttempts: __expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_UpdateFunctionEventInvokeConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateFunctionUrlConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFunctionUrlConfigCommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        AuthType: __expectString,
        Cors: _json,
        CreationTime: __expectString,
        FunctionArn: __expectString,
        FunctionUrl: __expectString,
        InvokeMode: __expectString,
        LastModifiedTime: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_UpdateFunctionUrlConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.lambda#InvalidParameterValueException":
            throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.lambda#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.lambda#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceException":
        case "com.amazonaws.lambda#ServiceException":
            throw await de_ServiceExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.lambda#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError = withBaseException(__BaseException);
const de_CodeSigningConfigNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new CodeSigningConfigNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_CodeStorageExceededExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new CodeStorageExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_CodeVerificationFailedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new CodeVerificationFailedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_EC2AccessDeniedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new EC2AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_EC2ThrottledExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new EC2ThrottledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_EC2UnexpectedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        EC2ErrorCode: __expectString,
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new EC2UnexpectedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_EFSIOExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new EFSIOException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_EFSMountConnectivityExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new EFSMountConnectivityException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_EFSMountFailureExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new EFSMountFailureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_EFSMountTimeoutExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new EFSMountTimeoutException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_ENILimitReachedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new ENILimitReachedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidCodeSignatureExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidCodeSignatureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidParameterValueExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidParameterValueException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidRequestContentExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidRequestContentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidRuntimeExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidRuntimeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidSecurityGroupIDExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidSecurityGroupIDException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidSubnetIDExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidSubnetIDException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvalidZipFileExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new InvalidZipFileException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_KMSAccessDeniedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new KMSAccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_KMSDisabledExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new KMSDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_KMSInvalidStateExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new KMSInvalidStateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_KMSNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new KMSNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_PolicyLengthExceededExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new PolicyLengthExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_PreconditionFailedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new PreconditionFailedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_ProvisionedConcurrencyConfigNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new ProvisionedConcurrencyConfigNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_RecursiveInvocationExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new RecursiveInvocationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_RequestTooLargeExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new RequestTooLargeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_ResourceConflictExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new ResourceConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new ResourceInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_ResourceNotReadyExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new ResourceNotReadyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_ServiceExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new ServiceException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_SnapStartExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new SnapStartException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_SnapStartNotReadyExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new SnapStartNotReadyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_SnapStartTimeoutExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new SnapStartTimeoutException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_SubnetIPAddressLimitReachedExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Message: __expectString,
        Type: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new SubnetIPAddressLimitReachedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const contents = map({
        retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
    });
    const data = parsedOutput.body;
    const doc = take(data, {
        Reason: __expectString,
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_UnsupportedMediaTypeExceptionRes = async (parsedOutput, context) => {
    const contents = map({});
    const data = parsedOutput.body;
    const doc = take(data, {
        Type: __expectString,
        message: __expectString,
    });
    Object.assign(contents, doc);
    const exception = new UnsupportedMediaTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return __decorateServiceException(exception, parsedOutput.body);
};
const de_InvokeWithResponseStreamResponseEvent = (output, context) => {
    return context.eventStreamMarshaller.deserialize(output, async (event) => {
        if (event["PayloadChunk"] != null) {
            return {
                PayloadChunk: await de_InvokeResponseStreamUpdate_event(event["PayloadChunk"], context),
            };
        }
        if (event["InvokeComplete"] != null) {
            return {
                InvokeComplete: await de_InvokeWithResponseStreamCompleteEvent_event(event["InvokeComplete"], context),
            };
        }
        return { $unknown: output };
    });
};
const de_InvokeResponseStreamUpdate_event = async (output, context) => {
    const contents = {};
    contents.Payload = output.body;
    return contents;
};
const de_InvokeWithResponseStreamCompleteEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, _json(data));
    return contents;
};
const se_AdditionalVersionWeights = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = __serializeFloat(value);
        return acc;
    }, {});
};
const se_AliasRoutingConfiguration = (input, context) => {
    return take(input, {
        AdditionalVersionWeights: (_) => se_AdditionalVersionWeights(_, context),
    });
};
const se_FunctionCode = (input, context) => {
    return take(input, {
        ImageUri: [],
        S3Bucket: [],
        S3Key: [],
        S3ObjectVersion: [],
        ZipFile: context.base64Encoder,
    });
};
const se_LayerVersionContentInput = (input, context) => {
    return take(input, {
        S3Bucket: [],
        S3Key: [],
        S3ObjectVersion: [],
        ZipFile: context.base64Encoder,
    });
};
const de_AdditionalVersionWeights = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = __limitedParseDouble(value);
        return acc;
    }, {});
};
const de_AliasConfiguration = (output, context) => {
    return take(output, {
        AliasArn: __expectString,
        Description: __expectString,
        FunctionVersion: __expectString,
        Name: __expectString,
        RevisionId: __expectString,
        RoutingConfig: (_) => de_AliasRoutingConfiguration(_, context),
    });
};
const de_AliasList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AliasConfiguration(entry, context);
    });
    return retVal;
};
const de_AliasRoutingConfiguration = (output, context) => {
    return take(output, {
        AdditionalVersionWeights: (_) => de_AdditionalVersionWeights(_, context),
    });
};
const de_EventSourceMappingConfiguration = (output, context) => {
    return take(output, {
        AmazonManagedKafkaEventSourceConfig: _json,
        BatchSize: __expectInt32,
        BisectBatchOnFunctionError: __expectBoolean,
        DestinationConfig: _json,
        DocumentDBEventSourceConfig: _json,
        EventSourceArn: __expectString,
        FilterCriteria: _json,
        FunctionArn: __expectString,
        FunctionResponseTypes: _json,
        LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        LastProcessingResult: __expectString,
        MaximumBatchingWindowInSeconds: __expectInt32,
        MaximumRecordAgeInSeconds: __expectInt32,
        MaximumRetryAttempts: __expectInt32,
        ParallelizationFactor: __expectInt32,
        Queues: _json,
        ScalingConfig: _json,
        SelfManagedEventSource: _json,
        SelfManagedKafkaEventSourceConfig: _json,
        SourceAccessConfigurations: _json,
        StartingPosition: __expectString,
        StartingPositionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        State: __expectString,
        StateTransitionReason: __expectString,
        Topics: _json,
        TumblingWindowInSeconds: __expectInt32,
        UUID: __expectString,
    });
};
const de_EventSourceMappingsList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_EventSourceMappingConfiguration(entry, context);
    });
    return retVal;
};
const de_FunctionEventInvokeConfig = (output, context) => {
    return take(output, {
        DestinationConfig: _json,
        FunctionArn: __expectString,
        LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        MaximumEventAgeInSeconds: __expectInt32,
        MaximumRetryAttempts: __expectInt32,
    });
};
const de_FunctionEventInvokeConfigList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_FunctionEventInvokeConfig(entry, context);
    });
    return retVal;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};
