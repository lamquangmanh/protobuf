# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [action/v1/action.proto](#action_v1_action-proto)
    - [Action](#action-v1-Action)
    - [GetActionRequest](#action-v1-GetActionRequest)
    - [GetActionsRequest](#action-v1-GetActionsRequest)
    - [GetActionsResponse](#action-v1-GetActionsResponse)
  
    - [ActionRequestType](#action-v1-ActionRequestType)
  
    - [ActionService](#action-v1-ActionService)
  
- [base/v1/base.proto](#base_v1_base-proto)
    - [CreateSuccess](#base-v1-CreateSuccess)
    - [DeleteSuccess](#base-v1-DeleteSuccess)
    - [Filter](#base-v1-Filter)
    - [PaginationRequest](#base-v1-PaginationRequest)
    - [PaginationResponse](#base-v1-PaginationResponse)
    - [Sort](#base-v1-Sort)
    - [UpdateSuccess](#base-v1-UpdateSuccess)
  
    - [FilterOperator](#base-v1-FilterOperator)
    - [SortOrder](#base-v1-SortOrder)
  
- [module/v1/module.proto](#module_v1_module-proto)
    - [GetModuleRequest](#module-v1-GetModuleRequest)
    - [GetModulesRequest](#module-v1-GetModulesRequest)
    - [GetModulesResponse](#module-v1-GetModulesResponse)
    - [Module](#module-v1-Module)
  
    - [ModuleService](#module-v1-ModuleService)
  
- [permission/v1/permission.proto](#permission_v1_permission-proto)
    - [GetPermissionRequest](#permission-v1-GetPermissionRequest)
    - [GetPermissionsRequest](#permission-v1-GetPermissionsRequest)
    - [GetPermissionsResponse](#permission-v1-GetPermissionsResponse)
    - [Permission](#permission-v1-Permission)
  
    - [PermissionService](#permission-v1-PermissionService)
  
- [resource/v1/resource.proto](#resource_v1_resource-proto)
    - [GetResourceRequest](#resource-v1-GetResourceRequest)
    - [GetResourcesRequest](#resource-v1-GetResourcesRequest)
    - [GetResourcesResponse](#resource-v1-GetResourcesResponse)
    - [Resource](#resource-v1-Resource)
  
    - [ResourceService](#resource-v1-ResourceService)
  
- [role/v1/role.proto](#role_v1_role-proto)
    - [GetRoleRequest](#role-v1-GetRoleRequest)
    - [GetRolesRequest](#role-v1-GetRolesRequest)
    - [GetRolesResponse](#role-v1-GetRolesResponse)
    - [Role](#role-v1-Role)
  
    - [RoleService](#role-v1-RoleService)
  
- [user-role/v1/user-role.proto](#user-role_v1_user-role-proto)
    - [GetUserRoleRequest](#user_role-v1-GetUserRoleRequest)
    - [GetUserRolesRequest](#user_role-v1-GetUserRolesRequest)
    - [GetUserRolesResponse](#user_role-v1-GetUserRolesResponse)
    - [UserRole](#user_role-v1-UserRole)
  
    - [UserRoleService](#user_role-v1-UserRoleService)
  
- [user/v1/user.proto](#user_v1_user-proto)
    - [GetUserRequest](#user-v1-GetUserRequest)
    - [GetUsersRequest](#user-v1-GetUsersRequest)
    - [GetUsersResponse](#user-v1-GetUsersResponse)
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
| ActionRequestType | [string](#string) |  |  |
| url | [string](#string) |  |  |
| method | [string](#string) |  |  |






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
| CreateAction | [Action](#action-v1-Action) | [.base.v1.CreateSuccess](#base-v1-CreateSuccess) |  |
| UpdateAction | [Action](#action-v1-Action) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteAction | [GetActionRequest](#action-v1-GetActionRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="base_v1_base-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## base/v1/base.proto



<a name="base-v1-CreateSuccess"></a>

### CreateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |






<a name="base-v1-DeleteSuccess"></a>

### DeleteSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |






<a name="base-v1-Filter"></a>

### Filter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | [string](#string) |  |  |
| operator | [FilterOperator](#base-v1-FilterOperator) |  | &#34;eq&#34;, &#34;ne&#34;, &#34;gt&#34;, &#34;lt&#34;, &#34;gte&#34;, &#34;lte&#34;, &#34;like&#34;, &#34;in&#34;, &#34;nin&#34; |
| value | [google.protobuf.Any](#google-protobuf-Any) |  | oneof value { string string_value = 3; int32 int_value = 4; double double_value = 5; bool bool_value = 6; google.protobuf.Timestamp timestamp_value = 7; repeated string array_string_value = 8; repeated int32 array_int_value = 9; repeated double array_double_value = 10; } |






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





 


<a name="base-v1-FilterOperator"></a>

### FilterOperator
define enum

| Name | Number | Description |
| ---- | ------ | ----------- |
| EQUAL | 0 |  |
| NOT_EQUAL | 1 |  |
| GREATER_THAN | 2 |  |
| LESS_THAN | 3 |  |
| GREATER_THAN_OR_EQUAL | 4 |  |
| LESS_THAN_OR_EQUAL | 5 |  |
| LIKE | 6 |  |
| IN | 7 |  |
| NOT_IN | 8 |  |



<a name="base-v1-SortOrder"></a>

### SortOrder


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNSPECIFIED | 0 |  |
| ASC | 1 |  |
| DESC | 2 |  |


 

 

 



<a name="module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## module/v1/module.proto



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





 

 

 


<a name="module-v1-ModuleService"></a>

### ModuleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetModule | [GetModuleRequest](#module-v1-GetModuleRequest) | [Module](#module-v1-Module) |  |
| GetModules | [GetModulesRequest](#module-v1-GetModulesRequest) | [GetModulesResponse](#module-v1-GetModulesResponse) |  |
| CreateModule | [Module](#module-v1-Module) | [.base.v1.CreateSuccess](#base-v1-CreateSuccess) |  |
| UpdateModule | [Module](#module-v1-Module) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteModule | [GetModuleRequest](#module-v1-GetModuleRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="permission_v1_permission-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## permission/v1/permission.proto



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





 

 

 


<a name="permission-v1-PermissionService"></a>

### PermissionService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetPermission | [GetPermissionRequest](#permission-v1-GetPermissionRequest) | [Permission](#permission-v1-Permission) |  |
| GetPermissions | [GetPermissionsRequest](#permission-v1-GetPermissionsRequest) | [GetPermissionsResponse](#permission-v1-GetPermissionsResponse) |  |
| CreatePermission | [Permission](#permission-v1-Permission) | [.base.v1.CreateSuccess](#base-v1-CreateSuccess) |  |
| UpdatePermission | [Permission](#permission-v1-Permission) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeletePermission | [GetPermissionRequest](#permission-v1-GetPermissionRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="resource_v1_resource-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## resource/v1/resource.proto



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





 

 

 


<a name="resource-v1-ResourceService"></a>

### ResourceService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetResource | [GetResourceRequest](#resource-v1-GetResourceRequest) | [Resource](#resource-v1-Resource) |  |
| GetResources | [GetResourcesRequest](#resource-v1-GetResourcesRequest) | [GetResourcesResponse](#resource-v1-GetResourcesResponse) |  |
| CreateResource | [Resource](#resource-v1-Resource) | [.base.v1.CreateSuccess](#base-v1-CreateSuccess) |  |
| UpdateResource | [Resource](#resource-v1-Resource) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteResource | [GetResourceRequest](#resource-v1-GetResourceRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="role_v1_role-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## role/v1/role.proto



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






<a name="role-v1-Role"></a>

### Role



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| module_id | [string](#string) |  |  |





 

 

 


<a name="role-v1-RoleService"></a>

### RoleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetRole | [GetRoleRequest](#role-v1-GetRoleRequest) | [Role](#role-v1-Role) |  |
| GetRoles | [GetRolesRequest](#role-v1-GetRolesRequest) | [GetRolesResponse](#role-v1-GetRolesResponse) |  |
| CreateRole | [Role](#role-v1-Role) | [.base.v1.CreateSuccess](#base-v1-CreateSuccess) |  |
| UpdateRole | [Role](#role-v1-Role) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteRole | [GetRoleRequest](#role-v1-GetRoleRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="user-role_v1_user-role-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## user-role/v1/user-role.proto



<a name="user_role-v1-GetUserRoleRequest"></a>

### GetUserRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






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






<a name="user_role-v1-UserRole"></a>

### UserRole



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |
| phone | [string](#string) |  |  |
| avatar | [string](#string) |  |  |





 

 

 


<a name="user_role-v1-UserRoleService"></a>

### UserRoleService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUserRole | [GetUserRoleRequest](#user_role-v1-GetUserRoleRequest) | [UserRole](#user_role-v1-UserRole) |  |
| GetUserRoles | [GetUserRolesRequest](#user_role-v1-GetUserRolesRequest) | [GetUserRolesRequest](#user_role-v1-GetUserRolesRequest) |  |
| CreateUserRole | [UserRole](#user_role-v1-UserRole) | [.base.v1.CreateSuccess](#base-v1-CreateSuccess) |  |
| UpdateUserRole | [UserRole](#user_role-v1-UserRole) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteUserRole | [GetUserRoleRequest](#user_role-v1-GetUserRoleRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



<a name="user_v1_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## user/v1/user.proto



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






<a name="user-v1-User"></a>

### User



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |
| phone | [string](#string) |  |  |
| avatar | [string](#string) |  |  |
| status | [UserStatus](#user-v1-UserStatus) |  |  |





 


<a name="user-v1-UserStatus"></a>

### UserStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| ACTIVE | 0 |  |
| DEACTIVATED | 1 |  |
| DELETED | 2 |  |


 

 


<a name="user-v1-UserService"></a>

### UserService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUser | [GetUserRequest](#user-v1-GetUserRequest) | [User](#user-v1-User) |  |
| GetUsers | [GetUsersRequest](#user-v1-GetUsersRequest) | [GetUsersResponse](#user-v1-GetUsersResponse) |  |
| CreateUser | [User](#user-v1-User) | [.base.v1.CreateSuccess](#base-v1-CreateSuccess) |  |
| UpdateUser | [User](#user-v1-User) | [.base.v1.UpdateSuccess](#base-v1-UpdateSuccess) |  |
| DeleteUser | [GetUserRequest](#user-v1-GetUserRequest) | [.base.v1.DeleteSuccess](#base-v1-DeleteSuccess) |  |

 



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

