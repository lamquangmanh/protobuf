# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [action/v1/action.proto](#action_v1_action-proto)
    - [Action](#action-v1-Action)
    - [CreateActionData](#action-v1-CreateActionData)
    - [CreateActionRequest](#action-v1-CreateActionRequest)
    - [CreateSuccess](#action-v1-CreateSuccess)
    - [DeleteActionRequest](#action-v1-DeleteActionRequest)
    - [GetActionRequest](#action-v1-GetActionRequest)
    - [GetActionsRequest](#action-v1-GetActionsRequest)
    - [GetActionsResponse](#action-v1-GetActionsResponse)
    - [UpdateActionRequest](#action-v1-UpdateActionRequest)
  
    - [ActionRequestType](#action-v1-ActionRequestType)
  
    - [ActionService](#action-v1-ActionService)
  
- [base/v1/base.proto](#base_v1_base-proto)
    - [CreateSuccess](#base-v1-CreateSuccess)
    - [DeleteSuccess](#base-v1-DeleteSuccess)
    - [ErrorResponse](#base-v1-ErrorResponse)
    - [Filter](#base-v1-Filter)
    - [PaginationRequest](#base-v1-PaginationRequest)
    - [PaginationResponse](#base-v1-PaginationResponse)
    - [Sort](#base-v1-Sort)
    - [UpdateSuccess](#base-v1-UpdateSuccess)
  
    - [FilterOperator](#base-v1-FilterOperator)
    - [SortOrder](#base-v1-SortOrder)
  
- [module/v1/module.proto](#module_v1_module-proto)
    - [CreateModuleData](#module-v1-CreateModuleData)
    - [CreateModuleRequest](#module-v1-CreateModuleRequest)
    - [CreateSuccess](#module-v1-CreateSuccess)
    - [DeleteModuleRequest](#module-v1-DeleteModuleRequest)
    - [GetModuleRequest](#module-v1-GetModuleRequest)
    - [GetModulesRequest](#module-v1-GetModulesRequest)
    - [GetModulesResponse](#module-v1-GetModulesResponse)
    - [Module](#module-v1-Module)
    - [UpdateModuleRequest](#module-v1-UpdateModuleRequest)
  
    - [ModuleService](#module-v1-ModuleService)
  
- [permission/v1/permission.proto](#permission_v1_permission-proto)
    - [CreatePermissionData](#permission-v1-CreatePermissionData)
    - [CreatePermissionRequest](#permission-v1-CreatePermissionRequest)
    - [CreateSuccess](#permission-v1-CreateSuccess)
    - [DeletePermissionRequest](#permission-v1-DeletePermissionRequest)
    - [GetPermissionRequest](#permission-v1-GetPermissionRequest)
    - [GetPermissionsRequest](#permission-v1-GetPermissionsRequest)
    - [GetPermissionsResponse](#permission-v1-GetPermissionsResponse)
    - [Permission](#permission-v1-Permission)
    - [UpdatePermissionRequest](#permission-v1-UpdatePermissionRequest)
  
    - [PermissionService](#permission-v1-PermissionService)
  
- [resource/v1/resource.proto](#resource_v1_resource-proto)
    - [Action](#resource-v1-Action)
    - [CreateResourceData](#resource-v1-CreateResourceData)
    - [CreateResourceRequest](#resource-v1-CreateResourceRequest)
    - [CreateSuccess](#resource-v1-CreateSuccess)
    - [DeleteResourceRequest](#resource-v1-DeleteResourceRequest)
    - [GetResourceRequest](#resource-v1-GetResourceRequest)
    - [GetResourcesRequest](#resource-v1-GetResourcesRequest)
    - [GetResourcesResponse](#resource-v1-GetResourcesResponse)
    - [Resource](#resource-v1-Resource)
    - [UpdateResourceData](#resource-v1-UpdateResourceData)
    - [UpdateResourceRequest](#resource-v1-UpdateResourceRequest)
  
    - [ResourceService](#resource-v1-ResourceService)
  
- [role/v1/role.proto](#role_v1_role-proto)
    - [CreateRoleData](#role-v1-CreateRoleData)
    - [CreateRoleRequest](#role-v1-CreateRoleRequest)
    - [CreateSuccess](#role-v1-CreateSuccess)
    - [DeleteRoleRequest](#role-v1-DeleteRoleRequest)
    - [GetRoleRequest](#role-v1-GetRoleRequest)
    - [GetRolesRequest](#role-v1-GetRolesRequest)
    - [GetRolesResponse](#role-v1-GetRolesResponse)
    - [Permission](#role-v1-Permission)
    - [Role](#role-v1-Role)
    - [UpdateRoleData](#role-v1-UpdateRoleData)
    - [UpdateRoleRequest](#role-v1-UpdateRoleRequest)
  
    - [RoleService](#role-v1-RoleService)
  
- [user-role/v1/user-role.proto](#user-role_v1_user-role-proto)
    - [CreateSuccess](#user_role-v1-CreateSuccess)
    - [CreateUserRoleData](#user_role-v1-CreateUserRoleData)
    - [CreateUserRoleRequest](#user_role-v1-CreateUserRoleRequest)
    - [DeleteUserRoleRequest](#user_role-v1-DeleteUserRoleRequest)
    - [GetUserRoleRequest](#user_role-v1-GetUserRoleRequest)
    - [GetUserRolesRequest](#user_role-v1-GetUserRolesRequest)
    - [GetUserRolesResponse](#user_role-v1-GetUserRolesResponse)
    - [UpdateUserRoleRequest](#user_role-v1-UpdateUserRoleRequest)
    - [UserRole](#user_role-v1-UserRole)
  
    - [UserRoleService](#user_role-v1-UserRoleService)
  
- [user/v1/user.proto](#user_v1_user-proto)
    - [CreateSuccess](#user-v1-CreateSuccess)
    - [CreateUserData](#user-v1-CreateUserData)
    - [CreateUserRequest](#user-v1-CreateUserRequest)
    - [DeleteUserRequest](#user-v1-DeleteUserRequest)
    - [GetUserRequest](#user-v1-GetUserRequest)
    - [GetUsersRequest](#user-v1-GetUsersRequest)
    - [GetUsersResponse](#user-v1-GetUsersResponse)
    - [UpdateUserRequest](#user-v1-UpdateUserRequest)
    - [User](#user-v1-User)
  
    - [UserStatus](#user-v1-UserStatus)
  
    - [UserService](#user-v1-UserService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="action_v1_action-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## action/v1/action.proto



<a name="action-v1-Action"></a>

### Action



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action_id | [string](#string) |  |  |
| resource_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| request_type | [ActionRequestType](#action-v1-ActionRequestType) |  |  |
| url | [string](#string) |  |  |
| method | [string](#string) |  |  |
| created_at | [string](#string) |  |  |
| created_user_id | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |
| updated_user_id | [string](#string) |  |  |
| deleted_at | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |






<a name="action-v1-CreateActionData"></a>

### CreateActionData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| request_type | [ActionRequestType](#action-v1-ActionRequestType) |  |  |
| url | [string](#string) |  |  |
| method | [string](#string) |  |  |






<a name="action-v1-CreateActionRequest"></a>

### CreateActionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action | [CreateActionData](#action-v1-CreateActionData) |  |  |
| user_id | [string](#string) |  |  |






<a name="action-v1-CreateSuccess"></a>

### CreateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action | [Action](#action-v1-Action) |  |  |
| error | [base.v1.ErrorResponse](#base-v1-ErrorResponse) |  |  |






<a name="action-v1-DeleteActionRequest"></a>

### DeleteActionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="action-v1-GetActionRequest"></a>

### GetActionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action_id | [string](#string) |  |  |






<a name="action-v1-GetActionsRequest"></a>

### GetActionsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationRequest](#base-v1-PaginationRequest) |  |  |
| sort | [base.v1.Sort](#base-v1-Sort) | repeated |  |
| filter | [base.v1.Filter](#base-v1-Filter) | repeated |  |






<a name="action-v1-GetActionsResponse"></a>

### GetActionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationResponse](#base-v1-PaginationResponse) |  |  |
| data | [Action](#action-v1-Action) | repeated |  |






<a name="action-v1-UpdateActionRequest"></a>

### UpdateActionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action | [Action](#action-v1-Action) |  |  |
| user_id | [string](#string) |  |  |





 


<a name="action-v1-ActionRequestType"></a>

### ActionRequestType


| Name | Number | Description |
| ---- | ------ | ----------- |
| VIEW | 0 |  |
| HTTP | 1 |  |
| GRAPHQL | 2 |  |
| GRPC | 3 |  |
| WEBSOCKET | 4 |  |


 

 


<a name="action-v1-ActionService"></a>

### ActionService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetAction | [GetActionRequest](#action-v1-GetActionRequest) | [Action](#action-v1-Action) |  |
| GetActions | [GetActionsRequest](#action-v1-GetActionsRequest) | [GetActionsResponse](#action-v1-GetActionsResponse) |  |
| CreateAction | [CreateActionRequest](#action-v1-CreateActionRequest) | [CreateSuccess](#action-v1-CreateSuccess) |  |
| UpdateAction | [UpdateActionRequest](#action-v1-UpdateActionRequest) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteAction | [DeleteActionRequest](#action-v1-DeleteActionRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="base_v1_base-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## base/v1/base.proto



<a name="base-v1-CreateSuccess"></a>

### CreateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| error | [ErrorResponse](#base-v1-ErrorResponse) |  |  |






<a name="base-v1-DeleteSuccess"></a>

### DeleteSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| error | [ErrorResponse](#base-v1-ErrorResponse) |  |  |






<a name="base-v1-ErrorResponse"></a>

### ErrorResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [int32](#int32) |  |  |
| message | [string](#string) |  |  |
| extra | [google.protobuf.Struct](#google-protobuf-Struct) |  | dynamic key-value object |






<a name="base-v1-Filter"></a>

### Filter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | [string](#string) |  |  |
| operator | [FilterOperator](#base-v1-FilterOperator) |  |  |
| string_value | [string](#string) | optional |  |
| number_value | [string](#string) | optional |  |
| bool_value | [string](#string) | optional |  |
| bool_values | [string](#string) | repeated |  |
| string_values | [string](#string) | repeated |  |
| number_values | [string](#string) | repeated |  |






<a name="base-v1-PaginationRequest"></a>

### PaginationRequest
define message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  |  |
| limit | [int32](#int32) |  |  |






<a name="base-v1-PaginationResponse"></a>

### PaginationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  |  |
| limit | [int32](#int32) |  |  |
| totalItems | [int32](#int32) |  |  |
| totalPages | [int32](#int32) |  |  |
| itemCount | [int32](#int32) |  |  |






<a name="base-v1-Sort"></a>

### Sort



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | [string](#string) |  | created_at, updated_at |
| order | [SortOrder](#base-v1-SortOrder) |  | &#34;ASC&#34; or &#34;DESC&#34; |






<a name="base-v1-UpdateSuccess"></a>

### UpdateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| error | [ErrorResponse](#base-v1-ErrorResponse) |  |  |





 


<a name="base-v1-FilterOperator"></a>

### FilterOperator
define enum

| Name | Number | Description |
| ---- | ------ | ----------- |
| FILTER_OPERATOR_UNSPECIFIED | 0 |  |
| EQUAL | 1 |  |
| NOT_EQUAL | 2 |  |
| GREATER_THAN | 3 |  |
| LESS_THAN | 4 |  |
| GREATER_THAN_OR_EQUAL | 5 |  |
| LESS_THAN_OR_EQUAL | 6 |  |
| LIKE | 7 |  |
| IN | 8 |  |
| NOT_IN | 9 |  |



<a name="base-v1-SortOrder"></a>

### SortOrder


| Name | Number | Description |
| ---- | ------ | ----------- |
| SORT_ORDER_UNSPECIFIED | 0 |  |
| ASC | 1 |  |
| DESC | 2 |  |


 

 

 



<a name="module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## module/v1/module.proto



<a name="module-v1-CreateModuleData"></a>

### CreateModuleData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |






<a name="module-v1-CreateModuleRequest"></a>

### CreateModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [CreateModuleData](#module-v1-CreateModuleData) |  |  |
| user_id | [string](#string) |  |  |






<a name="module-v1-CreateSuccess"></a>

### CreateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [Module](#module-v1-Module) |  |  |
| error | [base.v1.ErrorResponse](#base-v1-ErrorResponse) |  |  |






<a name="module-v1-DeleteModuleRequest"></a>

### DeleteModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="module-v1-GetModuleRequest"></a>

### GetModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_id | [string](#string) |  |  |






<a name="module-v1-GetModulesRequest"></a>

### GetModulesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationRequest](#base-v1-PaginationRequest) |  |  |
| sort | [base.v1.Sort](#base-v1-Sort) | repeated |  |
| filter | [base.v1.Filter](#base-v1-Filter) | repeated |  |






<a name="module-v1-GetModulesResponse"></a>

### GetModulesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationResponse](#base-v1-PaginationResponse) |  |  |
| data | [Module](#module-v1-Module) | repeated |  |






<a name="module-v1-Module"></a>

### Module



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| created_at | [string](#string) |  |  |
| created_user_id | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |
| updated_user_id | [string](#string) |  |  |
| deleted_at | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |






<a name="module-v1-UpdateModuleRequest"></a>

### UpdateModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [Module](#module-v1-Module) |  |  |
| user_id | [string](#string) |  |  |





 

 

 


<a name="module-v1-ModuleService"></a>

### ModuleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetModule | [GetModuleRequest](#module-v1-GetModuleRequest) | [Module](#module-v1-Module) |  |
| GetModules | [GetModulesRequest](#module-v1-GetModulesRequest) | [GetModulesResponse](#module-v1-GetModulesResponse) |  |
| CreateModule | [CreateModuleRequest](#module-v1-CreateModuleRequest) | [CreateSuccess](#module-v1-CreateSuccess) |  |
| UpdateModule | [UpdateModuleRequest](#module-v1-UpdateModuleRequest) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteModule | [DeleteModuleRequest](#module-v1-DeleteModuleRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="permission_v1_permission-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## permission/v1/permission.proto



<a name="permission-v1-CreatePermissionData"></a>

### CreatePermissionData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  |  |
| resource_id | [string](#string) |  |  |
| action_id | [string](#string) |  |  |






<a name="permission-v1-CreatePermissionRequest"></a>

### CreatePermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [CreatePermissionData](#permission-v1-CreatePermissionData) |  |  |
| user_id | [string](#string) |  |  |






<a name="permission-v1-CreateSuccess"></a>

### CreateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [Permission](#permission-v1-Permission) |  |  |
| error | [base.v1.ErrorResponse](#base-v1-ErrorResponse) |  |  |






<a name="permission-v1-DeletePermissionRequest"></a>

### DeletePermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="permission-v1-GetPermissionRequest"></a>

### GetPermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission_id | [string](#string) |  |  |






<a name="permission-v1-GetPermissionsRequest"></a>

### GetPermissionsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationRequest](#base-v1-PaginationRequest) |  |  |
| sort | [base.v1.Sort](#base-v1-Sort) | repeated |  |
| filter | [base.v1.Filter](#base-v1-Filter) | repeated |  |






<a name="permission-v1-GetPermissionsResponse"></a>

### GetPermissionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationResponse](#base-v1-PaginationResponse) |  |  |
| data | [Permission](#permission-v1-Permission) | repeated |  |






<a name="permission-v1-Permission"></a>

### Permission



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission_id | [string](#string) |  |  |
| role_id | [string](#string) |  |  |
| resource_id | [string](#string) |  |  |
| action_id | [string](#string) |  |  |
| created_user_id | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |
| updated_user_id | [string](#string) |  |  |
| deleted_at | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |
| created_at | [string](#string) |  |  |






<a name="permission-v1-UpdatePermissionRequest"></a>

### UpdatePermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [Permission](#permission-v1-Permission) |  |  |
| user_id | [string](#string) |  |  |





 

 

 


<a name="permission-v1-PermissionService"></a>

### PermissionService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetPermission | [GetPermissionRequest](#permission-v1-GetPermissionRequest) | [Permission](#permission-v1-Permission) |  |
| GetPermissions | [GetPermissionsRequest](#permission-v1-GetPermissionsRequest) | [GetPermissionsResponse](#permission-v1-GetPermissionsResponse) |  |
| CreatePermission | [CreatePermissionRequest](#permission-v1-CreatePermissionRequest) | [CreateSuccess](#permission-v1-CreateSuccess) |  |
| UpdatePermission | [UpdatePermissionRequest](#permission-v1-UpdatePermissionRequest) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeletePermission | [DeletePermissionRequest](#permission-v1-DeletePermissionRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="resource_v1_resource-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## resource/v1/resource.proto



<a name="resource-v1-Action"></a>

### Action



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| request_type | [action.v1.ActionRequestType](#action-v1-ActionRequestType) |  |  |
| url | [string](#string) |  |  |
| method | [string](#string) |  |  |
| action_id | [string](#string) | optional |  |






<a name="resource-v1-CreateResourceData"></a>

### CreateResourceData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| module_id | [string](#string) |  |  |
| actions | [Action](#resource-v1-Action) | repeated |  |






<a name="resource-v1-CreateResourceRequest"></a>

### CreateResourceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource | [CreateResourceData](#resource-v1-CreateResourceData) |  |  |
| user_id | [string](#string) |  |  |






<a name="resource-v1-CreateSuccess"></a>

### CreateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource | [Resource](#resource-v1-Resource) |  |  |
| error | [base.v1.ErrorResponse](#base-v1-ErrorResponse) |  |  |






<a name="resource-v1-DeleteResourceRequest"></a>

### DeleteResourceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="resource-v1-GetResourceRequest"></a>

### GetResourceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |






<a name="resource-v1-GetResourcesRequest"></a>

### GetResourcesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationRequest](#base-v1-PaginationRequest) |  |  |
| sort | [base.v1.Sort](#base-v1-Sort) | repeated |  |
| filter | [base.v1.Filter](#base-v1-Filter) | repeated |  |






<a name="resource-v1-GetResourcesResponse"></a>

### GetResourcesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationResponse](#base-v1-PaginationResponse) |  |  |
| data | [Resource](#resource-v1-Resource) | repeated |  |






<a name="resource-v1-Resource"></a>

### Resource



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| module_id | [string](#string) |  |  |
| created_user_id | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |
| updated_user_id | [string](#string) |  |  |
| deleted_at | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |
| created_at | [string](#string) |  |  |






<a name="resource-v1-UpdateResourceData"></a>

### UpdateResourceData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| module_id | [string](#string) |  |  |
| actions | [Action](#resource-v1-Action) | repeated |  |






<a name="resource-v1-UpdateResourceRequest"></a>

### UpdateResourceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource | [UpdateResourceData](#resource-v1-UpdateResourceData) |  |  |
| user_id | [string](#string) |  |  |





 

 

 


<a name="resource-v1-ResourceService"></a>

### ResourceService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetResource | [GetResourceRequest](#resource-v1-GetResourceRequest) | [Resource](#resource-v1-Resource) |  |
| GetResources | [GetResourcesRequest](#resource-v1-GetResourcesRequest) | [GetResourcesResponse](#resource-v1-GetResourcesResponse) |  |
| CreateResource | [CreateResourceRequest](#resource-v1-CreateResourceRequest) | [CreateSuccess](#resource-v1-CreateSuccess) |  |
| UpdateResource | [UpdateResourceRequest](#resource-v1-UpdateResourceRequest) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteResource | [DeleteResourceRequest](#resource-v1-DeleteResourceRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="role_v1_role-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## role/v1/role.proto



<a name="role-v1-CreateRoleData"></a>

### CreateRoleData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| module_id | [string](#string) |  |  |
| permissions | [Permission](#role-v1-Permission) | repeated |  |






<a name="role-v1-CreateRoleRequest"></a>

### CreateRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role | [CreateRoleData](#role-v1-CreateRoleData) |  |  |
| user_id | [string](#string) |  |  |






<a name="role-v1-CreateSuccess"></a>

### CreateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role | [Role](#role-v1-Role) |  |  |
| error | [base.v1.ErrorResponse](#base-v1-ErrorResponse) |  |  |






<a name="role-v1-DeleteRoleRequest"></a>

### DeleteRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="role-v1-GetRoleRequest"></a>

### GetRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  |  |






<a name="role-v1-GetRolesRequest"></a>

### GetRolesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationRequest](#base-v1-PaginationRequest) |  |  |
| sort | [base.v1.Sort](#base-v1-Sort) | repeated |  |
| filter | [base.v1.Filter](#base-v1-Filter) | repeated |  |






<a name="role-v1-GetRolesResponse"></a>

### GetRolesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationResponse](#base-v1-PaginationResponse) |  |  |
| data | [Role](#role-v1-Role) | repeated |  |






<a name="role-v1-Permission"></a>

### Permission



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |
| action_id | [string](#string) |  |  |
| permission_id | [string](#string) | optional |  |






<a name="role-v1-Role"></a>

### Role



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| module_id | [string](#string) |  |  |
| created_user_id | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |
| updated_user_id | [string](#string) |  |  |
| deleted_at | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |
| created_at | [string](#string) |  |  |






<a name="role-v1-UpdateRoleData"></a>

### UpdateRoleData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| module_id | [string](#string) |  |  |
| permissions | [Permission](#role-v1-Permission) | repeated |  |






<a name="role-v1-UpdateRoleRequest"></a>

### UpdateRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role | [UpdateRoleData](#role-v1-UpdateRoleData) |  |  |
| user_id | [string](#string) |  |  |





 

 

 


<a name="role-v1-RoleService"></a>

### RoleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetRole | [GetRoleRequest](#role-v1-GetRoleRequest) | [Role](#role-v1-Role) |  |
| GetRoles | [GetRolesRequest](#role-v1-GetRolesRequest) | [GetRolesResponse](#role-v1-GetRolesResponse) |  |
| CreateRole | [CreateRoleRequest](#role-v1-CreateRoleRequest) | [CreateSuccess](#role-v1-CreateSuccess) |  |
| UpdateRole | [UpdateRoleRequest](#role-v1-UpdateRoleRequest) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteRole | [DeleteRoleRequest](#role-v1-DeleteRoleRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="user-role_v1_user-role-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## user-role/v1/user-role.proto



<a name="user_role-v1-CreateSuccess"></a>

### CreateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role | [UserRole](#user_role-v1-UserRole) |  |  |
| error | [base.v1.ErrorResponse](#base-v1-ErrorResponse) |  |  |






<a name="user_role-v1-CreateUserRoleData"></a>

### CreateUserRoleData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| role_id | [string](#string) |  |  |






<a name="user_role-v1-CreateUserRoleRequest"></a>

### CreateUserRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role | [CreateUserRoleData](#user_role-v1-CreateUserRoleData) |  |  |
| user_id | [string](#string) |  |  |






<a name="user_role-v1-DeleteUserRoleRequest"></a>

### DeleteUserRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="user_role-v1-GetUserRoleRequest"></a>

### GetUserRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role_id | [string](#string) |  |  |






<a name="user_role-v1-GetUserRolesRequest"></a>

### GetUserRolesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationRequest](#base-v1-PaginationRequest) |  |  |
| sort | [base.v1.Sort](#base-v1-Sort) | repeated |  |
| filter | [base.v1.Filter](#base-v1-Filter) | repeated |  |






<a name="user_role-v1-GetUserRolesResponse"></a>

### GetUserRolesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationResponse](#base-v1-PaginationResponse) |  |  |
| data | [UserRole](#user_role-v1-UserRole) | repeated |  |






<a name="user_role-v1-UpdateUserRoleRequest"></a>

### UpdateUserRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role | [UserRole](#user_role-v1-UserRole) |  |  |
| user_id | [string](#string) |  |  |






<a name="user_role-v1-UserRole"></a>

### UserRole



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |
| role_id | [string](#string) |  |  |
| created_user_id | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |
| updated_user_id | [string](#string) |  |  |
| deleted_at | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |
| created_at | [string](#string) |  |  |





 

 

 


<a name="user_role-v1-UserRoleService"></a>

### UserRoleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUserRole | [GetUserRoleRequest](#user_role-v1-GetUserRoleRequest) | [UserRole](#user_role-v1-UserRole) |  |
| GetUserRoles | [GetUserRolesRequest](#user_role-v1-GetUserRolesRequest) | [GetUserRolesRequest](#user_role-v1-GetUserRolesRequest) |  |
| CreateUserRole | [CreateUserRoleRequest](#user_role-v1-CreateUserRoleRequest) | [CreateSuccess](#user_role-v1-CreateSuccess) |  |
| UpdateUserRole | [UpdateUserRoleRequest](#user_role-v1-UpdateUserRoleRequest) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteUserRole | [DeleteUserRoleRequest](#user_role-v1-DeleteUserRoleRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="user_v1_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## user/v1/user.proto



<a name="user-v1-CreateSuccess"></a>

### CreateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [User](#user-v1-User) |  |  |
| error | [base.v1.ErrorResponse](#base-v1-ErrorResponse) |  |  |






<a name="user-v1-CreateUserData"></a>

### CreateUserData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |
| phone | [string](#string) |  |  |
| avatar | [string](#string) |  |  |
| status | [UserStatus](#user-v1-UserStatus) |  |  |






<a name="user-v1-CreateUserRequest"></a>

### CreateUserRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [CreateUserData](#user-v1-CreateUserData) |  |  |
| user_id | [string](#string) |  |  |






<a name="user-v1-DeleteUserRequest"></a>

### DeleteUserRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |






<a name="user-v1-GetUserRequest"></a>

### GetUserRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="user-v1-GetUsersRequest"></a>

### GetUsersRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationRequest](#base-v1-PaginationRequest) |  |  |
| sort | [base.v1.Sort](#base-v1-Sort) | repeated |  |
| filter | [base.v1.Filter](#base-v1-Filter) | repeated |  |






<a name="user-v1-GetUsersResponse"></a>

### GetUsersResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [base.v1.PaginationResponse](#base-v1-PaginationResponse) |  |  |
| data | [User](#user-v1-User) | repeated |  |






<a name="user-v1-UpdateUserRequest"></a>

### UpdateUserRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [User](#user-v1-User) |  |  |
| user_id | [string](#string) |  |  |






<a name="user-v1-User"></a>

### User



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| phone | [string](#string) |  |  |
| avatar | [string](#string) |  |  |
| status | [UserStatus](#user-v1-UserStatus) |  |  |
| created_at | [string](#string) |  |  |
| created_user_id | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |
| updated_user_id | [string](#string) |  |  |
| deleted_at | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |





 


<a name="user-v1-UserStatus"></a>

### UserStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| USER_STATUS_UNSPECIFIED | 0 |  |
| ACTIVE | 1 |  |
| DEACTIVATED | 2 |  |
| DELETED | 3 |  |


 

 


<a name="user-v1-UserService"></a>

### UserService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUser | [GetUserRequest](#user-v1-GetUserRequest) | [User](#user-v1-User) |  |
| GetUsers | [GetUsersRequest](#user-v1-GetUsersRequest) | [GetUsersResponse](#user-v1-GetUsersResponse) |  |
| CreateUser | [CreateUserRequest](#user-v1-CreateUserRequest) | [CreateSuccess](#user-v1-CreateSuccess) |  |
| UpdateUser | [UpdateUserRequest](#user-v1-UpdateUserRequest) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteUser | [DeleteUserRequest](#user-v1-DeleteUserRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

