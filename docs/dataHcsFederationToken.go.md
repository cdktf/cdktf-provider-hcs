# `data_hcs_federation_token`

Refer to the Terraform Registory for docs: [`data_hcs_federation_token`](https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/federation_token).

# `dataHcsFederationToken` Submodule <a name="`dataHcsFederationToken` Submodule" id="@cdktf/provider-hcs.dataHcsFederationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsFederationToken <a name="DataHcsFederationToken" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/federation_token hcs_federation_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsfederationtoken"

datahcsfederationtoken.NewDataHcsFederationToken(scope Construct, id *string, config DataHcsFederationTokenConfig) DataHcsFederationToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig">DataHcsFederationTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig">DataHcsFederationTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.putTimeouts"></a>

```go
func PutTimeouts(value DataHcsFederationTokenTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeouts">DataHcsFederationTokenTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsfederationtoken"

datahcsfederationtoken.DataHcsFederationToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsfederationtoken"

datahcsfederationtoken.DataHcsFederationToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsfederationtoken"

datahcsfederationtoken.DataHcsFederationToken_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference">DataHcsFederationTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.managedApplicationNameInput">ManagedApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.managedApplicationName">ManagedApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.timeouts"></a>

```go
func Timeouts() DataHcsFederationTokenTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference">DataHcsFederationTokenTimeoutsOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedApplicationNameInput`<sup>Optional</sup> <a name="ManagedApplicationNameInput" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.managedApplicationNameInput"></a>

```go
func ManagedApplicationNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.managedApplicationName"></a>

```go
func ManagedApplicationName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsFederationTokenConfig <a name="DataHcsFederationTokenConfig" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsfederationtoken"

&datahcsfederationtoken.DataHcsFederationTokenConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedApplicationName: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcs-go/hcs/v4.dataHcsFederationToken.DataHcsFederationTokenTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.managedApplicationName">ManagedApplicationName</a></code> | <code>*string</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/federation_token#id DataHcsFederationToken#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeouts">DataHcsFederationTokenTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.managedApplicationName"></a>

```go
ManagedApplicationName *string
```

- *Type:* *string

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/federation_token#managed_application_name DataHcsFederationToken#managed_application_name}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/federation_token#resource_group_name DataHcsFederationToken#resource_group_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/federation_token#id DataHcsFederationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenConfig.property.timeouts"></a>

```go
Timeouts DataHcsFederationTokenTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeouts">DataHcsFederationTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/federation_token#timeouts DataHcsFederationToken#timeouts}

---

### DataHcsFederationTokenTimeouts <a name="DataHcsFederationTokenTimeouts" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsfederationtoken"

&datahcsfederationtoken.DataHcsFederationTokenTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/federation_token#default DataHcsFederationToken#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/federation_token#default DataHcsFederationToken#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsFederationTokenTimeoutsOutputReference <a name="DataHcsFederationTokenTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v4/datahcsfederationtoken"

datahcsfederationtoken.NewDataHcsFederationTokenTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcsFederationTokenTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcs.dataHcsFederationToken.DataHcsFederationTokenTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



