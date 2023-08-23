import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import { AssociateKmsKeyCommandInput, AssociateKmsKeyCommandOutput } from "../commands/AssociateKmsKeyCommand";
import { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "../commands/CancelExportTaskCommand";
import { CreateExportTaskCommandInput, CreateExportTaskCommandOutput } from "../commands/CreateExportTaskCommand";
import { CreateLogGroupCommandInput, CreateLogGroupCommandOutput } from "../commands/CreateLogGroupCommand";
import { CreateLogStreamCommandInput, CreateLogStreamCommandOutput } from "../commands/CreateLogStreamCommand";
import { DeleteAccountPolicyCommandInput, DeleteAccountPolicyCommandOutput } from "../commands/DeleteAccountPolicyCommand";
import { DeleteDataProtectionPolicyCommandInput, DeleteDataProtectionPolicyCommandOutput } from "../commands/DeleteDataProtectionPolicyCommand";
import { DeleteDestinationCommandInput, DeleteDestinationCommandOutput } from "../commands/DeleteDestinationCommand";
import { DeleteLogGroupCommandInput, DeleteLogGroupCommandOutput } from "../commands/DeleteLogGroupCommand";
import { DeleteLogStreamCommandInput, DeleteLogStreamCommandOutput } from "../commands/DeleteLogStreamCommand";
import { DeleteMetricFilterCommandInput, DeleteMetricFilterCommandOutput } from "../commands/DeleteMetricFilterCommand";
import { DeleteQueryDefinitionCommandInput, DeleteQueryDefinitionCommandOutput } from "../commands/DeleteQueryDefinitionCommand";
import { DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput } from "../commands/DeleteResourcePolicyCommand";
import { DeleteRetentionPolicyCommandInput, DeleteRetentionPolicyCommandOutput } from "../commands/DeleteRetentionPolicyCommand";
import { DeleteSubscriptionFilterCommandInput, DeleteSubscriptionFilterCommandOutput } from "../commands/DeleteSubscriptionFilterCommand";
import { DescribeAccountPoliciesCommandInput, DescribeAccountPoliciesCommandOutput } from "../commands/DescribeAccountPoliciesCommand";
import { DescribeDestinationsCommandInput, DescribeDestinationsCommandOutput } from "../commands/DescribeDestinationsCommand";
import { DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput } from "../commands/DescribeExportTasksCommand";
import { DescribeLogGroupsCommandInput, DescribeLogGroupsCommandOutput } from "../commands/DescribeLogGroupsCommand";
import { DescribeLogStreamsCommandInput, DescribeLogStreamsCommandOutput } from "../commands/DescribeLogStreamsCommand";
import { DescribeMetricFiltersCommandInput, DescribeMetricFiltersCommandOutput } from "../commands/DescribeMetricFiltersCommand";
import { DescribeQueriesCommandInput, DescribeQueriesCommandOutput } from "../commands/DescribeQueriesCommand";
import { DescribeQueryDefinitionsCommandInput, DescribeQueryDefinitionsCommandOutput } from "../commands/DescribeQueryDefinitionsCommand";
import { DescribeResourcePoliciesCommandInput, DescribeResourcePoliciesCommandOutput } from "../commands/DescribeResourcePoliciesCommand";
import { DescribeSubscriptionFiltersCommandInput, DescribeSubscriptionFiltersCommandOutput } from "../commands/DescribeSubscriptionFiltersCommand";
import { DisassociateKmsKeyCommandInput, DisassociateKmsKeyCommandOutput } from "../commands/DisassociateKmsKeyCommand";
import { FilterLogEventsCommandInput, FilterLogEventsCommandOutput } from "../commands/FilterLogEventsCommand";
import { GetDataProtectionPolicyCommandInput, GetDataProtectionPolicyCommandOutput } from "../commands/GetDataProtectionPolicyCommand";
import { GetLogEventsCommandInput, GetLogEventsCommandOutput } from "../commands/GetLogEventsCommand";
import { GetLogGroupFieldsCommandInput, GetLogGroupFieldsCommandOutput } from "../commands/GetLogGroupFieldsCommand";
import { GetLogRecordCommandInput, GetLogRecordCommandOutput } from "../commands/GetLogRecordCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "../commands/GetQueryResultsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { ListTagsLogGroupCommandInput, ListTagsLogGroupCommandOutput } from "../commands/ListTagsLogGroupCommand";
import { PutAccountPolicyCommandInput, PutAccountPolicyCommandOutput } from "../commands/PutAccountPolicyCommand";
import { PutDataProtectionPolicyCommandInput, PutDataProtectionPolicyCommandOutput } from "../commands/PutDataProtectionPolicyCommand";
import { PutDestinationCommandInput, PutDestinationCommandOutput } from "../commands/PutDestinationCommand";
import { PutDestinationPolicyCommandInput, PutDestinationPolicyCommandOutput } from "../commands/PutDestinationPolicyCommand";
import { PutLogEventsCommandInput, PutLogEventsCommandOutput } from "../commands/PutLogEventsCommand";
import { PutMetricFilterCommandInput, PutMetricFilterCommandOutput } from "../commands/PutMetricFilterCommand";
import { PutQueryDefinitionCommandInput, PutQueryDefinitionCommandOutput } from "../commands/PutQueryDefinitionCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput } from "../commands/PutRetentionPolicyCommand";
import { PutSubscriptionFilterCommandInput, PutSubscriptionFilterCommandOutput } from "../commands/PutSubscriptionFilterCommand";
import { StartQueryCommandInput, StartQueryCommandOutput } from "../commands/StartQueryCommand";
import { StopQueryCommandInput, StopQueryCommandOutput } from "../commands/StopQueryCommand";
import { TagLogGroupCommandInput, TagLogGroupCommandOutput } from "../commands/TagLogGroupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestMetricFilterCommandInput, TestMetricFilterCommandOutput } from "../commands/TestMetricFilterCommand";
import { UntagLogGroupCommandInput, UntagLogGroupCommandOutput } from "../commands/UntagLogGroupCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
/**
 * serializeAws_json1_1AssociateKmsKeyCommand
 */
export declare const se_AssociateKmsKeyCommand: (input: AssociateKmsKeyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CancelExportTaskCommand
 */
export declare const se_CancelExportTaskCommand: (input: CancelExportTaskCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateExportTaskCommand
 */
export declare const se_CreateExportTaskCommand: (input: CreateExportTaskCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateLogGroupCommand
 */
export declare const se_CreateLogGroupCommand: (input: CreateLogGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateLogStreamCommand
 */
export declare const se_CreateLogStreamCommand: (input: CreateLogStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteAccountPolicyCommand
 */
export declare const se_DeleteAccountPolicyCommand: (input: DeleteAccountPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteDataProtectionPolicyCommand
 */
export declare const se_DeleteDataProtectionPolicyCommand: (input: DeleteDataProtectionPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteDestinationCommand
 */
export declare const se_DeleteDestinationCommand: (input: DeleteDestinationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteLogGroupCommand
 */
export declare const se_DeleteLogGroupCommand: (input: DeleteLogGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteLogStreamCommand
 */
export declare const se_DeleteLogStreamCommand: (input: DeleteLogStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteMetricFilterCommand
 */
export declare const se_DeleteMetricFilterCommand: (input: DeleteMetricFilterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteQueryDefinitionCommand
 */
export declare const se_DeleteQueryDefinitionCommand: (input: DeleteQueryDefinitionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export declare const se_DeleteResourcePolicyCommand: (input: DeleteResourcePolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteRetentionPolicyCommand
 */
export declare const se_DeleteRetentionPolicyCommand: (input: DeleteRetentionPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteSubscriptionFilterCommand
 */
export declare const se_DeleteSubscriptionFilterCommand: (input: DeleteSubscriptionFilterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeAccountPoliciesCommand
 */
export declare const se_DescribeAccountPoliciesCommand: (input: DescribeAccountPoliciesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeDestinationsCommand
 */
export declare const se_DescribeDestinationsCommand: (input: DescribeDestinationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeExportTasksCommand
 */
export declare const se_DescribeExportTasksCommand: (input: DescribeExportTasksCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeLogGroupsCommand
 */
export declare const se_DescribeLogGroupsCommand: (input: DescribeLogGroupsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeLogStreamsCommand
 */
export declare const se_DescribeLogStreamsCommand: (input: DescribeLogStreamsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeMetricFiltersCommand
 */
export declare const se_DescribeMetricFiltersCommand: (input: DescribeMetricFiltersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeQueriesCommand
 */
export declare const se_DescribeQueriesCommand: (input: DescribeQueriesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeQueryDefinitionsCommand
 */
export declare const se_DescribeQueryDefinitionsCommand: (input: DescribeQueryDefinitionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeResourcePoliciesCommand
 */
export declare const se_DescribeResourcePoliciesCommand: (input: DescribeResourcePoliciesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeSubscriptionFiltersCommand
 */
export declare const se_DescribeSubscriptionFiltersCommand: (input: DescribeSubscriptionFiltersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DisassociateKmsKeyCommand
 */
export declare const se_DisassociateKmsKeyCommand: (input: DisassociateKmsKeyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1FilterLogEventsCommand
 */
export declare const se_FilterLogEventsCommand: (input: FilterLogEventsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetDataProtectionPolicyCommand
 */
export declare const se_GetDataProtectionPolicyCommand: (input: GetDataProtectionPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetLogEventsCommand
 */
export declare const se_GetLogEventsCommand: (input: GetLogEventsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetLogGroupFieldsCommand
 */
export declare const se_GetLogGroupFieldsCommand: (input: GetLogGroupFieldsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetLogRecordCommand
 */
export declare const se_GetLogRecordCommand: (input: GetLogRecordCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetQueryResultsCommand
 */
export declare const se_GetQueryResultsCommand: (input: GetQueryResultsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export declare const se_ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListTagsLogGroupCommand
 */
export declare const se_ListTagsLogGroupCommand: (input: ListTagsLogGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutAccountPolicyCommand
 */
export declare const se_PutAccountPolicyCommand: (input: PutAccountPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutDataProtectionPolicyCommand
 */
export declare const se_PutDataProtectionPolicyCommand: (input: PutDataProtectionPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutDestinationCommand
 */
export declare const se_PutDestinationCommand: (input: PutDestinationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutDestinationPolicyCommand
 */
export declare const se_PutDestinationPolicyCommand: (input: PutDestinationPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutLogEventsCommand
 */
export declare const se_PutLogEventsCommand: (input: PutLogEventsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutMetricFilterCommand
 */
export declare const se_PutMetricFilterCommand: (input: PutMetricFilterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutQueryDefinitionCommand
 */
export declare const se_PutQueryDefinitionCommand: (input: PutQueryDefinitionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export declare const se_PutResourcePolicyCommand: (input: PutResourcePolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutRetentionPolicyCommand
 */
export declare const se_PutRetentionPolicyCommand: (input: PutRetentionPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutSubscriptionFilterCommand
 */
export declare const se_PutSubscriptionFilterCommand: (input: PutSubscriptionFilterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1StartQueryCommand
 */
export declare const se_StartQueryCommand: (input: StartQueryCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1StopQueryCommand
 */
export declare const se_StopQueryCommand: (input: StopQueryCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1TagLogGroupCommand
 */
export declare const se_TagLogGroupCommand: (input: TagLogGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1TagResourceCommand
 */
export declare const se_TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1TestMetricFilterCommand
 */
export declare const se_TestMetricFilterCommand: (input: TestMetricFilterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UntagLogGroupCommand
 */
export declare const se_UntagLogGroupCommand: (input: UntagLogGroupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UntagResourceCommand
 */
export declare const se_UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * deserializeAws_json1_1AssociateKmsKeyCommand
 */
export declare const de_AssociateKmsKeyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AssociateKmsKeyCommandOutput>;
/**
 * deserializeAws_json1_1CancelExportTaskCommand
 */
export declare const de_CancelExportTaskCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CancelExportTaskCommandOutput>;
/**
 * deserializeAws_json1_1CreateExportTaskCommand
 */
export declare const de_CreateExportTaskCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateExportTaskCommandOutput>;
/**
 * deserializeAws_json1_1CreateLogGroupCommand
 */
export declare const de_CreateLogGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLogGroupCommandOutput>;
/**
 * deserializeAws_json1_1CreateLogStreamCommand
 */
export declare const de_CreateLogStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLogStreamCommandOutput>;
/**
 * deserializeAws_json1_1DeleteAccountPolicyCommand
 */
export declare const de_DeleteAccountPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteAccountPolicyCommandOutput>;
/**
 * deserializeAws_json1_1DeleteDataProtectionPolicyCommand
 */
export declare const de_DeleteDataProtectionPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteDataProtectionPolicyCommandOutput>;
/**
 * deserializeAws_json1_1DeleteDestinationCommand
 */
export declare const de_DeleteDestinationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteDestinationCommandOutput>;
/**
 * deserializeAws_json1_1DeleteLogGroupCommand
 */
export declare const de_DeleteLogGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLogGroupCommandOutput>;
/**
 * deserializeAws_json1_1DeleteLogStreamCommand
 */
export declare const de_DeleteLogStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLogStreamCommandOutput>;
/**
 * deserializeAws_json1_1DeleteMetricFilterCommand
 */
export declare const de_DeleteMetricFilterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteMetricFilterCommandOutput>;
/**
 * deserializeAws_json1_1DeleteQueryDefinitionCommand
 */
export declare const de_DeleteQueryDefinitionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteQueryDefinitionCommandOutput>;
/**
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export declare const de_DeleteResourcePolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteResourcePolicyCommandOutput>;
/**
 * deserializeAws_json1_1DeleteRetentionPolicyCommand
 */
export declare const de_DeleteRetentionPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteRetentionPolicyCommandOutput>;
/**
 * deserializeAws_json1_1DeleteSubscriptionFilterCommand
 */
export declare const de_DeleteSubscriptionFilterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteSubscriptionFilterCommandOutput>;
/**
 * deserializeAws_json1_1DescribeAccountPoliciesCommand
 */
export declare const de_DescribeAccountPoliciesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeAccountPoliciesCommandOutput>;
/**
 * deserializeAws_json1_1DescribeDestinationsCommand
 */
export declare const de_DescribeDestinationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeDestinationsCommandOutput>;
/**
 * deserializeAws_json1_1DescribeExportTasksCommand
 */
export declare const de_DescribeExportTasksCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeExportTasksCommandOutput>;
/**
 * deserializeAws_json1_1DescribeLogGroupsCommand
 */
export declare const de_DescribeLogGroupsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeLogGroupsCommandOutput>;
/**
 * deserializeAws_json1_1DescribeLogStreamsCommand
 */
export declare const de_DescribeLogStreamsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeLogStreamsCommandOutput>;
/**
 * deserializeAws_json1_1DescribeMetricFiltersCommand
 */
export declare const de_DescribeMetricFiltersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeMetricFiltersCommandOutput>;
/**
 * deserializeAws_json1_1DescribeQueriesCommand
 */
export declare const de_DescribeQueriesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeQueriesCommandOutput>;
/**
 * deserializeAws_json1_1DescribeQueryDefinitionsCommand
 */
export declare const de_DescribeQueryDefinitionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeQueryDefinitionsCommandOutput>;
/**
 * deserializeAws_json1_1DescribeResourcePoliciesCommand
 */
export declare const de_DescribeResourcePoliciesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeResourcePoliciesCommandOutput>;
/**
 * deserializeAws_json1_1DescribeSubscriptionFiltersCommand
 */
export declare const de_DescribeSubscriptionFiltersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeSubscriptionFiltersCommandOutput>;
/**
 * deserializeAws_json1_1DisassociateKmsKeyCommand
 */
export declare const de_DisassociateKmsKeyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisassociateKmsKeyCommandOutput>;
/**
 * deserializeAws_json1_1FilterLogEventsCommand
 */
export declare const de_FilterLogEventsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<FilterLogEventsCommandOutput>;
/**
 * deserializeAws_json1_1GetDataProtectionPolicyCommand
 */
export declare const de_GetDataProtectionPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDataProtectionPolicyCommandOutput>;
/**
 * deserializeAws_json1_1GetLogEventsCommand
 */
export declare const de_GetLogEventsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLogEventsCommandOutput>;
/**
 * deserializeAws_json1_1GetLogGroupFieldsCommand
 */
export declare const de_GetLogGroupFieldsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLogGroupFieldsCommandOutput>;
/**
 * deserializeAws_json1_1GetLogRecordCommand
 */
export declare const de_GetLogRecordCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLogRecordCommandOutput>;
/**
 * deserializeAws_json1_1GetQueryResultsCommand
 */
export declare const de_GetQueryResultsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetQueryResultsCommandOutput>;
/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export declare const de_ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
/**
 * deserializeAws_json1_1ListTagsLogGroupCommand
 */
export declare const de_ListTagsLogGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsLogGroupCommandOutput>;
/**
 * deserializeAws_json1_1PutAccountPolicyCommand
 */
export declare const de_PutAccountPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutAccountPolicyCommandOutput>;
/**
 * deserializeAws_json1_1PutDataProtectionPolicyCommand
 */
export declare const de_PutDataProtectionPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutDataProtectionPolicyCommandOutput>;
/**
 * deserializeAws_json1_1PutDestinationCommand
 */
export declare const de_PutDestinationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutDestinationCommandOutput>;
/**
 * deserializeAws_json1_1PutDestinationPolicyCommand
 */
export declare const de_PutDestinationPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutDestinationPolicyCommandOutput>;
/**
 * deserializeAws_json1_1PutLogEventsCommand
 */
export declare const de_PutLogEventsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutLogEventsCommandOutput>;
/**
 * deserializeAws_json1_1PutMetricFilterCommand
 */
export declare const de_PutMetricFilterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutMetricFilterCommandOutput>;
/**
 * deserializeAws_json1_1PutQueryDefinitionCommand
 */
export declare const de_PutQueryDefinitionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutQueryDefinitionCommandOutput>;
/**
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export declare const de_PutResourcePolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutResourcePolicyCommandOutput>;
/**
 * deserializeAws_json1_1PutRetentionPolicyCommand
 */
export declare const de_PutRetentionPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutRetentionPolicyCommandOutput>;
/**
 * deserializeAws_json1_1PutSubscriptionFilterCommand
 */
export declare const de_PutSubscriptionFilterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutSubscriptionFilterCommandOutput>;
/**
 * deserializeAws_json1_1StartQueryCommand
 */
export declare const de_StartQueryCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartQueryCommandOutput>;
/**
 * deserializeAws_json1_1StopQueryCommand
 */
export declare const de_StopQueryCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StopQueryCommandOutput>;
/**
 * deserializeAws_json1_1TagLogGroupCommand
 */
export declare const de_TagLogGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagLogGroupCommandOutput>;
/**
 * deserializeAws_json1_1TagResourceCommand
 */
export declare const de_TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
/**
 * deserializeAws_json1_1TestMetricFilterCommand
 */
export declare const de_TestMetricFilterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TestMetricFilterCommandOutput>;
/**
 * deserializeAws_json1_1UntagLogGroupCommand
 */
export declare const de_UntagLogGroupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagLogGroupCommandOutput>;
/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export declare const de_UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
