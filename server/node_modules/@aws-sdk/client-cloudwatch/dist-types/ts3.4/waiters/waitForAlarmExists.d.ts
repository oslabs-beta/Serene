import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { CloudWatchClient } from "../CloudWatchClient";
import { DescribeAlarmsCommandInput } from "../commands/DescribeAlarmsCommand";
export declare const waitForAlarmExists: (
  params: WaiterConfiguration<CloudWatchClient>,
  input: DescribeAlarmsCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilAlarmExists: (
  params: WaiterConfiguration<CloudWatchClient>,
  input: DescribeAlarmsCommandInput
) => Promise<WaiterResult>;
