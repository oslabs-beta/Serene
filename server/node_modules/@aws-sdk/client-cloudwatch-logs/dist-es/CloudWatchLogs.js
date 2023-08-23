import { createAggregatedClient } from "@smithy/smithy-client";
import { CloudWatchLogsClient } from "./CloudWatchLogsClient";
import { AssociateKmsKeyCommand, } from "./commands/AssociateKmsKeyCommand";
import { CancelExportTaskCommand, } from "./commands/CancelExportTaskCommand";
import { CreateExportTaskCommand, } from "./commands/CreateExportTaskCommand";
import { CreateLogGroupCommand, } from "./commands/CreateLogGroupCommand";
import { CreateLogStreamCommand, } from "./commands/CreateLogStreamCommand";
import { DeleteAccountPolicyCommand, } from "./commands/DeleteAccountPolicyCommand";
import { DeleteDataProtectionPolicyCommand, } from "./commands/DeleteDataProtectionPolicyCommand";
import { DeleteDestinationCommand, } from "./commands/DeleteDestinationCommand";
import { DeleteLogGroupCommand, } from "./commands/DeleteLogGroupCommand";
import { DeleteLogStreamCommand, } from "./commands/DeleteLogStreamCommand";
import { DeleteMetricFilterCommand, } from "./commands/DeleteMetricFilterCommand";
import { DeleteQueryDefinitionCommand, } from "./commands/DeleteQueryDefinitionCommand";
import { DeleteResourcePolicyCommand, } from "./commands/DeleteResourcePolicyCommand";
import { DeleteRetentionPolicyCommand, } from "./commands/DeleteRetentionPolicyCommand";
import { DeleteSubscriptionFilterCommand, } from "./commands/DeleteSubscriptionFilterCommand";
import { DescribeAccountPoliciesCommand, } from "./commands/DescribeAccountPoliciesCommand";
import { DescribeDestinationsCommand, } from "./commands/DescribeDestinationsCommand";
import { DescribeExportTasksCommand, } from "./commands/DescribeExportTasksCommand";
import { DescribeLogGroupsCommand, } from "./commands/DescribeLogGroupsCommand";
import { DescribeLogStreamsCommand, } from "./commands/DescribeLogStreamsCommand";
import { DescribeMetricFiltersCommand, } from "./commands/DescribeMetricFiltersCommand";
import { DescribeQueriesCommand, } from "./commands/DescribeQueriesCommand";
import { DescribeQueryDefinitionsCommand, } from "./commands/DescribeQueryDefinitionsCommand";
import { DescribeResourcePoliciesCommand, } from "./commands/DescribeResourcePoliciesCommand";
import { DescribeSubscriptionFiltersCommand, } from "./commands/DescribeSubscriptionFiltersCommand";
import { DisassociateKmsKeyCommand, } from "./commands/DisassociateKmsKeyCommand";
import { FilterLogEventsCommand, } from "./commands/FilterLogEventsCommand";
import { GetDataProtectionPolicyCommand, } from "./commands/GetDataProtectionPolicyCommand";
import { GetLogEventsCommand, } from "./commands/GetLogEventsCommand";
import { GetLogGroupFieldsCommand, } from "./commands/GetLogGroupFieldsCommand";
import { GetLogRecordCommand, } from "./commands/GetLogRecordCommand";
import { GetQueryResultsCommand, } from "./commands/GetQueryResultsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ListTagsLogGroupCommand, } from "./commands/ListTagsLogGroupCommand";
import { PutAccountPolicyCommand, } from "./commands/PutAccountPolicyCommand";
import { PutDataProtectionPolicyCommand, } from "./commands/PutDataProtectionPolicyCommand";
import { PutDestinationCommand, } from "./commands/PutDestinationCommand";
import { PutDestinationPolicyCommand, } from "./commands/PutDestinationPolicyCommand";
import { PutLogEventsCommand, } from "./commands/PutLogEventsCommand";
import { PutMetricFilterCommand, } from "./commands/PutMetricFilterCommand";
import { PutQueryDefinitionCommand, } from "./commands/PutQueryDefinitionCommand";
import { PutResourcePolicyCommand, } from "./commands/PutResourcePolicyCommand";
import { PutRetentionPolicyCommand, } from "./commands/PutRetentionPolicyCommand";
import { PutSubscriptionFilterCommand, } from "./commands/PutSubscriptionFilterCommand";
import { StartQueryCommand } from "./commands/StartQueryCommand";
import { StopQueryCommand } from "./commands/StopQueryCommand";
import { TagLogGroupCommand } from "./commands/TagLogGroupCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestMetricFilterCommand, } from "./commands/TestMetricFilterCommand";
import { UntagLogGroupCommand, } from "./commands/UntagLogGroupCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
const commands = {
    AssociateKmsKeyCommand,
    CancelExportTaskCommand,
    CreateExportTaskCommand,
    CreateLogGroupCommand,
    CreateLogStreamCommand,
    DeleteAccountPolicyCommand,
    DeleteDataProtectionPolicyCommand,
    DeleteDestinationCommand,
    DeleteLogGroupCommand,
    DeleteLogStreamCommand,
    DeleteMetricFilterCommand,
    DeleteQueryDefinitionCommand,
    DeleteResourcePolicyCommand,
    DeleteRetentionPolicyCommand,
    DeleteSubscriptionFilterCommand,
    DescribeAccountPoliciesCommand,
    DescribeDestinationsCommand,
    DescribeExportTasksCommand,
    DescribeLogGroupsCommand,
    DescribeLogStreamsCommand,
    DescribeMetricFiltersCommand,
    DescribeQueriesCommand,
    DescribeQueryDefinitionsCommand,
    DescribeResourcePoliciesCommand,
    DescribeSubscriptionFiltersCommand,
    DisassociateKmsKeyCommand,
    FilterLogEventsCommand,
    GetDataProtectionPolicyCommand,
    GetLogEventsCommand,
    GetLogGroupFieldsCommand,
    GetLogRecordCommand,
    GetQueryResultsCommand,
    ListTagsForResourceCommand,
    ListTagsLogGroupCommand,
    PutAccountPolicyCommand,
    PutDataProtectionPolicyCommand,
    PutDestinationCommand,
    PutDestinationPolicyCommand,
    PutLogEventsCommand,
    PutMetricFilterCommand,
    PutQueryDefinitionCommand,
    PutResourcePolicyCommand,
    PutRetentionPolicyCommand,
    PutSubscriptionFilterCommand,
    StartQueryCommand,
    StopQueryCommand,
    TagLogGroupCommand,
    TagResourceCommand,
    TestMetricFilterCommand,
    UntagLogGroupCommand,
    UntagResourceCommand,
};
export class CloudWatchLogs extends CloudWatchLogsClient {
}
createAggregatedClient(commands, CloudWatchLogs);
