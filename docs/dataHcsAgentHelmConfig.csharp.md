# `dataHcsAgentHelmConfig` Submodule <a name="`dataHcsAgentHelmConfig` Submodule" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsAgentHelmConfig <a name="DataHcsAgentHelmConfig" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config hcs_agent_helm_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

new DataHcsAgentHelmConfig(Construct Scope, string Id, DataHcsAgentHelmConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig">DataHcsAgentHelmConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig">DataHcsAgentHelmConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(DataHcsAgentHelmConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a>

---

##### `ResetAksResourceGroup` <a name="ResetAksResourceGroup" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetAksResourceGroup"></a>

```csharp
private void ResetAksResourceGroup()
```

##### `ResetExposeGossipPorts` <a name="ResetExposeGossipPorts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetExposeGossipPorts"></a>

```csharp
private void ResetExposeGossipPorts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcsAgentHelmConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

DataHcsAgentHelmConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

DataHcsAgentHelmConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

DataHcsAgentHelmConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

DataHcsAgentHelmConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataHcsAgentHelmConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHcsAgentHelmConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHcsAgentHelmConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataHcsAgentHelmConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.config">Config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference">DataHcsAgentHelmConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterNameInput">AksClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroupInput">AksResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPortsInput">ExposeGossipPortsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationNameInput">ManagedApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterName">AksClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroup">AksResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPorts">ExposeGossipPorts</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationName">ManagedApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.config"></a>

```csharp
public string Config { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeouts"></a>

```csharp
public DataHcsAgentHelmConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference">DataHcsAgentHelmConfigTimeoutsOutputReference</a>

---

##### `AksClusterNameInput`<sup>Optional</sup> <a name="AksClusterNameInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterNameInput"></a>

```csharp
public string AksClusterNameInput { get; }
```

- *Type:* string

---

##### `AksResourceGroupInput`<sup>Optional</sup> <a name="AksResourceGroupInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroupInput"></a>

```csharp
public string AksResourceGroupInput { get; }
```

- *Type:* string

---

##### `ExposeGossipPortsInput`<sup>Optional</sup> <a name="ExposeGossipPortsInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPortsInput"></a>

```csharp
public object ExposeGossipPortsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedApplicationNameInput`<sup>Optional</sup> <a name="ManagedApplicationNameInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationNameInput"></a>

```csharp
public string ManagedApplicationNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AksClusterName`<sup>Required</sup> <a name="AksClusterName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterName"></a>

```csharp
public string AksClusterName { get; }
```

- *Type:* string

---

##### `AksResourceGroup`<sup>Required</sup> <a name="AksResourceGroup" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroup"></a>

```csharp
public string AksResourceGroup { get; }
```

- *Type:* string

---

##### `ExposeGossipPorts`<sup>Required</sup> <a name="ExposeGossipPorts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPorts"></a>

```csharp
public object ExposeGossipPorts { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationName"></a>

```csharp
public string ManagedApplicationName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsAgentHelmConfigConfig <a name="DataHcsAgentHelmConfigConfig" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

new DataHcsAgentHelmConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AksClusterName,
    string ManagedApplicationName,
    string ResourceGroupName,
    string AksResourceGroup = null,
    object ExposeGossipPorts = null,
    string Id = null,
    DataHcsAgentHelmConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksClusterName">AksClusterName</a></code> | <code>string</code> | The name of the AKS cluster that will consume the Helm config. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.managedApplicationName">ManagedApplicationName</a></code> | <code>string</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksResourceGroup">AksResourceGroup</a></code> | <code>string</code> | The resource group name of the AKS cluster that will consume the Helm config. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.exposeGossipPorts">ExposeGossipPorts</a></code> | <code>object</code> | Denotes that the gossip ports should be exposed. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#id DataHcsAgentHelmConfig#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AksClusterName`<sup>Required</sup> <a name="AksClusterName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksClusterName"></a>

```csharp
public string AksClusterName { get; set; }
```

- *Type:* string

The name of the AKS cluster that will consume the Helm config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#aks_cluster_name DataHcsAgentHelmConfig#aks_cluster_name}

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.managedApplicationName"></a>

```csharp
public string ManagedApplicationName { get; set; }
```

- *Type:* string

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#managed_application_name DataHcsAgentHelmConfig#managed_application_name}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#resource_group_name DataHcsAgentHelmConfig#resource_group_name}

---

##### `AksResourceGroup`<sup>Optional</sup> <a name="AksResourceGroup" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksResourceGroup"></a>

```csharp
public string AksResourceGroup { get; set; }
```

- *Type:* string

The resource group name of the AKS cluster that will consume the Helm config.

If not specified, it is defaulted to the value of `resource_group_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#aks_resource_group DataHcsAgentHelmConfig#aks_resource_group}

---

##### `ExposeGossipPorts`<sup>Optional</sup> <a name="ExposeGossipPorts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.exposeGossipPorts"></a>

```csharp
public object ExposeGossipPorts { get; set; }
```

- *Type:* object

Denotes that the gossip ports should be exposed. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#expose_gossip_ports DataHcsAgentHelmConfig#expose_gossip_ports}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#id DataHcsAgentHelmConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.timeouts"></a>

```csharp
public DataHcsAgentHelmConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#timeouts DataHcsAgentHelmConfig#timeouts}

---

### DataHcsAgentHelmConfigTimeouts <a name="DataHcsAgentHelmConfigTimeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

new DataHcsAgentHelmConfigTimeouts {
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#default DataHcsAgentHelmConfig#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#default DataHcsAgentHelmConfig#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsAgentHelmConfigTimeoutsOutputReference <a name="DataHcsAgentHelmConfigTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

new DataHcsAgentHelmConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



