"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.se_PublishVersionCommand = exports.se_PublishLayerVersionCommand = exports.se_ListVersionsByFunctionCommand = exports.se_ListTagsCommand = exports.se_ListProvisionedConcurrencyConfigsCommand = exports.se_ListLayerVersionsCommand = exports.se_ListLayersCommand = exports.se_ListFunctionUrlConfigsCommand = exports.se_ListFunctionsByCodeSigningConfigCommand = exports.se_ListFunctionsCommand = exports.se_ListFunctionEventInvokeConfigsCommand = exports.se_ListEventSourceMappingsCommand = exports.se_ListCodeSigningConfigsCommand = exports.se_ListAliasesCommand = exports.se_InvokeWithResponseStreamCommand = exports.se_InvokeAsyncCommand = exports.se_InvokeCommand = exports.se_GetRuntimeManagementConfigCommand = exports.se_GetProvisionedConcurrencyConfigCommand = exports.se_GetPolicyCommand = exports.se_GetLayerVersionPolicyCommand = exports.se_GetLayerVersionByArnCommand = exports.se_GetLayerVersionCommand = exports.se_GetFunctionUrlConfigCommand = exports.se_GetFunctionEventInvokeConfigCommand = exports.se_GetFunctionConfigurationCommand = exports.se_GetFunctionConcurrencyCommand = exports.se_GetFunctionCodeSigningConfigCommand = exports.se_GetFunctionCommand = exports.se_GetEventSourceMappingCommand = exports.se_GetCodeSigningConfigCommand = exports.se_GetAliasCommand = exports.se_GetAccountSettingsCommand = exports.se_DeleteProvisionedConcurrencyConfigCommand = exports.se_DeleteLayerVersionCommand = exports.se_DeleteFunctionUrlConfigCommand = exports.se_DeleteFunctionEventInvokeConfigCommand = exports.se_DeleteFunctionConcurrencyCommand = exports.se_DeleteFunctionCodeSigningConfigCommand = exports.se_DeleteFunctionCommand = exports.se_DeleteEventSourceMappingCommand = exports.se_DeleteCodeSigningConfigCommand = exports.se_DeleteAliasCommand = exports.se_CreateFunctionUrlConfigCommand = exports.se_CreateFunctionCommand = exports.se_CreateEventSourceMappingCommand = exports.se_CreateCodeSigningConfigCommand = exports.se_CreateAliasCommand = exports.se_AddPermissionCommand = exports.se_AddLayerVersionPermissionCommand = void 0;
exports.de_InvokeCommand = exports.de_GetRuntimeManagementConfigCommand = exports.de_GetProvisionedConcurrencyConfigCommand = exports.de_GetPolicyCommand = exports.de_GetLayerVersionPolicyCommand = exports.de_GetLayerVersionByArnCommand = exports.de_GetLayerVersionCommand = exports.de_GetFunctionUrlConfigCommand = exports.de_GetFunctionEventInvokeConfigCommand = exports.de_GetFunctionConfigurationCommand = exports.de_GetFunctionConcurrencyCommand = exports.de_GetFunctionCodeSigningConfigCommand = exports.de_GetFunctionCommand = exports.de_GetEventSourceMappingCommand = exports.de_GetCodeSigningConfigCommand = exports.de_GetAliasCommand = exports.de_GetAccountSettingsCommand = exports.de_DeleteProvisionedConcurrencyConfigCommand = exports.de_DeleteLayerVersionCommand = exports.de_DeleteFunctionUrlConfigCommand = exports.de_DeleteFunctionEventInvokeConfigCommand = exports.de_DeleteFunctionConcurrencyCommand = exports.de_DeleteFunctionCodeSigningConfigCommand = exports.de_DeleteFunctionCommand = exports.de_DeleteEventSourceMappingCommand = exports.de_DeleteCodeSigningConfigCommand = exports.de_DeleteAliasCommand = exports.de_CreateFunctionUrlConfigCommand = exports.de_CreateFunctionCommand = exports.de_CreateEventSourceMappingCommand = exports.de_CreateCodeSigningConfigCommand = exports.de_CreateAliasCommand = exports.de_AddPermissionCommand = exports.de_AddLayerVersionPermissionCommand = exports.se_UpdateFunctionUrlConfigCommand = exports.se_UpdateFunctionEventInvokeConfigCommand = exports.se_UpdateFunctionConfigurationCommand = exports.se_UpdateFunctionCodeCommand = exports.se_UpdateEventSourceMappingCommand = exports.se_UpdateCodeSigningConfigCommand = exports.se_UpdateAliasCommand = exports.se_UntagResourceCommand = exports.se_TagResourceCommand = exports.se_RemovePermissionCommand = exports.se_RemoveLayerVersionPermissionCommand = exports.se_PutRuntimeManagementConfigCommand = exports.se_PutProvisionedConcurrencyConfigCommand = exports.se_PutFunctionEventInvokeConfigCommand = exports.se_PutFunctionConcurrencyCommand = exports.se_PutFunctionCodeSigningConfigCommand = void 0;
exports.de_UpdateFunctionUrlConfigCommand = exports.de_UpdateFunctionEventInvokeConfigCommand = exports.de_UpdateFunctionConfigurationCommand = exports.de_UpdateFunctionCodeCommand = exports.de_UpdateEventSourceMappingCommand = exports.de_UpdateCodeSigningConfigCommand = exports.de_UpdateAliasCommand = exports.de_UntagResourceCommand = exports.de_TagResourceCommand = exports.de_RemovePermissionCommand = exports.de_RemoveLayerVersionPermissionCommand = exports.de_PutRuntimeManagementConfigCommand = exports.de_PutProvisionedConcurrencyConfigCommand = exports.de_PutFunctionEventInvokeConfigCommand = exports.de_PutFunctionConcurrencyCommand = exports.de_PutFunctionCodeSigningConfigCommand = exports.de_PublishVersionCommand = exports.de_PublishLayerVersionCommand = exports.de_ListVersionsByFunctionCommand = exports.de_ListTagsCommand = exports.de_ListProvisionedConcurrencyConfigsCommand = exports.de_ListLayerVersionsCommand = exports.de_ListLayersCommand = exports.de_ListFunctionUrlConfigsCommand = exports.de_ListFunctionsByCodeSigningConfigCommand = exports.de_ListFunctionsCommand = exports.de_ListFunctionEventInvokeConfigsCommand = exports.de_ListEventSourceMappingsCommand = exports.de_ListCodeSigningConfigsCommand = exports.de_ListAliasesCommand = exports.de_InvokeWithResponseStreamCommand = exports.de_InvokeAsyncCommand = void 0;
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const LambdaServiceException_1 = require("../models/LambdaServiceException");
const models_0_1 = require("../models/models_0");
const se_AddLayerVersionPermissionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "VersionNumber", () => input.VersionNumber.toString(), "{VersionNumber}", false);
    const query = (0, smithy_client_1.map)({
        RevisionId: [, input.RevisionId],
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        Action: [],
        OrganizationId: [],
        Principal: [],
        StatementId: [],
    }));
    return new protocol_http_1.HttpRequest({
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
exports.se_AddLayerVersionPermissionCommand = se_AddLayerVersionPermissionCommand;
const se_AddPermissionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/policy";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
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
    return new protocol_http_1.HttpRequest({
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
exports.se_AddPermissionCommand = se_AddPermissionCommand;
const se_CreateAliasCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/aliases";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        Description: [],
        FunctionVersion: [],
        Name: [],
        RoutingConfig: (_) => se_AliasRoutingConfiguration(_, context),
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateAliasCommand = se_CreateAliasCommand;
const se_CreateCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-04-22/code-signing-configs";
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        AllowedPublishers: (_) => (0, smithy_client_1._json)(_),
        CodeSigningPolicies: (_) => (0, smithy_client_1._json)(_),
        Description: [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateCodeSigningConfigCommand = se_CreateCodeSigningConfigCommand;
const se_CreateEventSourceMappingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings";
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        AmazonManagedKafkaEventSourceConfig: (_) => (0, smithy_client_1._json)(_),
        BatchSize: [],
        BisectBatchOnFunctionError: [],
        DestinationConfig: (_) => (0, smithy_client_1._json)(_),
        DocumentDBEventSourceConfig: (_) => (0, smithy_client_1._json)(_),
        Enabled: [],
        EventSourceArn: [],
        FilterCriteria: (_) => (0, smithy_client_1._json)(_),
        FunctionName: [],
        FunctionResponseTypes: (_) => (0, smithy_client_1._json)(_),
        MaximumBatchingWindowInSeconds: [],
        MaximumRecordAgeInSeconds: [],
        MaximumRetryAttempts: [],
        ParallelizationFactor: [],
        Queues: (_) => (0, smithy_client_1._json)(_),
        ScalingConfig: (_) => (0, smithy_client_1._json)(_),
        SelfManagedEventSource: (_) => (0, smithy_client_1._json)(_),
        SelfManagedKafkaEventSourceConfig: (_) => (0, smithy_client_1._json)(_),
        SourceAccessConfigurations: (_) => (0, smithy_client_1._json)(_),
        StartingPosition: [],
        StartingPositionTimestamp: (_) => Math.round(_.getTime() / 1000),
        Topics: (_) => (0, smithy_client_1._json)(_),
        TumblingWindowInSeconds: [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateEventSourceMappingCommand = se_CreateEventSourceMappingCommand;
const se_CreateFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions";
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        Architectures: (_) => (0, smithy_client_1._json)(_),
        Code: (_) => se_FunctionCode(_, context),
        CodeSigningConfigArn: [],
        DeadLetterConfig: (_) => (0, smithy_client_1._json)(_),
        Description: [],
        Environment: (_) => (0, smithy_client_1._json)(_),
        EphemeralStorage: (_) => (0, smithy_client_1._json)(_),
        FileSystemConfigs: (_) => (0, smithy_client_1._json)(_),
        FunctionName: [],
        Handler: [],
        ImageConfig: (_) => (0, smithy_client_1._json)(_),
        KMSKeyArn: [],
        Layers: (_) => (0, smithy_client_1._json)(_),
        MemorySize: [],
        PackageType: [],
        Publish: [],
        Role: [],
        Runtime: [],
        SnapStart: (_) => (0, smithy_client_1._json)(_),
        Tags: (_) => (0, smithy_client_1._json)(_),
        Timeout: [],
        TracingConfig: (_) => (0, smithy_client_1._json)(_),
        VpcConfig: (_) => (0, smithy_client_1._json)(_),
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_CreateFunctionCommand = se_CreateFunctionCommand;
const se_CreateFunctionUrlConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        AuthType: [],
        Cors: (_) => (0, smithy_client_1._json)(_),
        InvokeMode: [],
    }));
    return new protocol_http_1.HttpRequest({
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
exports.se_CreateFunctionUrlConfigCommand = se_CreateFunctionUrlConfigCommand;
const se_DeleteAliasCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteAliasCommand = se_DeleteAliasCommand;
const se_DeleteCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CodeSigningConfigArn", () => input.CodeSigningConfigArn, "{CodeSigningConfigArn}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteCodeSigningConfigCommand = se_DeleteCodeSigningConfigCommand;
const se_DeleteEventSourceMappingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "UUID", () => input.UUID, "{UUID}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteEventSourceMappingCommand = se_DeleteEventSourceMappingCommand;
const se_DeleteFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_DeleteFunctionCommand = se_DeleteFunctionCommand;
const se_DeleteFunctionCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-06-30/functions/{FunctionName}/code-signing-config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteFunctionCodeSigningConfigCommand = se_DeleteFunctionCodeSigningConfigCommand;
const se_DeleteFunctionConcurrencyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2017-10-31/functions/{FunctionName}/concurrency";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteFunctionConcurrencyCommand = se_DeleteFunctionConcurrencyCommand;
const se_DeleteFunctionEventInvokeConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_DeleteFunctionEventInvokeConfigCommand = se_DeleteFunctionEventInvokeConfigCommand;
const se_DeleteFunctionUrlConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_DeleteFunctionUrlConfigCommand = se_DeleteFunctionUrlConfigCommand;
const se_DeleteLayerVersionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "VersionNumber", () => input.VersionNumber.toString(), "{VersionNumber}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_DeleteLayerVersionCommand = se_DeleteLayerVersionCommand;
const se_DeleteProvisionedConcurrencyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, (0, smithy_client_1.expectNonNull)(input.Qualifier, `Qualifier`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_DeleteProvisionedConcurrencyConfigCommand = se_DeleteProvisionedConcurrencyConfigCommand;
const se_GetAccountSettingsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2016-08-19/account-settings";
    let body;
    body = "";
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetAccountSettingsCommand = se_GetAccountSettingsCommand;
const se_GetAliasCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetAliasCommand = se_GetAliasCommand;
const se_GetCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CodeSigningConfigArn", () => input.CodeSigningConfigArn, "{CodeSigningConfigArn}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetCodeSigningConfigCommand = se_GetCodeSigningConfigCommand;
const se_GetEventSourceMappingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "UUID", () => input.UUID, "{UUID}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetEventSourceMappingCommand = se_GetEventSourceMappingCommand;
const se_GetFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetFunctionCommand = se_GetFunctionCommand;
const se_GetFunctionCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-06-30/functions/{FunctionName}/code-signing-config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetFunctionCodeSigningConfigCommand = se_GetFunctionCodeSigningConfigCommand;
const se_GetFunctionConcurrencyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-30/functions/{FunctionName}/concurrency";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetFunctionConcurrencyCommand = se_GetFunctionConcurrencyCommand;
const se_GetFunctionConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/configuration";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetFunctionConfigurationCommand = se_GetFunctionConfigurationCommand;
const se_GetFunctionEventInvokeConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetFunctionEventInvokeConfigCommand = se_GetFunctionEventInvokeConfigCommand;
const se_GetFunctionUrlConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetFunctionUrlConfigCommand = se_GetFunctionUrlConfigCommand;
const se_GetLayerVersionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "VersionNumber", () => input.VersionNumber.toString(), "{VersionNumber}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetLayerVersionCommand = se_GetLayerVersionCommand;
const se_GetLayerVersionByArnCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers";
    const query = (0, smithy_client_1.map)({
        find: [, "LayerVersion"],
        Arn: [, (0, smithy_client_1.expectNonNull)(input.Arn, `Arn`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetLayerVersionByArnCommand = se_GetLayerVersionByArnCommand;
const se_GetLayerVersionPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "VersionNumber", () => input.VersionNumber.toString(), "{VersionNumber}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_GetLayerVersionPolicyCommand = se_GetLayerVersionPolicyCommand;
const se_GetPolicyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/policy";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetPolicyCommand = se_GetPolicyCommand;
const se_GetProvisionedConcurrencyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, (0, smithy_client_1.expectNonNull)(input.Qualifier, `Qualifier`)],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetProvisionedConcurrencyConfigCommand = se_GetProvisionedConcurrencyConfigCommand;
const se_GetRuntimeManagementConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2021-07-20/functions/{FunctionName}/runtime-management-config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_GetRuntimeManagementConfigCommand = se_GetRuntimeManagementConfigCommand;
const se_InvokeCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/octet-stream",
        "x-amz-invocation-type": input.InvocationType,
        "x-amz-log-type": input.LogType,
        "x-amz-client-context": input.ClientContext,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/invocations";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    if (input.Payload !== undefined) {
        body = input.Payload;
    }
    return new protocol_http_1.HttpRequest({
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
exports.se_InvokeCommand = se_InvokeCommand;
const se_InvokeAsyncCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/octet-stream",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2014-11-13/functions/{FunctionName}/invoke-async";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    if (input.InvokeArgs !== undefined) {
        body = input.InvokeArgs;
    }
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_InvokeAsyncCommand = se_InvokeAsyncCommand;
const se_InvokeWithResponseStreamCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = (0, smithy_client_1.map)({}, isSerializableHeaderValue, {
        "content-type": "application/octet-stream",
        "x-amz-invocation-type": input.InvocationType,
        "x-amz-log-type": input.LogType,
        "x-amz-client-context": input.ClientContext,
    });
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2021-11-15/functions/{FunctionName}/response-streaming-invocations";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    if (input.Payload !== undefined) {
        body = input.Payload;
    }
    return new protocol_http_1.HttpRequest({
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
exports.se_InvokeWithResponseStreamCommand = se_InvokeWithResponseStreamCommand;
const se_ListAliasesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/aliases";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        FunctionVersion: [, input.FunctionVersion],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListAliasesCommand = se_ListAliasesCommand;
const se_ListCodeSigningConfigsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-04-22/code-signing-configs";
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListCodeSigningConfigsCommand = se_ListCodeSigningConfigsCommand;
const se_ListEventSourceMappingsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings";
    const query = (0, smithy_client_1.map)({
        EventSourceArn: [, input.EventSourceArn],
        FunctionName: [, input.FunctionName],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListEventSourceMappingsCommand = se_ListEventSourceMappingsCommand;
const se_ListFunctionEventInvokeConfigsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-25/functions/{FunctionName}/event-invoke-config/list";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListFunctionEventInvokeConfigsCommand = se_ListFunctionEventInvokeConfigsCommand;
const se_ListFunctionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions";
    const query = (0, smithy_client_1.map)({
        MasterRegion: [, input.MasterRegion],
        FunctionVersion: [, input.FunctionVersion],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListFunctionsCommand = se_ListFunctionsCommand;
const se_ListFunctionsByCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CodeSigningConfigArn", () => input.CodeSigningConfigArn, "{CodeSigningConfigArn}", false);
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListFunctionsByCodeSigningConfigCommand = se_ListFunctionsByCodeSigningConfigCommand;
const se_ListFunctionUrlConfigsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/urls";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListFunctionUrlConfigsCommand = se_ListFunctionUrlConfigsCommand;
const se_ListLayersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers";
    const query = (0, smithy_client_1.map)({
        CompatibleRuntime: [, input.CompatibleRuntime],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
        CompatibleArchitecture: [, input.CompatibleArchitecture],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListLayersCommand = se_ListLayersCommand;
const se_ListLayerVersionsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers/{LayerName}/versions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    const query = (0, smithy_client_1.map)({
        CompatibleRuntime: [, input.CompatibleRuntime],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
        CompatibleArchitecture: [, input.CompatibleArchitecture],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListLayerVersionsCommand = se_ListLayerVersionsCommand;
const se_ListProvisionedConcurrencyConfigsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        List: [, "ALL"],
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListProvisionedConcurrencyConfigsCommand = se_ListProvisionedConcurrencyConfigsCommand;
const se_ListTagsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Resource", () => input.Resource, "{Resource}", false);
    let body;
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_ListTagsCommand = se_ListTagsCommand;
const se_ListVersionsByFunctionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/versions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Marker: [, input.Marker],
        MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems.toString()],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_ListVersionsByFunctionCommand = se_ListVersionsByFunctionCommand;
const se_PublishLayerVersionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers/{LayerName}/versions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        CompatibleArchitectures: (_) => (0, smithy_client_1._json)(_),
        CompatibleRuntimes: (_) => (0, smithy_client_1._json)(_),
        Content: (_) => se_LayerVersionContentInput(_, context),
        Description: [],
        LicenseInfo: [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_PublishLayerVersionCommand = se_PublishLayerVersionCommand;
const se_PublishVersionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/versions";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        CodeSha256: [],
        Description: [],
        RevisionId: [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_PublishVersionCommand = se_PublishVersionCommand;
const se_PutFunctionCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-06-30/functions/{FunctionName}/code-signing-config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        CodeSigningConfigArn: [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_PutFunctionCodeSigningConfigCommand = se_PutFunctionCodeSigningConfigCommand;
const se_PutFunctionConcurrencyCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2017-10-31/functions/{FunctionName}/concurrency";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        ReservedConcurrentExecutions: [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_PutFunctionConcurrencyCommand = se_PutFunctionConcurrencyCommand;
const se_PutFunctionEventInvokeConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        DestinationConfig: (_) => (0, smithy_client_1._json)(_),
        MaximumEventAgeInSeconds: [],
        MaximumRetryAttempts: [],
    }));
    return new protocol_http_1.HttpRequest({
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
exports.se_PutFunctionEventInvokeConfigCommand = se_PutFunctionEventInvokeConfigCommand;
const se_PutProvisionedConcurrencyConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, (0, smithy_client_1.expectNonNull)(input.Qualifier, `Qualifier`)],
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        ProvisionedConcurrentExecutions: [],
    }));
    return new protocol_http_1.HttpRequest({
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
exports.se_PutProvisionedConcurrencyConfigCommand = se_PutProvisionedConcurrencyConfigCommand;
const se_PutRuntimeManagementConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2021-07-20/functions/{FunctionName}/runtime-management-config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        RuntimeVersionArn: [],
        UpdateRuntimeOn: [],
    }));
    return new protocol_http_1.HttpRequest({
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
exports.se_PutRuntimeManagementConfigCommand = se_PutRuntimeManagementConfigCommand;
const se_RemoveLayerVersionPermissionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "LayerName", () => input.LayerName, "{LayerName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "VersionNumber", () => input.VersionNumber.toString(), "{VersionNumber}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "StatementId", () => input.StatementId, "{StatementId}", false);
    const query = (0, smithy_client_1.map)({
        RevisionId: [, input.RevisionId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_RemoveLayerVersionPermissionCommand = se_RemoveLayerVersionPermissionCommand;
const se_RemovePermissionCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/policy/{StatementId}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "StatementId", () => input.StatementId, "{StatementId}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
        RevisionId: [, input.RevisionId],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_RemovePermissionCommand = se_RemovePermissionCommand;
const se_TagResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Resource", () => input.Resource, "{Resource}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        Tags: (_) => (0, smithy_client_1._json)(_),
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_TagResourceCommand = se_TagResourceCommand;
const se_UntagResourceCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Resource", () => input.Resource, "{Resource}", false);
    const query = (0, smithy_client_1.map)({
        tagKeys: [
            (0, smithy_client_1.expectNonNull)(input.TagKeys, `TagKeys`) != null,
            () => (input.TagKeys || []).map((_entry) => _entry),
        ],
    });
    let body;
    return new protocol_http_1.HttpRequest({
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
exports.se_UntagResourceCommand = se_UntagResourceCommand;
const se_UpdateAliasCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        Description: [],
        FunctionVersion: [],
        RevisionId: [],
        RoutingConfig: (_) => se_AliasRoutingConfiguration(_, context),
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateAliasCommand = se_UpdateAliasCommand;
const se_UpdateCodeSigningConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "CodeSigningConfigArn", () => input.CodeSigningConfigArn, "{CodeSigningConfigArn}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        AllowedPublishers: (_) => (0, smithy_client_1._json)(_),
        CodeSigningPolicies: (_) => (0, smithy_client_1._json)(_),
        Description: [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateCodeSigningConfigCommand = se_UpdateCodeSigningConfigCommand;
const se_UpdateEventSourceMappingCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "UUID", () => input.UUID, "{UUID}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        BatchSize: [],
        BisectBatchOnFunctionError: [],
        DestinationConfig: (_) => (0, smithy_client_1._json)(_),
        DocumentDBEventSourceConfig: (_) => (0, smithy_client_1._json)(_),
        Enabled: [],
        FilterCriteria: (_) => (0, smithy_client_1._json)(_),
        FunctionName: [],
        FunctionResponseTypes: (_) => (0, smithy_client_1._json)(_),
        MaximumBatchingWindowInSeconds: [],
        MaximumRecordAgeInSeconds: [],
        MaximumRetryAttempts: [],
        ParallelizationFactor: [],
        ScalingConfig: (_) => (0, smithy_client_1._json)(_),
        SourceAccessConfigurations: (_) => (0, smithy_client_1._json)(_),
        TumblingWindowInSeconds: [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateEventSourceMappingCommand = se_UpdateEventSourceMappingCommand;
const se_UpdateFunctionCodeCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}/code";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        Architectures: (_) => (0, smithy_client_1._json)(_),
        DryRun: [],
        ImageUri: [],
        Publish: [],
        RevisionId: [],
        S3Bucket: [],
        S3Key: [],
        S3ObjectVersion: [],
        ZipFile: (_) => context.base64Encoder(_),
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateFunctionCodeCommand = se_UpdateFunctionCodeCommand;
const se_UpdateFunctionConfigurationCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2015-03-31/functions/{FunctionName}/configuration";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        DeadLetterConfig: (_) => (0, smithy_client_1._json)(_),
        Description: [],
        Environment: (_) => (0, smithy_client_1._json)(_),
        EphemeralStorage: (_) => (0, smithy_client_1._json)(_),
        FileSystemConfigs: (_) => (0, smithy_client_1._json)(_),
        Handler: [],
        ImageConfig: (_) => (0, smithy_client_1._json)(_),
        KMSKeyArn: [],
        Layers: (_) => (0, smithy_client_1._json)(_),
        MemorySize: [],
        RevisionId: [],
        Role: [],
        Runtime: [],
        SnapStart: (_) => (0, smithy_client_1._json)(_),
        Timeout: [],
        TracingConfig: (_) => (0, smithy_client_1._json)(_),
        VpcConfig: (_) => (0, smithy_client_1._json)(_),
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_UpdateFunctionConfigurationCommand = se_UpdateFunctionConfigurationCommand;
const se_UpdateFunctionEventInvokeConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
        "/2019-09-25/functions/{FunctionName}/event-invoke-config";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        DestinationConfig: (_) => (0, smithy_client_1._json)(_),
        MaximumEventAgeInSeconds: [],
        MaximumRetryAttempts: [],
    }));
    return new protocol_http_1.HttpRequest({
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
exports.se_UpdateFunctionEventInvokeConfigCommand = se_UpdateFunctionEventInvokeConfigCommand;
const se_UpdateFunctionUrlConfigCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
    resolvedPath = (0, smithy_client_1.resolvedPath)(resolvedPath, input, "FunctionName", () => input.FunctionName, "{FunctionName}", false);
    const query = (0, smithy_client_1.map)({
        Qualifier: [, input.Qualifier],
    });
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        AuthType: [],
        Cors: (_) => (0, smithy_client_1._json)(_),
        InvokeMode: [],
    }));
    return new protocol_http_1.HttpRequest({
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
exports.se_UpdateFunctionUrlConfigCommand = se_UpdateFunctionUrlConfigCommand;
const de_AddLayerVersionPermissionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_AddLayerVersionPermissionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        RevisionId: smithy_client_1.expectString,
        Statement: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_AddLayerVersionPermissionCommand = de_AddLayerVersionPermissionCommand;
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
const de_AddPermissionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_AddPermissionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Statement: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_AddPermissionCommand = de_AddPermissionCommand;
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
const de_CreateAliasCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateAliasCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AliasArn: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        FunctionVersion: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
        RoutingConfig: (_) => de_AliasRoutingConfiguration(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreateAliasCommand = de_CreateAliasCommand;
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
const de_CreateCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateCodeSigningConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        CodeSigningConfig: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreateCodeSigningConfigCommand = de_CreateCodeSigningConfigCommand;
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
const de_CreateEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return de_CreateEventSourceMappingCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AmazonManagedKafkaEventSourceConfig: smithy_client_1._json,
        BatchSize: smithy_client_1.expectInt32,
        BisectBatchOnFunctionError: smithy_client_1.expectBoolean,
        DestinationConfig: smithy_client_1._json,
        DocumentDBEventSourceConfig: smithy_client_1._json,
        EventSourceArn: smithy_client_1.expectString,
        FilterCriteria: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        FunctionResponseTypes: smithy_client_1._json,
        LastModified: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastProcessingResult: smithy_client_1.expectString,
        MaximumBatchingWindowInSeconds: smithy_client_1.expectInt32,
        MaximumRecordAgeInSeconds: smithy_client_1.expectInt32,
        MaximumRetryAttempts: smithy_client_1.expectInt32,
        ParallelizationFactor: smithy_client_1.expectInt32,
        Queues: smithy_client_1._json,
        ScalingConfig: smithy_client_1._json,
        SelfManagedEventSource: smithy_client_1._json,
        SelfManagedKafkaEventSourceConfig: smithy_client_1._json,
        SourceAccessConfigurations: smithy_client_1._json,
        StartingPosition: smithy_client_1.expectString,
        StartingPositionTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
        StateTransitionReason: smithy_client_1.expectString,
        Topics: smithy_client_1._json,
        TumblingWindowInSeconds: smithy_client_1.expectInt32,
        UUID: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreateEventSourceMappingCommand = de_CreateEventSourceMappingCommand;
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
const de_CreateFunctionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Architectures: smithy_client_1._json,
        CodeSha256: smithy_client_1.expectString,
        CodeSize: smithy_client_1.expectLong,
        DeadLetterConfig: smithy_client_1._json,
        Description: smithy_client_1.expectString,
        Environment: smithy_client_1._json,
        EphemeralStorage: smithy_client_1._json,
        FileSystemConfigs: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        FunctionName: smithy_client_1.expectString,
        Handler: smithy_client_1.expectString,
        ImageConfigResponse: smithy_client_1._json,
        KMSKeyArn: smithy_client_1.expectString,
        LastModified: smithy_client_1.expectString,
        LastUpdateStatus: smithy_client_1.expectString,
        LastUpdateStatusReason: smithy_client_1.expectString,
        LastUpdateStatusReasonCode: smithy_client_1.expectString,
        Layers: smithy_client_1._json,
        MasterArn: smithy_client_1.expectString,
        MemorySize: smithy_client_1.expectInt32,
        PackageType: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
        Role: smithy_client_1.expectString,
        Runtime: smithy_client_1.expectString,
        RuntimeVersionConfig: smithy_client_1._json,
        SigningJobArn: smithy_client_1.expectString,
        SigningProfileVersionArn: smithy_client_1.expectString,
        SnapStart: smithy_client_1._json,
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
        StateReasonCode: smithy_client_1.expectString,
        Timeout: smithy_client_1.expectInt32,
        TracingConfig: smithy_client_1._json,
        Version: smithy_client_1.expectString,
        VpcConfig: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreateFunctionCommand = de_CreateFunctionCommand;
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
const de_CreateFunctionUrlConfigCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_CreateFunctionUrlConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AuthType: smithy_client_1.expectString,
        Cors: smithy_client_1._json,
        CreationTime: smithy_client_1.expectString,
        FunctionArn: smithy_client_1.expectString,
        FunctionUrl: smithy_client_1.expectString,
        InvokeMode: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_CreateFunctionUrlConfigCommand = de_CreateFunctionUrlConfigCommand;
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
const de_DeleteAliasCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteAliasCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteAliasCommand = de_DeleteAliasCommand;
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
const de_DeleteCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteCodeSigningConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteCodeSigningConfigCommand = de_DeleteCodeSigningConfigCommand;
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
const de_DeleteEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return de_DeleteEventSourceMappingCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AmazonManagedKafkaEventSourceConfig: smithy_client_1._json,
        BatchSize: smithy_client_1.expectInt32,
        BisectBatchOnFunctionError: smithy_client_1.expectBoolean,
        DestinationConfig: smithy_client_1._json,
        DocumentDBEventSourceConfig: smithy_client_1._json,
        EventSourceArn: smithy_client_1.expectString,
        FilterCriteria: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        FunctionResponseTypes: smithy_client_1._json,
        LastModified: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastProcessingResult: smithy_client_1.expectString,
        MaximumBatchingWindowInSeconds: smithy_client_1.expectInt32,
        MaximumRecordAgeInSeconds: smithy_client_1.expectInt32,
        MaximumRetryAttempts: smithy_client_1.expectInt32,
        ParallelizationFactor: smithy_client_1.expectInt32,
        Queues: smithy_client_1._json,
        ScalingConfig: smithy_client_1._json,
        SelfManagedEventSource: smithy_client_1._json,
        SelfManagedKafkaEventSourceConfig: smithy_client_1._json,
        SourceAccessConfigurations: smithy_client_1._json,
        StartingPosition: smithy_client_1.expectString,
        StartingPositionTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
        StateTransitionReason: smithy_client_1.expectString,
        Topics: smithy_client_1._json,
        TumblingWindowInSeconds: smithy_client_1.expectInt32,
        UUID: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_DeleteEventSourceMappingCommand = de_DeleteEventSourceMappingCommand;
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
const de_DeleteFunctionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteFunctionCommand = de_DeleteFunctionCommand;
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
const de_DeleteFunctionCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionCodeSigningConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteFunctionCodeSigningConfigCommand = de_DeleteFunctionCodeSigningConfigCommand;
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
const de_DeleteFunctionConcurrencyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionConcurrencyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteFunctionConcurrencyCommand = de_DeleteFunctionConcurrencyCommand;
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
const de_DeleteFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteFunctionEventInvokeConfigCommand = de_DeleteFunctionEventInvokeConfigCommand;
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
const de_DeleteFunctionUrlConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteFunctionUrlConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteFunctionUrlConfigCommand = de_DeleteFunctionUrlConfigCommand;
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
const de_DeleteLayerVersionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteLayerVersionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteLayerVersionCommand = de_DeleteLayerVersionCommand;
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
const de_DeleteProvisionedConcurrencyConfigCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_DeleteProvisionedConcurrencyConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_DeleteProvisionedConcurrencyConfigCommand = de_DeleteProvisionedConcurrencyConfigCommand;
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
const de_GetAccountSettingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetAccountSettingsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AccountLimit: smithy_client_1._json,
        AccountUsage: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetAccountSettingsCommand = de_GetAccountSettingsCommand;
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
const de_GetAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetAliasCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AliasArn: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        FunctionVersion: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
        RoutingConfig: (_) => de_AliasRoutingConfiguration(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetAliasCommand = de_GetAliasCommand;
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
const de_GetCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetCodeSigningConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        CodeSigningConfig: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetCodeSigningConfigCommand = de_GetCodeSigningConfigCommand;
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
const de_GetEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetEventSourceMappingCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AmazonManagedKafkaEventSourceConfig: smithy_client_1._json,
        BatchSize: smithy_client_1.expectInt32,
        BisectBatchOnFunctionError: smithy_client_1.expectBoolean,
        DestinationConfig: smithy_client_1._json,
        DocumentDBEventSourceConfig: smithy_client_1._json,
        EventSourceArn: smithy_client_1.expectString,
        FilterCriteria: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        FunctionResponseTypes: smithy_client_1._json,
        LastModified: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastProcessingResult: smithy_client_1.expectString,
        MaximumBatchingWindowInSeconds: smithy_client_1.expectInt32,
        MaximumRecordAgeInSeconds: smithy_client_1.expectInt32,
        MaximumRetryAttempts: smithy_client_1.expectInt32,
        ParallelizationFactor: smithy_client_1.expectInt32,
        Queues: smithy_client_1._json,
        ScalingConfig: smithy_client_1._json,
        SelfManagedEventSource: smithy_client_1._json,
        SelfManagedKafkaEventSourceConfig: smithy_client_1._json,
        SourceAccessConfigurations: smithy_client_1._json,
        StartingPosition: smithy_client_1.expectString,
        StartingPositionTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
        StateTransitionReason: smithy_client_1.expectString,
        Topics: smithy_client_1._json,
        TumblingWindowInSeconds: smithy_client_1.expectInt32,
        UUID: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetEventSourceMappingCommand = de_GetEventSourceMappingCommand;
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
const de_GetFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Code: smithy_client_1._json,
        Concurrency: smithy_client_1._json,
        Configuration: smithy_client_1._json,
        Tags: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetFunctionCommand = de_GetFunctionCommand;
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
const de_GetFunctionCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionCodeSigningConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        CodeSigningConfigArn: smithy_client_1.expectString,
        FunctionName: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetFunctionCodeSigningConfigCommand = de_GetFunctionCodeSigningConfigCommand;
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
const de_GetFunctionConcurrencyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionConcurrencyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        ReservedConcurrentExecutions: smithy_client_1.expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetFunctionConcurrencyCommand = de_GetFunctionConcurrencyCommand;
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
const de_GetFunctionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionConfigurationCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Architectures: smithy_client_1._json,
        CodeSha256: smithy_client_1.expectString,
        CodeSize: smithy_client_1.expectLong,
        DeadLetterConfig: smithy_client_1._json,
        Description: smithy_client_1.expectString,
        Environment: smithy_client_1._json,
        EphemeralStorage: smithy_client_1._json,
        FileSystemConfigs: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        FunctionName: smithy_client_1.expectString,
        Handler: smithy_client_1.expectString,
        ImageConfigResponse: smithy_client_1._json,
        KMSKeyArn: smithy_client_1.expectString,
        LastModified: smithy_client_1.expectString,
        LastUpdateStatus: smithy_client_1.expectString,
        LastUpdateStatusReason: smithy_client_1.expectString,
        LastUpdateStatusReasonCode: smithy_client_1.expectString,
        Layers: smithy_client_1._json,
        MasterArn: smithy_client_1.expectString,
        MemorySize: smithy_client_1.expectInt32,
        PackageType: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
        Role: smithy_client_1.expectString,
        Runtime: smithy_client_1.expectString,
        RuntimeVersionConfig: smithy_client_1._json,
        SigningJobArn: smithy_client_1.expectString,
        SigningProfileVersionArn: smithy_client_1.expectString,
        SnapStart: smithy_client_1._json,
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
        StateReasonCode: smithy_client_1.expectString,
        Timeout: smithy_client_1.expectInt32,
        TracingConfig: smithy_client_1._json,
        Version: smithy_client_1.expectString,
        VpcConfig: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetFunctionConfigurationCommand = de_GetFunctionConfigurationCommand;
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
const de_GetFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        DestinationConfig: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        LastModified: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        MaximumEventAgeInSeconds: smithy_client_1.expectInt32,
        MaximumRetryAttempts: smithy_client_1.expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetFunctionEventInvokeConfigCommand = de_GetFunctionEventInvokeConfigCommand;
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
const de_GetFunctionUrlConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetFunctionUrlConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AuthType: smithy_client_1.expectString,
        Cors: smithy_client_1._json,
        CreationTime: smithy_client_1.expectString,
        FunctionArn: smithy_client_1.expectString,
        FunctionUrl: smithy_client_1.expectString,
        InvokeMode: smithy_client_1.expectString,
        LastModifiedTime: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetFunctionUrlConfigCommand = de_GetFunctionUrlConfigCommand;
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
const de_GetLayerVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetLayerVersionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        CompatibleArchitectures: smithy_client_1._json,
        CompatibleRuntimes: smithy_client_1._json,
        Content: smithy_client_1._json,
        CreatedDate: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        LayerArn: smithy_client_1.expectString,
        LayerVersionArn: smithy_client_1.expectString,
        LicenseInfo: smithy_client_1.expectString,
        Version: smithy_client_1.expectLong,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetLayerVersionCommand = de_GetLayerVersionCommand;
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
const de_GetLayerVersionByArnCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetLayerVersionByArnCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        CompatibleArchitectures: smithy_client_1._json,
        CompatibleRuntimes: smithy_client_1._json,
        Content: smithy_client_1._json,
        CreatedDate: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        LayerArn: smithy_client_1.expectString,
        LayerVersionArn: smithy_client_1.expectString,
        LicenseInfo: smithy_client_1.expectString,
        Version: smithy_client_1.expectLong,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetLayerVersionByArnCommand = de_GetLayerVersionByArnCommand;
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
const de_GetLayerVersionPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetLayerVersionPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Policy: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetLayerVersionPolicyCommand = de_GetLayerVersionPolicyCommand;
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
const de_GetPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetPolicyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Policy: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetPolicyCommand = de_GetPolicyCommand;
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
const de_GetProvisionedConcurrencyConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetProvisionedConcurrencyConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AllocatedProvisionedConcurrentExecutions: smithy_client_1.expectInt32,
        AvailableProvisionedConcurrentExecutions: smithy_client_1.expectInt32,
        LastModified: smithy_client_1.expectString,
        RequestedProvisionedConcurrentExecutions: smithy_client_1.expectInt32,
        Status: smithy_client_1.expectString,
        StatusReason: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetProvisionedConcurrencyConfigCommand = de_GetProvisionedConcurrencyConfigCommand;
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
const de_GetRuntimeManagementConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetRuntimeManagementConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        FunctionArn: smithy_client_1.expectString,
        RuntimeVersionArn: smithy_client_1.expectString,
        UpdateRuntimeOn: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_GetRuntimeManagementConfigCommand = de_GetRuntimeManagementConfigCommand;
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
const de_InvokeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_InvokeCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        FunctionError: [, output.headers["x-amz-function-error"]],
        LogResult: [, output.headers["x-amz-log-result"]],
        ExecutedVersion: [, output.headers["x-amz-executed-version"]],
    });
    const data = await (0, smithy_client_1.collectBody)(output.body, context);
    contents.Payload = data;
    (0, smithy_client_1.map)(contents, {
        StatusCode: [, output.statusCode],
    });
    return contents;
};
exports.de_InvokeCommand = de_InvokeCommand;
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
const de_InvokeAsyncCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return de_InvokeAsyncCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    (0, smithy_client_1.map)(contents, {
        Status: [, output.statusCode],
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_InvokeAsyncCommand = de_InvokeAsyncCommand;
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
const de_InvokeWithResponseStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_InvokeWithResponseStreamCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
        ExecutedVersion: [, output.headers["x-amz-executed-version"]],
        ResponseStreamContentType: [, output.headers["content-type"]],
    });
    const data = output.body;
    contents.EventStream = de_InvokeWithResponseStreamResponseEvent(data, context);
    (0, smithy_client_1.map)(contents, {
        StatusCode: [, output.statusCode],
    });
    return contents;
};
exports.de_InvokeWithResponseStreamCommand = de_InvokeWithResponseStreamCommand;
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
const de_ListAliasesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListAliasesCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Aliases: (_) => de_AliasList(_, context),
        NextMarker: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListAliasesCommand = de_ListAliasesCommand;
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
const de_ListCodeSigningConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListCodeSigningConfigsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        CodeSigningConfigs: smithy_client_1._json,
        NextMarker: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListCodeSigningConfigsCommand = de_ListCodeSigningConfigsCommand;
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
const de_ListEventSourceMappingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListEventSourceMappingsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        EventSourceMappings: (_) => de_EventSourceMappingsList(_, context),
        NextMarker: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListEventSourceMappingsCommand = de_ListEventSourceMappingsCommand;
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
const de_ListFunctionEventInvokeConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFunctionEventInvokeConfigsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        FunctionEventInvokeConfigs: (_) => de_FunctionEventInvokeConfigList(_, context),
        NextMarker: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListFunctionEventInvokeConfigsCommand = de_ListFunctionEventInvokeConfigsCommand;
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
const de_ListFunctionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFunctionsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Functions: smithy_client_1._json,
        NextMarker: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListFunctionsCommand = de_ListFunctionsCommand;
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
const de_ListFunctionsByCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFunctionsByCodeSigningConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        FunctionArns: smithy_client_1._json,
        NextMarker: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListFunctionsByCodeSigningConfigCommand = de_ListFunctionsByCodeSigningConfigCommand;
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
const de_ListFunctionUrlConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListFunctionUrlConfigsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        FunctionUrlConfigs: smithy_client_1._json,
        NextMarker: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListFunctionUrlConfigsCommand = de_ListFunctionUrlConfigsCommand;
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
const de_ListLayersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListLayersCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Layers: smithy_client_1._json,
        NextMarker: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListLayersCommand = de_ListLayersCommand;
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
const de_ListLayerVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListLayerVersionsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        LayerVersions: smithy_client_1._json,
        NextMarker: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListLayerVersionsCommand = de_ListLayerVersionsCommand;
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
const de_ListProvisionedConcurrencyConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListProvisionedConcurrencyConfigsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        NextMarker: smithy_client_1.expectString,
        ProvisionedConcurrencyConfigs: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListProvisionedConcurrencyConfigsCommand = de_ListProvisionedConcurrencyConfigsCommand;
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
const de_ListTagsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListTagsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Tags: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListTagsCommand = de_ListTagsCommand;
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
const de_ListVersionsByFunctionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListVersionsByFunctionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        NextMarker: smithy_client_1.expectString,
        Versions: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_ListVersionsByFunctionCommand = de_ListVersionsByFunctionCommand;
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
const de_PublishLayerVersionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_PublishLayerVersionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        CompatibleArchitectures: smithy_client_1._json,
        CompatibleRuntimes: smithy_client_1._json,
        Content: smithy_client_1._json,
        CreatedDate: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        LayerArn: smithy_client_1.expectString,
        LayerVersionArn: smithy_client_1.expectString,
        LicenseInfo: smithy_client_1.expectString,
        Version: smithy_client_1.expectLong,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_PublishLayerVersionCommand = de_PublishLayerVersionCommand;
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
const de_PublishVersionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return de_PublishVersionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Architectures: smithy_client_1._json,
        CodeSha256: smithy_client_1.expectString,
        CodeSize: smithy_client_1.expectLong,
        DeadLetterConfig: smithy_client_1._json,
        Description: smithy_client_1.expectString,
        Environment: smithy_client_1._json,
        EphemeralStorage: smithy_client_1._json,
        FileSystemConfigs: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        FunctionName: smithy_client_1.expectString,
        Handler: smithy_client_1.expectString,
        ImageConfigResponse: smithy_client_1._json,
        KMSKeyArn: smithy_client_1.expectString,
        LastModified: smithy_client_1.expectString,
        LastUpdateStatus: smithy_client_1.expectString,
        LastUpdateStatusReason: smithy_client_1.expectString,
        LastUpdateStatusReasonCode: smithy_client_1.expectString,
        Layers: smithy_client_1._json,
        MasterArn: smithy_client_1.expectString,
        MemorySize: smithy_client_1.expectInt32,
        PackageType: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
        Role: smithy_client_1.expectString,
        Runtime: smithy_client_1.expectString,
        RuntimeVersionConfig: smithy_client_1._json,
        SigningJobArn: smithy_client_1.expectString,
        SigningProfileVersionArn: smithy_client_1.expectString,
        SnapStart: smithy_client_1._json,
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
        StateReasonCode: smithy_client_1.expectString,
        Timeout: smithy_client_1.expectInt32,
        TracingConfig: smithy_client_1._json,
        Version: smithy_client_1.expectString,
        VpcConfig: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_PublishVersionCommand = de_PublishVersionCommand;
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
const de_PutFunctionCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutFunctionCodeSigningConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        CodeSigningConfigArn: smithy_client_1.expectString,
        FunctionName: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_PutFunctionCodeSigningConfigCommand = de_PutFunctionCodeSigningConfigCommand;
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
const de_PutFunctionConcurrencyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutFunctionConcurrencyCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        ReservedConcurrentExecutions: smithy_client_1.expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_PutFunctionConcurrencyCommand = de_PutFunctionConcurrencyCommand;
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
const de_PutFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        DestinationConfig: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        LastModified: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        MaximumEventAgeInSeconds: smithy_client_1.expectInt32,
        MaximumRetryAttempts: smithy_client_1.expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_PutFunctionEventInvokeConfigCommand = de_PutFunctionEventInvokeConfigCommand;
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
const de_PutProvisionedConcurrencyConfigCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return de_PutProvisionedConcurrencyConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AllocatedProvisionedConcurrentExecutions: smithy_client_1.expectInt32,
        AvailableProvisionedConcurrentExecutions: smithy_client_1.expectInt32,
        LastModified: smithy_client_1.expectString,
        RequestedProvisionedConcurrentExecutions: smithy_client_1.expectInt32,
        Status: smithy_client_1.expectString,
        StatusReason: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_PutProvisionedConcurrencyConfigCommand = de_PutProvisionedConcurrencyConfigCommand;
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
const de_PutRuntimeManagementConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutRuntimeManagementConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        FunctionArn: smithy_client_1.expectString,
        RuntimeVersionArn: smithy_client_1.expectString,
        UpdateRuntimeOn: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_PutRuntimeManagementConfigCommand = de_PutRuntimeManagementConfigCommand;
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
const de_RemoveLayerVersionPermissionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_RemoveLayerVersionPermissionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_RemoveLayerVersionPermissionCommand = de_RemoveLayerVersionPermissionCommand;
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
const de_RemovePermissionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_RemovePermissionCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_RemovePermissionCommand = de_RemovePermissionCommand;
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
const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_TagResourceCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_TagResourceCommand = de_TagResourceCommand;
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
const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return de_UntagResourceCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_UntagResourceCommand = de_UntagResourceCommand;
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
const de_UpdateAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateAliasCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AliasArn: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        FunctionVersion: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
        RoutingConfig: (_) => de_AliasRoutingConfiguration(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateAliasCommand = de_UpdateAliasCommand;
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
const de_UpdateCodeSigningConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateCodeSigningConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        CodeSigningConfig: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateCodeSigningConfigCommand = de_UpdateCodeSigningConfigCommand;
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
const de_UpdateEventSourceMappingCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return de_UpdateEventSourceMappingCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AmazonManagedKafkaEventSourceConfig: smithy_client_1._json,
        BatchSize: smithy_client_1.expectInt32,
        BisectBatchOnFunctionError: smithy_client_1.expectBoolean,
        DestinationConfig: smithy_client_1._json,
        DocumentDBEventSourceConfig: smithy_client_1._json,
        EventSourceArn: smithy_client_1.expectString,
        FilterCriteria: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        FunctionResponseTypes: smithy_client_1._json,
        LastModified: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastProcessingResult: smithy_client_1.expectString,
        MaximumBatchingWindowInSeconds: smithy_client_1.expectInt32,
        MaximumRecordAgeInSeconds: smithy_client_1.expectInt32,
        MaximumRetryAttempts: smithy_client_1.expectInt32,
        ParallelizationFactor: smithy_client_1.expectInt32,
        Queues: smithy_client_1._json,
        ScalingConfig: smithy_client_1._json,
        SelfManagedEventSource: smithy_client_1._json,
        SelfManagedKafkaEventSourceConfig: smithy_client_1._json,
        SourceAccessConfigurations: smithy_client_1._json,
        StartingPosition: smithy_client_1.expectString,
        StartingPositionTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
        StateTransitionReason: smithy_client_1.expectString,
        Topics: smithy_client_1._json,
        TumblingWindowInSeconds: smithy_client_1.expectInt32,
        UUID: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateEventSourceMappingCommand = de_UpdateEventSourceMappingCommand;
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
const de_UpdateFunctionCodeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFunctionCodeCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Architectures: smithy_client_1._json,
        CodeSha256: smithy_client_1.expectString,
        CodeSize: smithy_client_1.expectLong,
        DeadLetterConfig: smithy_client_1._json,
        Description: smithy_client_1.expectString,
        Environment: smithy_client_1._json,
        EphemeralStorage: smithy_client_1._json,
        FileSystemConfigs: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        FunctionName: smithy_client_1.expectString,
        Handler: smithy_client_1.expectString,
        ImageConfigResponse: smithy_client_1._json,
        KMSKeyArn: smithy_client_1.expectString,
        LastModified: smithy_client_1.expectString,
        LastUpdateStatus: smithy_client_1.expectString,
        LastUpdateStatusReason: smithy_client_1.expectString,
        LastUpdateStatusReasonCode: smithy_client_1.expectString,
        Layers: smithy_client_1._json,
        MasterArn: smithy_client_1.expectString,
        MemorySize: smithy_client_1.expectInt32,
        PackageType: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
        Role: smithy_client_1.expectString,
        Runtime: smithy_client_1.expectString,
        RuntimeVersionConfig: smithy_client_1._json,
        SigningJobArn: smithy_client_1.expectString,
        SigningProfileVersionArn: smithy_client_1.expectString,
        SnapStart: smithy_client_1._json,
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
        StateReasonCode: smithy_client_1.expectString,
        Timeout: smithy_client_1.expectInt32,
        TracingConfig: smithy_client_1._json,
        Version: smithy_client_1.expectString,
        VpcConfig: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateFunctionCodeCommand = de_UpdateFunctionCodeCommand;
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
const de_UpdateFunctionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFunctionConfigurationCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        Architectures: smithy_client_1._json,
        CodeSha256: smithy_client_1.expectString,
        CodeSize: smithy_client_1.expectLong,
        DeadLetterConfig: smithy_client_1._json,
        Description: smithy_client_1.expectString,
        Environment: smithy_client_1._json,
        EphemeralStorage: smithy_client_1._json,
        FileSystemConfigs: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        FunctionName: smithy_client_1.expectString,
        Handler: smithy_client_1.expectString,
        ImageConfigResponse: smithy_client_1._json,
        KMSKeyArn: smithy_client_1.expectString,
        LastModified: smithy_client_1.expectString,
        LastUpdateStatus: smithy_client_1.expectString,
        LastUpdateStatusReason: smithy_client_1.expectString,
        LastUpdateStatusReasonCode: smithy_client_1.expectString,
        Layers: smithy_client_1._json,
        MasterArn: smithy_client_1.expectString,
        MemorySize: smithy_client_1.expectInt32,
        PackageType: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
        Role: smithy_client_1.expectString,
        Runtime: smithy_client_1.expectString,
        RuntimeVersionConfig: smithy_client_1._json,
        SigningJobArn: smithy_client_1.expectString,
        SigningProfileVersionArn: smithy_client_1.expectString,
        SnapStart: smithy_client_1._json,
        State: smithy_client_1.expectString,
        StateReason: smithy_client_1.expectString,
        StateReasonCode: smithy_client_1.expectString,
        Timeout: smithy_client_1.expectInt32,
        TracingConfig: smithy_client_1._json,
        Version: smithy_client_1.expectString,
        VpcConfig: smithy_client_1._json,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateFunctionConfigurationCommand = de_UpdateFunctionConfigurationCommand;
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
const de_UpdateFunctionEventInvokeConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFunctionEventInvokeConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        DestinationConfig: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        LastModified: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        MaximumEventAgeInSeconds: smithy_client_1.expectInt32,
        MaximumRetryAttempts: smithy_client_1.expectInt32,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateFunctionEventInvokeConfigCommand = de_UpdateFunctionEventInvokeConfigCommand;
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
const de_UpdateFunctionUrlConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_UpdateFunctionUrlConfigCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0, smithy_client_1.take)(data, {
        AuthType: smithy_client_1.expectString,
        Cors: smithy_client_1._json,
        CreationTime: smithy_client_1.expectString,
        FunctionArn: smithy_client_1.expectString,
        FunctionUrl: smithy_client_1.expectString,
        InvokeMode: smithy_client_1.expectString,
        LastModifiedTime: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
exports.de_UpdateFunctionUrlConfigCommand = de_UpdateFunctionUrlConfigCommand;
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
const throwDefaultError = (0, smithy_client_1.withBaseException)(LambdaServiceException_1.LambdaServiceException);
const de_CodeSigningConfigNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.CodeSigningConfigNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_CodeStorageExceededExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.CodeStorageExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_CodeVerificationFailedExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.CodeVerificationFailedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_EC2AccessDeniedExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.EC2AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_EC2ThrottledExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.EC2ThrottledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_EC2UnexpectedExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        EC2ErrorCode: smithy_client_1.expectString,
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.EC2UnexpectedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_EFSIOExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.EFSIOException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_EFSMountConnectivityExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.EFSMountConnectivityException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_EFSMountFailureExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.EFSMountFailureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_EFSMountTimeoutExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.EFSMountTimeoutException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_ENILimitReachedExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.ENILimitReachedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidCodeSignatureExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.InvalidCodeSignatureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidParameterValueExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.InvalidParameterValueException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidRequestContentExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.InvalidRequestContentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidRuntimeExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.InvalidRuntimeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidSecurityGroupIDExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.InvalidSecurityGroupIDException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidSubnetIDExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.InvalidSubnetIDException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidZipFileExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.InvalidZipFileException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_KMSAccessDeniedExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.KMSAccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_KMSDisabledExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.KMSDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_KMSInvalidStateExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.KMSInvalidStateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_KMSNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.KMSNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_PolicyLengthExceededExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.PolicyLengthExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_PreconditionFailedExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.PreconditionFailedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_ProvisionedConcurrencyConfigNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.ProvisionedConcurrencyConfigNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_RecursiveInvocationExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.RecursiveInvocationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_RequestTooLargeExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.RequestTooLargeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_ResourceConflictExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.ResourceConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.ResourceInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_ResourceNotReadyExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.ResourceNotReadyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_ServiceExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.ServiceException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_SnapStartExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.SnapStartException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_SnapStartNotReadyExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.SnapStartNotReadyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_SnapStartTimeoutExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.SnapStartTimeoutException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_SubnetIPAddressLimitReachedExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Message: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.SubnetIPAddressLimitReachedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({
        retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
    });
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Reason: smithy_client_1.expectString,
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_UnsupportedMediaTypeExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        Type: smithy_client_1.expectString,
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.UnsupportedMediaTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
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
    Object.assign(contents, (0, smithy_client_1._json)(data));
    return contents;
};
const se_AdditionalVersionWeights = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = (0, smithy_client_1.serializeFloat)(value);
        return acc;
    }, {});
};
const se_AliasRoutingConfiguration = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AdditionalVersionWeights: (_) => se_AdditionalVersionWeights(_, context),
    });
};
const se_FunctionCode = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ImageUri: [],
        S3Bucket: [],
        S3Key: [],
        S3ObjectVersion: [],
        ZipFile: context.base64Encoder,
    });
};
const se_LayerVersionContentInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
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
        acc[key] = (0, smithy_client_1.limitedParseDouble)(value);
        return acc;
    }, {});
};
const de_AliasConfiguration = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AliasArn: smithy_client_1.expectString,
        Description: smithy_client_1.expectString,
        FunctionVersion: smithy_client_1.expectString,
        Name: smithy_client_1.expectString,
        RevisionId: smithy_client_1.expectString,
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
    return (0, smithy_client_1.take)(output, {
        AdditionalVersionWeights: (_) => de_AdditionalVersionWeights(_, context),
    });
};
const de_EventSourceMappingConfiguration = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AmazonManagedKafkaEventSourceConfig: smithy_client_1._json,
        BatchSize: smithy_client_1.expectInt32,
        BisectBatchOnFunctionError: smithy_client_1.expectBoolean,
        DestinationConfig: smithy_client_1._json,
        DocumentDBEventSourceConfig: smithy_client_1._json,
        EventSourceArn: smithy_client_1.expectString,
        FilterCriteria: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        FunctionResponseTypes: smithy_client_1._json,
        LastModified: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        LastProcessingResult: smithy_client_1.expectString,
        MaximumBatchingWindowInSeconds: smithy_client_1.expectInt32,
        MaximumRecordAgeInSeconds: smithy_client_1.expectInt32,
        MaximumRetryAttempts: smithy_client_1.expectInt32,
        ParallelizationFactor: smithy_client_1.expectInt32,
        Queues: smithy_client_1._json,
        ScalingConfig: smithy_client_1._json,
        SelfManagedEventSource: smithy_client_1._json,
        SelfManagedKafkaEventSourceConfig: smithy_client_1._json,
        SourceAccessConfigurations: smithy_client_1._json,
        StartingPosition: smithy_client_1.expectString,
        StartingPositionTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        State: smithy_client_1.expectString,
        StateTransitionReason: smithy_client_1.expectString,
        Topics: smithy_client_1._json,
        TumblingWindowInSeconds: smithy_client_1.expectInt32,
        UUID: smithy_client_1.expectString,
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
    return (0, smithy_client_1.take)(output, {
        DestinationConfig: smithy_client_1._json,
        FunctionArn: smithy_client_1.expectString,
        LastModified: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        MaximumEventAgeInSeconds: smithy_client_1.expectInt32,
        MaximumRetryAttempts: smithy_client_1.expectInt32,
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
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
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
