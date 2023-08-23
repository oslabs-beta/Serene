"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KMSAccessDeniedException = exports.LogType = exports.InvocationType = exports.InvalidZipFileException = exports.InvalidSubnetIDException = exports.InvalidSecurityGroupIDException = exports.InvalidRuntimeException = exports.InvalidRequestContentException = exports.ENILimitReachedException = exports.EFSMountTimeoutException = exports.EFSMountFailureException = exports.EFSMountConnectivityException = exports.EFSIOException = exports.EC2UnexpectedException = exports.EC2ThrottledException = exports.EC2AccessDeniedException = exports.UpdateRuntimeOn = exports.ProvisionedConcurrencyConfigNotFoundException = exports.ProvisionedConcurrencyStatusEnum = exports.ResourceInUseException = exports.InvokeMode = exports.InvalidCodeSignatureException = exports.StateReasonCode = exports.State = exports.SnapStartOptimizationStatus = exports.LastUpdateStatusReasonCode = exports.LastUpdateStatus = exports.TracingMode = exports.SnapStartApplyOn = exports.Runtime = exports.PackageType = exports.CodeVerificationFailedException = exports.CodeStorageExceededException = exports.CodeSigningConfigNotFoundException = exports.EventSourcePosition = exports.SourceAccessType = exports.EndPointType = exports.FunctionResponseType = exports.FullDocument = exports.CodeSigningPolicy = exports.Architecture = exports.FunctionUrlAuthType = exports.TooManyRequestsException = exports.ThrottleReason = exports.ServiceException = exports.ResourceNotFoundException = exports.ResourceConflictException = exports.PreconditionFailedException = exports.PolicyLengthExceededException = exports.InvalidParameterValueException = void 0;
exports.UpdateFunctionConfigurationRequestFilterSensitiveLog = exports.UpdateFunctionCodeRequestFilterSensitiveLog = exports.PublishLayerVersionRequestFilterSensitiveLog = exports.LayerVersionContentInputFilterSensitiveLog = exports.ListVersionsByFunctionResponseFilterSensitiveLog = exports.ListFunctionsResponseFilterSensitiveLog = exports.InvokeWithResponseStreamResponseFilterSensitiveLog = exports.InvokeWithResponseStreamResponseEventFilterSensitiveLog = exports.InvokeResponseStreamUpdateFilterSensitiveLog = exports.InvokeWithResponseStreamRequestFilterSensitiveLog = exports.InvokeAsyncRequestFilterSensitiveLog = exports.InvocationResponseFilterSensitiveLog = exports.InvocationRequestFilterSensitiveLog = exports.GetFunctionResponseFilterSensitiveLog = exports.FunctionConfigurationFilterSensitiveLog = exports.RuntimeVersionConfigFilterSensitiveLog = exports.RuntimeVersionErrorFilterSensitiveLog = exports.ImageConfigResponseFilterSensitiveLog = exports.ImageConfigErrorFilterSensitiveLog = exports.EnvironmentResponseFilterSensitiveLog = exports.EnvironmentErrorFilterSensitiveLog = exports.CreateFunctionRequestFilterSensitiveLog = exports.EnvironmentFilterSensitiveLog = exports.FunctionCodeFilterSensitiveLog = exports.FunctionVersion = exports.InvokeWithResponseStreamResponseEvent = exports.ResponseStreamingInvocationType = exports.UnsupportedMediaTypeException = exports.SubnetIPAddressLimitReachedException = exports.SnapStartTimeoutException = exports.SnapStartNotReadyException = exports.SnapStartException = exports.ResourceNotReadyException = exports.RequestTooLargeException = exports.RecursiveInvocationException = exports.KMSNotFoundException = exports.KMSInvalidStateException = exports.KMSDisabledException = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const LambdaServiceException_1 = require("./LambdaServiceException");
class InvalidParameterValueException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "InvalidParameterValueException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidParameterValueException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
        this.Type = opts.Type;
    }
}
exports.InvalidParameterValueException = InvalidParameterValueException;
class PolicyLengthExceededException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "PolicyLengthExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "PolicyLengthExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PolicyLengthExceededException.prototype);
        this.Type = opts.Type;
    }
}
exports.PolicyLengthExceededException = PolicyLengthExceededException;
class PreconditionFailedException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "PreconditionFailedException",
            $fault: "client",
            ...opts,
        });
        this.name = "PreconditionFailedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PreconditionFailedException.prototype);
        this.Type = opts.Type;
    }
}
exports.PreconditionFailedException = PreconditionFailedException;
class ResourceConflictException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "ResourceConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceConflictException.prototype);
        this.Type = opts.Type;
    }
}
exports.ResourceConflictException = ResourceConflictException;
class ResourceNotFoundException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ServiceException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "ServiceException",
            $fault: "server",
            ...opts,
        });
        this.name = "ServiceException";
        this.$fault = "server";
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.ServiceException = ServiceException;
exports.ThrottleReason = {
    CallerRateLimitExceeded: "CallerRateLimitExceeded",
    ConcurrentInvocationLimitExceeded: "ConcurrentInvocationLimitExceeded",
    ConcurrentSnapshotCreateLimitExceeded: "ConcurrentSnapshotCreateLimitExceeded",
    FunctionInvocationRateLimitExceeded: "FunctionInvocationRateLimitExceeded",
    ReservedFunctionConcurrentInvocationLimitExceeded: "ReservedFunctionConcurrentInvocationLimitExceeded",
    ReservedFunctionInvocationRateLimitExceeded: "ReservedFunctionInvocationRateLimitExceeded",
};
class TooManyRequestsException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
        this.retryAfterSeconds = opts.retryAfterSeconds;
        this.Type = opts.Type;
        this.Reason = opts.Reason;
    }
}
exports.TooManyRequestsException = TooManyRequestsException;
exports.FunctionUrlAuthType = {
    AWS_IAM: "AWS_IAM",
    NONE: "NONE",
};
exports.Architecture = {
    arm64: "arm64",
    x86_64: "x86_64",
};
exports.CodeSigningPolicy = {
    Enforce: "Enforce",
    Warn: "Warn",
};
exports.FullDocument = {
    Default: "Default",
    UpdateLookup: "UpdateLookup",
};
exports.FunctionResponseType = {
    ReportBatchItemFailures: "ReportBatchItemFailures",
};
exports.EndPointType = {
    KAFKA_BOOTSTRAP_SERVERS: "KAFKA_BOOTSTRAP_SERVERS",
};
exports.SourceAccessType = {
    BASIC_AUTH: "BASIC_AUTH",
    CLIENT_CERTIFICATE_TLS_AUTH: "CLIENT_CERTIFICATE_TLS_AUTH",
    SASL_SCRAM_256_AUTH: "SASL_SCRAM_256_AUTH",
    SASL_SCRAM_512_AUTH: "SASL_SCRAM_512_AUTH",
    SERVER_ROOT_CA_CERTIFICATE: "SERVER_ROOT_CA_CERTIFICATE",
    VIRTUAL_HOST: "VIRTUAL_HOST",
    VPC_SECURITY_GROUP: "VPC_SECURITY_GROUP",
    VPC_SUBNET: "VPC_SUBNET",
};
exports.EventSourcePosition = {
    AT_TIMESTAMP: "AT_TIMESTAMP",
    LATEST: "LATEST",
    TRIM_HORIZON: "TRIM_HORIZON",
};
class CodeSigningConfigNotFoundException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "CodeSigningConfigNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "CodeSigningConfigNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CodeSigningConfigNotFoundException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.CodeSigningConfigNotFoundException = CodeSigningConfigNotFoundException;
class CodeStorageExceededException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "CodeStorageExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "CodeStorageExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CodeStorageExceededException.prototype);
        this.Type = opts.Type;
    }
}
exports.CodeStorageExceededException = CodeStorageExceededException;
class CodeVerificationFailedException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "CodeVerificationFailedException",
            $fault: "client",
            ...opts,
        });
        this.name = "CodeVerificationFailedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CodeVerificationFailedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.CodeVerificationFailedException = CodeVerificationFailedException;
exports.PackageType = {
    Image: "Image",
    Zip: "Zip",
};
exports.Runtime = {
    dotnet6: "dotnet6",
    dotnetcore10: "dotnetcore1.0",
    dotnetcore20: "dotnetcore2.0",
    dotnetcore21: "dotnetcore2.1",
    dotnetcore31: "dotnetcore3.1",
    go1x: "go1.x",
    java11: "java11",
    java17: "java17",
    java8: "java8",
    java8al2: "java8.al2",
    nodejs: "nodejs",
    nodejs10x: "nodejs10.x",
    nodejs12x: "nodejs12.x",
    nodejs14x: "nodejs14.x",
    nodejs16x: "nodejs16.x",
    nodejs18x: "nodejs18.x",
    nodejs43: "nodejs4.3",
    nodejs43edge: "nodejs4.3-edge",
    nodejs610: "nodejs6.10",
    nodejs810: "nodejs8.10",
    provided: "provided",
    providedal2: "provided.al2",
    python27: "python2.7",
    python310: "python3.10",
    python311: "python3.11",
    python36: "python3.6",
    python37: "python3.7",
    python38: "python3.8",
    python39: "python3.9",
    ruby25: "ruby2.5",
    ruby27: "ruby2.7",
    ruby32: "ruby3.2",
};
exports.SnapStartApplyOn = {
    None: "None",
    PublishedVersions: "PublishedVersions",
};
exports.TracingMode = {
    Active: "Active",
    PassThrough: "PassThrough",
};
exports.LastUpdateStatus = {
    Failed: "Failed",
    InProgress: "InProgress",
    Successful: "Successful",
};
exports.LastUpdateStatusReasonCode = {
    DisabledKMSKey: "DisabledKMSKey",
    EFSIOError: "EFSIOError",
    EFSMountConnectivityError: "EFSMountConnectivityError",
    EFSMountFailure: "EFSMountFailure",
    EFSMountTimeout: "EFSMountTimeout",
    EniLimitExceeded: "EniLimitExceeded",
    FunctionError: "FunctionError",
    ImageAccessDenied: "ImageAccessDenied",
    ImageDeleted: "ImageDeleted",
    InsufficientRolePermissions: "InsufficientRolePermissions",
    InternalError: "InternalError",
    InvalidConfiguration: "InvalidConfiguration",
    InvalidImage: "InvalidImage",
    InvalidRuntime: "InvalidRuntime",
    InvalidSecurityGroup: "InvalidSecurityGroup",
    InvalidStateKMSKey: "InvalidStateKMSKey",
    InvalidSubnet: "InvalidSubnet",
    InvalidZipFileException: "InvalidZipFileException",
    KMSKeyAccessDenied: "KMSKeyAccessDenied",
    KMSKeyNotFound: "KMSKeyNotFound",
    SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
};
exports.SnapStartOptimizationStatus = {
    Off: "Off",
    On: "On",
};
exports.State = {
    Active: "Active",
    Failed: "Failed",
    Inactive: "Inactive",
    Pending: "Pending",
};
exports.StateReasonCode = {
    Creating: "Creating",
    DisabledKMSKey: "DisabledKMSKey",
    EFSIOError: "EFSIOError",
    EFSMountConnectivityError: "EFSMountConnectivityError",
    EFSMountFailure: "EFSMountFailure",
    EFSMountTimeout: "EFSMountTimeout",
    EniLimitExceeded: "EniLimitExceeded",
    FunctionError: "FunctionError",
    Idle: "Idle",
    ImageAccessDenied: "ImageAccessDenied",
    ImageDeleted: "ImageDeleted",
    InsufficientRolePermissions: "InsufficientRolePermissions",
    InternalError: "InternalError",
    InvalidConfiguration: "InvalidConfiguration",
    InvalidImage: "InvalidImage",
    InvalidRuntime: "InvalidRuntime",
    InvalidSecurityGroup: "InvalidSecurityGroup",
    InvalidStateKMSKey: "InvalidStateKMSKey",
    InvalidSubnet: "InvalidSubnet",
    InvalidZipFileException: "InvalidZipFileException",
    KMSKeyAccessDenied: "KMSKeyAccessDenied",
    KMSKeyNotFound: "KMSKeyNotFound",
    Restoring: "Restoring",
    SubnetOutOfIPAddresses: "SubnetOutOfIPAddresses",
};
class InvalidCodeSignatureException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "InvalidCodeSignatureException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidCodeSignatureException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidCodeSignatureException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.InvalidCodeSignatureException = InvalidCodeSignatureException;
exports.InvokeMode = {
    BUFFERED: "BUFFERED",
    RESPONSE_STREAM: "RESPONSE_STREAM",
};
class ResourceInUseException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.ResourceInUseException = ResourceInUseException;
exports.ProvisionedConcurrencyStatusEnum = {
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
    READY: "READY",
};
class ProvisionedConcurrencyConfigNotFoundException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "ProvisionedConcurrencyConfigNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ProvisionedConcurrencyConfigNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ProvisionedConcurrencyConfigNotFoundException.prototype);
        this.Type = opts.Type;
    }
}
exports.ProvisionedConcurrencyConfigNotFoundException = ProvisionedConcurrencyConfigNotFoundException;
exports.UpdateRuntimeOn = {
    Auto: "Auto",
    FunctionUpdate: "FunctionUpdate",
    Manual: "Manual",
};
class EC2AccessDeniedException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "EC2AccessDeniedException",
            $fault: "server",
            ...opts,
        });
        this.name = "EC2AccessDeniedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, EC2AccessDeniedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EC2AccessDeniedException = EC2AccessDeniedException;
class EC2ThrottledException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "EC2ThrottledException",
            $fault: "server",
            ...opts,
        });
        this.name = "EC2ThrottledException";
        this.$fault = "server";
        Object.setPrototypeOf(this, EC2ThrottledException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EC2ThrottledException = EC2ThrottledException;
class EC2UnexpectedException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "EC2UnexpectedException",
            $fault: "server",
            ...opts,
        });
        this.name = "EC2UnexpectedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, EC2UnexpectedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
        this.EC2ErrorCode = opts.EC2ErrorCode;
    }
}
exports.EC2UnexpectedException = EC2UnexpectedException;
class EFSIOException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "EFSIOException",
            $fault: "client",
            ...opts,
        });
        this.name = "EFSIOException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EFSIOException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EFSIOException = EFSIOException;
class EFSMountConnectivityException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "EFSMountConnectivityException",
            $fault: "client",
            ...opts,
        });
        this.name = "EFSMountConnectivityException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EFSMountConnectivityException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EFSMountConnectivityException = EFSMountConnectivityException;
class EFSMountFailureException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "EFSMountFailureException",
            $fault: "client",
            ...opts,
        });
        this.name = "EFSMountFailureException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EFSMountFailureException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EFSMountFailureException = EFSMountFailureException;
class EFSMountTimeoutException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "EFSMountTimeoutException",
            $fault: "client",
            ...opts,
        });
        this.name = "EFSMountTimeoutException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EFSMountTimeoutException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.EFSMountTimeoutException = EFSMountTimeoutException;
class ENILimitReachedException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "ENILimitReachedException",
            $fault: "server",
            ...opts,
        });
        this.name = "ENILimitReachedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, ENILimitReachedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.ENILimitReachedException = ENILimitReachedException;
class InvalidRequestContentException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestContentException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestContentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestContentException.prototype);
        this.Type = opts.Type;
    }
}
exports.InvalidRequestContentException = InvalidRequestContentException;
class InvalidRuntimeException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "InvalidRuntimeException",
            $fault: "server",
            ...opts,
        });
        this.name = "InvalidRuntimeException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InvalidRuntimeException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.InvalidRuntimeException = InvalidRuntimeException;
class InvalidSecurityGroupIDException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "InvalidSecurityGroupIDException",
            $fault: "server",
            ...opts,
        });
        this.name = "InvalidSecurityGroupIDException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InvalidSecurityGroupIDException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.InvalidSecurityGroupIDException = InvalidSecurityGroupIDException;
class InvalidSubnetIDException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "InvalidSubnetIDException",
            $fault: "server",
            ...opts,
        });
        this.name = "InvalidSubnetIDException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InvalidSubnetIDException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.InvalidSubnetIDException = InvalidSubnetIDException;
class InvalidZipFileException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "InvalidZipFileException",
            $fault: "server",
            ...opts,
        });
        this.name = "InvalidZipFileException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InvalidZipFileException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.InvalidZipFileException = InvalidZipFileException;
exports.InvocationType = {
    DryRun: "DryRun",
    Event: "Event",
    RequestResponse: "RequestResponse",
};
exports.LogType = {
    None: "None",
    Tail: "Tail",
};
class KMSAccessDeniedException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "KMSAccessDeniedException",
            $fault: "server",
            ...opts,
        });
        this.name = "KMSAccessDeniedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, KMSAccessDeniedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.KMSAccessDeniedException = KMSAccessDeniedException;
class KMSDisabledException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "KMSDisabledException",
            $fault: "server",
            ...opts,
        });
        this.name = "KMSDisabledException";
        this.$fault = "server";
        Object.setPrototypeOf(this, KMSDisabledException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.KMSDisabledException = KMSDisabledException;
class KMSInvalidStateException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "KMSInvalidStateException",
            $fault: "server",
            ...opts,
        });
        this.name = "KMSInvalidStateException";
        this.$fault = "server";
        Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.KMSInvalidStateException = KMSInvalidStateException;
class KMSNotFoundException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "KMSNotFoundException",
            $fault: "server",
            ...opts,
        });
        this.name = "KMSNotFoundException";
        this.$fault = "server";
        Object.setPrototypeOf(this, KMSNotFoundException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.KMSNotFoundException = KMSNotFoundException;
class RecursiveInvocationException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "RecursiveInvocationException",
            $fault: "client",
            ...opts,
        });
        this.name = "RecursiveInvocationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RecursiveInvocationException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.RecursiveInvocationException = RecursiveInvocationException;
class RequestTooLargeException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "RequestTooLargeException",
            $fault: "client",
            ...opts,
        });
        this.name = "RequestTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RequestTooLargeException.prototype);
        this.Type = opts.Type;
    }
}
exports.RequestTooLargeException = RequestTooLargeException;
class ResourceNotReadyException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotReadyException",
            $fault: "server",
            ...opts,
        });
        this.name = "ResourceNotReadyException";
        this.$fault = "server";
        Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
        this.Type = opts.Type;
    }
}
exports.ResourceNotReadyException = ResourceNotReadyException;
class SnapStartException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "SnapStartException",
            $fault: "client",
            ...opts,
        });
        this.name = "SnapStartException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SnapStartException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.SnapStartException = SnapStartException;
class SnapStartNotReadyException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "SnapStartNotReadyException",
            $fault: "client",
            ...opts,
        });
        this.name = "SnapStartNotReadyException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SnapStartNotReadyException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.SnapStartNotReadyException = SnapStartNotReadyException;
class SnapStartTimeoutException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "SnapStartTimeoutException",
            $fault: "client",
            ...opts,
        });
        this.name = "SnapStartTimeoutException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SnapStartTimeoutException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.SnapStartTimeoutException = SnapStartTimeoutException;
class SubnetIPAddressLimitReachedException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "SubnetIPAddressLimitReachedException",
            $fault: "server",
            ...opts,
        });
        this.name = "SubnetIPAddressLimitReachedException";
        this.$fault = "server";
        Object.setPrototypeOf(this, SubnetIPAddressLimitReachedException.prototype);
        this.Type = opts.Type;
        this.Message = opts.Message;
    }
}
exports.SubnetIPAddressLimitReachedException = SubnetIPAddressLimitReachedException;
class UnsupportedMediaTypeException extends LambdaServiceException_1.LambdaServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedMediaTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedMediaTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedMediaTypeException.prototype);
        this.Type = opts.Type;
    }
}
exports.UnsupportedMediaTypeException = UnsupportedMediaTypeException;
exports.ResponseStreamingInvocationType = {
    DryRun: "DryRun",
    RequestResponse: "RequestResponse",
};
var InvokeWithResponseStreamResponseEvent;
(function (InvokeWithResponseStreamResponseEvent) {
    InvokeWithResponseStreamResponseEvent.visit = (value, visitor) => {
        if (value.PayloadChunk !== undefined)
            return visitor.PayloadChunk(value.PayloadChunk);
        if (value.InvokeComplete !== undefined)
            return visitor.InvokeComplete(value.InvokeComplete);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(InvokeWithResponseStreamResponseEvent = exports.InvokeWithResponseStreamResponseEvent || (exports.InvokeWithResponseStreamResponseEvent = {}));
exports.FunctionVersion = {
    ALL: "ALL",
};
const FunctionCodeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: smithy_client_1.SENSITIVE_STRING }),
});
exports.FunctionCodeFilterSensitiveLog = FunctionCodeFilterSensitiveLog;
const EnvironmentFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Variables && { Variables: smithy_client_1.SENSITIVE_STRING }),
});
exports.EnvironmentFilterSensitiveLog = EnvironmentFilterSensitiveLog;
const CreateFunctionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Code && { Code: (0, exports.FunctionCodeFilterSensitiveLog)(obj.Code) }),
    ...(obj.Environment && { Environment: (0, exports.EnvironmentFilterSensitiveLog)(obj.Environment) }),
});
exports.CreateFunctionRequestFilterSensitiveLog = CreateFunctionRequestFilterSensitiveLog;
const EnvironmentErrorFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Message && { Message: smithy_client_1.SENSITIVE_STRING }),
});
exports.EnvironmentErrorFilterSensitiveLog = EnvironmentErrorFilterSensitiveLog;
const EnvironmentResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Variables && { Variables: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Error && { Error: (0, exports.EnvironmentErrorFilterSensitiveLog)(obj.Error) }),
});
exports.EnvironmentResponseFilterSensitiveLog = EnvironmentResponseFilterSensitiveLog;
const ImageConfigErrorFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Message && { Message: smithy_client_1.SENSITIVE_STRING }),
});
exports.ImageConfigErrorFilterSensitiveLog = ImageConfigErrorFilterSensitiveLog;
const ImageConfigResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Error && { Error: (0, exports.ImageConfigErrorFilterSensitiveLog)(obj.Error) }),
});
exports.ImageConfigResponseFilterSensitiveLog = ImageConfigResponseFilterSensitiveLog;
const RuntimeVersionErrorFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Message && { Message: smithy_client_1.SENSITIVE_STRING }),
});
exports.RuntimeVersionErrorFilterSensitiveLog = RuntimeVersionErrorFilterSensitiveLog;
const RuntimeVersionConfigFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Error && { Error: (0, exports.RuntimeVersionErrorFilterSensitiveLog)(obj.Error) }),
});
exports.RuntimeVersionConfigFilterSensitiveLog = RuntimeVersionConfigFilterSensitiveLog;
const FunctionConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Environment && { Environment: (0, exports.EnvironmentResponseFilterSensitiveLog)(obj.Environment) }),
    ...(obj.ImageConfigResponse && {
        ImageConfigResponse: (0, exports.ImageConfigResponseFilterSensitiveLog)(obj.ImageConfigResponse),
    }),
    ...(obj.RuntimeVersionConfig && {
        RuntimeVersionConfig: (0, exports.RuntimeVersionConfigFilterSensitiveLog)(obj.RuntimeVersionConfig),
    }),
});
exports.FunctionConfigurationFilterSensitiveLog = FunctionConfigurationFilterSensitiveLog;
const GetFunctionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Configuration && { Configuration: (0, exports.FunctionConfigurationFilterSensitiveLog)(obj.Configuration) }),
});
exports.GetFunctionResponseFilterSensitiveLog = GetFunctionResponseFilterSensitiveLog;
const InvocationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: smithy_client_1.SENSITIVE_STRING }),
});
exports.InvocationRequestFilterSensitiveLog = InvocationRequestFilterSensitiveLog;
const InvocationResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: smithy_client_1.SENSITIVE_STRING }),
});
exports.InvocationResponseFilterSensitiveLog = InvocationResponseFilterSensitiveLog;
const InvokeAsyncRequestFilterSensitiveLog = (obj) => ({
    ...obj,
});
exports.InvokeAsyncRequestFilterSensitiveLog = InvokeAsyncRequestFilterSensitiveLog;
const InvokeWithResponseStreamRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: smithy_client_1.SENSITIVE_STRING }),
});
exports.InvokeWithResponseStreamRequestFilterSensitiveLog = InvokeWithResponseStreamRequestFilterSensitiveLog;
const InvokeResponseStreamUpdateFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Payload && { Payload: smithy_client_1.SENSITIVE_STRING }),
});
exports.InvokeResponseStreamUpdateFilterSensitiveLog = InvokeResponseStreamUpdateFilterSensitiveLog;
const InvokeWithResponseStreamResponseEventFilterSensitiveLog = (obj) => {
    if (obj.PayloadChunk !== undefined)
        return { PayloadChunk: (0, exports.InvokeResponseStreamUpdateFilterSensitiveLog)(obj.PayloadChunk) };
    if (obj.InvokeComplete !== undefined)
        return { InvokeComplete: obj.InvokeComplete };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
exports.InvokeWithResponseStreamResponseEventFilterSensitiveLog = InvokeWithResponseStreamResponseEventFilterSensitiveLog;
const InvokeWithResponseStreamResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EventStream && { EventStream: "STREAMING_CONTENT" }),
});
exports.InvokeWithResponseStreamResponseFilterSensitiveLog = InvokeWithResponseStreamResponseFilterSensitiveLog;
const ListFunctionsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Functions && { Functions: obj.Functions.map((item) => (0, exports.FunctionConfigurationFilterSensitiveLog)(item)) }),
});
exports.ListFunctionsResponseFilterSensitiveLog = ListFunctionsResponseFilterSensitiveLog;
const ListVersionsByFunctionResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Versions && { Versions: obj.Versions.map((item) => (0, exports.FunctionConfigurationFilterSensitiveLog)(item)) }),
});
exports.ListVersionsByFunctionResponseFilterSensitiveLog = ListVersionsByFunctionResponseFilterSensitiveLog;
const LayerVersionContentInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: smithy_client_1.SENSITIVE_STRING }),
});
exports.LayerVersionContentInputFilterSensitiveLog = LayerVersionContentInputFilterSensitiveLog;
const PublishLayerVersionRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Content && { Content: (0, exports.LayerVersionContentInputFilterSensitiveLog)(obj.Content) }),
});
exports.PublishLayerVersionRequestFilterSensitiveLog = PublishLayerVersionRequestFilterSensitiveLog;
const UpdateFunctionCodeRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: smithy_client_1.SENSITIVE_STRING }),
});
exports.UpdateFunctionCodeRequestFilterSensitiveLog = UpdateFunctionCodeRequestFilterSensitiveLog;
const UpdateFunctionConfigurationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Environment && { Environment: (0, exports.EnvironmentFilterSensitiveLog)(obj.Environment) }),
});
exports.UpdateFunctionConfigurationRequestFilterSensitiveLog = UpdateFunctionConfigurationRequestFilterSensitiveLog;
