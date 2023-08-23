"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWatchLogs = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const CloudWatchLogsClient_1 = require("./CloudWatchLogsClient");
const AssociateKmsKeyCommand_1 = require("./commands/AssociateKmsKeyCommand");
const CancelExportTaskCommand_1 = require("./commands/CancelExportTaskCommand");
const CreateExportTaskCommand_1 = require("./commands/CreateExportTaskCommand");
const CreateLogGroupCommand_1 = require("./commands/CreateLogGroupCommand");
const CreateLogStreamCommand_1 = require("./commands/CreateLogStreamCommand");
const DeleteAccountPolicyCommand_1 = require("./commands/DeleteAccountPolicyCommand");
const DeleteDataProtectionPolicyCommand_1 = require("./commands/DeleteDataProtectionPolicyCommand");
const DeleteDestinationCommand_1 = require("./commands/DeleteDestinationCommand");
const DeleteLogGroupCommand_1 = require("./commands/DeleteLogGroupCommand");
const DeleteLogStreamCommand_1 = require("./commands/DeleteLogStreamCommand");
const DeleteMetricFilterCommand_1 = require("./commands/DeleteMetricFilterCommand");
const DeleteQueryDefinitionCommand_1 = require("./commands/DeleteQueryDefinitionCommand");
const DeleteResourcePolicyCommand_1 = require("./commands/DeleteResourcePolicyCommand");
const DeleteRetentionPolicyCommand_1 = require("./commands/DeleteRetentionPolicyCommand");
const DeleteSubscriptionFilterCommand_1 = require("./commands/DeleteSubscriptionFilterCommand");
const DescribeAccountPoliciesCommand_1 = require("./commands/DescribeAccountPoliciesCommand");
const DescribeDestinationsCommand_1 = require("./commands/DescribeDestinationsCommand");
const DescribeExportTasksCommand_1 = require("./commands/DescribeExportTasksCommand");
const DescribeLogGroupsCommand_1 = require("./commands/DescribeLogGroupsCommand");
const DescribeLogStreamsCommand_1 = require("./commands/DescribeLogStreamsCommand");
const DescribeMetricFiltersCommand_1 = require("./commands/DescribeMetricFiltersCommand");
const DescribeQueriesCommand_1 = require("./commands/DescribeQueriesCommand");
const DescribeQueryDefinitionsCommand_1 = require("./commands/DescribeQueryDefinitionsCommand");
const DescribeResourcePoliciesCommand_1 = require("./commands/DescribeResourcePoliciesCommand");
const DescribeSubscriptionFiltersCommand_1 = require("./commands/DescribeSubscriptionFiltersCommand");
const DisassociateKmsKeyCommand_1 = require("./commands/DisassociateKmsKeyCommand");
const FilterLogEventsCommand_1 = require("./commands/FilterLogEventsCommand");
const GetDataProtectionPolicyCommand_1 = require("./commands/GetDataProtectionPolicyCommand");
const GetLogEventsCommand_1 = require("./commands/GetLogEventsCommand");
const GetLogGroupFieldsCommand_1 = require("./commands/GetLogGroupFieldsCommand");
const GetLogRecordCommand_1 = require("./commands/GetLogRecordCommand");
const GetQueryResultsCommand_1 = require("./commands/GetQueryResultsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListTagsLogGroupCommand_1 = require("./commands/ListTagsLogGroupCommand");
const PutAccountPolicyCommand_1 = require("./commands/PutAccountPolicyCommand");
const PutDataProtectionPolicyCommand_1 = require("./commands/PutDataProtectionPolicyCommand");
const PutDestinationCommand_1 = require("./commands/PutDestinationCommand");
const PutDestinationPolicyCommand_1 = require("./commands/PutDestinationPolicyCommand");
const PutLogEventsCommand_1 = require("./commands/PutLogEventsCommand");
const PutMetricFilterCommand_1 = require("./commands/PutMetricFilterCommand");
const PutQueryDefinitionCommand_1 = require("./commands/PutQueryDefinitionCommand");
const PutResourcePolicyCommand_1 = require("./commands/PutResourcePolicyCommand");
const PutRetentionPolicyCommand_1 = require("./commands/PutRetentionPolicyCommand");
const PutSubscriptionFilterCommand_1 = require("./commands/PutSubscriptionFilterCommand");
const StartQueryCommand_1 = require("./commands/StartQueryCommand");
const StopQueryCommand_1 = require("./commands/StopQueryCommand");
const TagLogGroupCommand_1 = require("./commands/TagLogGroupCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TestMetricFilterCommand_1 = require("./commands/TestMetricFilterCommand");
const UntagLogGroupCommand_1 = require("./commands/UntagLogGroupCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const commands = {
    AssociateKmsKeyCommand: AssociateKmsKeyCommand_1.AssociateKmsKeyCommand,
    CancelExportTaskCommand: CancelExportTaskCommand_1.CancelExportTaskCommand,
    CreateExportTaskCommand: CreateExportTaskCommand_1.CreateExportTaskCommand,
    CreateLogGroupCommand: CreateLogGroupCommand_1.CreateLogGroupCommand,
    CreateLogStreamCommand: CreateLogStreamCommand_1.CreateLogStreamCommand,
    DeleteAccountPolicyCommand: DeleteAccountPolicyCommand_1.DeleteAccountPolicyCommand,
    DeleteDataProtectionPolicyCommand: DeleteDataProtectionPolicyCommand_1.DeleteDataProtectionPolicyCommand,
    DeleteDestinationCommand: DeleteDestinationCommand_1.DeleteDestinationCommand,
    DeleteLogGroupCommand: DeleteLogGroupCommand_1.DeleteLogGroupCommand,
    DeleteLogStreamCommand: DeleteLogStreamCommand_1.DeleteLogStreamCommand,
    DeleteMetricFilterCommand: DeleteMetricFilterCommand_1.DeleteMetricFilterCommand,
    DeleteQueryDefinitionCommand: DeleteQueryDefinitionCommand_1.DeleteQueryDefinitionCommand,
    DeleteResourcePolicyCommand: DeleteResourcePolicyCommand_1.DeleteResourcePolicyCommand,
    DeleteRetentionPolicyCommand: DeleteRetentionPolicyCommand_1.DeleteRetentionPolicyCommand,
    DeleteSubscriptionFilterCommand: DeleteSubscriptionFilterCommand_1.DeleteSubscriptionFilterCommand,
    DescribeAccountPoliciesCommand: DescribeAccountPoliciesCommand_1.DescribeAccountPoliciesCommand,
    DescribeDestinationsCommand: DescribeDestinationsCommand_1.DescribeDestinationsCommand,
    DescribeExportTasksCommand: DescribeExportTasksCommand_1.DescribeExportTasksCommand,
    DescribeLogGroupsCommand: DescribeLogGroupsCommand_1.DescribeLogGroupsCommand,
    DescribeLogStreamsCommand: DescribeLogStreamsCommand_1.DescribeLogStreamsCommand,
    DescribeMetricFiltersCommand: DescribeMetricFiltersCommand_1.DescribeMetricFiltersCommand,
    DescribeQueriesCommand: DescribeQueriesCommand_1.DescribeQueriesCommand,
    DescribeQueryDefinitionsCommand: DescribeQueryDefinitionsCommand_1.DescribeQueryDefinitionsCommand,
    DescribeResourcePoliciesCommand: DescribeResourcePoliciesCommand_1.DescribeResourcePoliciesCommand,
    DescribeSubscriptionFiltersCommand: DescribeSubscriptionFiltersCommand_1.DescribeSubscriptionFiltersCommand,
    DisassociateKmsKeyCommand: DisassociateKmsKeyCommand_1.DisassociateKmsKeyCommand,
    FilterLogEventsCommand: FilterLogEventsCommand_1.FilterLogEventsCommand,
    GetDataProtectionPolicyCommand: GetDataProtectionPolicyCommand_1.GetDataProtectionPolicyCommand,
    GetLogEventsCommand: GetLogEventsCommand_1.GetLogEventsCommand,
    GetLogGroupFieldsCommand: GetLogGroupFieldsCommand_1.GetLogGroupFieldsCommand,
    GetLogRecordCommand: GetLogRecordCommand_1.GetLogRecordCommand,
    GetQueryResultsCommand: GetQueryResultsCommand_1.GetQueryResultsCommand,
    ListTagsForResourceCommand: ListTagsForResourceCommand_1.ListTagsForResourceCommand,
    ListTagsLogGroupCommand: ListTagsLogGroupCommand_1.ListTagsLogGroupCommand,
    PutAccountPolicyCommand: PutAccountPolicyCommand_1.PutAccountPolicyCommand,
    PutDataProtectionPolicyCommand: PutDataProtectionPolicyCommand_1.PutDataProtectionPolicyCommand,
    PutDestinationCommand: PutDestinationCommand_1.PutDestinationCommand,
    PutDestinationPolicyCommand: PutDestinationPolicyCommand_1.PutDestinationPolicyCommand,
    PutLogEventsCommand: PutLogEventsCommand_1.PutLogEventsCommand,
    PutMetricFilterCommand: PutMetricFilterCommand_1.PutMetricFilterCommand,
    PutQueryDefinitionCommand: PutQueryDefinitionCommand_1.PutQueryDefinitionCommand,
    PutResourcePolicyCommand: PutResourcePolicyCommand_1.PutResourcePolicyCommand,
    PutRetentionPolicyCommand: PutRetentionPolicyCommand_1.PutRetentionPolicyCommand,
    PutSubscriptionFilterCommand: PutSubscriptionFilterCommand_1.PutSubscriptionFilterCommand,
    StartQueryCommand: StartQueryCommand_1.StartQueryCommand,
    StopQueryCommand: StopQueryCommand_1.StopQueryCommand,
    TagLogGroupCommand: TagLogGroupCommand_1.TagLogGroupCommand,
    TagResourceCommand: TagResourceCommand_1.TagResourceCommand,
    TestMetricFilterCommand: TestMetricFilterCommand_1.TestMetricFilterCommand,
    UntagLogGroupCommand: UntagLogGroupCommand_1.UntagLogGroupCommand,
    UntagResourceCommand: UntagResourceCommand_1.UntagResourceCommand,
};
class CloudWatchLogs extends CloudWatchLogsClient_1.CloudWatchLogsClient {
}
exports.CloudWatchLogs = CloudWatchLogs;
(0, smithy_client_1.createAggregatedClient)(commands, CloudWatchLogs);
