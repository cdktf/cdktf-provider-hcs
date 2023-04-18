# `data_hcs_agent_helm_config`

Refer to the Terraform Registory for docs: [`data_hcs_agent_helm_config`](https://www.terraform.io/docs/providers/hcs/d/agent_helm_config).

# `dataHcsAgentHelmConfig` Submodule <a name="`dataHcsAgentHelmConfig` Submodule" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsAgentHelmConfig <a name="DataHcsAgentHelmConfig" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config hcs_agent_helm_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsagenthelmconfig"

datahcsagenthelmconfig.NewDataHcsAgentHelmConfig(scope Construct, id *string, config DataHcsAgentHelmConfigConfig) DataHcsAgentHelmConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig">DataHcsAgentHelmConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig">DataHcsAgentHelmConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetAksResourceGroup">ResetAksResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetExposeGossipPorts">ResetExposeGossipPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.putTimeouts"></a>

```go
func PutTimeouts(value DataHcsAgentHelmConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a>

---

##### `ResetAksResourceGroup` <a name="ResetAksResourceGroup" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetAksResourceGroup"></a>

```go
func ResetAksResourceGroup()
```

##### `ResetExposeGossipPorts` <a name="ResetExposeGossipPorts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetExposeGossipPorts"></a>

```go
func ResetExposeGossipPorts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsagenthelmconfig"

datahcsagenthelmconfig.DataHcsAgentHelmConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsagenthelmconfig"

datahcsagenthelmconfig.DataHcsAgentHelmConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsagenthelmconfig"

datahcsagenthelmconfig.DataHcsAgentHelmConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.config">Config</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference">DataHcsAgentHelmConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterNameInput">AksClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroupInput">AksResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPortsInput">ExposeGossipPortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationNameInput">ManagedApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterName">AksClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroup">AksResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPorts">ExposeGossipPorts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationName">ManagedApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.config"></a>

```go
func Config() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeouts"></a>

```go
func Timeouts() DataHcsAgentHelmConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference">DataHcsAgentHelmConfigTimeoutsOutputReference</a>

---

##### `AksClusterNameInput`<sup>Optional</sup> <a name="AksClusterNameInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterNameInput"></a>

```go
func AksClusterNameInput() *string
```

- *Type:* *string

---

##### `AksResourceGroupInput`<sup>Optional</sup> <a name="AksResourceGroupInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroupInput"></a>

```go
func AksResourceGroupInput() *string
```

- *Type:* *string

---

##### `ExposeGossipPortsInput`<sup>Optional</sup> <a name="ExposeGossipPortsInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPortsInput"></a>

```go
func ExposeGossipPortsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedApplicationNameInput`<sup>Optional</sup> <a name="ManagedApplicationNameInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationNameInput"></a>

```go
func ManagedApplicationNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AksClusterName`<sup>Required</sup> <a name="AksClusterName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterName"></a>

```go
func AksClusterName() *string
```

- *Type:* *string

---

##### `AksResourceGroup`<sup>Required</sup> <a name="AksResourceGroup" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroup"></a>

```go
func AksResourceGroup() *string
```

- *Type:* *string

---

##### `ExposeGossipPorts`<sup>Required</sup> <a name="ExposeGossipPorts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPorts"></a>

```go
func ExposeGossipPorts() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationName"></a>

```go
func ManagedApplicationName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsAgentHelmConfigConfig <a name="DataHcsAgentHelmConfigConfig" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsagenthelmconfig"

&datahcsagenthelmconfig.DataHcsAgentHelmConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AksClusterName: *string,
	ManagedApplicationName: *string,
	ResourceGroupName: *string,
	AksResourceGroup: *string,
	ExposeGossipPorts: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcs-go/hcs/v4.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksClusterName">AksClusterName</a></code> | <code>*string</code> | The name of the AKS cluster that will consume the Helm config. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.managedApplicationName">ManagedApplicationName</a></code> | <code>*string</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksResourceGroup">AksResourceGroup</a></code> | <code>*string</code> | The resource group name of the AKS cluster that will consume the Helm config. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.exposeGossipPorts">ExposeGossipPorts</a></code> | <code>interface{}</code> | Denotes that the gossip ports should be exposed. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config#id DataHcsAgentHelmConfig#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AksClusterName`<sup>Required</sup> <a name="AksClusterName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksClusterName"></a>

```go
AksClusterName *string
```

- *Type:* *string

The name of the AKS cluster that will consume the Helm config.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config#aks_cluster_name DataHcsAgentHelmConfig#aks_cluster_name}

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.managedApplicationName"></a>

```go
ManagedApplicationName *string
```

- *Type:* *string

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config#managed_application_name DataHcsAgentHelmConfig#managed_application_name}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config#resource_group_name DataHcsAgentHelmConfig#resource_group_name}

---

##### `AksResourceGroup`<sup>Optional</sup> <a name="AksResourceGroup" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksResourceGroup"></a>

```go
AksResourceGroup *string
```

- *Type:* *string

The resource group name of the AKS cluster that will consume the Helm config.

If not specified, it is defaulted to the value of `resource_group_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config#aks_resource_group DataHcsAgentHelmConfig#aks_resource_group}

---

##### `ExposeGossipPorts`<sup>Optional</sup> <a name="ExposeGossipPorts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.exposeGossipPorts"></a>

```go
ExposeGossipPorts interface{}
```

- *Type:* interface{}

Denotes that the gossip ports should be exposed. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config#expose_gossip_ports DataHcsAgentHelmConfig#expose_gossip_ports}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config#id DataHcsAgentHelmConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.timeouts"></a>

```go
Timeouts DataHcsAgentHelmConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config#timeouts DataHcsAgentHelmConfig#timeouts}

---

### DataHcsAgentHelmConfigTimeouts <a name="DataHcsAgentHelmConfigTimeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsagenthelmconfig"

&datahcsagenthelmconfig.DataHcsAgentHelmConfigTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config#default DataHcsAgentHelmConfig#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_helm_config#default DataHcsAgentHelmConfig#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsAgentHelmConfigTimeoutsOutputReference <a name="DataHcsAgentHelmConfigTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsagenthelmconfig"

datahcsagenthelmconfig.NewDataHcsAgentHelmConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcsAgentHelmConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



