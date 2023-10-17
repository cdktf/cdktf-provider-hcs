# `data_hcs_cluster`

Refer to the Terraform Registory for docs: [`data_hcs_cluster`](https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster).

# `dataHcsCluster` Submodule <a name="`dataHcsCluster` Submodule" id="@cdktf/provider-hcs.dataHcsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsCluster <a name="DataHcsCluster" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster hcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_cluster.DataHcsCluster;

DataHcsCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .managedApplicationName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .clusterName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataHcsClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.managedApplicationName">managedApplicationName</a></code> | <code>java.lang.String</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#id DataHcsCluster#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedApplicationName`<sup>Required</sup> <a name="managedApplicationName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.managedApplicationName"></a>

- *Type:* java.lang.String

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#managed_application_name DataHcsCluster#managed_application_name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#resource_group_name DataHcsCluster#resource_group_name}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#cluster_name DataHcsCluster#cluster_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#id DataHcsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#timeouts DataHcsCluster#timeouts}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts"></a>

```java
public void putTimeouts(DataHcsClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>

---

##### `resetClusterName` <a name="resetClusterName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcsCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_cluster.DataHcsCluster;

DataHcsCluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_cluster.DataHcsCluster;

DataHcsCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_cluster.DataHcsCluster;

DataHcsCluster.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_cluster.DataHcsCluster;

DataHcsCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcsCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataHcsCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcsCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataHcsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.blobContainerName">blobContainerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterMode">clusterMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulAutomaticUpgrades">consulAutomaticUpgrades</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulCaFile">consulCaFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulClusterId">consulClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConfigFile">consulConfigFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConnect">consulConnect</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulDatacenter">consulDatacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpoint">consulExternalEndpoint</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpointUrl">consulExternalEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulFederationToken">consulFederationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulPrivateEndpointUrl">consulPrivateEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotInterval">consulSnapshotInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotRetention">consulSnapshotRetention</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulVersion">consulVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationId">managedApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedResourceGroupName">managedResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.planName">planName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountName">storageAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountResourceGroup">storageAccountResourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference">DataHcsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetCidr">vnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetId">vnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetName">vnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetResourceGroupName">vnetResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationNameInput">managedApplicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationName">managedApplicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `blobContainerName`<sup>Required</sup> <a name="blobContainerName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.blobContainerName"></a>

```java
public java.lang.String getBlobContainerName();
```

- *Type:* java.lang.String

---

##### `clusterMode`<sup>Required</sup> <a name="clusterMode" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterMode"></a>

```java
public java.lang.String getClusterMode();
```

- *Type:* java.lang.String

---

##### `consulAutomaticUpgrades`<sup>Required</sup> <a name="consulAutomaticUpgrades" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulAutomaticUpgrades"></a>

```java
public IResolvable getConsulAutomaticUpgrades();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `consulCaFile`<sup>Required</sup> <a name="consulCaFile" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulCaFile"></a>

```java
public java.lang.String getConsulCaFile();
```

- *Type:* java.lang.String

---

##### `consulClusterId`<sup>Required</sup> <a name="consulClusterId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulClusterId"></a>

```java
public java.lang.String getConsulClusterId();
```

- *Type:* java.lang.String

---

##### `consulConfigFile`<sup>Required</sup> <a name="consulConfigFile" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConfigFile"></a>

```java
public java.lang.String getConsulConfigFile();
```

- *Type:* java.lang.String

---

##### `consulConnect`<sup>Required</sup> <a name="consulConnect" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConnect"></a>

```java
public IResolvable getConsulConnect();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `consulDatacenter`<sup>Required</sup> <a name="consulDatacenter" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulDatacenter"></a>

```java
public java.lang.String getConsulDatacenter();
```

- *Type:* java.lang.String

---

##### `consulExternalEndpoint`<sup>Required</sup> <a name="consulExternalEndpoint" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpoint"></a>

```java
public IResolvable getConsulExternalEndpoint();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `consulExternalEndpointUrl`<sup>Required</sup> <a name="consulExternalEndpointUrl" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpointUrl"></a>

```java
public java.lang.String getConsulExternalEndpointUrl();
```

- *Type:* java.lang.String

---

##### `consulFederationToken`<sup>Required</sup> <a name="consulFederationToken" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulFederationToken"></a>

```java
public java.lang.String getConsulFederationToken();
```

- *Type:* java.lang.String

---

##### `consulPrivateEndpointUrl`<sup>Required</sup> <a name="consulPrivateEndpointUrl" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulPrivateEndpointUrl"></a>

```java
public java.lang.String getConsulPrivateEndpointUrl();
```

- *Type:* java.lang.String

---

##### `consulSnapshotInterval`<sup>Required</sup> <a name="consulSnapshotInterval" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotInterval"></a>

```java
public java.lang.String getConsulSnapshotInterval();
```

- *Type:* java.lang.String

---

##### `consulSnapshotRetention`<sup>Required</sup> <a name="consulSnapshotRetention" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotRetention"></a>

```java
public java.lang.String getConsulSnapshotRetention();
```

- *Type:* java.lang.String

---

##### `consulVersion`<sup>Required</sup> <a name="consulVersion" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulVersion"></a>

```java
public java.lang.String getConsulVersion();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedApplicationId`<sup>Required</sup> <a name="managedApplicationId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationId"></a>

```java
public java.lang.String getManagedApplicationId();
```

- *Type:* java.lang.String

---

##### `managedResourceGroupName`<sup>Required</sup> <a name="managedResourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedResourceGroupName"></a>

```java
public java.lang.String getManagedResourceGroupName();
```

- *Type:* java.lang.String

---

##### `planName`<sup>Required</sup> <a name="planName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.planName"></a>

```java
public java.lang.String getPlanName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountName"></a>

```java
public java.lang.String getStorageAccountName();
```

- *Type:* java.lang.String

---

##### `storageAccountResourceGroup`<sup>Required</sup> <a name="storageAccountResourceGroup" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountResourceGroup"></a>

```java
public java.lang.String getStorageAccountResourceGroup();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeouts"></a>

```java
public DataHcsClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference">DataHcsClusterTimeoutsOutputReference</a>

---

##### `vnetCidr`<sup>Required</sup> <a name="vnetCidr" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetCidr"></a>

```java
public java.lang.String getVnetCidr();
```

- *Type:* java.lang.String

---

##### `vnetId`<sup>Required</sup> <a name="vnetId" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetId"></a>

```java
public java.lang.String getVnetId();
```

- *Type:* java.lang.String

---

##### `vnetName`<sup>Required</sup> <a name="vnetName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetName"></a>

```java
public java.lang.String getVnetName();
```

- *Type:* java.lang.String

---

##### `vnetResourceGroupName`<sup>Required</sup> <a name="vnetResourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetResourceGroupName"></a>

```java
public java.lang.String getVnetResourceGroupName();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedApplicationNameInput`<sup>Optional</sup> <a name="managedApplicationNameInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationNameInput"></a>

```java
public java.lang.String getManagedApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedApplicationName`<sup>Required</sup> <a name="managedApplicationName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationName"></a>

```java
public java.lang.String getManagedApplicationName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsClusterConfig <a name="DataHcsClusterConfig" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_cluster.DataHcsClusterConfig;

DataHcsClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .managedApplicationName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .clusterName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataHcsClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.managedApplicationName">managedApplicationName</a></code> | <code>java.lang.String</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#id DataHcsCluster#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedApplicationName`<sup>Required</sup> <a name="managedApplicationName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.managedApplicationName"></a>

```java
public java.lang.String getManagedApplicationName();
```

- *Type:* java.lang.String

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#managed_application_name DataHcsCluster#managed_application_name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#resource_group_name DataHcsCluster#resource_group_name}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#cluster_name DataHcsCluster#cluster_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#id DataHcsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.timeouts"></a>

```java
public DataHcsClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#timeouts DataHcsCluster#timeouts}

---

### DataHcsClusterTimeouts <a name="DataHcsClusterTimeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_cluster.DataHcsClusterTimeouts;

DataHcsClusterTimeouts.builder()
//  .default(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#default DataHcsCluster#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#default DataHcsCluster#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsClusterTimeoutsOutputReference <a name="DataHcsClusterTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_cluster.DataHcsClusterTimeoutsOutputReference;

new DataHcsClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>

---



