"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilFunctionActiveV2 = exports.waitForFunctionActiveV2 = void 0;
const util_waiter_1 = require("@smithy/util-waiter");
const GetFunctionCommand_1 = require("../commands/GetFunctionCommand");
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new GetFunctionCommand_1.GetFunctionCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.Configuration.State;
            };
            if (returnComparator() === "Active") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Configuration.State;
            };
            if (returnComparator() === "Failed") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Configuration.State;
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
const waitForFunctionActiveV2 = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForFunctionActiveV2 = waitForFunctionActiveV2;
const waitUntilFunctionActiveV2 = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
    return (0, util_waiter_1.checkExceptions)(result);
};
exports.waitUntilFunctionActiveV2 = waitUntilFunctionActiveV2;
