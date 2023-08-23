"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilFunctionExists = exports.waitForFunctionExists = void 0;
const util_waiter_1 = require("@smithy/util-waiter");
const GetFunctionCommand_1 = require("../commands/GetFunctionCommand");
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new GetFunctionCommand_1.GetFunctionCommand(input));
        reason = result;
        return { state: util_waiter_1.WaiterState.SUCCESS, reason };
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
const waitForFunctionExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForFunctionExists = waitForFunctionExists;
const waitUntilFunctionExists = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
    return (0, util_waiter_1.checkExceptions)(result);
};
exports.waitUntilFunctionExists = waitUntilFunctionExists;
