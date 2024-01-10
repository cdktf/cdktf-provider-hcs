# `dataHcsConsulVersions` Submodule <a name="`dataHcsConsulVersions` Submodule" id="@cdktf/provider-hcs.dataHcsConsulVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsConsulVersions <a name="DataHcsConsulVersions" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/consul_versions hcs_consul_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_consul_versions.DataHcsConsulVersions;

DataHcsConsulVersions.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .timeouts(DataHcsConsulVersionsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/consul_versions#id DataHcsConsulVersions#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/consul_versions#id DataHcsConsulVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/consul_versions#timeouts DataHcsConsulVersions#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.putTimeouts"></a>

```java
public void putTimeouts(DataHcsConsulVersionsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcsConsulVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_consul_versions.DataHcsConsulVersions;

DataHcsConsulVersions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_consul_versions.DataHcsConsulVersions;

DataHcsConsulVersions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_consul_versions.DataHcsConsulVersions;

DataHcsConsulVersions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_consul_versions.DataHcsConsulVersions;

DataHcsConsulVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcsConsulVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataHcsConsulVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcsConsulVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcsConsulVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/consul_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataHcsConsulVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.available">available</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.preview">preview</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.recommended">recommended</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference">DataHcsConsulVersionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.available"></a>

```java
public java.util.List<java.lang.String> getAvailable();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.preview"></a>

```java
public java.util.List<java.lang.String> getPreview();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recommended`<sup>Required</sup> <a name="recommended" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.recommended"></a>

```java
public java.lang.String getRecommended();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.timeouts"></a>

```java
public DataHcsConsulVersionsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference">DataHcsConsulVersionsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsConsulVersionsConfig <a name="DataHcsConsulVersionsConfig" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_consul_versions.DataHcsConsulVersionsConfig;

DataHcsConsulVersionsConfig.builder()
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
//  .id(java.lang.String)
//  .timeouts(DataHcsConsulVersionsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/consul_versions#id DataHcsConsulVersions#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/consul_versions#id DataHcsConsulVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.timeouts"></a>

```java
public DataHcsConsulVersionsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/consul_versions#timeouts DataHcsConsulVersions#timeouts}

---

### DataHcsConsulVersionsTimeouts <a name="DataHcsConsulVersionsTimeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_consul_versions.DataHcsConsulVersionsTimeouts;

DataHcsConsulVersionsTimeouts.builder()
//  .default(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/consul_versions#default DataHcsConsulVersions#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/consul_versions#default DataHcsConsulVersions#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsConsulVersionsTimeoutsOutputReference <a name="DataHcsConsulVersionsTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_consul_versions.DataHcsConsulVersionsTimeoutsOutputReference;

new DataHcsConsulVersionsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a>

---



