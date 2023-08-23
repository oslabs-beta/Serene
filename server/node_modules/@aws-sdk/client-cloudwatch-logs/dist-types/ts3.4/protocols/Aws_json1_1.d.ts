import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import {
  AssociateKmsKeyCommandInput,
  AssociateKmsKeyCommandOutput,
} from "../commands/AssociateKmsKeyCommand";
import {
  CancelExportTaskCommandInput,
  CancelExportTaskCommandOutput,
} from "../commands/CancelExportTaskCommand";
import {
  CreateExportTaskCommandInput,
  CreateExportTaskCommandOutput,
} from "../commands/CreateExportTaskCommand";
import {
  CreateLogGroupCommandInput,
  CreateLogGroupCommandOutput,
} from "../commands/CreateLogGroupCommand";
import {
  CreateLogStreamCommandInput,
  CreateLogStreamCommandOutput,
} from "../commands/CreateLogStreamCommand";
import {
  DeleteAccountPolicyCommandInput,
  DeleteAccountPolicyCommandOutput,
} from "../commands/DeleteAccountPolicyCommand";
import {
  DeleteDataProtectionPolicyCommandInput,
  DeleteDataProtectionPolicyCommandOutput,
} from "../commands/DeleteDataProtectionPolicyCommand";
import {
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput,
} from "../commands/DeleteDestinationCommand";
import {
  DeleteLogGroupCommandInput,
  DeleteLogGroupCommandOutput,
} from "../commands/DeleteLogGroupCommand";
import {
  DeleteLogStreamCommandInput,
  DeleteLogStreamCommandOutput,
} from "../commands/DeleteLogStreamCommand";
import {
  DeleteMetricFilterCommandInput,
  DeleteMetricFilterCommandOutput,
} from "../commands/DeleteMetricFilterCommand";
import {
  DeleteQueryDefinitionCommandInput,
  DeleteQueryDefinitionCommandOutput,
} from "../commands/DeleteQueryDefinitionCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "../commands/DeleteRetentionPolicyCommand";
import {
  DeleteSubscriptionFilterCommandInput,
  DeleteSubscriptionFilterCommandOutput,
} from "../commands/DeleteSubscriptionFilterCommand";
import {
  DescribeAccountPoliciesCommandInput,
  DescribeAccountPoliciesCommandOutput,
} from "../commands/DescribeAccountPoliciesCommand";
import {
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
} from "../commands/DescribeDestinationsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "../commands/DescribeExportTasksCommand";
import {
  DescribeLogGroupsCommandInput,
  DescribeLogGroupsCommandOutput,
} from "../commands/DescribeLogGroupsCommand";
import {
  DescribeLogStreamsCommandInput,
  DescribeLogStreamsCommandOutput,
} from "../commands/DescribeLogStreamsCommand";
import {
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
} from "../commands/DescribeMetricFiltersCommand";
import {
  DescribeQueriesCommandInput,
  DescribeQueriesCommandOutput,
} from "../commands/DescribeQueriesCommand";
import {
  DescribeQueryDefinitionsCommandInput,
  DescribeQueryDefinitionsCommandOutput,
} from "../commands/DescribeQueryDefinitionsCommand";
import {
  DescribeResourcePoliciesCommandInput,
  DescribeResourcePoliciesCommandOutput,
} from "../commands/DescribeResourcePoliciesCommand";
import {
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
} from "../commands/DescribeSubscriptionFiltersCommand";
import {
  DisassociateKmsKeyCommandInput,
  DisassociateKmsKeyCommandOutput,
} from "../commands/DisassociateKmsKeyCommand";
import {
  FilterLogEventsCommandInput,
  FilterLogEventsCommandOutput,
} from "../commands/FilterLogEventsCommand";
import {
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
} from "../commands/GetDataProtectionPolicyCommand";
import {
  GetLogEventsCommandInput,
  GetLogEventsCommandOutput,
} from "../commands/GetLogEventsCommand";
import {
  GetLogGroupFieldsCommandInput,
  GetLogGroupFieldsCommandOutput,
} from "../commands/GetLogGroupFieldsCommand";
import {
  GetLogRecordCommandInput,
  GetLogRecordCommandOutput,
} from "../commands/GetLogRecordCommand";
import {
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "../commands/GetQueryResultsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTagsLogGroupCommandInput,
  ListTagsLogGroupCommandOutput,
} from "../commands/ListTagsLogGroupCommand";
import {
  PutAccountPolicyCommandInput,
  PutAccountPolicyCommandOutput,
} from "../commands/PutAccountPolicyCommand";
import {
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
} from "../commands/PutDataProtectionPolicyCommand";
import {
  PutDestinationCommandInput,
  PutDestinationCommandOutput,
} from "../commands/PutDestinationCommand";
import {
  PutDestinationPolicyCommandInput,
  PutDestinationPolicyCommandOutput,
} from "../commands/PutDestinationPolicyCommand";
import {
  PutLogEventsCommandInput,
  PutLogEventsCommandOutput,
} from "../commands/PutLogEventsCommand";
import {
  PutMetricFilterCommandInput,
  PutMetricFilterCommandOutput,
} from "../commands/PutMetricFilterCommand";
import {
  PutQueryDefinitionCommandInput,
  PutQueryDefinitionCommandOutput,
} from "../commands/PutQueryDefinitionCommand";
import {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "../commands/PutResourcePolicyCommand";
import {
  PutRetentionPolicyCommandInput,
  PutRetentionPolicyCommandOutput,
} from "../commands/PutRetentionPolicyCommand";
import {
  PutSubscriptionFilterCommandInput,
  PutSubscriptionFilterCommandOutput,
} from "../commands/PutSubscriptionFilterCommand";
import {
  StartQueryCommandInput,
  StartQueryCommandOutput,
} from "../commands/StartQueryCommand";
import {
  StopQueryCommandInput,
  StopQueryCommandOutput,
} from "../commands/StopQueryCommand";
import {
  TagLogGroupCommandInput,
  TagLogGroupCommandOutput,
} from "../commands/TagLogGroupCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "../commands/TagResourceCommand";
import {
  TestMetricFilterCommandInput,
  TestMetricFilterCommandOutput,
} from "../commands/TestMetricFilterCommand";
import {
  UntagLogGroupCommandInput,
  UntagLogGroupCommandOutput,
} from "../commands/UntagLogGroupCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "../commands/UntagResourceCommand";
export declare const se_AssociateKmsKeyCommand: (
  input: AssociateKmsKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CancelExportTaskCommand: (
  input: CancelExportTaskCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateExportTaskCommand: (
  input: CreateExportTaskCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateLogGroupCommand: (
  input: CreateLogGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateLogStreamCommand: (
  input: CreateLogStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteAccountPolicyCommand: (
  input: DeleteAccountPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteDataProtectionPolicyCommand: (
  input: DeleteDataProtectionPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteDestinationCommand: (
  input: DeleteDestinationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteLogGroupCommand: (
  input: DeleteLogGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteLogStreamCommand: (
  input: DeleteLogStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteMetricFilterCommand: (
  input: DeleteMetricFilterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteQueryDefinitionCommand: (
  input: DeleteQueryDefinitionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteResourcePolicyCommand: (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteRetentionPolicyCommand: (
  input: DeleteRetentionPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteSubscriptionFilterCommand: (
  input: DeleteSubscriptionFilterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeAccountPoliciesCommand: (
  input: DescribeAccountPoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeDestinationsCommand: (
  input: DescribeDestinationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeExportTasksCommand: (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeLogGroupsCommand: (
  input: DescribeLogGroupsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeLogStreamsCommand: (
  input: DescribeLogStreamsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeMetricFiltersCommand: (
  input: DescribeMetricFiltersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeQueriesCommand: (
  input: DescribeQueriesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeQueryDefinitionsCommand: (
  input: DescribeQueryDefinitionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeResourcePoliciesCommand: (
  input: DescribeResourcePoliciesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeSubscriptionFiltersCommand: (
  input: DescribeSubscriptionFiltersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DisassociateKmsKeyCommand: (
  input: DisassociateKmsKeyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_FilterLogEventsCommand: (
  input: FilterLogEventsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetDataProtectionPolicyCommand: (
  input: GetDataProtectionPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetLogEventsCommand: (
  input: GetLogEventsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetLogGroupFieldsCommand: (
  input: GetLogGroupFieldsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetLogRecordCommand: (
  input: GetLogRecordCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetQueryResultsCommand: (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTagsLogGroupCommand: (
  input: ListTagsLogGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutAccountPolicyCommand: (
  input: PutAccountPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutDataProtectionPolicyCommand: (
  input: PutDataProtectionPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutDestinationCommand: (
  input: PutDestinationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutDestinationPolicyCommand: (
  input: PutDestinationPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutLogEventsCommand: (
  input: PutLogEventsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutMetricFilterCommand: (
  input: PutMetricFilterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutQueryDefinitionCommand: (
  input: PutQueryDefinitionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutResourcePolicyCommand: (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutRetentionPolicyCommand: (
  input: PutRetentionPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutSubscriptionFilterCommand: (
  input: PutSubscriptionFilterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_StartQueryCommand: (
  input: StartQueryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_StopQueryCommand: (
  input: StopQueryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagLogGroupCommand: (
  input: TagLogGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TestMetricFilterCommand: (
  input: TestMetricFilterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagLogGroupCommand: (
  input: UntagLogGroupCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const de_AssociateKmsKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AssociateKmsKeyCommandOutput>;
export declare const de_CancelExportTaskCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CancelExportTaskCommandOutput>;
export declare const de_CreateExportTaskCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateExportTaskCommandOutput>;
export declare const de_CreateLogGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateLogGroupCommandOutput>;
export declare const de_CreateLogStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateLogStreamCommandOutput>;
export declare const de_DeleteAccountPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAccountPolicyCommandOutput>;
export declare const de_DeleteDataProtectionPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDataProtectionPolicyCommandOutput>;
export declare const de_DeleteDestinationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDestinationCommandOutput>;
export declare const de_DeleteLogGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteLogGroupCommandOutput>;
export declare const de_DeleteLogStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteLogStreamCommandOutput>;
export declare const de_DeleteMetricFilterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteMetricFilterCommandOutput>;
export declare const de_DeleteQueryDefinitionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteQueryDefinitionCommandOutput>;
export declare const de_DeleteResourcePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteResourcePolicyCommandOutput>;
export declare const de_DeleteRetentionPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRetentionPolicyCommandOutput>;
export declare const de_DeleteSubscriptionFilterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteSubscriptionFilterCommandOutput>;
export declare const de_DescribeAccountPoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeAccountPoliciesCommandOutput>;
export declare const de_DescribeDestinationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeDestinationsCommandOutput>;
export declare const de_DescribeExportTasksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeExportTasksCommandOutput>;
export declare const de_DescribeLogGroupsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeLogGroupsCommandOutput>;
export declare const de_DescribeLogStreamsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeLogStreamsCommandOutput>;
export declare const de_DescribeMetricFiltersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeMetricFiltersCommandOutput>;
export declare const de_DescribeQueriesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeQueriesCommandOutput>;
export declare const de_DescribeQueryDefinitionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeQueryDefinitionsCommandOutput>;
export declare const de_DescribeResourcePoliciesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeResourcePoliciesCommandOutput>;
export declare const de_DescribeSubscriptionFiltersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeSubscriptionFiltersCommandOutput>;
export declare const de_DisassociateKmsKeyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisassociateKmsKeyCommandOutput>;
export declare const de_FilterLogEventsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<FilterLogEventsCommandOutput>;
export declare const de_GetDataProtectionPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDataProtectionPolicyCommandOutput>;
export declare const de_GetLogEventsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetLogEventsCommandOutput>;
export declare const de_GetLogGroupFieldsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetLogGroupFieldsCommandOutput>;
export declare const de_GetLogRecordCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetLogRecordCommandOutput>;
export declare const de_GetQueryResultsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetQueryResultsCommandOutput>;
export declare const de_ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const de_ListTagsLogGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsLogGroupCommandOutput>;
export declare const de_PutAccountPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutAccountPolicyCommandOutput>;
export declare const de_PutDataProtectionPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutDataProtectionPolicyCommandOutput>;
export declare const de_PutDestinationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutDestinationCommandOutput>;
export declare const de_PutDestinationPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutDestinationPolicyCommandOutput>;
export declare const de_PutLogEventsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutLogEventsCommandOutput>;
export declare const de_PutMetricFilterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutMetricFilterCommandOutput>;
export declare const de_PutQueryDefinitionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutQueryDefinitionCommandOutput>;
export declare const de_PutResourcePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutResourcePolicyCommandOutput>;
export declare const de_PutRetentionPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutRetentionPolicyCommandOutput>;
export declare const de_PutSubscriptionFilterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutSubscriptionFilterCommandOutput>;
export declare const de_StartQueryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartQueryCommandOutput>;
export declare const de_StopQueryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopQueryCommandOutput>;
export declare const de_TagLogGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagLogGroupCommandOutput>;
export declare const de_TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const de_TestMetricFilterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TestMetricFilterCommandOutput>;
export declare const de_UntagLogGroupCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagLogGroupCommandOutput>;
export declare const de_UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
