# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [proto/action/v1/action.proto](#proto_action_v1_action-proto)
    - [Action](#proto-action-v1-Action)
    - [CreateActionData](#proto-action-v1-CreateActionData)
    - [CreateActionRequest](#proto-action-v1-CreateActionRequest)
    - [CreateActionResponse](#proto-action-v1-CreateActionResponse)
    - [DeleteActionRequest](#proto-action-v1-DeleteActionRequest)
    - [DeleteActionResponse](#proto-action-v1-DeleteActionResponse)
    - [GetActionRequest](#proto-action-v1-GetActionRequest)
    - [GetActionResponse](#proto-action-v1-GetActionResponse)
    - [GetActionsRequest](#proto-action-v1-GetActionsRequest)
    - [GetActionsResponse](#proto-action-v1-GetActionsResponse)
    - [UpdateActionData](#proto-action-v1-UpdateActionData)
    - [UpdateActionRequest](#proto-action-v1-UpdateActionRequest)
    - [UpdateActionResponse](#proto-action-v1-UpdateActionResponse)
  
    - [ActionRequestType](#proto-action-v1-ActionRequestType)
  
    - [ActionService](#proto-action-v1-ActionService)
  
- [proto/auth/v1/auth.proto](#proto_auth_v1_auth-proto)
    - [Auth](#proto-auth-v1-Auth)
    - [GetMeRequest](#proto-auth-v1-GetMeRequest)
    - [GetMeResponse](#proto-auth-v1-GetMeResponse)
    - [LoginRequest](#proto-auth-v1-LoginRequest)
    - [LoginResponse](#proto-auth-v1-LoginResponse)
    - [User](#proto-auth-v1-User)
    - [VerifyRequest](#proto-auth-v1-VerifyRequest)
    - [VerifyResponse](#proto-auth-v1-VerifyResponse)
  
    - [AuthService](#proto-auth-v1-AuthService)
  
- [proto/base/v1/base.proto](#proto_base_v1_base-proto)
    - [CreateSuccess](#proto-base-v1-CreateSuccess)
    - [DeleteSuccess](#proto-base-v1-DeleteSuccess)
    - [ErrorMessage](#proto-base-v1-ErrorMessage)
    - [Filter](#proto-base-v1-Filter)
    - [PaginationRequest](#proto-base-v1-PaginationRequest)
    - [PaginationResponse](#proto-base-v1-PaginationResponse)
    - [Sort](#proto-base-v1-Sort)
    - [UpdateSuccess](#proto-base-v1-UpdateSuccess)
  
    - [FilterOperator](#proto-base-v1-FilterOperator)
    - [SortOrder](#proto-base-v1-SortOrder)
  
- [proto/menu/v1/menu.proto](#proto_menu_v1_menu-proto)
    - [GetSuperMenusRequest](#proto-menu-v1-GetSuperMenusRequest)
    - [GetSuperMenusResponse](#proto-menu-v1-GetSuperMenusResponse)
    - [Menu](#proto-menu-v1-Menu)
    - [SubMenu](#proto-menu-v1-SubMenu)
    - [SuperMenu](#proto-menu-v1-SuperMenu)
  
    - [MenuService](#proto-menu-v1-MenuService)
  
- [proto/module/v1/module.proto](#proto_module_v1_module-proto)
    - [CreateModuleData](#proto-module-v1-CreateModuleData)
    - [CreateModuleRequest](#proto-module-v1-CreateModuleRequest)
    - [CreateModuleResponse](#proto-module-v1-CreateModuleResponse)
    - [DeleteModuleRequest](#proto-module-v1-DeleteModuleRequest)
    - [DeleteModuleResponse](#proto-module-v1-DeleteModuleResponse)
    - [GetModuleRequest](#proto-module-v1-GetModuleRequest)
    - [GetModuleResponse](#proto-module-v1-GetModuleResponse)
    - [GetModulesRequest](#proto-module-v1-GetModulesRequest)
    - [GetModulesResponse](#proto-module-v1-GetModulesResponse)
    - [Module](#proto-module-v1-Module)
    - [UpdateModuleData](#proto-module-v1-UpdateModuleData)
    - [UpdateModuleRequest](#proto-module-v1-UpdateModuleRequest)
    - [UpdateModuleResponse](#proto-module-v1-UpdateModuleResponse)
  
    - [ModuleService](#proto-module-v1-ModuleService)
  
- [proto/permission/v1/permission.proto](#proto_permission_v1_permission-proto)
    - [CreatePermissionData](#proto-permission-v1-CreatePermissionData)
    - [CreatePermissionRequest](#proto-permission-v1-CreatePermissionRequest)
    - [CreatePermissionResponse](#proto-permission-v1-CreatePermissionResponse)
    - [DeletePermissionRequest](#proto-permission-v1-DeletePermissionRequest)
    - [DeletePermissionResponse](#proto-permission-v1-DeletePermissionResponse)
    - [GetPermissionRequest](#proto-permission-v1-GetPermissionRequest)
    - [GetPermissionResponse](#proto-permission-v1-GetPermissionResponse)
    - [GetPermissionsByUserIdRequest](#proto-permission-v1-GetPermissionsByUserIdRequest)
    - [GetPermissionsByUserIdResponse](#proto-permission-v1-GetPermissionsByUserIdResponse)
    - [GetPermissionsRequest](#proto-permission-v1-GetPermissionsRequest)
    - [GetPermissionsResponse](#proto-permission-v1-GetPermissionsResponse)
    - [Permission](#proto-permission-v1-Permission)
    - [PermissionInfo](#proto-permission-v1-PermissionInfo)
    - [UpdatePermissionData](#proto-permission-v1-UpdatePermissionData)
    - [UpdatePermissionRequest](#proto-permission-v1-UpdatePermissionRequest)
    - [UpdatePermissionResponse](#proto-permission-v1-UpdatePermissionResponse)
  
    - [PermissionService](#proto-permission-v1-PermissionService)
  
- [proto/product/v1/product.proto](#proto_product_v1_product-proto)
    - [CreateProductData](#proto-product-v1-CreateProductData)
    - [CreateProductRequest](#proto-product-v1-CreateProductRequest)
    - [CreateProductResponse](#proto-product-v1-CreateProductResponse)
    - [DeleteProductRequest](#proto-product-v1-DeleteProductRequest)
    - [DeleteProductResponse](#proto-product-v1-DeleteProductResponse)
    - [GetProductRequest](#proto-product-v1-GetProductRequest)
    - [GetProductResponse](#proto-product-v1-GetProductResponse)
    - [GetProductsRequest](#proto-product-v1-GetProductsRequest)
    - [GetProductsResponse](#proto-product-v1-GetProductsResponse)
    - [Product](#proto-product-v1-Product)
    - [UpdateProductData](#proto-product-v1-UpdateProductData)
    - [UpdateProductRequest](#proto-product-v1-UpdateProductRequest)
    - [UpdateProductResponse](#proto-product-v1-UpdateProductResponse)
  
    - [ProductService](#proto-product-v1-ProductService)
  
- [proto/resource/v1/resource.proto](#proto_resource_v1_resource-proto)
    - [Action](#proto-resource-v1-Action)
    - [CreateResourceData](#proto-resource-v1-CreateResourceData)
    - [CreateResourceRequest](#proto-resource-v1-CreateResourceRequest)
    - [CreateResourceResponse](#proto-resource-v1-CreateResourceResponse)
    - [DeleteResourceRequest](#proto-resource-v1-DeleteResourceRequest)
    - [DeleteResourceResponse](#proto-resource-v1-DeleteResourceResponse)
    - [GetResourceRequest](#proto-resource-v1-GetResourceRequest)
    - [GetResourceResponse](#proto-resource-v1-GetResourceResponse)
    - [GetResourcesRequest](#proto-resource-v1-GetResourcesRequest)
    - [GetResourcesResponse](#proto-resource-v1-GetResourcesResponse)
    - [Resource](#proto-resource-v1-Resource)
    - [UpdateResourceData](#proto-resource-v1-UpdateResourceData)
    - [UpdateResourceRequest](#proto-resource-v1-UpdateResourceRequest)
    - [UpdateResourceResponse](#proto-resource-v1-UpdateResourceResponse)
  
    - [ResourceService](#proto-resource-v1-ResourceService)
  
- [proto/role/v1/role.proto](#proto_role_v1_role-proto)
    - [CreateRoleData](#proto-role-v1-CreateRoleData)
    - [CreateRoleRequest](#proto-role-v1-CreateRoleRequest)
    - [CreateRoleResponse](#proto-role-v1-CreateRoleResponse)
    - [DeleteRoleRequest](#proto-role-v1-DeleteRoleRequest)
    - [DeleteRoleResponse](#proto-role-v1-DeleteRoleResponse)
    - [GetRoleRequest](#proto-role-v1-GetRoleRequest)
    - [GetRoleResponse](#proto-role-v1-GetRoleResponse)
    - [GetRolesRequest](#proto-role-v1-GetRolesRequest)
    - [GetRolesResponse](#proto-role-v1-GetRolesResponse)
    - [Permission](#proto-role-v1-Permission)
    - [Role](#proto-role-v1-Role)
    - [UpdateRoleData](#proto-role-v1-UpdateRoleData)
    - [UpdateRoleRequest](#proto-role-v1-UpdateRoleRequest)
    - [UpdateRoleResponse](#proto-role-v1-UpdateRoleResponse)
  
    - [RoleService](#proto-role-v1-RoleService)
  
- [proto/user/v1/user.proto](#proto_user_v1_user-proto)
    - [ChangePasswordRequest](#proto-user-v1-ChangePasswordRequest)
    - [ChangePasswordResponse](#proto-user-v1-ChangePasswordResponse)
    - [CreateUserData](#proto-user-v1-CreateUserData)
    - [CreateUserRequest](#proto-user-v1-CreateUserRequest)
    - [CreateUserResponse](#proto-user-v1-CreateUserResponse)
    - [DeleteUserRequest](#proto-user-v1-DeleteUserRequest)
    - [DeleteUserResponse](#proto-user-v1-DeleteUserResponse)
    - [GetUserRequest](#proto-user-v1-GetUserRequest)
    - [GetUserResponse](#proto-user-v1-GetUserResponse)
    - [GetUsersRequest](#proto-user-v1-GetUsersRequest)
    - [GetUsersResponse](#proto-user-v1-GetUsersResponse)
    - [UpdateUserData](#proto-user-v1-UpdateUserData)
    - [UpdateUserRequest](#proto-user-v1-UpdateUserRequest)
    - [UpdateUserResponse](#proto-user-v1-UpdateUserResponse)
    - [User](#proto-user-v1-User)
  
    - [UserStatus](#proto-user-v1-UserStatus)
  
    - [UserService](#proto-user-v1-UserService)
  
- [proto/user_role/v1/user_role.proto](#proto_user_role_v1_user_role-proto)
    - [CreateUserRoleData](#proto-user_role-v1-CreateUserRoleData)
    - [CreateUserRoleRequest](#proto-user_role-v1-CreateUserRoleRequest)
    - [CreateUserRoleResponse](#proto-user_role-v1-CreateUserRoleResponse)
    - [DeleteUserRoleRequest](#proto-user_role-v1-DeleteUserRoleRequest)
    - [DeleteUserRoleResponse](#proto-user_role-v1-DeleteUserRoleResponse)
    - [GetUserRoleRequest](#proto-user_role-v1-GetUserRoleRequest)
    - [GetUserRoleResponse](#proto-user_role-v1-GetUserRoleResponse)
    - [GetUserRolesRequest](#proto-user_role-v1-GetUserRolesRequest)
    - [GetUserRolesResponse](#proto-user_role-v1-GetUserRolesResponse)
    - [UpdateUserRoleData](#proto-user_role-v1-UpdateUserRoleData)
    - [UpdateUserRoleRequest](#proto-user_role-v1-UpdateUserRoleRequest)
    - [UpdateUserRoleResponse](#proto-user_role-v1-UpdateUserRoleResponse)
    - [UserRole](#proto-user_role-v1-UserRole)
  
    - [UserRoleService](#proto-user_role-v1-UserRoleService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="proto_action_v1_action-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/action/v1/action.proto



<a name="proto-action-v1-Action"></a>

### Action



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action_id | [string](#string) |  |  |
| resource_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| request_type | [ActionRequestType](#proto-action-v1-ActionRequestType) |  |  |
| url | [string](#string) |  |  |
| method | [string](#string) |  |  |
| created_at | [string](#string) |  |  |
| created_user_id | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |
| updated_user_id | [string](#string) |  |  |
| deleted_at | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |






<a name="proto-action-v1-CreateActionData"></a>

### CreateActionData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| request_type | [ActionRequestType](#proto-action-v1-ActionRequestType) |  |  |
| url | [string](#string) |  |  |
| method | [string](#string) |  |  |






<a name="proto-action-v1-CreateActionRequest"></a>

### CreateActionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action | [CreateActionData](#proto-action-v1-CreateActionData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-action-v1-CreateActionResponse"></a>

### CreateActionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action | [Action](#proto-action-v1-Action) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-action-v1-DeleteActionRequest"></a>

### DeleteActionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-action-v1-DeleteActionResponse"></a>

### DeleteActionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-action-v1-GetActionRequest"></a>

### GetActionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action_id | [string](#string) |  |  |






<a name="proto-action-v1-GetActionResponse"></a>

### GetActionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action | [Action](#proto-action-v1-Action) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-action-v1-GetActionsRequest"></a>

### GetActionsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationRequest](#proto-base-v1-PaginationRequest) |  |  |
| sorts | [proto.base.v1.Sort](#proto-base-v1-Sort) | repeated |  |
| filters | [proto.base.v1.Filter](#proto-base-v1-Filter) | repeated |  |






<a name="proto-action-v1-GetActionsResponse"></a>

### GetActionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationResponse](#proto-base-v1-PaginationResponse) |  |  |
| data | [Action](#proto-action-v1-Action) | repeated |  |






<a name="proto-action-v1-UpdateActionData"></a>

### UpdateActionData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action_id | [string](#string) |  |  |
| resource_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| request_type | [ActionRequestType](#proto-action-v1-ActionRequestType) |  |  |
| url | [string](#string) |  |  |
| method | [string](#string) |  |  |






<a name="proto-action-v1-UpdateActionRequest"></a>

### UpdateActionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| action | [UpdateActionData](#proto-action-v1-UpdateActionData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-action-v1-UpdateActionResponse"></a>

### UpdateActionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |





 


<a name="proto-action-v1-ActionRequestType"></a>

### ActionRequestType


| Name | Number | Description |
| ---- | ------ | ----------- |
| ACTION_REQUEST_TYPE_UNSPECIFIED | 0 |  |
| ACTION_REQUEST_TYPE_VIEW | 1 |  |
| ACTION_REQUEST_TYPE_HTTP | 2 |  |
| ACTION_REQUEST_TYPE_GRAPHQL | 3 |  |
| ACTION_REQUEST_TYPE_GRPC | 4 |  |
| ACTION_REQUEST_TYPE_WEBSOCKET | 5 |  |


 

 


<a name="proto-action-v1-ActionService"></a>

### ActionService
ActionService: manage actions for resources
Sample GetAction request: { &#34;action_id&#34;: &#34;uuid&#34; }
Sample GetAction response: Action

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetAction | [GetActionRequest](#proto-action-v1-GetActionRequest) | [GetActionResponse](#proto-action-v1-GetActionResponse) | GetAction returns a single Action by id Req example: { &#34;action_id&#34;: &#34;uuid&#34; } Res example: { &#34;action_id&#34;: &#34;...&#34;, &#34;name&#34;: &#34;...&#34;, &#34;request_type&#34;: HTTP } |
| GetActions | [GetActionsRequest](#proto-action-v1-GetActionsRequest) | [GetActionsResponse](#proto-action-v1-GetActionsResponse) | GetActions returns paginated actions Req example: { &#34;pagination&#34;: { &#34;page&#34;: 1, &#34;limit&#34;: 10 } } Res example: { &#34;pagination&#34;: { &#34;page&#34;:1, &#34;limit&#34;:10, &#34;totalItems&#34;:0 }, &#34;data&#34;: [] } |
| CreateAction | [CreateActionRequest](#proto-action-v1-CreateActionRequest) | [CreateActionResponse](#proto-action-v1-CreateActionResponse) | CreateAction creates a new action Req example: { &#34;action&#34;: { &#34;resource_id&#34;: &#34;uuid&#34;, &#34;name&#34;: &#34;Read&#34;, &#34;request_type&#34;: HTTP } } Res example: CreateActionResponse |
| UpdateAction | [UpdateActionRequest](#proto-action-v1-UpdateActionRequest) | [UpdateActionResponse](#proto-action-v1-UpdateActionResponse) | UpdateAction updates an existing action Req example: { &#34;action&#34;: { &#34;action_id&#34;: &#34;uuid&#34;, &#34;name&#34;: &#34;Updated&#34; } } Res example: { result: { success: true } } |
| DeleteAction | [DeleteActionRequest](#proto-action-v1-DeleteActionRequest) | [DeleteActionResponse](#proto-action-v1-DeleteActionResponse) | DeleteAction performs soft delete Req example: { &#34;action_id&#34;: &#34;uuid&#34;, &#34;user_id&#34;: &#34;uuid&#34; } Res example: { result: { success: true } } |

 



<a name="proto_auth_v1_auth-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/auth/v1/auth.proto



<a name="proto-auth-v1-Auth"></a>

### Auth



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_token | [string](#string) |  |  |
| refresh_token | [string](#string) |  |  |






<a name="proto-auth-v1-GetMeRequest"></a>

### GetMeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="proto-auth-v1-GetMeResponse"></a>

### GetMeResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [User](#proto-auth-v1-User) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-auth-v1-LoginRequest"></a>

### LoginRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |






<a name="proto-auth-v1-LoginResponse"></a>

### LoginResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| auth | [Auth](#proto-auth-v1-Auth) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-auth-v1-User"></a>

### User



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| email | [string](#string) |  |  |
| username | [string](#string) |  |  |
| avatar | [string](#string) | optional |  |
| phone | [string](#string) | optional |  |
| status | [string](#string) |  |  |






<a name="proto-auth-v1-VerifyRequest"></a>

### VerifyRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [string](#string) |  |  |
| request_type | [string](#string) |  |  |
| method | [string](#string) |  |  |
| url | [string](#string) |  |  |






<a name="proto-auth-v1-VerifyResponse"></a>

### VerifyResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |





 

 

 


<a name="proto-auth-v1-AuthService"></a>

### AuthService
AuthService: authentication and token verification

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Login | [LoginRequest](#proto-auth-v1-LoginRequest) | [LoginResponse](#proto-auth-v1-LoginResponse) | Login authenticates user and returns tokens Req example: { &#34;email&#34;: &#34;a@b.com&#34;, &#34;password&#34;: &#34;secret&#34; } Res example: { &#34;auth&#34;: { &#34;access_token&#34;: &#34;...&#34;, &#34;refresh_token&#34;: &#34;...&#34; }, &#34;errors&#34;: [] } |
| GetMe | [GetMeRequest](#proto-auth-v1-GetMeRequest) | [GetMeResponse](#proto-auth-v1-GetMeResponse) | GetMe returns current user profile Req example: { &#34;user_id&#34;: &#34;uuid&#34; } Res example: { &#34;user&#34;: { &#34;user_id&#34;: &#34;...&#34;, &#34;email&#34;: &#34;...&#34;, &#34;username&#34;: &#34;...&#34;, &#34;avatar&#34;: &#34;...&#34;, &#34;phone&#34;: &#34;...&#34;, &#34;status&#34;: &#34;ACTIVE&#34; }, &#34;errors&#34;: [] } |
| Verify | [VerifyRequest](#proto-auth-v1-VerifyRequest) | [VerifyResponse](#proto-auth-v1-VerifyResponse) | Verify checks token and permission Req example: { &#34;token&#34;:&#34;...&#34;, &#34;request_type&#34;:&#34;HTTP&#34;, &#34;method&#34;:&#34;GET&#34;, &#34;url&#34;:&#34;/api&#34; } Res example: { &#34;success&#34;: true, &#34;errors&#34;: [] } |

 



<a name="proto_base_v1_base-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/base/v1/base.proto



<a name="proto-base-v1-CreateSuccess"></a>

### CreateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-base-v1-DeleteSuccess"></a>

### DeleteSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-base-v1-ErrorMessage"></a>

### ErrorMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [int32](#int32) |  |  |
| message | [string](#string) |  |  |
| extra | [google.protobuf.Struct](#google-protobuf-Struct) |  | dynamic key-value object |






<a name="proto-base-v1-Filter"></a>

### Filter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | [string](#string) |  |  |
| operator | [FilterOperator](#proto-base-v1-FilterOperator) |  |  |
| string_value | [string](#string) | optional |  |
| number_value | [string](#string) | optional |  |
| bool_value | [string](#string) | optional |  |
| bool_values | [string](#string) | repeated |  |
| string_values | [string](#string) | repeated |  |
| number_values | [string](#string) | repeated | google.protobuf.Value value = 9; // dynamic key-value object |






<a name="proto-base-v1-PaginationRequest"></a>

### PaginationRequest
define message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  |  |
| limit | [int32](#int32) |  |  |






<a name="proto-base-v1-PaginationResponse"></a>

### PaginationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page | [int32](#int32) |  |  |
| limit | [int32](#int32) |  |  |
| total_items | [int32](#int32) |  |  |
| total_pages | [int32](#int32) |  |  |
| item_count | [int32](#int32) |  |  |






<a name="proto-base-v1-Sort"></a>

### Sort



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | [string](#string) |  | created_at, updated_at |
| order | [SortOrder](#proto-base-v1-SortOrder) |  | &#34;ASC&#34; or &#34;DESC&#34; |






<a name="proto-base-v1-UpdateSuccess"></a>

### UpdateSuccess



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |





 


<a name="proto-base-v1-FilterOperator"></a>

### FilterOperator
define enum

| Name | Number | Description |
| ---- | ------ | ----------- |
| FILTER_OPERATOR_UNSPECIFIED | 0 | this one is best practice to define &lt;name&gt;_UNSPECIFIED read more: https://protobuf.dev/programming-guides/style/#enums |
| FILTER_OPERATOR_EQUAL | 1 |  |
| FILTER_OPERATOR_NOT_EQUAL | 2 |  |
| FILTER_OPERATOR_GREATER_THAN | 3 |  |
| FILTER_OPERATOR_LESS_THAN | 4 |  |
| FILTER_OPERATOR_GREATER_THAN_OR_EQUAL | 5 |  |
| FILTER_OPERATOR_LESS_THAN_OR_EQUAL | 6 |  |
| FILTER_OPERATOR_LIKE | 7 |  |
| FILTER_OPERATOR_IN | 8 |  |
| FILTER_OPERATOR_NOT_IN | 9 |  |



<a name="proto-base-v1-SortOrder"></a>

### SortOrder


| Name | Number | Description |
| ---- | ------ | ----------- |
| SORT_ORDER_UNSPECIFIED | 0 |  |
| SORT_ORDER_ASC | 1 |  |
| SORT_ORDER_DESC | 2 |  |


 

 

 



<a name="proto_menu_v1_menu-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/menu/v1/menu.proto



<a name="proto-menu-v1-GetSuperMenusRequest"></a>

### GetSuperMenusRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="proto-menu-v1-GetSuperMenusResponse"></a>

### GetSuperMenusResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| super_menus | [SuperMenu](#proto-menu-v1-SuperMenu) | repeated |  |






<a name="proto-menu-v1-Menu"></a>

### Menu



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| url | [string](#string) |  |  |
| icon | [string](#string) | optional |  |
| sub_menus | [SubMenu](#proto-menu-v1-SubMenu) | repeated | Nested sub-menus |






<a name="proto-menu-v1-SubMenu"></a>

### SubMenu



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| url | [string](#string) |  |  |






<a name="proto-menu-v1-SuperMenu"></a>

### SuperMenu



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| url | [string](#string) |  |  |
| description | [string](#string) |  |  |
| icon | [string](#string) | optional |  |
| menus | [Menu](#proto-menu-v1-Menu) | repeated | Nested sub-menus |





 

 

 


<a name="proto-menu-v1-MenuService"></a>

### MenuService
MenuService: retrieve hierarchical menu for a user

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetSuperMenus | [GetSuperMenusRequest](#proto-menu-v1-GetSuperMenusRequest) | [GetSuperMenusResponse](#proto-menu-v1-GetSuperMenusResponse) | GetSuperMenus returns full menu structure available to a user Req example: { &#34;user_id&#34;: &#34;uuid&#34; } Res example: { &#34;super_menus&#34;: [ { &#34;name&#34;:&#34;...&#34;, &#34;menus&#34;: [...] } ] } |

 



<a name="proto_module_v1_module-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/module/v1/module.proto



<a name="proto-module-v1-CreateModuleData"></a>

### CreateModuleData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| product_id | [string](#string) |  |  |
| icon | [string](#string) | optional |  |
| url | [string](#string) | optional |  |






<a name="proto-module-v1-CreateModuleRequest"></a>

### CreateModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [CreateModuleData](#proto-module-v1-CreateModuleData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-module-v1-CreateModuleResponse"></a>

### CreateModuleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [Module](#proto-module-v1-Module) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-module-v1-DeleteModuleRequest"></a>

### DeleteModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-module-v1-DeleteModuleResponse"></a>

### DeleteModuleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-module-v1-GetModuleRequest"></a>

### GetModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_id | [string](#string) |  |  |






<a name="proto-module-v1-GetModuleResponse"></a>

### GetModuleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [Module](#proto-module-v1-Module) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-module-v1-GetModulesRequest"></a>

### GetModulesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationRequest](#proto-base-v1-PaginationRequest) |  |  |
| sorts | [proto.base.v1.Sort](#proto-base-v1-Sort) | repeated |  |
| filters | [proto.base.v1.Filter](#proto-base-v1-Filter) | repeated |  |






<a name="proto-module-v1-GetModulesResponse"></a>

### GetModulesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationResponse](#proto-base-v1-PaginationResponse) |  |  |
| data | [Module](#proto-module-v1-Module) | repeated |  |






<a name="proto-module-v1-Module"></a>

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
| product_id | [string](#string) |  |  |
| icon | [string](#string) | optional |  |
| url | [string](#string) | optional |  |






<a name="proto-module-v1-UpdateModuleData"></a>

### UpdateModuleData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| product_id | [string](#string) |  |  |
| icon | [string](#string) | optional |  |
| url | [string](#string) | optional |  |






<a name="proto-module-v1-UpdateModuleRequest"></a>

### UpdateModuleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| module | [UpdateModuleData](#proto-module-v1-UpdateModuleData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-module-v1-UpdateModuleResponse"></a>

### UpdateModuleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |





 

 

 


<a name="proto-module-v1-ModuleService"></a>

### ModuleService
ModuleService: manage modules (grouping of resources)
Sample GetModule request: { &#34;module_id&#34;: &#34;uuid&#34; }

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetModule | [GetModuleRequest](#proto-module-v1-GetModuleRequest) | [GetModuleResponse](#proto-module-v1-GetModuleResponse) | GetModule returns a single Module Req example: { &#34;module_id&#34;: &#34;...&#34; } Res example: { &#34;module_id&#34;: &#34;...&#34;, &#34;name&#34;: &#34;...&#34; } |
| GetModules | [GetModulesRequest](#proto-module-v1-GetModulesRequest) | [GetModulesResponse](#proto-module-v1-GetModulesResponse) | GetModules returns paginated modules Req example: { &#34;pagination&#34;: { &#34;page&#34;:1, &#34;limit&#34;:10 } } Res example: { &#34;pagination&#34;: { &#34;page&#34;:1, &#34;limit&#34;:10 }, &#34;data&#34;: [] } |
| CreateModule | [CreateModuleRequest](#proto-module-v1-CreateModuleRequest) | [CreateModuleResponse](#proto-module-v1-CreateModuleResponse) | CreateModule creates a new module Req example: { &#34;module&#34;: { &#34;name&#34;:&#34;mod&#34; }, &#34;user_id&#34;:&#34;uuid&#34; } |
| UpdateModule | [UpdateModuleRequest](#proto-module-v1-UpdateModuleRequest) | [UpdateModuleResponse](#proto-module-v1-UpdateModuleResponse) | UpdateModule updates a module Req example: { &#34;module&#34;: { &#34;module_id&#34;:&#34;uuid&#34;, &#34;name&#34;:&#34;new&#34; }, &#34;user_id&#34;:&#34;uuid&#34; } |
| DeleteModule | [DeleteModuleRequest](#proto-module-v1-DeleteModuleRequest) | [DeleteModuleResponse](#proto-module-v1-DeleteModuleResponse) | DeleteModule soft-deletes a module Req example: { &#34;module_id&#34;:&#34;uuid&#34;, &#34;user_id&#34;:&#34;uuid&#34; } |

 



<a name="proto_permission_v1_permission-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/permission/v1/permission.proto



<a name="proto-permission-v1-CreatePermissionData"></a>

### CreatePermissionData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  |  |
| resource_id | [string](#string) |  |  |
| action_id | [string](#string) |  |  |






<a name="proto-permission-v1-CreatePermissionRequest"></a>

### CreatePermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [CreatePermissionData](#proto-permission-v1-CreatePermissionData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-permission-v1-CreatePermissionResponse"></a>

### CreatePermissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [Permission](#proto-permission-v1-Permission) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-permission-v1-DeletePermissionRequest"></a>

### DeletePermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-permission-v1-DeletePermissionResponse"></a>

### DeletePermissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-permission-v1-GetPermissionRequest"></a>

### GetPermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission_id | [string](#string) |  |  |






<a name="proto-permission-v1-GetPermissionResponse"></a>

### GetPermissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [Permission](#proto-permission-v1-Permission) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-permission-v1-GetPermissionsByUserIdRequest"></a>

### GetPermissionsByUserIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="proto-permission-v1-GetPermissionsByUserIdResponse"></a>

### GetPermissionsByUserIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permissions | [PermissionInfo](#proto-permission-v1-PermissionInfo) | repeated |  |






<a name="proto-permission-v1-GetPermissionsRequest"></a>

### GetPermissionsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationRequest](#proto-base-v1-PaginationRequest) |  |  |
| sorts | [proto.base.v1.Sort](#proto-base-v1-Sort) | repeated |  |
| filters | [proto.base.v1.Filter](#proto-base-v1-Filter) | repeated |  |






<a name="proto-permission-v1-GetPermissionsResponse"></a>

### GetPermissionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationResponse](#proto-base-v1-PaginationResponse) |  |  |
| data | [Permission](#proto-permission-v1-Permission) | repeated |  |






<a name="proto-permission-v1-Permission"></a>

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






<a name="proto-permission-v1-PermissionInfo"></a>

### PermissionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| request_type | [string](#string) |  |  |
| method | [string](#string) |  |  |
| url | [string](#string) |  |  |






<a name="proto-permission-v1-UpdatePermissionData"></a>

### UpdatePermissionData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission_id | [string](#string) |  |  |
| role_id | [string](#string) |  |  |
| resource_id | [string](#string) |  |  |
| action_id | [string](#string) |  |  |






<a name="proto-permission-v1-UpdatePermissionRequest"></a>

### UpdatePermissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| permission | [UpdatePermissionData](#proto-permission-v1-UpdatePermissionData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-permission-v1-UpdatePermissionResponse"></a>

### UpdatePermissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |





 

 

 


<a name="proto-permission-v1-PermissionService"></a>

### PermissionService
PermissionService: manage role-resource-action permissions

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetPermission | [GetPermissionRequest](#proto-permission-v1-GetPermissionRequest) | [GetPermissionResponse](#proto-permission-v1-GetPermissionResponse) | GetPermission returns a single permission by id Req example: { &#34;permission_id&#34;: &#34;uuid&#34; } |
| GetPermissions | [GetPermissionsRequest](#proto-permission-v1-GetPermissionsRequest) | [GetPermissionsResponse](#proto-permission-v1-GetPermissionsResponse) | GetPermissions returns paginated permissions Req example: { &#34;pagination&#34;: { &#34;page&#34;:1, &#34;limit&#34;:10 } } |
| CreatePermission | [CreatePermissionRequest](#proto-permission-v1-CreatePermissionRequest) | [CreatePermissionResponse](#proto-permission-v1-CreatePermissionResponse) | CreatePermission assigns permission for role-resource-action Req example: { &#34;permission&#34;: { &#34;role_id&#34;:&#34;uuid&#34;, &#34;resource_id&#34;:&#34;uuid&#34;, &#34;action_id&#34;:&#34;uuid&#34; }, &#34;user_id&#34;:&#34;uuid&#34; } |
| UpdatePermission | [UpdatePermissionRequest](#proto-permission-v1-UpdatePermissionRequest) | [UpdatePermissionResponse](#proto-permission-v1-UpdatePermissionResponse) | UpdatePermission updates a permission mapping Req example: { &#34;permission&#34;: { &#34;permission_id&#34;:&#34;uuid&#34;, ... }, &#34;user_id&#34;:&#34;uuid&#34; } |
| DeletePermission | [DeletePermissionRequest](#proto-permission-v1-DeletePermissionRequest) | [DeletePermissionResponse](#proto-permission-v1-DeletePermissionResponse) | DeletePermission soft-deletes a permission Req example: { &#34;permission_id&#34;:&#34;uuid&#34;, &#34;user_id&#34;:&#34;uuid&#34; } |
| GetPermissionsByUserId | [GetPermissionsByUserIdRequest](#proto-permission-v1-GetPermissionsByUserIdRequest) | [GetPermissionsByUserIdResponse](#proto-permission-v1-GetPermissionsByUserIdResponse) | GetPermissionsByUserId returns permissions available to a user Req example: { &#34;user_id&#34;:&#34;uuid&#34; } Res example: { &#34;permissions&#34;: [ { &#34;resource&#34;: {...}, &#34;action&#34;: {...} } ] } |

 



<a name="proto_product_v1_product-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/product/v1/product.proto



<a name="proto-product-v1-CreateProductData"></a>

### CreateProductData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| url | [string](#string) |  |  |
| icon | [string](#string) | optional |  |






<a name="proto-product-v1-CreateProductRequest"></a>

### CreateProductRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| product | [CreateProductData](#proto-product-v1-CreateProductData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-product-v1-CreateProductResponse"></a>

### CreateProductResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| product | [Product](#proto-product-v1-Product) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-product-v1-DeleteProductRequest"></a>

### DeleteProductRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| product_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-product-v1-DeleteProductResponse"></a>

### DeleteProductResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-product-v1-GetProductRequest"></a>

### GetProductRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| product_id | [string](#string) |  |  |






<a name="proto-product-v1-GetProductResponse"></a>

### GetProductResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| product | [Product](#proto-product-v1-Product) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-product-v1-GetProductsRequest"></a>

### GetProductsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationRequest](#proto-base-v1-PaginationRequest) |  |  |
| sorts | [proto.base.v1.Sort](#proto-base-v1-Sort) | repeated |  |
| filters | [proto.base.v1.Filter](#proto-base-v1-Filter) | repeated |  |






<a name="proto-product-v1-GetProductsResponse"></a>

### GetProductsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationResponse](#proto-base-v1-PaginationResponse) |  |  |
| data | [Product](#proto-product-v1-Product) | repeated |  |






<a name="proto-product-v1-Product"></a>

### Product



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| product_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| url | [string](#string) |  |  |
| created_at | [string](#string) |  |  |
| created_user_id | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |
| updated_user_id | [string](#string) |  |  |
| deleted_at | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |
| icon | [string](#string) | optional |  |






<a name="proto-product-v1-UpdateProductData"></a>

### UpdateProductData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| product_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| url | [string](#string) |  |  |
| icon | [string](#string) | optional |  |






<a name="proto-product-v1-UpdateProductRequest"></a>

### UpdateProductRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| product | [UpdateProductData](#proto-product-v1-UpdateProductData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-product-v1-UpdateProductResponse"></a>

### UpdateProductResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |





 

 

 


<a name="proto-product-v1-ProductService"></a>

### ProductService
ProductService: manage products

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetProduct | [GetProductRequest](#proto-product-v1-GetProductRequest) | [GetProductResponse](#proto-product-v1-GetProductResponse) | GetProduct returns a product by id Req example: { &#34;product_id&#34;: &#34;uuid&#34; } Res example: { product: { &#34;product_id&#34;: &#34;...&#34;, &#34;name&#34;: &#34;...&#34; } } |
| GetProducts | [GetProductsRequest](#proto-product-v1-GetProductsRequest) | [GetProductsResponse](#proto-product-v1-GetProductsResponse) | GetProducts returns paginated products Req example: { &#34;pagination&#34;: { &#34;page&#34;:1, &#34;limit&#34;:10 } } |
| CreateProduct | [CreateProductRequest](#proto-product-v1-CreateProductRequest) | [CreateProductResponse](#proto-product-v1-CreateProductResponse) | CreateProduct creates a product Req example: { &#34;product&#34;: { &#34;name&#34;:&#34;p&#34; }, &#34;user_id&#34;:&#34;uuid&#34; } |
| UpdateProduct | [UpdateProductRequest](#proto-product-v1-UpdateProductRequest) | [UpdateProductResponse](#proto-product-v1-UpdateProductResponse) | UpdateProduct updates a product Req example: { &#34;product&#34;: { &#34;product_id&#34;:&#34;uuid&#34;, &#34;name&#34;:&#34;new&#34; }, &#34;user_id&#34;:&#34;uuid&#34; } |
| DeleteProduct | [DeleteProductRequest](#proto-product-v1-DeleteProductRequest) | [DeleteProductResponse](#proto-product-v1-DeleteProductResponse) | DeleteProduct soft-deletes a product Req example: { &#34;product_id&#34;:&#34;uuid&#34;, &#34;user_id&#34;:&#34;uuid&#34; } |

 



<a name="proto_resource_v1_resource-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/resource/v1/resource.proto



<a name="proto-resource-v1-Action"></a>

### Action



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| request_type | [proto.action.v1.ActionRequestType](#proto-action-v1-ActionRequestType) |  |  |
| url | [string](#string) |  |  |
| method | [string](#string) |  |  |
| action_id | [string](#string) | optional |  |






<a name="proto-resource-v1-CreateResourceData"></a>

### CreateResourceData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| module_id | [string](#string) |  |  |
| actions | [Action](#proto-resource-v1-Action) | repeated |  |






<a name="proto-resource-v1-CreateResourceRequest"></a>

### CreateResourceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource | [CreateResourceData](#proto-resource-v1-CreateResourceData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-resource-v1-CreateResourceResponse"></a>

### CreateResourceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource | [Resource](#proto-resource-v1-Resource) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-resource-v1-DeleteResourceRequest"></a>

### DeleteResourceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-resource-v1-DeleteResourceResponse"></a>

### DeleteResourceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-resource-v1-GetResourceRequest"></a>

### GetResourceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |






<a name="proto-resource-v1-GetResourceResponse"></a>

### GetResourceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource | [Resource](#proto-resource-v1-Resource) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-resource-v1-GetResourcesRequest"></a>

### GetResourcesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationRequest](#proto-base-v1-PaginationRequest) |  |  |
| sorts | [proto.base.v1.Sort](#proto-base-v1-Sort) | repeated |  |
| filters | [proto.base.v1.Filter](#proto-base-v1-Filter) | repeated |  |






<a name="proto-resource-v1-GetResourcesResponse"></a>

### GetResourcesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationResponse](#proto-base-v1-PaginationResponse) |  |  |
| data | [Resource](#proto-resource-v1-Resource) | repeated |  |






<a name="proto-resource-v1-Resource"></a>

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






<a name="proto-resource-v1-UpdateResourceData"></a>

### UpdateResourceData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| module_id | [string](#string) |  |  |
| actions | [Action](#proto-resource-v1-Action) | repeated |  |






<a name="proto-resource-v1-UpdateResourceRequest"></a>

### UpdateResourceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource | [UpdateResourceData](#proto-resource-v1-UpdateResourceData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-resource-v1-UpdateResourceResponse"></a>

### UpdateResourceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |





 

 

 


<a name="proto-resource-v1-ResourceService"></a>

### ResourceService
ResourceService: manage resources and their actions
Sample GetResource request: { &#34;resource_id&#34;: &#34;uuid&#34; }
Sample GetResource response: Resource

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetResource | [GetResourceRequest](#proto-resource-v1-GetResourceRequest) | [GetResourceResponse](#proto-resource-v1-GetResourceResponse) | GetResource returns a single Resource Req example: { &#34;resource_id&#34;: &#34;...&#34; } Res example: { &#34;resource_id&#34;: &#34;...&#34;, &#34;name&#34;: &#34;...&#34; } |
| GetResources | [GetResourcesRequest](#proto-resource-v1-GetResourcesRequest) | [GetResourcesResponse](#proto-resource-v1-GetResourcesResponse) | GetResources returns paginated resources Req example: { &#34;pagination&#34;: { &#34;page&#34;:1, &#34;limit&#34;:10 } } Res example: { &#34;pagination&#34;: { &#34;page&#34;:1, &#34;limit&#34;:10, &#34;totalItems&#34;:0 }, &#34;data&#34;: [] } |
| CreateResource | [CreateResourceRequest](#proto-resource-v1-CreateResourceRequest) | [CreateResourceResponse](#proto-resource-v1-CreateResourceResponse) | CreateResource creates a resource with actions Res example: { &#34;resource&#34;: { &#34;name&#34;:&#34;res&#34;, &#34;module_id&#34;:&#34;uuid&#34;, &#34;actions&#34;: [...] }, &#34;user_id&#34;:&#34;uuid&#34; } Res example: CreateResourceResponse |
| UpdateResource | [UpdateResourceRequest](#proto-resource-v1-UpdateResourceRequest) | [UpdateResourceResponse](#proto-resource-v1-UpdateResourceResponse) | UpdateResource updates resource and its actions Req example: { &#34;resource&#34;: { &#34;resource_id&#34;:&#34;uuid&#34;, &#34;name&#34;:&#34;new&#34; }, &#34;user_id&#34;:&#34;uuid&#34; } Res example: { result: { success: true } } |
| DeleteResource | [DeleteResourceRequest](#proto-resource-v1-DeleteResourceRequest) | [DeleteResourceResponse](#proto-resource-v1-DeleteResourceResponse) | DeleteResource soft-deletes resource Req example: { &#34;resource_id&#34;:&#34;uuid&#34;, &#34;user_id&#34;:&#34;uuid&#34; } Res example: { result: { success: true } } |

 



<a name="proto_role_v1_role-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/role/v1/role.proto



<a name="proto-role-v1-CreateRoleData"></a>

### CreateRoleData
Payload used to create a role (excluding metadata fields).
Example (CreateRoleRequest.role):
{
  &#34;name&#34;: &#34;Editor&#34;,
  &#34;description&#34;: &#34;Can edit content&#34;,
  &#34;module_id&#34;: &#34;module-2&#34;,
  &#34;permissions&#34;: [ { &#34;resource_id&#34;: &#34;res-1&#34;, &#34;action_id&#34;: &#34;edit&#34; } ]
}


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| module_id | [string](#string) |  |  |
| permissions | [Permission](#proto-role-v1-Permission) | repeated |  |






<a name="proto-role-v1-CreateRoleRequest"></a>

### CreateRoleRequest
CreateRoleRequest wraps role data and the acting user id.
Example Request:
{
  &#34;role&#34;: { &#34;name&#34;: &#34;Viewer&#34;, &#34;description&#34;: &#34;Read-only&#34;, &#34;module_id&#34;: &#34;module-3&#34; },
  &#34;user_id&#34;: &#34;user-42&#34;
}


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role | [CreateRoleData](#proto-role-v1-CreateRoleData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-role-v1-CreateRoleResponse"></a>

### CreateRoleResponse
CreateSuccess returns the created role and any validation errors.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role | [Role](#proto-role-v1-Role) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-role-v1-DeleteRoleRequest"></a>

### DeleteRoleRequest
DeleteRoleRequest indicates which role to delete and who requested it.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-role-v1-DeleteRoleResponse"></a>

### DeleteRoleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-role-v1-GetRoleRequest"></a>

### GetRoleRequest
Request to fetch a single role by id.
Example Request:
{ &#34;role_id&#34;: &#34;role-123&#34; }


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  |  |






<a name="proto-role-v1-GetRoleResponse"></a>

### GetRoleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role | [Role](#proto-role-v1-Role) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-role-v1-GetRolesRequest"></a>

### GetRolesRequest
Request to fetch a paginated list of roles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationRequest](#proto-base-v1-PaginationRequest) |  |  |
| sorts | [proto.base.v1.Sort](#proto-base-v1-Sort) | repeated |  |
| filters | [proto.base.v1.Filter](#proto-base-v1-Filter) | repeated |  |






<a name="proto-role-v1-GetRolesResponse"></a>

### GetRolesResponse
Response for list queries containing pagination and role entries.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationResponse](#proto-base-v1-PaginationResponse) |  |  |
| data | [Role](#proto-role-v1-Role) | repeated |  |






<a name="proto-role-v1-Permission"></a>

### Permission
Permission pairs a resource with an action and optional id.
Example:
{ &#34;resource_id&#34;: &#34;res-1&#34;, &#34;action_id&#34;: &#34;act-1&#34; }


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| resource_id | [string](#string) |  |  |
| action_id | [string](#string) |  |  |
| permission_id | [string](#string) | optional |  |






<a name="proto-role-v1-Role"></a>

### Role
Role represents a permission role in the system.
Fields:
- role_id: unique identifier for the role
- name: display name of the role
- description: human-readable description
- module_id: the module this role belongs to
- created_user_id: user who created the role
- updated_at / updated_user_id: last update info
- deleted_at / deleted_user_id: deletion info
- created_at: creation timestamp

Example (GetRole response):
{
  &#34;role_id&#34;: &#34;role-123&#34;,
  &#34;name&#34;: &#34;Admin&#34;,
  &#34;description&#34;: &#34;Administrator role&#34;,
  &#34;module_id&#34;: &#34;module-1&#34;,
  &#34;created_user_id&#34;: &#34;user-1&#34;,
  &#34;created_at&#34;: &#34;2024-01-01T00:00:00Z&#34;
}


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






<a name="proto-role-v1-UpdateRoleData"></a>

### UpdateRoleData
Payload used to update an existing role.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role_id | [string](#string) |  |  |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| module_id | [string](#string) |  |  |
| permissions | [Permission](#proto-role-v1-Permission) | repeated |  |






<a name="proto-role-v1-UpdateRoleRequest"></a>

### UpdateRoleRequest
UpdateRoleRequest contains the changes and acting user id.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| role | [UpdateRoleData](#proto-role-v1-UpdateRoleData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-role-v1-UpdateRoleResponse"></a>

### UpdateRoleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |





 

 

 


<a name="proto-role-v1-RoleService"></a>

### RoleService
Role service provides basic CRUD operations for roles.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetRole | [GetRoleRequest](#proto-role-v1-GetRoleRequest) | [GetRoleResponse](#proto-role-v1-GetRoleResponse) | GetRole returns a single Role identified by `role_id`. Example Request: { &#34;role_id&#34;: &#34;role-123&#34; } |
| GetRoles | [GetRolesRequest](#proto-role-v1-GetRolesRequest) | [GetRolesResponse](#proto-role-v1-GetRolesResponse) | GetRoles returns a paginated list of roles with optional filters and sorts. Example Request: { &#34;pagination&#34;: { &#34;page&#34;: 1, &#34;limit&#34;: 20 }, &#34;sorts&#34;: [ { &#34;field&#34;: &#34;created_at&#34;, &#34;order&#34;: 1 } ] } Example Response (GetRolesResponse): { &#34;pagination&#34;: { &#34;page&#34;: 1, &#34;limit&#34;: 20, &#34;total_items&#34;: 100, &#34;total_pages&#34;: 5, &#34;item_count&#34;: 20 }, &#34;data&#34;: [ { /* Role objects */ } ] } |
| CreateRole | [CreateRoleRequest](#proto-role-v1-CreateRoleRequest) | [CreateRoleResponse](#proto-role-v1-CreateRoleResponse) | CreateRole creates a new role. `user_id` is the actor performing the operation. Example Request: { &#34;role&#34;: { &#34;name&#34;: &#34;Viewer&#34;, &#34;description&#34;: &#34;Read-only&#34;, &#34;module_id&#34;: &#34;module-3&#34; }, &#34;user_id&#34;: &#34;user-42&#34; } Example Response (CreateRoleResponse): { &#34;role&#34;: { &#34;role_id&#34;: &#34;role-124&#34;, &#34;name&#34;: &#34;Viewer&#34;, &#34;module_id&#34;: &#34;module-3&#34; }, &#34;errors&#34;: [] } |
| UpdateRole | [UpdateRoleRequest](#proto-role-v1-UpdateRoleRequest) | [UpdateRoleResponse](#proto-role-v1-UpdateRoleResponse) | UpdateRole updates an existing role. Returns UpdateSuccess indicating operation result. Example Request: { &#34;role&#34;: { &#34;role_id&#34;: &#34;role-123&#34;, &#34;name&#34;: &#34;Manager&#34; }, &#34;user_id&#34;: &#34;user-2&#34; } Example Response (proto.base.v1.UpdateSuccess): { &#34;success&#34;: true, &#34;errors&#34;: [] } |
| DeleteRole | [DeleteRoleRequest](#proto-role-v1-DeleteRoleRequest) | [DeleteRoleResponse](#proto-role-v1-DeleteRoleResponse) | DeleteRole marks a role as deleted. Returns DeleteSuccess indicating operation result. Example Request: { &#34;role_id&#34;: &#34;role-123&#34;, &#34;user_id&#34;: &#34;user-2&#34; } Example Response (proto.base.v1.DeleteSuccess): { &#34;success&#34;: true, &#34;errors&#34;: [] } |

 



<a name="proto_user_v1_user-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/user/v1/user.proto



<a name="proto-user-v1-ChangePasswordRequest"></a>

### ChangePasswordRequest
ChangePasswordRequest contains user id and new password.
Example Request: { &#34;user_id&#34;: &#34;user-1&#34;, &#34;password&#34;: &#34;newpass&#34; }


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| password | [string](#string) |  |  |






<a name="proto-user-v1-ChangePasswordResponse"></a>

### ChangePasswordResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-user-v1-CreateUserData"></a>

### CreateUserData
Payload used to create a new user.
Example:
{
  &#34;username&#34;: &#34;alice&#34;,
  &#34;email&#34;: &#34;alice@example.com&#34;,
  &#34;password&#34;: &#34;s3cret&#34;,
  &#34;phone&#34;: &#34;&#43;84901112233&#34;,
  &#34;role_ids&#34;: [&#34;role-2&#34;]
}


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |
| phone | [string](#string) |  |  |
| avatar | [string](#string) |  |  |
| status | [UserStatus](#proto-user-v1-UserStatus) |  |  |
| role_ids | [string](#string) | repeated |  |






<a name="proto-user-v1-CreateUserRequest"></a>

### CreateUserRequest
CreateUserRequest includes the data and actor id performing creation.
Example Request:
{
  &#34;user&#34;: { &#34;username&#34;: &#34;bob&#34;, &#34;email&#34;: &#34;bob@example.com&#34;, &#34;password&#34;: &#34;pwd&#34; },
  &#34;user_id&#34;: &#34;admin-1&#34;
}


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [CreateUserData](#proto-user-v1-CreateUserData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-user-v1-CreateUserResponse"></a>

### CreateUserResponse
CreateSuccess returns the created user and any validation errors.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [User](#proto-user-v1-User) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-user-v1-DeleteUserRequest"></a>

### DeleteUserRequest
DeleteUserRequest indicates which user to delete and who requested it.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |






<a name="proto-user-v1-DeleteUserResponse"></a>

### DeleteUserResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-user-v1-GetUserRequest"></a>

### GetUserRequest
GetUserRequest requests a single user by id.
Example Request: { &#34;user_id&#34;: &#34;user-1&#34; }


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |






<a name="proto-user-v1-GetUserResponse"></a>

### GetUserResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [User](#proto-user-v1-User) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-user-v1-GetUsersRequest"></a>

### GetUsersRequest
GetUsersRequest supports pagination, sorting and filtering.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationRequest](#proto-base-v1-PaginationRequest) |  |  |
| sorts | [proto.base.v1.Sort](#proto-base-v1-Sort) | repeated |  |
| filters | [proto.base.v1.Filter](#proto-base-v1-Filter) | repeated |  |






<a name="proto-user-v1-GetUsersResponse"></a>

### GetUsersResponse
GetUsersResponse returns paginated user results.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationResponse](#proto-base-v1-PaginationResponse) |  |  |
| data | [User](#proto-user-v1-User) | repeated |  |






<a name="proto-user-v1-UpdateUserData"></a>

### UpdateUserData
Payload used to update user profile or roles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| phone | [string](#string) |  |  |
| avatar | [string](#string) |  |  |
| status | [UserStatus](#proto-user-v1-UserStatus) |  |  |
| role_ids | [string](#string) | repeated |  |
| user_id | [string](#string) |  |  |






<a name="proto-user-v1-UpdateUserRequest"></a>

### UpdateUserRequest
UpdateUserRequest includes the changes and actor id.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user | [UpdateUserData](#proto-user-v1-UpdateUserData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-user-v1-UpdateUserResponse"></a>

### UpdateUserResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-user-v1-User"></a>

### User
User represents a system user and related metadata.
Fields:
- user_id: unique identifier
- username, email, phone, avatar: profile fields
- status: account status (active, deactivated, deleted)
- created_at/created_user_id, updated_at/updated_user_id, deleted_at/deleted_user_id: audit fields
- role_ids: assigned role identifiers

Example (GetUser response):
{
  &#34;user_id&#34;: &#34;user-1&#34;,
  &#34;username&#34;: &#34;jdoe&#34;,
  &#34;email&#34;: &#34;jdoe@example.com&#34;,
  &#34;phone&#34;: &#34;&#43;84901234567&#34;,
  &#34;status&#34;: 1,
  &#34;role_ids&#34;: [&#34;role-1&#34;]
}


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| phone | [string](#string) |  |  |
| avatar | [string](#string) |  |  |
| status | [UserStatus](#proto-user-v1-UserStatus) |  |  |
| created_at | [string](#string) |  |  |
| created_user_id | [string](#string) |  |  |
| updated_at | [string](#string) |  |  |
| updated_user_id | [string](#string) |  |  |
| deleted_at | [string](#string) |  |  |
| deleted_user_id | [string](#string) |  |  |
| role_ids | [string](#string) | repeated |  |





 


<a name="proto-user-v1-UserStatus"></a>

### UserStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| USER_STATUS_UNSPECIFIED | 0 |  |
| USER_STATUS_ACTIVE | 1 |  |
| USER_STATUS_DEACTIVATED | 2 |  |
| USER_STATUS_DELETED | 3 |  |


 

 


<a name="proto-user-v1-UserService"></a>

### UserService
UserService provides CRUD operations for users and password management.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUser | [GetUserRequest](#proto-user-v1-GetUserRequest) | [GetUserResponse](#proto-user-v1-GetUserResponse) | GetUser returns a single user by id. Request: { &#34;user_id&#34;: &#34;user-1&#34; } Response: GetUserResponse (see User example above) |
| GetUsers | [GetUsersRequest](#proto-user-v1-GetUsersRequest) | [GetUsersResponse](#proto-user-v1-GetUsersResponse) | GetUsers returns paginated users. Request example: { &#34;pagination&#34;: { &#34;page&#34;: 1, &#34;limit&#34;: 20 } } Response example: { &#34;pagination&#34;: { &#34;page&#34;:1, &#34;limit&#34;:20, &#34;total_items&#34;:100, &#34;total_pages&#34;:5, &#34;item_count&#34;:20 }, &#34;data&#34;: [ /* User */ ] } |
| CreateUser | [CreateUserRequest](#proto-user-v1-CreateUserRequest) | [CreateUserResponse](#proto-user-v1-CreateUserResponse) | CreateUser creates a new user. `user_id` is the actor performing the action. Request: CreateUserRequest (see CreateUserRequest example) Response: CreateUserResponse containing created `User`. |
| UpdateUser | [UpdateUserRequest](#proto-user-v1-UpdateUserRequest) | [UpdateUserResponse](#proto-user-v1-UpdateUserResponse) | UpdateUser updates an existing user. Returns UpdateSuccess. Request example: { &#34;user&#34;: { &#34;user_id&#34;: &#34;user-1&#34;, &#34;username&#34;: &#34;newname&#34; }, &#34;user_id&#34;: &#34;admin-1&#34; } Response: { &#34;success&#34;: true, &#34;errors&#34;: [] } |
| DeleteUser | [DeleteUserRequest](#proto-user-v1-DeleteUserRequest) | [DeleteUserResponse](#proto-user-v1-DeleteUserResponse) | DeleteUser marks a user as deleted. Request: { &#34;user_id&#34;: &#34;user-1&#34;, &#34;deleted_user_id&#34;: &#34;admin-1&#34; } Response: { &#34;success&#34;: true, &#34;errors&#34;: [] } |
| ChangePassword | [ChangePasswordRequest](#proto-user-v1-ChangePasswordRequest) | [ChangePasswordResponse](#proto-user-v1-ChangePasswordResponse) | ChangePassword updates the user&#39;s password. Request: { &#34;user_id&#34;: &#34;user-1&#34;, &#34;password&#34;: &#34;newpass&#34; } Response: { &#34;success&#34;: true, &#34;errors&#34;: [] } |

 



<a name="proto_user_role_v1_user_role-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## proto/user_role/v1/user_role.proto



<a name="proto-user_role-v1-CreateUserRoleData"></a>

### CreateUserRoleData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| role_id | [string](#string) |  |  |






<a name="proto-user_role-v1-CreateUserRoleRequest"></a>

### CreateUserRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role | [CreateUserRoleData](#proto-user_role-v1-CreateUserRoleData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-user_role-v1-CreateUserRoleResponse"></a>

### CreateUserRoleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role | [UserRole](#proto-user_role-v1-UserRole) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-user_role-v1-DeleteUserRoleRequest"></a>

### DeleteUserRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role_id | [string](#string) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-user_role-v1-DeleteUserRoleResponse"></a>

### DeleteUserRoleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-user_role-v1-GetUserRoleRequest"></a>

### GetUserRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role_id | [string](#string) |  |  |






<a name="proto-user_role-v1-GetUserRoleResponse"></a>

### GetUserRoleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role | [UserRole](#proto-user_role-v1-UserRole) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-user_role-v1-GetUserRolesRequest"></a>

### GetUserRolesRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationRequest](#proto-base-v1-PaginationRequest) |  |  |
| sorts | [proto.base.v1.Sort](#proto-base-v1-Sort) | repeated |  |
| filters | [proto.base.v1.Filter](#proto-base-v1-Filter) | repeated |  |






<a name="proto-user_role-v1-GetUserRolesResponse"></a>

### GetUserRolesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pagination | [proto.base.v1.PaginationResponse](#proto-base-v1-PaginationResponse) |  |  |
| data | [UserRole](#proto-user_role-v1-UserRole) | repeated |  |






<a name="proto-user_role-v1-UpdateUserRoleData"></a>

### UpdateUserRoleData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) |  |  |
| role_id | [string](#string) |  |  |






<a name="proto-user_role-v1-UpdateUserRoleRequest"></a>

### UpdateUserRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_role | [UpdateUserRoleData](#proto-user_role-v1-UpdateUserRoleData) |  |  |
| user_id | [string](#string) |  |  |






<a name="proto-user_role-v1-UpdateUserRoleResponse"></a>

### UpdateUserRoleResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) |  |  |
| errors | [proto.base.v1.ErrorMessage](#proto-base-v1-ErrorMessage) | repeated |  |






<a name="proto-user_role-v1-UserRole"></a>

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





 

 

 


<a name="proto-user_role-v1-UserRoleService"></a>

### UserRoleService
UserRoleService: manage user role assignments

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetUserRole | [GetUserRoleRequest](#proto-user_role-v1-GetUserRoleRequest) | [GetUserRoleResponse](#proto-user_role-v1-GetUserRoleResponse) | GetUserRole returns a single user_role Req example: { &#34;user_role_id&#34;: &#34;uuid&#34; } |
| GetUserRoles | [GetUserRolesRequest](#proto-user_role-v1-GetUserRolesRequest) | [GetUserRolesResponse](#proto-user_role-v1-GetUserRolesResponse) | GetUserRoles returns paginated user_role list Req example: { &#34;pagination&#34;: { &#34;page&#34;:1, &#34;limit&#34;:10 } } |
| CreateUserRole | [CreateUserRoleRequest](#proto-user_role-v1-CreateUserRoleRequest) | [CreateUserRoleResponse](#proto-user_role-v1-CreateUserRoleResponse) | CreateUserRole assigns a role to a user Req example: { &#34;user_role&#34;: { &#34;user_id&#34;:&#34;uuid&#34;, &#34;role_id&#34;:&#34;uuid&#34; }, &#34;user_id&#34;:&#34;uuid&#34; } |
| UpdateUserRole | [UpdateUserRoleRequest](#proto-user_role-v1-UpdateUserRoleRequest) | [UpdateUserRoleResponse](#proto-user_role-v1-UpdateUserRoleResponse) | UpdateUserRole updates an assignment Req example: { &#34;user_role&#34;: { &#34;user_id&#34;:&#34;uuid&#34;, &#34;role_id&#34;:&#34;uuid&#34; }, &#34;user_id&#34;:&#34;uuid&#34; } |
| DeleteUserRole | [DeleteUserRoleRequest](#proto-user_role-v1-DeleteUserRoleRequest) | [DeleteUserRoleResponse](#proto-user_role-v1-DeleteUserRoleResponse) | DeleteUserRole removes assignment Req example: { &#34;user_role_id&#34;:&#34;uuid&#34;, &#34;user_id&#34;:&#34;uuid&#34; } |

 



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

