import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { CloudWatchClient } from "../CloudWatchClient";
import { DescribeAlarmsCommandInput } from "../commands/DescribeAlarmsCommand";
/**
 *
 *  @deprecated Use waitUntilAlarmExists instead. waitForAlarmExists does not throw error in non-success cases.
 */
export declare const waitForAlarmExists: (params: WaiterConfiguration<CloudWatchClient>, input: DescribeAlarmsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeAlarmsCommand for polling.
 */
export declare const waitUntilAlarmExists: (params: WaiterConfiguration<CloudWatchClient>, input: DescribeAlarmsCommandInput) => Promise<WaiterResult>;
