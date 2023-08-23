"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilFunctionUpdatedV2 = exports.waitForFunctionUpdatedV2 = void 0;
const util_waiter_1 = require("@smithy/util-waiter");
const GetFunctionCommand_1 = require("../commands/GetFunctionCommand");
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new GetFunctionCommand_1.GetFunctionCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.Configuration.LastUpdateStatus;
            };
            if (returnComparator() === "Successful") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Configuration.LastUpdateStatus;
            };
            if (returnComparator() === "Failed") {
                return { state: util_waiter_1.WaiterState.FAILURE, reason };
            }
        }
        catch (e) { }
        try {
            const returnComparator = () => {
                return result.Configuration.LastUpdateStatus;
            };
            if (returnComparator() === "InProgress") {
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
const waitForFunctionUpdatedV2 = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    return (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForFunctionUpdatedV2 = waitForFunctionUpdatedV2;
const waitUntilFunctionUpdatedV2 = async (params, input) => {
    const serviceDefaults = { minDelay: 1, maxDelay: 120 };
    const result = await (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
    return (0, util_waiter_1.checkExceptions)(result);
};
exports.waitUntilFunctionUpdatedV2 = waitUntilFunctionUpdatedV2;
