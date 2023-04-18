# `hcs_cluster`

Refer to the Terraform Registory for docs: [`hcs_cluster`](https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster).

# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-hcs.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-hcs.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster hcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.cluster.Cluster.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-hcs'

new cluster.Cluster(scope: Construct, id: string, config: ClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig">ClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterConfig">ClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetAuditLoggingEnabled">resetAuditLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetAuditLogStorageContainerUrl">resetAuditLogStorageContainerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetConsulDatacenter">resetConsulDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetConsulExternalEndpoint">resetConsulExternalEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetConsulFederationToken">resetConsulFederationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetManagedResourceGroupName">resetManagedResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetMinConsulVersion">resetMinConsulVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetPlanName">resetPlanName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetVnetCidr">resetVnetCidr</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.cluster.Cluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcs.cluster.Cluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcs.cluster.Cluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcs.cluster.Cluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcs.cluster.Cluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>

---

##### `resetAuditLoggingEnabled` <a name="resetAuditLoggingEnabled" id="@cdktf/provider-hcs.cluster.Cluster.resetAuditLoggingEnabled"></a>

```typescript
public resetAuditLoggingEnabled(): void
```

##### `resetAuditLogStorageContainerUrl` <a name="resetAuditLogStorageContainerUrl" id="@cdktf/provider-hcs.cluster.Cluster.resetAuditLogStorageContainerUrl"></a>

```typescript
public resetAuditLogStorageContainerUrl(): void
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-hcs.cluster.Cluster.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetConsulDatacenter` <a name="resetConsulDatacenter" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulDatacenter"></a>

```typescript
public resetConsulDatacenter(): void
```

##### `resetConsulExternalEndpoint` <a name="resetConsulExternalEndpoint" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulExternalEndpoint"></a>

```typescript
public resetConsulExternalEndpoint(): void
```

##### `resetConsulFederationToken` <a name="resetConsulFederationToken" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulFederationToken"></a>

```typescript
public resetConsulFederationToken(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcs.cluster.Cluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-hcs.cluster.Cluster.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetManagedResourceGroupName` <a name="resetManagedResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.resetManagedResourceGroupName"></a>

```typescript
public resetManagedResourceGroupName(): void
```

##### `resetMinConsulVersion` <a name="resetMinConsulVersion" id="@cdktf/provider-hcs.cluster.Cluster.resetMinConsulVersion"></a>

```typescript
public resetMinConsulVersion(): void
```

##### `resetPlanName` <a name="resetPlanName" id="@cdktf/provider-hcs.cluster.Cluster.resetPlanName"></a>

```typescript
public resetPlanName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-hcs.cluster.Cluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcs.cluster.Cluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVnetCidr` <a name="resetVnetCidr" id="@cdktf/provider-hcs.cluster.Cluster.resetVnetCidr"></a>

```typescript
public resetVnetCidr(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcs.cluster.Cluster.isConstruct"></a>

```typescript
import { cluster } from '@cdktf/provider-hcs'

cluster.Cluster.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformElement"></a>

```typescript
import { cluster } from '@cdktf/provider-hcs'

cluster.Cluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformResource"></a>

```typescript
import { cluster } from '@cdktf/provider-hcs'

cluster.Cluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.blobContainerName">blobContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulAutomaticUpgrades">consulAutomaticUpgrades</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulCaFile">consulCaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulClusterId">consulClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulConfigFile">consulConfigFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulConnect">consulConnect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointUrl">consulExternalEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulPrivateEndpointUrl">consulPrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenAccessorId">consulRootTokenAccessorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenSecretId">consulRootTokenSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotInterval">consulSnapshotInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotRetention">consulSnapshotRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulVersion">consulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationId">managedApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedIdentityName">managedIdentityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.storageAccountResourceGroup">storageAccountResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetId">vnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetName">vnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetResourceGroupName">vnetResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabledInput">auditLoggingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrlInput">auditLogStorageContainerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterModeInput">clusterModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenterInput">consulDatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointInput">consulExternalEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulFederationTokenInput">consulFederationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationNameInput">managedApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupNameInput">managedResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersionInput">minConsulVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.planNameInput">planNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetCidrInput">vnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabled">auditLoggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrl">auditLogStorageContainerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterMode">clusterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenter">consulDatacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpoint">consulExternalEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulFederationToken">consulFederationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationName">managedApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersion">minConsulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.planName">planName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetCidr">vnetCidr</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.cluster.Cluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcs.cluster.Cluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.cluster.Cluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcs.cluster.Cluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.cluster.Cluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.cluster.Cluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.cluster.Cluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.cluster.Cluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.cluster.Cluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.cluster.Cluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.cluster.Cluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blobContainerName`<sup>Required</sup> <a name="blobContainerName" id="@cdktf/provider-hcs.cluster.Cluster.property.blobContainerName"></a>

```typescript
public readonly blobContainerName: string;
```

- *Type:* string

---

##### `consulAutomaticUpgrades`<sup>Required</sup> <a name="consulAutomaticUpgrades" id="@cdktf/provider-hcs.cluster.Cluster.property.consulAutomaticUpgrades"></a>

```typescript
public readonly consulAutomaticUpgrades: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `consulCaFile`<sup>Required</sup> <a name="consulCaFile" id="@cdktf/provider-hcs.cluster.Cluster.property.consulCaFile"></a>

```typescript
public readonly consulCaFile: string;
```

- *Type:* string

---

##### `consulClusterId`<sup>Required</sup> <a name="consulClusterId" id="@cdktf/provider-hcs.cluster.Cluster.property.consulClusterId"></a>

```typescript
public readonly consulClusterId: string;
```

- *Type:* string

---

##### `consulConfigFile`<sup>Required</sup> <a name="consulConfigFile" id="@cdktf/provider-hcs.cluster.Cluster.property.consulConfigFile"></a>

```typescript
public readonly consulConfigFile: string;
```

- *Type:* string

---

##### `consulConnect`<sup>Required</sup> <a name="consulConnect" id="@cdktf/provider-hcs.cluster.Cluster.property.consulConnect"></a>

```typescript
public readonly consulConnect: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `consulExternalEndpointUrl`<sup>Required</sup> <a name="consulExternalEndpointUrl" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointUrl"></a>

```typescript
public readonly consulExternalEndpointUrl: string;
```

- *Type:* string

---

##### `consulPrivateEndpointUrl`<sup>Required</sup> <a name="consulPrivateEndpointUrl" id="@cdktf/provider-hcs.cluster.Cluster.property.consulPrivateEndpointUrl"></a>

```typescript
public readonly consulPrivateEndpointUrl: string;
```

- *Type:* string

---

##### `consulRootTokenAccessorId`<sup>Required</sup> <a name="consulRootTokenAccessorId" id="@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenAccessorId"></a>

```typescript
public readonly consulRootTokenAccessorId: string;
```

- *Type:* string

---

##### `consulRootTokenSecretId`<sup>Required</sup> <a name="consulRootTokenSecretId" id="@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenSecretId"></a>

```typescript
public readonly consulRootTokenSecretId: string;
```

- *Type:* string

---

##### `consulSnapshotInterval`<sup>Required</sup> <a name="consulSnapshotInterval" id="@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotInterval"></a>

```typescript
public readonly consulSnapshotInterval: string;
```

- *Type:* string

---

##### `consulSnapshotRetention`<sup>Required</sup> <a name="consulSnapshotRetention" id="@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotRetention"></a>

```typescript
public readonly consulSnapshotRetention: string;
```

- *Type:* string

---

##### `consulVersion`<sup>Required</sup> <a name="consulVersion" id="@cdktf/provider-hcs.cluster.Cluster.property.consulVersion"></a>

```typescript
public readonly consulVersion: string;
```

- *Type:* string

---

##### `managedApplicationId`<sup>Required</sup> <a name="managedApplicationId" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationId"></a>

```typescript
public readonly managedApplicationId: string;
```

- *Type:* string

---

##### `managedIdentityName`<sup>Required</sup> <a name="managedIdentityName" id="@cdktf/provider-hcs.cluster.Cluster.property.managedIdentityName"></a>

```typescript
public readonly managedIdentityName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcs.cluster.Cluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-hcs.cluster.Cluster.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `storageAccountResourceGroup`<sup>Required</sup> <a name="storageAccountResourceGroup" id="@cdktf/provider-hcs.cluster.Cluster.property.storageAccountResourceGroup"></a>

```typescript
public readonly storageAccountResourceGroup: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcs.cluster.Cluster.property.timeouts"></a>

```typescript
public readonly timeouts: ClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetId"></a>

```typescript
public readonly vnetId: string;
```

- *Type:* string

---

##### `vnetName`<sup>Required</sup> <a name="vnetName" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetName"></a>

```typescript
public readonly vnetName: string;
```

- *Type:* string

---

##### `vnetResourceGroupName`<sup>Required</sup> <a name="vnetResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetResourceGroupName"></a>

```typescript
public readonly vnetResourceGroupName: string;
```

- *Type:* string

---

##### `auditLoggingEnabledInput`<sup>Optional</sup> <a name="auditLoggingEnabledInput" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabledInput"></a>

```typescript
public readonly auditLoggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `auditLogStorageContainerUrlInput`<sup>Optional</sup> <a name="auditLogStorageContainerUrlInput" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrlInput"></a>

```typescript
public readonly auditLogStorageContainerUrlInput: string;
```

- *Type:* string

---

##### `clusterModeInput`<sup>Optional</sup> <a name="clusterModeInput" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterModeInput"></a>

```typescript
public readonly clusterModeInput: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `consulDatacenterInput`<sup>Optional</sup> <a name="consulDatacenterInput" id="@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenterInput"></a>

```typescript
public readonly consulDatacenterInput: string;
```

- *Type:* string

---

##### `consulExternalEndpointInput`<sup>Optional</sup> <a name="consulExternalEndpointInput" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointInput"></a>

```typescript
public readonly consulExternalEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `consulFederationTokenInput`<sup>Optional</sup> <a name="consulFederationTokenInput" id="@cdktf/provider-hcs.cluster.Cluster.property.consulFederationTokenInput"></a>

```typescript
public readonly consulFederationTokenInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-hcs.cluster.Cluster.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcs.cluster.Cluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-hcs.cluster.Cluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedApplicationNameInput`<sup>Optional</sup> <a name="managedApplicationNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationNameInput"></a>

```typescript
public readonly managedApplicationNameInput: string;
```

- *Type:* string

---

##### `managedResourceGroupNameInput`<sup>Optional</sup> <a name="managedResourceGroupNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupNameInput"></a>

```typescript
public readonly managedResourceGroupNameInput: string;
```

- *Type:* string

---

##### `minConsulVersionInput`<sup>Optional</sup> <a name="minConsulVersionInput" id="@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersionInput"></a>

```typescript
public readonly minConsulVersionInput: string;
```

- *Type:* string

---

##### `planNameInput`<sup>Optional</sup> <a name="planNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.planNameInput"></a>

```typescript
public readonly planNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-hcs.cluster.Cluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcs.cluster.Cluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ClusterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a> | cdktf.IResolvable

---

##### `vnetCidrInput`<sup>Optional</sup> <a name="vnetCidrInput" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetCidrInput"></a>

```typescript
public readonly vnetCidrInput: string;
```

- *Type:* string

---

##### `auditLoggingEnabled`<sup>Required</sup> <a name="auditLoggingEnabled" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabled"></a>

```typescript
public readonly auditLoggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `auditLogStorageContainerUrl`<sup>Required</sup> <a name="auditLogStorageContainerUrl" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrl"></a>

```typescript
public readonly auditLogStorageContainerUrl: string;
```

- *Type:* string

---

##### `clusterMode`<sup>Required</sup> <a name="clusterMode" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterMode"></a>

```typescript
public readonly clusterMode: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `consulDatacenter`<sup>Required</sup> <a name="consulDatacenter" id="@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenter"></a>

```typescript
public readonly consulDatacenter: string;
```

- *Type:* string

---

##### `consulExternalEndpoint`<sup>Required</sup> <a name="consulExternalEndpoint" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpoint"></a>

```typescript
public readonly consulExternalEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `consulFederationToken`<sup>Required</sup> <a name="consulFederationToken" id="@cdktf/provider-hcs.cluster.Cluster.property.consulFederationToken"></a>

```typescript
public readonly consulFederationToken: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-hcs.cluster.Cluster.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.cluster.Cluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-hcs.cluster.Cluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedApplicationName`<sup>Required</sup> <a name="managedApplicationName" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationName"></a>

```typescript
public readonly managedApplicationName: string;
```

- *Type:* string

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

---

##### `minConsulVersion`<sup>Required</sup> <a name="minConsulVersion" id="@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersion"></a>

```typescript
public readonly minConsulVersion: string;
```

- *Type:* string

---

##### `planName`<sup>Required</sup> <a name="planName" id="@cdktf/provider-hcs.cluster.Cluster.property.planName"></a>

```typescript
public readonly planName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-hcs.cluster.Cluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vnetCidr`<sup>Required</sup> <a name="vnetCidr" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetCidr"></a>

```typescript
public readonly vnetCidr: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.cluster.Cluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-hcs.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.cluster.ClusterConfig.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-hcs'

const clusterConfig: cluster.ClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterMode">clusterMode</a></code> | <code>string</code> | The mode of the cluster ('Development' or 'Production'). |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.email">email</a></code> | <code>string</code> | The contact email for the primary owner of the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.managedApplicationName">managedApplicationName</a></code> | <code>string</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLoggingEnabled">auditLoggingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables Consul audit logging for the cluster resource. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLogStorageContainerUrl">auditLogStorageContainerUrl</a></code> | <code>string</code> | The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulDatacenter">consulDatacenter</a></code> | <code>string</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulExternalEndpoint">consulExternalEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulFederationToken">consulFederationToken</a></code> | <code>string</code> | The token used to join a federation of Consul clusters. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.location">location</a></code> | <code>string</code> | The Azure region that the cluster is deployed to. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | The name of the Managed Resource Group in which the cluster resources belong. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.minConsulVersion">minConsulVersion</a></code> | <code>string</code> | The minimum Consul version of the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.planName">planName</a></code> | <code>string</code> | The name of the Azure Marketplace HCS plan for the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A mapping of tags to assign to the HCS Azure Managed Application resource. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.vnetCidr">vnetCidr</a></code> | <code>string</code> | The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterMode`<sup>Required</sup> <a name="clusterMode" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterMode"></a>

```typescript
public readonly clusterMode: string;
```

- *Type:* string

The mode of the cluster ('Development' or 'Production').

Development clusters only have a single Consul server. Production clusters are fully supported, full featured, and deploy with a minimum of three hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#cluster_mode Cluster#cluster_mode}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The contact email for the primary owner of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#email Cluster#email}

---

##### `managedApplicationName`<sup>Required</sup> <a name="managedApplicationName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.managedApplicationName"></a>

```typescript
public readonly managedApplicationName: string;
```

- *Type:* string

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#managed_application_name Cluster#managed_application_name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#resource_group_name Cluster#resource_group_name}

---

##### `auditLoggingEnabled`<sup>Optional</sup> <a name="auditLoggingEnabled" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLoggingEnabled"></a>

```typescript
public readonly auditLoggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables Consul audit logging for the cluster resource. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#audit_logging_enabled Cluster#audit_logging_enabled}

---

##### `auditLogStorageContainerUrl`<sup>Optional</sup> <a name="auditLogStorageContainerUrl" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLogStorageContainerUrl"></a>

```typescript
public readonly auditLogStorageContainerUrl: string;
```

- *Type:* string

The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#audit_log_storage_container_url Cluster#audit_log_storage_container_url}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#cluster_name Cluster#cluster_name}

---

##### `consulDatacenter`<sup>Optional</sup> <a name="consulDatacenter" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulDatacenter"></a>

```typescript
public readonly consulDatacenter: string;
```

- *Type:* string

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_datacenter Cluster#consul_datacenter}

---

##### `consulExternalEndpoint`<sup>Optional</sup> <a name="consulExternalEndpoint" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulExternalEndpoint"></a>

```typescript
public readonly consulExternalEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_external_endpoint Cluster#consul_external_endpoint}

---

##### `consulFederationToken`<sup>Optional</sup> <a name="consulFederationToken" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulFederationToken"></a>

```typescript
public readonly consulFederationToken: string;
```

- *Type:* string

The token used to join a federation of Consul clusters.

If the cluster is not part of a federation, this field will be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_federation_token Cluster#consul_federation_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The Azure region that the cluster is deployed to.

If not specified, it is defaulted to the region of the Resource Group the Managed Application belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#location Cluster#location}

---

##### `managedResourceGroupName`<sup>Optional</sup> <a name="managedResourceGroupName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

The name of the Managed Resource Group in which the cluster resources belong.

If not specified, it is defaulted to the value of `managed_application_name` with 'mrg-' prepended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#managed_resource_group_name Cluster#managed_resource_group_name}

---

##### `minConsulVersion`<sup>Optional</sup> <a name="minConsulVersion" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.minConsulVersion"></a>

```typescript
public readonly minConsulVersion: string;
```

- *Type:* string

The minimum Consul version of the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#min_consul_version Cluster#min_consul_version}

---

##### `planName`<sup>Optional</sup> <a name="planName" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.planName"></a>

```typescript
public readonly planName: string;
```

- *Type:* string

The name of the Azure Marketplace HCS plan for the cluster.

If not specified, it will default to the current HCS default plan (see the `hcs_plan_defaults` data source).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#plan_name Cluster#plan_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of tags to assign to the HCS Azure Managed Application resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#tags Cluster#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `vnetCidr`<sup>Optional</sup> <a name="vnetCidr" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.vnetCidr"></a>

```typescript
public readonly vnetCidr: string;
```

- *Type:* string

The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#vnet_cidr Cluster#vnet_cidr}

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-hcs.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-hcs'

const clusterTimeouts: cluster.ClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#default Cluster#default}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#update Cluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#create Cluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#default Cluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#delete Cluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#update Cluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { cluster } from '@cdktf/provider-hcs'

new cluster.ClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClusterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a> | cdktf.IResolvable

---



