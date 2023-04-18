# `hcs_cluster`

Refer to the Terraform Registory for docs: [`hcs_cluster`](https://www.terraform.io/docs/providers/hcs/r/cluster).

# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-hcs.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-hcs.cluster.Cluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/hcs/r/cluster hcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.cluster.Cluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

new Cluster(Construct Scope, string Id, ClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig">ClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcs.cluster.Cluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcs.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcs.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcs.cluster.Cluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcs.cluster.Cluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcs.cluster.Cluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts"></a>

```csharp
private void PutTimeouts(ClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `ResetAuditLoggingEnabled` <a name="ResetAuditLoggingEnabled" id="@cdktf/provider-hcs.cluster.Cluster.resetAuditLoggingEnabled"></a>

```csharp
private void ResetAuditLoggingEnabled()
```

##### `ResetAuditLogStorageContainerUrl` <a name="ResetAuditLogStorageContainerUrl" id="@cdktf/provider-hcs.cluster.Cluster.resetAuditLogStorageContainerUrl"></a>

```csharp
private void ResetAuditLogStorageContainerUrl()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-hcs.cluster.Cluster.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetConsulDatacenter` <a name="ResetConsulDatacenter" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulDatacenter"></a>

```csharp
private void ResetConsulDatacenter()
```

##### `ResetConsulExternalEndpoint` <a name="ResetConsulExternalEndpoint" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulExternalEndpoint"></a>

```csharp
private void ResetConsulExternalEndpoint()
```

##### `ResetConsulFederationToken` <a name="ResetConsulFederationToken" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulFederationToken"></a>

```csharp
private void ResetConsulFederationToken()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-hcs.cluster.Cluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-hcs.cluster.Cluster.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetManagedResourceGroupName` <a name="ResetManagedResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.resetManagedResourceGroupName"></a>

```csharp
private void ResetManagedResourceGroupName()
```

##### `ResetMinConsulVersion` <a name="ResetMinConsulVersion" id="@cdktf/provider-hcs.cluster.Cluster.resetMinConsulVersion"></a>

```csharp
private void ResetMinConsulVersion()
```

##### `ResetPlanName` <a name="ResetPlanName" id="@cdktf/provider-hcs.cluster.Cluster.resetPlanName"></a>

```csharp
private void ResetPlanName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-hcs.cluster.Cluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-hcs.cluster.Cluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVnetCidr` <a name="ResetVnetCidr" id="@cdktf/provider-hcs.cluster.Cluster.resetVnetCidr"></a>

```csharp
private void ResetVnetCidr()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcs.cluster.Cluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

Cluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcs.cluster.Cluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

Cluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

Cluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.blobContainerName">BlobContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulAutomaticUpgrades">ConsulAutomaticUpgrades</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulCaFile">ConsulCaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulClusterId">ConsulClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulConfigFile">ConsulConfigFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulConnect">ConsulConnect</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointUrl">ConsulExternalEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulPrivateEndpointUrl">ConsulPrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenAccessorId">ConsulRootTokenAccessorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenSecretId">ConsulRootTokenSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotInterval">ConsulSnapshotInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotRetention">ConsulSnapshotRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulVersion">ConsulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationId">ManagedApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedIdentityName">ManagedIdentityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.storageAccountResourceGroup">StorageAccountResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetId">VnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetName">VnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetResourceGroupName">VnetResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabledInput">AuditLoggingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrlInput">AuditLogStorageContainerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterModeInput">ClusterModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenterInput">ConsulDatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointInput">ConsulExternalEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulFederationTokenInput">ConsulFederationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationNameInput">ManagedApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupNameInput">ManagedResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersionInput">MinConsulVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.planNameInput">PlanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetCidrInput">VnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabled">AuditLoggingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrl">AuditLogStorageContainerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterMode">ClusterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenter">ConsulDatacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpoint">ConsulExternalEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulFederationToken">ConsulFederationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationName">ManagedApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersion">MinConsulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.planName">PlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetCidr">VnetCidr</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcs.cluster.Cluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcs.cluster.Cluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.cluster.Cluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcs.cluster.Cluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcs.cluster.Cluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.cluster.Cluster.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.cluster.Cluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.cluster.Cluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.cluster.Cluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.cluster.Cluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcs.cluster.Cluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BlobContainerName`<sup>Required</sup> <a name="BlobContainerName" id="@cdktf/provider-hcs.cluster.Cluster.property.blobContainerName"></a>

```csharp
public string BlobContainerName { get; }
```

- *Type:* string

---

##### `ConsulAutomaticUpgrades`<sup>Required</sup> <a name="ConsulAutomaticUpgrades" id="@cdktf/provider-hcs.cluster.Cluster.property.consulAutomaticUpgrades"></a>

```csharp
public IResolvable ConsulAutomaticUpgrades { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ConsulCaFile`<sup>Required</sup> <a name="ConsulCaFile" id="@cdktf/provider-hcs.cluster.Cluster.property.consulCaFile"></a>

```csharp
public string ConsulCaFile { get; }
```

- *Type:* string

---

##### `ConsulClusterId`<sup>Required</sup> <a name="ConsulClusterId" id="@cdktf/provider-hcs.cluster.Cluster.property.consulClusterId"></a>

```csharp
public string ConsulClusterId { get; }
```

- *Type:* string

---

##### `ConsulConfigFile`<sup>Required</sup> <a name="ConsulConfigFile" id="@cdktf/provider-hcs.cluster.Cluster.property.consulConfigFile"></a>

```csharp
public string ConsulConfigFile { get; }
```

- *Type:* string

---

##### `ConsulConnect`<sup>Required</sup> <a name="ConsulConnect" id="@cdktf/provider-hcs.cluster.Cluster.property.consulConnect"></a>

```csharp
public IResolvable ConsulConnect { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ConsulExternalEndpointUrl`<sup>Required</sup> <a name="ConsulExternalEndpointUrl" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointUrl"></a>

```csharp
public string ConsulExternalEndpointUrl { get; }
```

- *Type:* string

---

##### `ConsulPrivateEndpointUrl`<sup>Required</sup> <a name="ConsulPrivateEndpointUrl" id="@cdktf/provider-hcs.cluster.Cluster.property.consulPrivateEndpointUrl"></a>

```csharp
public string ConsulPrivateEndpointUrl { get; }
```

- *Type:* string

---

##### `ConsulRootTokenAccessorId`<sup>Required</sup> <a name="ConsulRootTokenAccessorId" id="@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenAccessorId"></a>

```csharp
public string ConsulRootTokenAccessorId { get; }
```

- *Type:* string

---

##### `ConsulRootTokenSecretId`<sup>Required</sup> <a name="ConsulRootTokenSecretId" id="@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenSecretId"></a>

```csharp
public string ConsulRootTokenSecretId { get; }
```

- *Type:* string

---

##### `ConsulSnapshotInterval`<sup>Required</sup> <a name="ConsulSnapshotInterval" id="@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotInterval"></a>

```csharp
public string ConsulSnapshotInterval { get; }
```

- *Type:* string

---

##### `ConsulSnapshotRetention`<sup>Required</sup> <a name="ConsulSnapshotRetention" id="@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotRetention"></a>

```csharp
public string ConsulSnapshotRetention { get; }
```

- *Type:* string

---

##### `ConsulVersion`<sup>Required</sup> <a name="ConsulVersion" id="@cdktf/provider-hcs.cluster.Cluster.property.consulVersion"></a>

```csharp
public string ConsulVersion { get; }
```

- *Type:* string

---

##### `ManagedApplicationId`<sup>Required</sup> <a name="ManagedApplicationId" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationId"></a>

```csharp
public string ManagedApplicationId { get; }
```

- *Type:* string

---

##### `ManagedIdentityName`<sup>Required</sup> <a name="ManagedIdentityName" id="@cdktf/provider-hcs.cluster.Cluster.property.managedIdentityName"></a>

```csharp
public string ManagedIdentityName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-hcs.cluster.Cluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-hcs.cluster.Cluster.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `StorageAccountResourceGroup`<sup>Required</sup> <a name="StorageAccountResourceGroup" id="@cdktf/provider-hcs.cluster.Cluster.property.storageAccountResourceGroup"></a>

```csharp
public string StorageAccountResourceGroup { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-hcs.cluster.Cluster.property.timeouts"></a>

```csharp
public ClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `VnetId`<sup>Required</sup> <a name="VnetId" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetId"></a>

```csharp
public string VnetId { get; }
```

- *Type:* string

---

##### `VnetName`<sup>Required</sup> <a name="VnetName" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetName"></a>

```csharp
public string VnetName { get; }
```

- *Type:* string

---

##### `VnetResourceGroupName`<sup>Required</sup> <a name="VnetResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetResourceGroupName"></a>

```csharp
public string VnetResourceGroupName { get; }
```

- *Type:* string

---

##### `AuditLoggingEnabledInput`<sup>Optional</sup> <a name="AuditLoggingEnabledInput" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabledInput"></a>

```csharp
public object AuditLoggingEnabledInput { get; }
```

- *Type:* object

---

##### `AuditLogStorageContainerUrlInput`<sup>Optional</sup> <a name="AuditLogStorageContainerUrlInput" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrlInput"></a>

```csharp
public string AuditLogStorageContainerUrlInput { get; }
```

- *Type:* string

---

##### `ClusterModeInput`<sup>Optional</sup> <a name="ClusterModeInput" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterModeInput"></a>

```csharp
public string ClusterModeInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ConsulDatacenterInput`<sup>Optional</sup> <a name="ConsulDatacenterInput" id="@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenterInput"></a>

```csharp
public string ConsulDatacenterInput { get; }
```

- *Type:* string

---

##### `ConsulExternalEndpointInput`<sup>Optional</sup> <a name="ConsulExternalEndpointInput" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointInput"></a>

```csharp
public object ConsulExternalEndpointInput { get; }
```

- *Type:* object

---

##### `ConsulFederationTokenInput`<sup>Optional</sup> <a name="ConsulFederationTokenInput" id="@cdktf/provider-hcs.cluster.Cluster.property.consulFederationTokenInput"></a>

```csharp
public string ConsulFederationTokenInput { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-hcs.cluster.Cluster.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-hcs.cluster.Cluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-hcs.cluster.Cluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedApplicationNameInput`<sup>Optional</sup> <a name="ManagedApplicationNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationNameInput"></a>

```csharp
public string ManagedApplicationNameInput { get; }
```

- *Type:* string

---

##### `ManagedResourceGroupNameInput`<sup>Optional</sup> <a name="ManagedResourceGroupNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupNameInput"></a>

```csharp
public string ManagedResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `MinConsulVersionInput`<sup>Optional</sup> <a name="MinConsulVersionInput" id="@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersionInput"></a>

```csharp
public string MinConsulVersionInput { get; }
```

- *Type:* string

---

##### `PlanNameInput`<sup>Optional</sup> <a name="PlanNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.planNameInput"></a>

```csharp
public string PlanNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-hcs.cluster.Cluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-hcs.cluster.Cluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VnetCidrInput`<sup>Optional</sup> <a name="VnetCidrInput" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetCidrInput"></a>

```csharp
public string VnetCidrInput { get; }
```

- *Type:* string

---

##### `AuditLoggingEnabled`<sup>Required</sup> <a name="AuditLoggingEnabled" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabled"></a>

```csharp
public object AuditLoggingEnabled { get; }
```

- *Type:* object

---

##### `AuditLogStorageContainerUrl`<sup>Required</sup> <a name="AuditLogStorageContainerUrl" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrl"></a>

```csharp
public string AuditLogStorageContainerUrl { get; }
```

- *Type:* string

---

##### `ClusterMode`<sup>Required</sup> <a name="ClusterMode" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterMode"></a>

```csharp
public string ClusterMode { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ConsulDatacenter`<sup>Required</sup> <a name="ConsulDatacenter" id="@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenter"></a>

```csharp
public string ConsulDatacenter { get; }
```

- *Type:* string

---

##### `ConsulExternalEndpoint`<sup>Required</sup> <a name="ConsulExternalEndpoint" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpoint"></a>

```csharp
public object ConsulExternalEndpoint { get; }
```

- *Type:* object

---

##### `ConsulFederationToken`<sup>Required</sup> <a name="ConsulFederationToken" id="@cdktf/provider-hcs.cluster.Cluster.property.consulFederationToken"></a>

```csharp
public string ConsulFederationToken { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-hcs.cluster.Cluster.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcs.cluster.Cluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-hcs.cluster.Cluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationName"></a>

```csharp
public string ManagedApplicationName { get; }
```

- *Type:* string

---

##### `ManagedResourceGroupName`<sup>Required</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupName"></a>

```csharp
public string ManagedResourceGroupName { get; }
```

- *Type:* string

---

##### `MinConsulVersion`<sup>Required</sup> <a name="MinConsulVersion" id="@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersion"></a>

```csharp
public string MinConsulVersion { get; }
```

- *Type:* string

---

##### `PlanName`<sup>Required</sup> <a name="PlanName" id="@cdktf/provider-hcs.cluster.Cluster.property.planName"></a>

```csharp
public string PlanName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-hcs.cluster.Cluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VnetCidr`<sup>Required</sup> <a name="VnetCidr" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetCidr"></a>

```csharp
public string VnetCidr { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcs.cluster.Cluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-hcs.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.cluster.ClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

new ClusterConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterMode,
    string Email,
    string ManagedApplicationName,
    string ResourceGroupName,
    object AuditLoggingEnabled = null,
    string AuditLogStorageContainerUrl = null,
    string ClusterName = null,
    string ConsulDatacenter = null,
    object ConsulExternalEndpoint = null,
    string ConsulFederationToken = null,
    string Id = null,
    string Location = null,
    string ManagedResourceGroupName = null,
    string MinConsulVersion = null,
    string PlanName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ClusterTimeouts Timeouts = null,
    string VnetCidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterMode">ClusterMode</a></code> | <code>string</code> | The mode of the cluster ('Development' or 'Production'). |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.email">Email</a></code> | <code>string</code> | The contact email for the primary owner of the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.managedApplicationName">ManagedApplicationName</a></code> | <code>string</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLoggingEnabled">AuditLoggingEnabled</a></code> | <code>object</code> | Enables Consul audit logging for the cluster resource. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLogStorageContainerUrl">AuditLogStorageContainerUrl</a></code> | <code>string</code> | The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulDatacenter">ConsulDatacenter</a></code> | <code>string</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulExternalEndpoint">ConsulExternalEndpoint</a></code> | <code>object</code> | Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulFederationToken">ConsulFederationToken</a></code> | <code>string</code> | The token used to join a federation of Consul clusters. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.location">Location</a></code> | <code>string</code> | The Azure region that the cluster is deployed to. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.managedResourceGroupName">ManagedResourceGroupName</a></code> | <code>string</code> | The name of the Managed Resource Group in which the cluster resources belong. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.minConsulVersion">MinConsulVersion</a></code> | <code>string</code> | The minimum Consul version of the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.planName">PlanName</a></code> | <code>string</code> | The name of the Azure Marketplace HCS plan for the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of tags to assign to the HCS Azure Managed Application resource. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.vnetCidr">VnetCidr</a></code> | <code>string</code> | The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterMode`<sup>Required</sup> <a name="ClusterMode" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterMode"></a>

```csharp
public string ClusterMode { get; set; }
```

- *Type:* string

The mode of the cluster ('Development' or 'Production').

Development clusters only have a single Consul server. Production clusters are fully supported, full featured, and deploy with a minimum of three hosts.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#cluster_mode Cluster#cluster_mode}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The contact email for the primary owner of the cluster.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#email Cluster#email}

---

##### `ManagedApplicationName`<sup>Required</sup> <a name="ManagedApplicationName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.managedApplicationName"></a>

```csharp
public string ManagedApplicationName { get; set; }
```

- *Type:* string

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#managed_application_name Cluster#managed_application_name}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#resource_group_name Cluster#resource_group_name}

---

##### `AuditLoggingEnabled`<sup>Optional</sup> <a name="AuditLoggingEnabled" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLoggingEnabled"></a>

```csharp
public object AuditLoggingEnabled { get; set; }
```

- *Type:* object

Enables Consul audit logging for the cluster resource. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#audit_logging_enabled Cluster#audit_logging_enabled}

---

##### `AuditLogStorageContainerUrl`<sup>Optional</sup> <a name="AuditLogStorageContainerUrl" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLogStorageContainerUrl"></a>

```csharp
public string AuditLogStorageContainerUrl { get; set; }
```

- *Type:* string

The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#audit_log_storage_container_url Cluster#audit_log_storage_container_url}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#cluster_name Cluster#cluster_name}

---

##### `ConsulDatacenter`<sup>Optional</sup> <a name="ConsulDatacenter" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulDatacenter"></a>

```csharp
public string ConsulDatacenter { get; set; }
```

- *Type:* string

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#consul_datacenter Cluster#consul_datacenter}

---

##### `ConsulExternalEndpoint`<sup>Optional</sup> <a name="ConsulExternalEndpoint" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulExternalEndpoint"></a>

```csharp
public object ConsulExternalEndpoint { get; set; }
```

- *Type:* object

Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#consul_external_endpoint Cluster#consul_external_endpoint}

---

##### `ConsulFederationToken`<sup>Optional</sup> <a name="ConsulFederationToken" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulFederationToken"></a>

```csharp
public string ConsulFederationToken { get; set; }
```

- *Type:* string

The token used to join a federation of Consul clusters.

If the cluster is not part of a federation, this field will be empty.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#consul_federation_token Cluster#consul_federation_token}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The Azure region that the cluster is deployed to.

If not specified, it is defaulted to the region of the Resource Group the Managed Application belongs to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#location Cluster#location}

---

##### `ManagedResourceGroupName`<sup>Optional</sup> <a name="ManagedResourceGroupName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.managedResourceGroupName"></a>

```csharp
public string ManagedResourceGroupName { get; set; }
```

- *Type:* string

The name of the Managed Resource Group in which the cluster resources belong.

If not specified, it is defaulted to the value of `managed_application_name` with 'mrg-' prepended.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#managed_resource_group_name Cluster#managed_resource_group_name}

---

##### `MinConsulVersion`<sup>Optional</sup> <a name="MinConsulVersion" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.minConsulVersion"></a>

```csharp
public string MinConsulVersion { get; set; }
```

- *Type:* string

The minimum Consul version of the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#min_consul_version Cluster#min_consul_version}

---

##### `PlanName`<sup>Optional</sup> <a name="PlanName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.planName"></a>

```csharp
public string PlanName { get; set; }
```

- *Type:* string

The name of the Azure Marketplace HCS plan for the cluster.

If not specified, it will default to the current HCS default plan (see the `hcs_plan_defaults` data source).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#plan_name Cluster#plan_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of tags to assign to the HCS Azure Managed Application resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#tags Cluster#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.timeouts"></a>

```csharp
public ClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#timeouts Cluster#timeouts}

---

##### `VnetCidr`<sup>Optional</sup> <a name="VnetCidr" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.vnetCidr"></a>

```csharp
public string VnetCidr { get; set; }
```

- *Type:* string

The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#vnet_cidr Cluster#vnet_cidr}

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-hcs.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

new ClusterTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#default Cluster#default}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#update Cluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#create Cluster#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#default Cluster#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#delete Cluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/r/cluster#update Cluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

new ClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



