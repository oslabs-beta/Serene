"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lambda = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const AddLayerVersionPermissionCommand_1 = require("./commands/AddLayerVersionPermissionCommand");
const AddPermissionCommand_1 = require("./commands/AddPermissionCommand");
const CreateAliasCommand_1 = require("./commands/CreateAliasCommand");
const CreateCodeSigningConfigCommand_1 = require("./commands/CreateCodeSigningConfigCommand");
const CreateEventSourceMappingCommand_1 = require("./commands/CreateEventSourceMappingCommand");
const CreateFunctionCommand_1 = require("./commands/CreateFunctionCommand");
const CreateFunctionUrlConfigCommand_1 = require("./commands/CreateFunctionUrlConfigCommand");
const DeleteAliasCommand_1 = require("./commands/DeleteAliasCommand");
const DeleteCodeSigningConfigCommand_1 = require("./commands/DeleteCodeSigningConfigCommand");
const DeleteEventSourceMappingCommand_1 = require("./commands/DeleteEventSourceMappingCommand");
const DeleteFunctionCodeSigningConfigCommand_1 = require("./commands/DeleteFunctionCodeSigningConfigCommand");
const DeleteFunctionCommand_1 = require("./commands/DeleteFunctionCommand");
const DeleteFunctionConcurrencyCommand_1 = require("./commands/DeleteFunctionConcurrencyCommand");
const DeleteFunctionEventInvokeConfigCommand_1 = require("./commands/DeleteFunctionEventInvokeConfigCommand");
const DeleteFunctionUrlConfigCommand_1 = require("./commands/DeleteFunctionUrlConfigCommand");
const DeleteLayerVersionCommand_1 = require("./commands/DeleteLayerVersionCommand");
const DeleteProvisionedConcurrencyConfigCommand_1 = require("./commands/DeleteProvisionedConcurrencyConfigCommand");
const GetAccountSettingsCommand_1 = require("./commands/GetAccountSettingsCommand");
const GetAliasCommand_1 = require("./commands/GetAliasCommand");
const GetCodeSigningConfigCommand_1 = require("./commands/GetCodeSigningConfigCommand");
const GetEventSourceMappingCommand_1 = require("./commands/GetEventSourceMappingCommand");
const GetFunctionCodeSigningConfigCommand_1 = require("./commands/GetFunctionCodeSigningConfigCommand");
const GetFunctionCommand_1 = require("./commands/GetFunctionCommand");
const GetFunctionConcurrencyCommand_1 = require("./commands/GetFunctionConcurrencyCommand");
const GetFunctionConfigurationCommand_1 = require("./commands/GetFunctionConfigurationCommand");
const GetFunctionEventInvokeConfigCommand_1 = require("./commands/GetFunctionEventInvokeConfigCommand");
const GetFunctionUrlConfigCommand_1 = require("./commands/GetFunctionUrlConfigCommand");
const GetLayerVersionByArnCommand_1 = require("./commands/GetLayerVersionByArnCommand");
const GetLayerVersionCommand_1 = require("./commands/GetLayerVersionCommand");
const GetLayerVersionPolicyCommand_1 = require("./commands/GetLayerVersionPolicyCommand");
const GetPolicyCommand_1 = require("./commands/GetPolicyCommand");
const GetProvisionedConcurrencyConfigCommand_1 = require("./commands/GetProvisionedConcurrencyConfigCommand");
const GetRuntimeManagementConfigCommand_1 = require("./commands/GetRuntimeManagementConfigCommand");
const InvokeAsyncCommand_1 = require("./commands/InvokeAsyncCommand");
const InvokeCommand_1 = require("./commands/InvokeCommand");
const InvokeWithResponseStreamCommand_1 = require("./commands/InvokeWithResponseStreamCommand");
const ListAliasesCommand_1 = require("./commands/ListAliasesCommand");
const ListCodeSigningConfigsCommand_1 = require("./commands/ListCodeSigningConfigsCommand");
const ListEventSourceMappingsCommand_1 = require("./commands/ListEventSourceMappingsCommand");
const ListFunctionEventInvokeConfigsCommand_1 = require("./commands/ListFunctionEventInvokeConfigsCommand");
const ListFunctionsByCodeSigningConfigCommand_1 = require("./commands/ListFunctionsByCodeSigningConfigCommand");
const ListFunctionsCommand_1 = require("./commands/ListFunctionsCommand");
const ListFunctionUrlConfigsCommand_1 = require("./commands/ListFunctionUrlConfigsCommand");
const ListLayersCommand_1 = require("./commands/ListLayersCommand");
const ListLayerVersionsCommand_1 = require("./commands/ListLayerVersionsCommand");
const ListProvisionedConcurrencyConfigsCommand_1 = require("./commands/ListProvisionedConcurrencyConfigsCommand");
const ListTagsCommand_1 = require("./commands/ListTagsCommand");
const ListVersionsByFunctionCommand_1 = require("./commands/ListVersionsByFunctionCommand");
const PublishLayerVersionCommand_1 = require("./commands/PublishLayerVersionCommand");
const PublishVersionCommand_1 = require("./commands/PublishVersionCommand");
const PutFunctionCodeSigningConfigCommand_1 = require("./commands/PutFunctionCodeSigningConfigCommand");
const PutFunctionConcurrencyCommand_1 = require("./commands/PutFunctionConcurrencyCommand");
const PutFunctionEventInvokeConfigCommand_1 = require("./commands/PutFunctionEventInvokeConfigCommand");
const PutProvisionedConcurrencyConfigCommand_1 = require("./commands/PutProvisionedConcurrencyConfigCommand");
const PutRuntimeManagementConfigCommand_1 = require("./commands/PutRuntimeManagementConfigCommand");
const RemoveLayerVersionPermissionCommand_1 = require("./commands/RemoveLayerVersionPermissionCommand");
const RemovePermissionCommand_1 = require("./commands/RemovePermissionCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAliasCommand_1 = require("./commands/UpdateAliasCommand");
const UpdateCodeSigningConfigCommand_1 = require("./commands/UpdateCodeSigningConfigCommand");
const UpdateEventSourceMappingCommand_1 = require("./commands/UpdateEventSourceMappingCommand");
const UpdateFunctionCodeCommand_1 = require("./commands/UpdateFunctionCodeCommand");
const UpdateFunctionConfigurationCommand_1 = require("./commands/UpdateFunctionConfigurationCommand");
const UpdateFunctionEventInvokeConfigCommand_1 = require("./commands/UpdateFunctionEventInvokeConfigCommand");
const UpdateFunctionUrlConfigCommand_1 = require("./commands/UpdateFunctionUrlConfigCommand");
const LambdaClient_1 = require("./LambdaClient");
const commands = {
    AddLayerVersionPermissionCommand: AddLayerVersionPermissionCommand_1.AddLayerVersionPermissionCommand,
    AddPermissionCommand: AddPermissionCommand_1.AddPermissionCommand,
    CreateAliasCommand: CreateAliasCommand_1.CreateAliasCommand,
    CreateCodeSigningConfigCommand: CreateCodeSigningConfigCommand_1.CreateCodeSigningConfigCommand,
    CreateEventSourceMappingCommand: CreateEventSourceMappingCommand_1.CreateEventSourceMappingCommand,
    CreateFunctionCommand: CreateFunctionCommand_1.CreateFunctionCommand,
    CreateFunctionUrlConfigCommand: CreateFunctionUrlConfigCommand_1.CreateFunctionUrlConfigCommand,
    DeleteAliasCommand: DeleteAliasCommand_1.DeleteAliasCommand,
    DeleteCodeSigningConfigCommand: DeleteCodeSigningConfigCommand_1.DeleteCodeSigningConfigCommand,
    DeleteEventSourceMappingCommand: DeleteEventSourceMappingCommand_1.DeleteEventSourceMappingCommand,
    DeleteFunctionCommand: DeleteFunctionCommand_1.DeleteFunctionCommand,
    DeleteFunctionCodeSigningConfigCommand: DeleteFunctionCodeSigningConfigCommand_1.DeleteFunctionCodeSigningConfigCommand,
    DeleteFunctionConcurrencyCommand: DeleteFunctionConcurrencyCommand_1.DeleteFunctionConcurrencyCommand,
    DeleteFunctionEventInvokeConfigCommand: DeleteFunctionEventInvokeConfigCommand_1.DeleteFunctionEventInvokeConfigCommand,
    DeleteFunctionUrlConfigCommand: DeleteFunctionUrlConfigCommand_1.DeleteFunctionUrlConfigCommand,
    DeleteLayerVersionCommand: DeleteLayerVersionCommand_1.DeleteLayerVersionCommand,
    DeleteProvisionedConcurrencyConfigCommand: DeleteProvisionedConcurrencyConfigCommand_1.DeleteProvisionedConcurrencyConfigCommand,
    GetAccountSettingsCommand: GetAccountSettingsCommand_1.GetAccountSettingsCommand,
    GetAliasCommand: GetAliasCommand_1.GetAliasCommand,
    GetCodeSigningConfigCommand: GetCodeSigningConfigCommand_1.GetCodeSigningConfigCommand,
    GetEventSourceMappingCommand: GetEventSourceMappingCommand_1.GetEventSourceMappingCommand,
    GetFunctionCommand: GetFunctionCommand_1.GetFunctionCommand,
    GetFunctionCodeSigningConfigCommand: GetFunctionCodeSigningConfigCommand_1.GetFunctionCodeSigningConfigCommand,
    GetFunctionConcurrencyCommand: GetFunctionConcurrencyCommand_1.GetFunctionConcurrencyCommand,
    GetFunctionConfigurationCommand: GetFunctionConfigurationCommand_1.GetFunctionConfigurationCommand,
    GetFunctionEventInvokeConfigCommand: GetFunctionEventInvokeConfigCommand_1.GetFunctionEventInvokeConfigCommand,
    GetFunctionUrlConfigCommand: GetFunctionUrlConfigCommand_1.GetFunctionUrlConfigCommand,
    GetLayerVersionCommand: GetLayerVersionCommand_1.GetLayerVersionCommand,
    GetLayerVersionByArnCommand: GetLayerVersionByArnCommand_1.GetLayerVersionByArnCommand,
    GetLayerVersionPolicyCommand: GetLayerVersionPolicyCommand_1.GetLayerVersionPolicyCommand,
    GetPolicyCommand: GetPolicyCommand_1.GetPolicyCommand,
    GetProvisionedConcurrencyConfigCommand: GetProvisionedConcurrencyConfigCommand_1.GetProvisionedConcurrencyConfigCommand,
    GetRuntimeManagementConfigCommand: GetRuntimeManagementConfigCommand_1.GetRuntimeManagementConfigCommand,
    InvokeCommand: InvokeCommand_1.InvokeCommand,
    InvokeAsyncCommand: InvokeAsyncCommand_1.InvokeAsyncCommand,
    InvokeWithResponseStreamCommand: InvokeWithResponseStreamCommand_1.InvokeWithResponseStreamCommand,
    ListAliasesCommand: ListAliasesCommand_1.ListAliasesCommand,
    ListCodeSigningConfigsCommand: ListCodeSigningConfigsCommand_1.ListCodeSigningConfigsCommand,
    ListEventSourceMappingsCommand: ListEventSourceMappingsCommand_1.ListEventSourceMappingsCommand,
    ListFunctionEventInvokeConfigsCommand: ListFunctionEventInvokeConfigsCommand_1.ListFunctionEventInvokeConfigsCommand,
    ListFunctionsCommand: ListFunctionsCommand_1.ListFunctionsCommand,
    ListFunctionsByCodeSigningConfigCommand: ListFunctionsByCodeSigningConfigCommand_1.ListFunctionsByCodeSigningConfigCommand,
    ListFunctionUrlConfigsCommand: ListFunctionUrlConfigsCommand_1.ListFunctionUrlConfigsCommand,
    ListLayersCommand: ListLayersCommand_1.ListLayersCommand,
    ListLayerVersionsCommand: ListLayerVersionsCommand_1.ListLayerVersionsCommand,
    ListProvisionedConcurrencyConfigsCommand: ListProvisionedConcurrencyConfigsCommand_1.ListProvisionedConcurrencyConfigsCommand,
    ListTagsCommand: ListTagsCommand_1.ListTagsCommand,
    ListVersionsByFunctionCommand: ListVersionsByFunctionCommand_1.ListVersionsByFunctionCommand,
    PublishLayerVersionCommand: PublishLayerVersionCommand_1.PublishLayerVersionCommand,
    PublishVersionCommand: PublishVersionCommand_1.PublishVersionCommand,
    PutFunctionCodeSigningConfigCommand: PutFunctionCodeSigningConfigCommand_1.PutFunctionCodeSigningConfigCommand,
    PutFunctionConcurrencyCommand: PutFunctionConcurrencyCommand_1.PutFunctionConcurrencyCommand,
    PutFunctionEventInvokeConfigCommand: PutFunctionEventInvokeConfigCommand_1.PutFunctionEventInvokeConfigCommand,
    PutProvisionedConcurrencyConfigCommand: PutProvisionedConcurrencyConfigCommand_1.PutProvisionedConcurrencyConfigCommand,
    PutRuntimeManagementConfigCommand: PutRuntimeManagementConfigCommand_1.PutRuntimeManagementConfigCommand,
    RemoveLayerVersionPermissionCommand: RemoveLayerVersionPermissionCommand_1.RemoveLayerVersionPermissionCommand,
    RemovePermissionCommand: RemovePermissionCommand_1.RemovePermissionCommand,
    TagResourceCommand: TagResourceCommand_1.TagResourceCommand,
    UntagResourceCommand: UntagResourceCommand_1.UntagResourceCommand,
    UpdateAliasCommand: UpdateAliasCommand_1.UpdateAliasCommand,
    UpdateCodeSigningConfigCommand: UpdateCodeSigningConfigCommand_1.UpdateCodeSigningConfigCommand,
    UpdateEventSourceMappingCommand: UpdateEventSourceMappingCommand_1.UpdateEventSourceMappingCommand,
    UpdateFunctionCodeCommand: UpdateFunctionCodeCommand_1.UpdateFunctionCodeCommand,
    UpdateFunctionConfigurationCommand: UpdateFunctionConfigurationCommand_1.UpdateFunctionConfigurationCommand,
    UpdateFunctionEventInvokeConfigCommand: UpdateFunctionEventInvokeConfigCommand_1.UpdateFunctionEventInvokeConfigCommand,
    UpdateFunctionUrlConfigCommand: UpdateFunctionUrlConfigCommand_1.UpdateFunctionUrlConfigCommand,
};
class Lambda extends LambdaClient_1.LambdaClient {
}
exports.Lambda = Lambda;
(0, smithy_client_1.createAggregatedClient)(commands, Lambda);
