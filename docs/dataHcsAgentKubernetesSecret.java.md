# `dataHcsAgentKubernetesSecret` Submodule <a name="`dataHcsAgentKubernetesSecret` Submodule" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsAgentKubernetesSecret <a name="DataHcsAgentKubernetesSecret" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret"></a>

Represents a {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret hcs_agent_kubernetes_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_agent_kubernetes_secret.DataHcsAgentKubernetesSecret;

DataHcsAgentKubernetesSecret.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .managedApplicationName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataHcsAgentKubernetesSecretTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.managedApplicationName">managedApplicationName</a></code> | <code>java.lang.String</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#id DataHcsAgentKubernetesSecret#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedApplicationName`<sup>Required</sup> <a name="managedApplicationName" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.managedApplicationName"></a>

- *Type:* java.lang.String

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#managed_application_name DataHcsAgentKubernetesSecret#managed_application_name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#resource_group_name DataHcsAgentKubernetesSecret#resource_group_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#id DataHcsAgentKubernetesSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#timeouts DataHcsAgentKubernetesSecret#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.putTimeouts"></a>

```java
public void putTimeouts(DataHcsAgentKubernetesSecretTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_agent_kubernetes_secret.DataHcsAgentKubernetesSecret;

DataHcsAgentKubernetesSecret.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_agent_kubernetes_secret.DataHcsAgentKubernetesSecret;

DataHcsAgentKubernetesSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_agent_kubernetes_secret.DataHcsAgentKubernetesSecret;

DataHcsAgentKubernetesSecret.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference">DataHcsAgentKubernetesSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.managedApplicationNameInput">managedApplicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.managedApplicationName">managedApplicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.timeouts"></a>

```java
public DataHcsAgentKubernetesSecretTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference">DataHcsAgentKubernetesSecretTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedApplicationNameInput`<sup>Optional</sup> <a name="managedApplicationNameInput" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.managedApplicationNameInput"></a>

```java
public java.lang.String getManagedApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedApplicationName`<sup>Required</sup> <a name="managedApplicationName" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.managedApplicationName"></a>

```java
public java.lang.String getManagedApplicationName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsAgentKubernetesSecretConfig <a name="DataHcsAgentKubernetesSecretConfig" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_agent_kubernetes_secret.DataHcsAgentKubernetesSecretConfig;

DataHcsAgentKubernetesSecretConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .managedApplicationName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataHcsAgentKubernetesSecretTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.managedApplicationName">managedApplicationName</a></code> | <code>java.lang.String</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#id DataHcsAgentKubernetesSecret#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedApplicationName`<sup>Required</sup> <a name="managedApplicationName" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.managedApplicationName"></a>

```java
public java.lang.String getManagedApplicationName();
```

- *Type:* java.lang.String

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#managed_application_name DataHcsAgentKubernetesSecret#managed_application_name}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#resource_group_name DataHcsAgentKubernetesSecret#resource_group_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#id DataHcsAgentKubernetesSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.timeouts"></a>

```java
public DataHcsAgentKubernetesSecretTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#timeouts DataHcsAgentKubernetesSecret#timeouts}

---

### DataHcsAgentKubernetesSecretTimeouts <a name="DataHcsAgentKubernetesSecretTimeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_agent_kubernetes_secret.DataHcsAgentKubernetesSecretTimeouts;

DataHcsAgentKubernetesSecretTimeouts.builder()
//  .default(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#default DataHcsAgentKubernetesSecret#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/agent_kubernetes_secret#default DataHcsAgentKubernetesSecret#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsAgentKubernetesSecretTimeoutsOutputReference <a name="DataHcsAgentKubernetesSecretTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.data_hcs_agent_kubernetes_secret.DataHcsAgentKubernetesSecretTimeoutsOutputReference;

new DataHcsAgentKubernetesSecretTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



