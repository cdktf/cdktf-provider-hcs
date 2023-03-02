# `dataHcsCluster` Submodule <a name="`dataHcsCluster` Submodule" id="@cdktf/provider-hcs.dataHcsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsCluster <a name="DataHcsCluster" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/hcs/d/cluster hcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v3/datahcscluster"

datahcscluster.NewDataHcsCluster(scope Construct, id *string, config DataHcsClusterConfig) DataHcsCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig">DataHcsClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig">DataHcsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts"></a>

```go
func PutTimeouts(value DataHcsClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>

---

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v3/datahcscluster"

datahcscluster.DataHcsCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v3/datahcscluster"

datahcscluster.DataHcsCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v3/datahcscluster"

datahcscluster.DataHcsCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.blobContainerName">BlobContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterMode">ClusterMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulAutomaticUpgrades">ConsulAutomaticUpgrades</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulCaFile">ConsulCaFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulClusterId">ConsulClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConfigFile">ConsulConfigFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConnect">ConsulConnect</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulDatacenter">ConsulDatacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpoint">ConsulExternalEndpoint</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpointUrl">ConsulExternalEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulFederationToken">ConsulFederationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulPrivateEndpointUrl">ConsulPrivateEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotInterval">ConsulSnapshotInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotRetention">ConsulSnapshotRetention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulVersion">ConsulVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationId">ManagedApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.planName">PlanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountResourceGroup">StorageAccountResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference">DataHcsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetCidr">VnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetId">VnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetName">VnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetResourceGroupName">VnetResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationNameInput">ManagedApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationName">ManagedApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BlobContainerName`<sup>Required</sup> <a name="BlobContainerName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.blobContainerName"></a>

```go
func BlobContainerName() *string
```

- *Type:* *string

---

##### `ClusterMode`<sup>Required</sup> <a name="ClusterMode" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterMode"></a>

```go
func ClusterMode() *string
```

- *Type:* *string

---

##### `ConsulAutomaticUpgrades`<sup>Required</sup> <a name="ConsulAutomaticUpgrades" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulAutomaticUpgrades"></a>

```go
func ConsulAutomaticUpgrades() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConsulCaFile`<sup>Required</sup> <a name="ConsulCaFile" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulCaFile"></a>

```go
func ConsulCaFile() *string
```

- *Type:* *string

---

##### `ConsulClusterId`<sup>Required</sup> <a name="ConsulClusterId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulClusterId"></a>

```go
func ConsulClusterId() *string
```

- *Type:* *string

---

##### `ConsulConfigFile`<sup>Required</sup> <a name="ConsulConfigFile" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConfigFile"></a>

```go
func ConsulConfigFile() *string
```

- *Type:* *string

---

##### `ConsulConnect`<sup>Required</sup> <a name="ConsulConnect" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConnect"></a>

```go
func ConsulConnect() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConsulDatacenter`<sup>Required</sup> <a name="ConsulDatacenter" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulDatacenter"></a>

```go
func ConsulDatacenter() *string
```

- *Type:* *string

---

##### `ConsulExternalEndpoint`<sup>Required</sup> <a name="ConsulExternalEndpoint" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpoint"></a>

```go
func ConsulExternalEndpoint() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConsulExternalEndpointUrl`<sup>Required</sup> <a name="ConsulExternalEndpointUrl" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpointUrl"></a>

```go
func ConsulExternalEndpointUrl() *string
```

- *Type:* *string

---

##### `ConsulFederationToken`<sup>Required</sup> <a name="ConsulFederationToken" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulFederationToken"></a>

```go
func ConsulFederationToken() *string
```

- *Type:* *string

---

##### `ConsulPrivateEndpointUrl`<sup>Required</sup> <a name="ConsulPrivateEndpointUrl" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulPrivateEndpointUrl"></a>

```go
func ConsulPrivateEndpointUrl() *string
```

- *Type:* *string

---

##### `ConsulSnapshotInterval`<sup>Required</sup> <a name="ConsulSnapshotInterval" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotInterval"></a>

```go
func ConsulSnapshotInterval() *string
```

- *Type:* *string

---

##### `ConsulSnapshotRetention`<sup>Required</sup> <a name="ConsulSnapshotRetention" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotRetention"></a>

```go
func ConsulSnapshotRetention() *string
```

- *Type:* *string

---

##### `ConsulVersion`<sup>Required</sup> <a name="ConsulVersion" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulVersion"></a>

```go
func ConsulVersion() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ManagedApplicationId`<sup>Required</sup> <a name="ManagedApplicationId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationId"></a>

```go
func ManagedApplicationId() *string
```

- *Type:* *string

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedResourceGroupName"></a>

```go
func ManagedResourceGroupName() *string
```

- *Type:* *string

---

##### `PlanName`<sup>Required</sup> <a name="PlanName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.planName"></a>

```go
func PlanName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `StorageAccountResourceGroup`<sup>Required</sup> <a name="StorageAccountResourceGroup" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountResourceGroup"></a>

```go
func StorageAccountResourceGroup() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeouts"></a>

```go
func Timeouts() DataHcsClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference">DataHcsClusterTimeoutsOutputReference</a>

---

##### `VnetCidr`<sup>Required</sup> <a name="VnetCidr" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetCidr"></a>

```go
func VnetCidr() *string
```

- *Type:* *string

---

##### `VnetId`<sup>Required</sup> <a name="VnetId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetId"></a>

```go
func VnetId() *string
```

- *Type:* *string

---

##### `VnetName`<sup>Required</sup> <a name="VnetName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetName"></a>

```go
func VnetName() *string
```

- *Type:* *string

---

##### `VnetResourceGroupName`<sup>Required</sup> <a name="VnetResourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetResourceGroupName"></a>

```go
func VnetResourceGroupName() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedApplicationNameInput`<sup>Optional</sup> <a name="ManagedApplicationNameInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationNameInput"></a>

```go
func ManagedApplicationNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationName"></a>

```go
func ManagedApplicationName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsClusterConfig <a name="DataHcsClusterConfig" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v3/datahcscluster"

&datahcscluster.DataHcsClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedApplicationName: *string,
	ResourceGroupName: *string,
	ClusterName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcs-go/hcs/v3.dataHcsCluster.DataHcsClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.managedApplicationName">ManagedApplicationName</a></code> | <code>*string</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#id DataHcsCluster#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.managedApplicationName"></a>

```go
ManagedApplicationName *string
```

- *Type:* *string

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#managed_application_name DataHcsCluster#managed_application_name}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#resource_group_name DataHcsCluster#resource_group_name}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#cluster_name DataHcsCluster#cluster_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#id DataHcsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.timeouts"></a>

```go
Timeouts DataHcsClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#timeouts DataHcsCluster#timeouts}

---

### DataHcsClusterTimeouts <a name="DataHcsClusterTimeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v3/datahcscluster"

&datahcscluster.DataHcsClusterTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#default DataHcsCluster#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#default DataHcsCluster#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsClusterTimeoutsOutputReference <a name="DataHcsClusterTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v3/datahcscluster"

datahcscluster.NewDataHcsClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcsClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



