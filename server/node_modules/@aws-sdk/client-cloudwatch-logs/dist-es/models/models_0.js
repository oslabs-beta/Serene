import { CloudWatchLogsServiceException as __BaseException } from "./CloudWatchLogsServiceException";
export const PolicyType = {
    DATA_PROTECTION_POLICY: "DATA_PROTECTION_POLICY",
};
export const Scope = {
    ALL: "ALL",
};
export class InvalidParameterException extends __BaseException {
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
export class OperationAbortedException extends __BaseException {
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
export class ResourceNotFoundException extends __BaseException {
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
export class ServiceUnavailableException extends __BaseException {
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
export class InvalidOperationException extends __BaseException {
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
export class LimitExceededException extends __BaseException {
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
export class ResourceAlreadyExistsException extends __BaseException {
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
export class DataAlreadyAcceptedException extends __BaseException {
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
export const DataProtectionStatus = {
    ACTIVATED: "ACTIVATED",
    ARCHIVED: "ARCHIVED",
    DELETED: "DELETED",
    DISABLED: "DISABLED",
};
export const ExportTaskStatusCode = {
    CANCELLED: "CANCELLED",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    PENDING: "PENDING",
    PENDING_CANCEL: "PENDING_CANCEL",
    RUNNING: "RUNNING",
};
export const InheritedProperty = {
    ACCOUNT_DATA_PROTECTION: "ACCOUNT_DATA_PROTECTION",
};
export const OrderBy = {
    LastEventTime: "LastEventTime",
    LogStreamName: "LogStreamName",
};
export const StandardUnit = {
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
export const QueryStatus = {
    Cancelled: "Cancelled",
    Complete: "Complete",
    Failed: "Failed",
    Running: "Running",
    Scheduled: "Scheduled",
    Timeout: "Timeout",
    Unknown: "Unknown",
};
export const Distribution = {
    ByLogStream: "ByLogStream",
    Random: "Random",
};
export class InvalidSequenceTokenException extends __BaseException {
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
export class UnrecognizedClientException extends __BaseException {
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
export class MalformedQueryException extends __BaseException {
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
export class TooManyTagsException extends __BaseException {
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
