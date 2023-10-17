# `data_hcs_plan_defaults`

Refer to the Terraform Registory for docs: [`data_hcs_plan_defaults`](https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/plan_defaults).

# `dataHcsPlanDefaults` Submodule <a name="`dataHcsPlanDefaults` Submodule" id="@cdktf/provider-hcs.dataHcsPlanDefaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsPlanDefaults <a name="DataHcsPlanDefaults" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/plan_defaults hcs_plan_defaults}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/datahcsplandefaults"

datahcsplandefaults.NewDataHcsPlanDefaults(scope Construct, id *string, config DataHcsPlanDefaultsConfig) DataHcsPlanDefaults
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig">DataHcsPlanDefaultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig">DataHcsPlanDefaultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.putTimeouts"></a>

```go
func PutTimeouts(value DataHcsPlanDefaultsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeouts">DataHcsPlanDefaultsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcsPlanDefaults resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/datahcsplandefaults"

datahcsplandefaults.DataHcsPlanDefaults_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/datahcsplandefaults"

datahcsplandefaults.DataHcsPlanDefaults_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/datahcsplandefaults"

datahcsplandefaults.DataHcsPlanDefaults_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/datahcsplandefaults"

datahcsplandefaults.DataHcsPlanDefaults_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataHcsPlanDefaults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataHcsPlanDefaults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataHcsPlanDefaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/plan_defaults#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataHcsPlanDefaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.offer">Offer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.planName">PlanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.planVersion">PlanVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference">DataHcsPlanDefaultsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.offer"></a>

```go
func Offer() *string
```

- *Type:* *string

---

##### `PlanName`<sup>Required</sup> <a name="PlanName" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.planName"></a>

```go
func PlanName() *string
```

- *Type:* *string

---

##### `PlanVersion`<sup>Required</sup> <a name="PlanVersion" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.planVersion"></a>

```go
func PlanVersion() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.timeouts"></a>

```go
func Timeouts() DataHcsPlanDefaultsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference">DataHcsPlanDefaultsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaults.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsPlanDefaultsConfig <a name="DataHcsPlanDefaultsConfig" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/datahcsplandefaults"

&datahcsplandefaults.DataHcsPlanDefaultsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-hcs-go/hcs/v7.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/plan_defaults#id DataHcsPlanDefaults#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeouts">DataHcsPlanDefaultsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/plan_defaults#id DataHcsPlanDefaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsConfig.property.timeouts"></a>

```go
Timeouts DataHcsPlanDefaultsTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeouts">DataHcsPlanDefaultsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/plan_defaults#timeouts DataHcsPlanDefaults#timeouts}

---

### DataHcsPlanDefaultsTimeouts <a name="DataHcsPlanDefaultsTimeouts" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/datahcsplandefaults"

&datahcsplandefaults.DataHcsPlanDefaultsTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/plan_defaults#default DataHcsPlanDefaults#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/plan_defaults#default DataHcsPlanDefaults#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsPlanDefaultsTimeoutsOutputReference <a name="DataHcsPlanDefaultsTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/datahcsplandefaults"

datahcsplandefaults.NewDataHcsPlanDefaultsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataHcsPlanDefaultsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcs.dataHcsPlanDefaults.DataHcsPlanDefaultsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



