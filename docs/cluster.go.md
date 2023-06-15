# `hcs_cluster`

Refer to the Terraform Registory for docs: [`hcs_cluster`](https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster).

# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-hcs.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-hcs.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster hcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.cluster.Cluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v5/cluster"

cluster.NewCluster(scope Construct, id *string, config ClusterConfig) Cluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig">ClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterConfig">ClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetAuditLoggingEnabled">ResetAuditLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetAuditLogStorageContainerUrl">ResetAuditLogStorageContainerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetConsulDatacenter">ResetConsulDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetConsulExternalEndpoint">ResetConsulExternalEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetConsulFederationToken">ResetConsulFederationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetManagedResourceGroupName">ResetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetMinConsulVersion">ResetMinConsulVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetPlanName">ResetPlanName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetVnetCidr">ResetVnetCidr</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.cluster.Cluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcs.cluster.Cluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcs.cluster.Cluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcs.cluster.Cluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcs.cluster.Cluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts"></a>

```go
func PutTimeouts(value ClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `ResetAuditLoggingEnabled` <a name="ResetAuditLoggingEnabled" id="@cdktf/provider-hcs.cluster.Cluster.resetAuditLoggingEnabled"></a>

```go
func ResetAuditLoggingEnabled()
```

##### `ResetAuditLogStorageContainerUrl` <a name="ResetAuditLogStorageContainerUrl" id="@cdktf/provider-hcs.cluster.Cluster.resetAuditLogStorageContainerUrl"></a>

```go
func ResetAuditLogStorageContainerUrl()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-hcs.cluster.Cluster.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetConsulDatacenter` <a name="ResetConsulDatacenter" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulDatacenter"></a>

```go
func ResetConsulDatacenter()
```

##### `ResetConsulExternalEndpoint` <a name="ResetConsulExternalEndpoint" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulExternalEndpoint"></a>

```go
func ResetConsulExternalEndpoint()
```

##### `ResetConsulFederationToken` <a name="ResetConsulFederationToken" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulFederationToken"></a>

```go
func ResetConsulFederationToken()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcs.cluster.Cluster.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-hcs.cluster.Cluster.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetManagedResourceGroupName` <a name="ResetManagedResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.resetManagedResourceGroupName"></a>

```go
func ResetManagedResourceGroupName()
```

##### `ResetMinConsulVersion` <a name="ResetMinConsulVersion" id="@cdktf/provider-hcs.cluster.Cluster.resetMinConsulVersion"></a>

```go
func ResetMinConsulVersion()
```

##### `ResetPlanName` <a name="ResetPlanName" id="@cdktf/provider-hcs.cluster.Cluster.resetPlanName"></a>

```go
func ResetPlanName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-hcs.cluster.Cluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcs.cluster.Cluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVnetCidr` <a name="ResetVnetCidr" id="@cdktf/provider-hcs.cluster.Cluster.resetVnetCidr"></a>

```go
func ResetVnetCidr()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcs.cluster.Cluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v5/cluster"

cluster.Cluster_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.cluster.Cluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v5/cluster"

cluster.Cluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v5/cluster"

cluster.Cluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.blobContainerName">BlobContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulAutomaticUpgrades">ConsulAutomaticUpgrades</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulCaFile">ConsulCaFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulClusterId">ConsulClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulConfigFile">ConsulConfigFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulConnect">ConsulConnect</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointUrl">ConsulExternalEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulPrivateEndpointUrl">ConsulPrivateEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenAccessorId">ConsulRootTokenAccessorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenSecretId">ConsulRootTokenSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotInterval">ConsulSnapshotInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotRetention">ConsulSnapshotRetention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulVersion">ConsulVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationId">ManagedApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedIdentityName">ManagedIdentityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.storageAccountResourceGroup">StorageAccountResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetId">VnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetName">VnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetResourceGroupName">VnetResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabledInput">AuditLoggingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrlInput">AuditLogStorageContainerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterModeInput">ClusterModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenterInput">ConsulDatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointInput">ConsulExternalEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulFederationTokenInput">ConsulFederationTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationNameInput">ManagedApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupNameInput">ManagedResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersionInput">MinConsulVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.planNameInput">PlanNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetCidrInput">VnetCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabled">AuditLoggingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrl">AuditLogStorageContainerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterMode">ClusterMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenter">ConsulDatacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpoint">ConsulExternalEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulFederationToken">ConsulFederationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationName">ManagedApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersion">MinConsulVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.planName">PlanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetCidr">VnetCidr</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcs.cluster.Cluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcs.cluster.Cluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.cluster.Cluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcs.cluster.Cluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcs.cluster.Cluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.cluster.Cluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.cluster.Cluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.cluster.Cluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.cluster.Cluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.cluster.Cluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcs.cluster.Cluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlobContainerName`<sup>Required</sup> <a name="BlobContainerName" id="@cdktf/provider-hcs.cluster.Cluster.property.blobContainerName"></a>

```go
func BlobContainerName() *string
```

- *Type:* *string

---

##### `ConsulAutomaticUpgrades`<sup>Required</sup> <a name="ConsulAutomaticUpgrades" id="@cdktf/provider-hcs.cluster.Cluster.property.consulAutomaticUpgrades"></a>

```go
func ConsulAutomaticUpgrades() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConsulCaFile`<sup>Required</sup> <a name="ConsulCaFile" id="@cdktf/provider-hcs.cluster.Cluster.property.consulCaFile"></a>

```go
func ConsulCaFile() *string
```

- *Type:* *string

---

##### `ConsulClusterId`<sup>Required</sup> <a name="ConsulClusterId" id="@cdktf/provider-hcs.cluster.Cluster.property.consulClusterId"></a>

```go
func ConsulClusterId() *string
```

- *Type:* *string

---

##### `ConsulConfigFile`<sup>Required</sup> <a name="ConsulConfigFile" id="@cdktf/provider-hcs.cluster.Cluster.property.consulConfigFile"></a>

```go
func ConsulConfigFile() *string
```

- *Type:* *string

---

##### `ConsulConnect`<sup>Required</sup> <a name="ConsulConnect" id="@cdktf/provider-hcs.cluster.Cluster.property.consulConnect"></a>

```go
func ConsulConnect() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConsulExternalEndpointUrl`<sup>Required</sup> <a name="ConsulExternalEndpointUrl" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointUrl"></a>

```go
func ConsulExternalEndpointUrl() *string
```

- *Type:* *string

---

##### `ConsulPrivateEndpointUrl`<sup>Required</sup> <a name="ConsulPrivateEndpointUrl" id="@cdktf/provider-hcs.cluster.Cluster.property.consulPrivateEndpointUrl"></a>

```go
func ConsulPrivateEndpointUrl() *string
```

- *Type:* *string

---

##### `ConsulRootTokenAccessorId`<sup>Required</sup> <a name="ConsulRootTokenAccessorId" id="@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenAccessorId"></a>

```go
func ConsulRootTokenAccessorId() *string
```

- *Type:* *string

---

##### `ConsulRootTokenSecretId`<sup>Required</sup> <a name="ConsulRootTokenSecretId" id="@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenSecretId"></a>

```go
func ConsulRootTokenSecretId() *string
```

- *Type:* *string

---

##### `ConsulSnapshotInterval`<sup>Required</sup> <a name="ConsulSnapshotInterval" id="@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotInterval"></a>

```go
func ConsulSnapshotInterval() *string
```

- *Type:* *string

---

##### `ConsulSnapshotRetention`<sup>Required</sup> <a name="ConsulSnapshotRetention" id="@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotRetention"></a>

```go
func ConsulSnapshotRetention() *string
```

- *Type:* *string

---

##### `ConsulVersion`<sup>Required</sup> <a name="ConsulVersion" id="@cdktf/provider-hcs.cluster.Cluster.property.consulVersion"></a>

```go
func ConsulVersion() *string
```

- *Type:* *string

---

##### `ManagedApplicationId`<sup>Required</sup> <a name="ManagedApplicationId" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationId"></a>

```go
func ManagedApplicationId() *string
```

- *Type:* *string

---

##### `ManagedIdentityName`<sup>Required</sup> <a name="ManagedIdentityName" id="@cdktf/provider-hcs.cluster.Cluster.property.managedIdentityName"></a>

```go
func ManagedIdentityName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcs.cluster.Cluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-hcs.cluster.Cluster.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `StorageAccountResourceGroup`<sup>Required</sup> <a name="StorageAccountResourceGroup" id="@cdktf/provider-hcs.cluster.Cluster.property.storageAccountResourceGroup"></a>

```go
func StorageAccountResourceGroup() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcs.cluster.Cluster.property.timeouts"></a>

```go
func Timeouts() ClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `VnetId`<sup>Required</sup> <a name="VnetId" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetId"></a>

```go
func VnetId() *string
```

- *Type:* *string

---

##### `VnetName`<sup>Required</sup> <a name="VnetName" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetName"></a>

```go
func VnetName() *string
```

- *Type:* *string

---

##### `VnetResourceGroupName`<sup>Required</sup> <a name="VnetResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetResourceGroupName"></a>

```go
func VnetResourceGroupName() *string
```

- *Type:* *string

---

##### `AuditLoggingEnabledInput`<sup>Optional</sup> <a name="AuditLoggingEnabledInput" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabledInput"></a>

```go
func AuditLoggingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AuditLogStorageContainerUrlInput`<sup>Optional</sup> <a name="AuditLogStorageContainerUrlInput" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrlInput"></a>

```go
func AuditLogStorageContainerUrlInput() *string
```

- *Type:* *string

---

##### `ClusterModeInput`<sup>Optional</sup> <a name="ClusterModeInput" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterModeInput"></a>

```go
func ClusterModeInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ConsulDatacenterInput`<sup>Optional</sup> <a name="ConsulDatacenterInput" id="@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenterInput"></a>

```go
func ConsulDatacenterInput() *string
```

- *Type:* *string

---

##### `ConsulExternalEndpointInput`<sup>Optional</sup> <a name="ConsulExternalEndpointInput" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointInput"></a>

```go
func ConsulExternalEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `ConsulFederationTokenInput`<sup>Optional</sup> <a name="ConsulFederationTokenInput" id="@cdktf/provider-hcs.cluster.Cluster.property.consulFederationTokenInput"></a>

```go
func ConsulFederationTokenInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-hcs.cluster.Cluster.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcs.cluster.Cluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-hcs.cluster.Cluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagedApplicationNameInput`<sup>Optional</sup> <a name="ManagedApplicationNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationNameInput"></a>

```go
func ManagedApplicationNameInput() *string
```

- *Type:* *string

---

##### `ManagedResourceGroupNameInput`<sup>Optional</sup> <a name="ManagedResourceGroupNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupNameInput"></a>

```go
func ManagedResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `MinConsulVersionInput`<sup>Optional</sup> <a name="MinConsulVersionInput" id="@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersionInput"></a>

```go
func MinConsulVersionInput() *string
```

- *Type:* *string

---

##### `PlanNameInput`<sup>Optional</sup> <a name="PlanNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.planNameInput"></a>

```go
func PlanNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-hcs.cluster.Cluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcs.cluster.Cluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VnetCidrInput`<sup>Optional</sup> <a name="VnetCidrInput" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetCidrInput"></a>

```go
func VnetCidrInput() *string
```

- *Type:* *string

---

##### `AuditLoggingEnabled`<sup>Required</sup> <a name="AuditLoggingEnabled" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabled"></a>

```go
func AuditLoggingEnabled() interface{}
```

- *Type:* interface{}

---

##### `AuditLogStorageContainerUrl`<sup>Required</sup> <a name="AuditLogStorageContainerUrl" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrl"></a>

```go
func AuditLogStorageContainerUrl() *string
```

- *Type:* *string

---

##### `ClusterMode`<sup>Required</sup> <a name="ClusterMode" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterMode"></a>

```go
func ClusterMode() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `ConsulDatacenter`<sup>Required</sup> <a name="ConsulDatacenter" id="@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenter"></a>

```go
func ConsulDatacenter() *string
```

- *Type:* *string

---

##### `ConsulExternalEndpoint`<sup>Required</sup> <a name="ConsulExternalEndpoint" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpoint"></a>

```go
func ConsulExternalEndpoint() interface{}
```

- *Type:* interface{}

---

##### `ConsulFederationToken`<sup>Required</sup> <a name="ConsulFederationToken" id="@cdktf/provider-hcs.cluster.Cluster.property.consulFederationToken"></a>

```go
func ConsulFederationToken() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-hcs.cluster.Cluster.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcs.cluster.Cluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-hcs.cluster.Cluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationName"></a>

```go
func ManagedApplicationName() *string
```

- *Type:* *string

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupName"></a>

```go
func ManagedResourceGroupName() *string
```

- *Type:* *string

---

##### `MinConsulVersion`<sup>Required</sup> <a name="MinConsulVersion" id="@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersion"></a>

```go
func MinConsulVersion() *string
```

- *Type:* *string

---

##### `PlanName`<sup>Required</sup> <a name="PlanName" id="@cdktf/provider-hcs.cluster.Cluster.property.planName"></a>

```go
func PlanName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-hcs.cluster.Cluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VnetCidr`<sup>Required</sup> <a name="VnetCidr" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetCidr"></a>

```go
func VnetCidr() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcs.cluster.Cluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-hcs.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.cluster.ClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v5/cluster"

&cluster.ClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterMode: *string,
	Email: *string,
	ManagedApplicationName: *string,
	ResourceGroupName: *string,
	AuditLoggingEnabled: interface{},
	AuditLogStorageContainerUrl: *string,
	ClusterName: *string,
	ConsulDatacenter: *string,
	ConsulExternalEndpoint: interface{},
	ConsulFederationToken: *string,
	Id: *string,
	Location: *string,
	ManagedResourceGroupName: *string,
	MinConsulVersion: *string,
	PlanName: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-hcs-go/hcs/v5.cluster.ClusterTimeouts,
	VnetCidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterMode">ClusterMode</a></code> | <code>*string</code> | The mode of the cluster ('Development' or 'Production'). |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.email">Email</a></code> | <code>*string</code> | The contact email for the primary owner of the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.managedApplicationName">ManagedApplicationName</a></code> | <code>*string</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLoggingEnabled">AuditLoggingEnabled</a></code> | <code>interface{}</code> | Enables Consul audit logging for the cluster resource. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLogStorageContainerUrl">AuditLogStorageContainerUrl</a></code> | <code>*string</code> | The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulDatacenter">ConsulDatacenter</a></code> | <code>*string</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulExternalEndpoint">ConsulExternalEndpoint</a></code> | <code>interface{}</code> | Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulFederationToken">ConsulFederationToken</a></code> | <code>*string</code> | The token used to join a federation of Consul clusters. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.location">Location</a></code> | <code>*string</code> | The Azure region that the cluster is deployed to. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | The name of the Managed Resource Group in which the cluster resources belong. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.minConsulVersion">MinConsulVersion</a></code> | <code>*string</code> | The minimum Consul version of the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.planName">PlanName</a></code> | <code>*string</code> | The name of the Azure Marketplace HCS plan for the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A mapping of tags to assign to the HCS Azure Managed Application resource. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.vnetCidr">VnetCidr</a></code> | <code>*string</code> | The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterMode`<sup>Required</sup> <a name="ClusterMode" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterMode"></a>

```go
ClusterMode *string
```

- *Type:* *string

The mode of the cluster ('Development' or 'Production').

Development clusters only have a single Consul server. Production clusters are fully supported, full featured, and deploy with a minimum of three hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#cluster_mode Cluster#cluster_mode}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

The contact email for the primary owner of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#email Cluster#email}

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.managedApplicationName"></a>

```go
ManagedApplicationName *string
```

- *Type:* *string

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#managed_application_name Cluster#managed_application_name}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#resource_group_name Cluster#resource_group_name}

---

##### `AuditLoggingEnabled`<sup>Optional</sup> <a name="AuditLoggingEnabled" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLoggingEnabled"></a>

```go
AuditLoggingEnabled interface{}
```

- *Type:* interface{}

Enables Consul audit logging for the cluster resource. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#audit_logging_enabled Cluster#audit_logging_enabled}

---

##### `AuditLogStorageContainerUrl`<sup>Optional</sup> <a name="AuditLogStorageContainerUrl" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLogStorageContainerUrl"></a>

```go
AuditLogStorageContainerUrl *string
```

- *Type:* *string

The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#audit_log_storage_container_url Cluster#audit_log_storage_container_url}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#cluster_name Cluster#cluster_name}

---

##### `ConsulDatacenter`<sup>Optional</sup> <a name="ConsulDatacenter" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulDatacenter"></a>

```go
ConsulDatacenter *string
```

- *Type:* *string

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_datacenter Cluster#consul_datacenter}

---

##### `ConsulExternalEndpoint`<sup>Optional</sup> <a name="ConsulExternalEndpoint" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulExternalEndpoint"></a>

```go
ConsulExternalEndpoint interface{}
```

- *Type:* interface{}

Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_external_endpoint Cluster#consul_external_endpoint}

---

##### `ConsulFederationToken`<sup>Optional</sup> <a name="ConsulFederationToken" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulFederationToken"></a>

```go
ConsulFederationToken *string
```

- *Type:* *string

The token used to join a federation of Consul clusters.

If the cluster is not part of a federation, this field will be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_federation_token Cluster#consul_federation_token}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The Azure region that the cluster is deployed to.

If not specified, it is defaulted to the region of the Resource Group the Managed Application belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#location Cluster#location}

---

##### `ManagedResourceGroupName`<sup>Optional</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.managedResourceGroupName"></a>

```go
ManagedResourceGroupName *string
```

- *Type:* *string

The name of the Managed Resource Group in which the cluster resources belong.

If not specified, it is defaulted to the value of `managed_application_name` with 'mrg-' prepended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#managed_resource_group_name Cluster#managed_resource_group_name}

---

##### `MinConsulVersion`<sup>Optional</sup> <a name="MinConsulVersion" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.minConsulVersion"></a>

```go
MinConsulVersion *string
```

- *Type:* *string

The minimum Consul version of the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#min_consul_version Cluster#min_consul_version}

---

##### `PlanName`<sup>Optional</sup> <a name="PlanName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.planName"></a>

```go
PlanName *string
```

- *Type:* *string

The name of the Azure Marketplace HCS plan for the cluster.

If not specified, it will default to the current HCS default plan (see the `hcs_plan_defaults` data source).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#plan_name Cluster#plan_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A mapping of tags to assign to the HCS Azure Managed Application resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#tags Cluster#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.timeouts"></a>

```go
Timeouts ClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `VnetCidr`<sup>Optional</sup> <a name="VnetCidr" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.vnetCidr"></a>

```go
VnetCidr *string
```

- *Type:* *string

The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#vnet_cidr Cluster#vnet_cidr}

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-hcs.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v5/cluster"

&cluster.ClusterTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#default Cluster#default}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#update Cluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#create Cluster#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#default Cluster#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#delete Cluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#update Cluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v5/cluster"

cluster.NewClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



