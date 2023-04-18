# `data_hcs_cluster`

Refer to the Terraform Registory for docs: [`data_hcs_cluster`](https://www.terraform.io/docs/providers/hcs/d/cluster).

# `dataHcsCluster` Submodule <a name="`dataHcsCluster` Submodule" id="@cdktf/provider-hcs.dataHcsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsCluster <a name="DataHcsCluster" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/hcs/d/cluster hcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer"></a>

```typescript
import { dataHcsCluster } from '@cdktf/provider-hcs'

new dataHcsCluster.DataHcsCluster(scope: Construct, id: string, config: DataHcsClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig">DataHcsClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig">DataHcsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: DataHcsClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>

---

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isConstruct"></a>

```typescript
import { dataHcsCluster } from '@cdktf/provider-hcs'

dataHcsCluster.DataHcsCluster.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement"></a>

```typescript
import { dataHcsCluster } from '@cdktf/provider-hcs'

dataHcsCluster.DataHcsCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource"></a>

```typescript
import { dataHcsCluster } from '@cdktf/provider-hcs'

dataHcsCluster.DataHcsCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.blobContainerName">blobContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterMode">clusterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulAutomaticUpgrades">consulAutomaticUpgrades</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulCaFile">consulCaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulClusterId">consulClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConfigFile">consulConfigFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConnect">consulConnect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulDatacenter">consulDatacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpoint">consulExternalEndpoint</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpointUrl">consulExternalEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulFederationToken">consulFederationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulPrivateEndpointUrl">consulPrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotInterval">consulSnapshotInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotRetention">consulSnapshotRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulVersion">consulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationId">managedApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.planName">planName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountResourceGroup">storageAccountResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference">DataHcsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetCidr">vnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetId">vnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetName">vnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetResourceGroupName">vnetResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationNameInput">managedApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationName">managedApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `blobContainerName`<sup>Required</sup> <a name="blobContainerName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.blobContainerName"></a>

```typescript
public readonly blobContainerName: string;
```

- *Type:* string

---

##### `clusterMode`<sup>Required</sup> <a name="clusterMode" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterMode"></a>

```typescript
public readonly clusterMode: string;
```

- *Type:* string

---

##### `consulAutomaticUpgrades`<sup>Required</sup> <a name="consulAutomaticUpgrades" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulAutomaticUpgrades"></a>

```typescript
public readonly consulAutomaticUpgrades: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `consulCaFile`<sup>Required</sup> <a name="consulCaFile" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulCaFile"></a>

```typescript
public readonly consulCaFile: string;
```

- *Type:* string

---

##### `consulClusterId`<sup>Required</sup> <a name="consulClusterId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulClusterId"></a>

```typescript
public readonly consulClusterId: string;
```

- *Type:* string

---

##### `consulConfigFile`<sup>Required</sup> <a name="consulConfigFile" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConfigFile"></a>

```typescript
public readonly consulConfigFile: string;
```

- *Type:* string

---

##### `consulConnect`<sup>Required</sup> <a name="consulConnect" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConnect"></a>

```typescript
public readonly consulConnect: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `consulDatacenter`<sup>Required</sup> <a name="consulDatacenter" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulDatacenter"></a>

```typescript
public readonly consulDatacenter: string;
```

- *Type:* string

---

##### `consulExternalEndpoint`<sup>Required</sup> <a name="consulExternalEndpoint" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpoint"></a>

```typescript
public readonly consulExternalEndpoint: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `consulExternalEndpointUrl`<sup>Required</sup> <a name="consulExternalEndpointUrl" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpointUrl"></a>

```typescript
public readonly consulExternalEndpointUrl: string;
```

- *Type:* string

---

##### `consulFederationToken`<sup>Required</sup> <a name="consulFederationToken" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulFederationToken"></a>

```typescript
public readonly consulFederationToken: string;
```

- *Type:* string

---

##### `consulPrivateEndpointUrl`<sup>Required</sup> <a name="consulPrivateEndpointUrl" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulPrivateEndpointUrl"></a>

```typescript
public readonly consulPrivateEndpointUrl: string;
```

- *Type:* string

---

##### `consulSnapshotInterval`<sup>Required</sup> <a name="consulSnapshotInterval" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotInterval"></a>

```typescript
public readonly consulSnapshotInterval: string;
```

- *Type:* string

---

##### `consulSnapshotRetention`<sup>Required</sup> <a name="consulSnapshotRetention" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotRetention"></a>

```typescript
public readonly consulSnapshotRetention: string;
```

- *Type:* string

---

##### `consulVersion`<sup>Required</sup> <a name="consulVersion" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulVersion"></a>

```typescript
public readonly consulVersion: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedApplicationId`<sup>Required</sup> <a name="managedApplicationId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationId"></a>

```typescript
public readonly managedApplicationId: string;
```

- *Type:* string

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedResourceGroupName"></a>

```typescript
public readonly managedResourceGroupName: string;
```

- *Type:* string

---

##### `planName`<sup>Required</sup> <a name="planName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.planName"></a>

```typescript
public readonly planName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `storageAccountResourceGroup`<sup>Required</sup> <a name="storageAccountResourceGroup" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountResourceGroup"></a>

```typescript
public readonly storageAccountResourceGroup: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcsClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference">DataHcsClusterTimeoutsOutputReference</a>

---

##### `vnetCidr`<sup>Required</sup> <a name="vnetCidr" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetCidr"></a>

```typescript
public readonly vnetCidr: string;
```

- *Type:* string

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetId"></a>

```typescript
public readonly vnetId: string;
```

- *Type:* string

---

##### `vnetName`<sup>Required</sup> <a name="vnetName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetName"></a>

```typescript
public readonly vnetName: string;
```

- *Type:* string

---

##### `vnetResourceGroupName`<sup>Required</sup> <a name="vnetResourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetResourceGroupName"></a>

```typescript
public readonly vnetResourceGroupName: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedApplicationNameInput`<sup>Optional</sup> <a name="managedApplicationNameInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationNameInput"></a>

```typescript
public readonly managedApplicationNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataHcsClusterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a> | cdktf.IResolvable

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedApplicationName`<sup>Required</sup> <a name="managedApplicationName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationName"></a>

```typescript
public readonly managedApplicationName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsClusterConfig <a name="DataHcsClusterConfig" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.Initializer"></a>

```typescript
import { dataHcsCluster } from '@cdktf/provider-hcs'

const dataHcsClusterConfig: dataHcsCluster.DataHcsClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.managedApplicationName">managedApplicationName</a></code> | <code>string</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#id DataHcsCluster#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedApplicationName`<sup>Required</sup> <a name="managedApplicationName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.managedApplicationName"></a>

```typescript
public readonly managedApplicationName: string;
```

- *Type:* string

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#managed_application_name DataHcsCluster#managed_application_name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#resource_group_name DataHcsCluster#resource_group_name}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#cluster_name DataHcsCluster#cluster_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#id DataHcsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcsClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#timeouts DataHcsCluster#timeouts}

---

### DataHcsClusterTimeouts <a name="DataHcsClusterTimeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.Initializer"></a>

```typescript
import { dataHcsCluster } from '@cdktf/provider-hcs'

const dataHcsClusterTimeouts: dataHcsCluster.DataHcsClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#default DataHcsCluster#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#default DataHcsCluster#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsClusterTimeoutsOutputReference <a name="DataHcsClusterTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataHcsCluster } from '@cdktf/provider-hcs'

new dataHcsCluster.DataHcsClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataHcsClusterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a> | cdktf.IResolvable

---



