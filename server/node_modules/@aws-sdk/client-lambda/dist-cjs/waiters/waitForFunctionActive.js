"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilFunctionActive = exports.waitForFunctionActive = void 0;
const util_waiter_1 = require("@smithy/util-waiter");
const GetFunctionConfigurationCommand_1 = require("../commands/GetFunctionConfigurationCommand");
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new GetFunctionConfigurationCommand_1.GetFunctionConfigurationCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "Active") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "Failed") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.State;
            };
            if (returnComparator() === "Pending") {
                return { state: util_waiter_1.WaiterState.RETRY, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
const waitForFunctionActive = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    return (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForFunctionActive = waitForFunctionActive;
const waitUntilFunctionActive = async (params, input) => {
    const serviceDefaults = { minDelay: 5, maxDelay: 120 };
    const result = await (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
    return (0, util_waiter_1.checkExceptions)(result);
};
exports.waitUntilFunctionActive = waitUntilFunctionActive;
