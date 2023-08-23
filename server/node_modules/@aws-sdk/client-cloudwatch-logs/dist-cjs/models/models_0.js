"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooManyTagsException = exports.MalformedQueryException = exports.UnrecognizedClientException = exports.InvalidSequenceTokenException = exports.Distribution = exports.QueryStatus = exports.StandardUnit = exports.OrderBy = exports.InheritedProperty = exports.ExportTaskStatusCode = exports.DataProtectionStatus = exports.DataAlreadyAcceptedException = exports.ResourceAlreadyExistsException = exports.LimitExceededException = exports.InvalidOperationException = exports.ServiceUnavailableException = exports.ResourceNotFoundException = exports.OperationAbortedException = exports.InvalidParameterException = exports.Scope = exports.PolicyType = void 0;
const CloudWatchLogsServiceException_1 = require("./CloudWatchLogsServiceException");
exports.PolicyType = {
    DATA_PROTECTION_POLICY: "DATA_PROTECTION_POLICY",
};
exports.Scope = {
    ALL: "ALL",
};
class InvalidParameterException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidParameterException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
exports.InvalidParameterException = InvalidParameterException;
class OperationAbortedException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "OperationAbortedException",
            $fault: "client",
            ...opts,
        });
        this.name = "OperationAbortedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, OperationAbortedException.prototype);
    }
}
exports.OperationAbortedException = OperationAbortedException;
class ResourceNotFoundException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
class ServiceUnavailableException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "ServiceUnavailableException",
            $fault: "server",
            ...opts,
        });
        this.name = "ServiceUnavailableException";
        this.$fault = "server";
        Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    }
}
exports.ServiceUnavailableException = ServiceUnavailableException;
class InvalidOperationException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "InvalidOperationException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidOperationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidOperationException.prototype);
    }
}
exports.InvalidOperationException = InvalidOperationException;
class LimitExceededException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class ResourceAlreadyExistsException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "ResourceAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    }
}
exports.ResourceAlreadyExistsException = ResourceAlreadyExistsException;
class DataAlreadyAcceptedException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "DataAlreadyAcceptedException",
            $fault: "client",
            ...opts,
        });
        this.name = "DataAlreadyAcceptedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DataAlreadyAcceptedException.prototype);
        this.expectedSequenceToken = opts.expectedSequenceToken;
    }
}
exports.DataAlreadyAcceptedException = DataAlreadyAcceptedException;
exports.DataProtectionStatus = {
    ACTIVATED: "ACTIVATED",
    ARCHIVED: "ARCHIVED",
    DELETED: "DELETED",
    DISABLED: "DISABLED",
};
exports.ExportTaskStatusCode = {
    CANCELLED: "CANCELLED",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    PENDING: "PENDING",
    PENDING_CANCEL: "PENDING_CANCEL",
    RUNNING: "RUNNING",
};
exports.InheritedProperty = {
    ACCOUNT_DATA_PROTECTION: "ACCOUNT_DATA_PROTECTION",
};
exports.OrderBy = {
    LastEventTime: "LastEventTime",
    LogStreamName: "LogStreamName",
};
exports.StandardUnit = {
    Bits: "Bits",
    BitsSecond: "Bits/Second",
    Bytes: "Bytes",
    BytesSecond: "Bytes/Second",
    Count: "Count",
    CountSecond: "Count/Second",
    Gigabits: "Gigabits",
    GigabitsSecond: "Gigabits/Second",
    Gigabytes: "Gigabytes",
    GigabytesSecond: "Gigabytes/Second",
    Kilobits: "Kilobits",
    KilobitsSecond: "Kilobits/Second",
    Kilobytes: "Kilobytes",
    KilobytesSecond: "Kilobytes/Second",
    Megabits: "Megabits",
    MegabitsSecond: "Megabits/Second",
    Megabytes: "Megabytes",
    MegabytesSecond: "Megabytes/Second",
    Microseconds: "Microseconds",
    Milliseconds: "Milliseconds",
    None: "None",
    Percent: "Percent",
    Seconds: "Seconds",
    Terabits: "Terabits",
    TerabitsSecond: "Terabits/Second",
    Terabytes: "Terabytes",
    TerabytesSecond: "Terabytes/Second",
};
exports.QueryStatus = {
    Cancelled: "Cancelled",
    Complete: "Complete",
    Failed: "Failed",
    Running: "Running",
    Scheduled: "Scheduled",
    Timeout: "Timeout",
    Unknown: "Unknown",
};
exports.Distribution = {
    ByLogStream: "ByLogStream",
    Random: "Random",
};
class InvalidSequenceTokenException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "InvalidSequenceTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSequenceTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSequenceTokenException.prototype);
        this.expectedSequenceToken = opts.expectedSequenceToken;
    }
}
exports.InvalidSequenceTokenException = InvalidSequenceTokenException;
class UnrecognizedClientException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "UnrecognizedClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnrecognizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnrecognizedClientException.prototype);
    }
}
exports.UnrecognizedClientException = UnrecognizedClientException;
class MalformedQueryException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "MalformedQueryException",
            $fault: "client",
            ...opts,
        });
        this.name = "MalformedQueryException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedQueryException.prototype);
        this.queryCompileError = opts.queryCompileError;
    }
}
exports.MalformedQueryException = MalformedQueryException;
class TooManyTagsException extends CloudWatchLogsServiceException_1.CloudWatchLogsServiceException {
    constructor(opts) {
        super({
            name: "TooManyTagsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyTagsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyTagsException.prototype);
        this.resourceName = opts.resourceName;
    }
}
exports.TooManyTagsException = TooManyTagsException;
