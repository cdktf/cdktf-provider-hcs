# `dataHcsAgentKubernetesSecret` Submodule <a name="`dataHcsAgentKubernetesSecret` Submodule" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsAgentKubernetesSecret <a name="DataHcsAgentKubernetesSecret" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret hcs_agent_kubernetes_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_kubernetes_secret

dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_application_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataHcsAgentKubernetesSecretTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.managedApplicationName">managed_application_name</a></code> | <code>str</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#id DataHcsAgentKubernetesSecret#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.managedApplicationName"></a>

- *Type:* str

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#managed_application_name DataHcsAgentKubernetesSecret#managed_application_name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#resource_group_name DataHcsAgentKubernetesSecret#resource_group_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#id DataHcsAgentKubernetesSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#timeouts DataHcsAgentKubernetesSecret#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.putTimeouts"></a>

```python
def put_timeouts(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#default DataHcsAgentKubernetesSecret#default}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataHcsAgentKubernetesSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_kubernetes_secret

dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_kubernetes_secret

dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_kubernetes_secret

dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_kubernetes_secret

dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataHcsAgentKubernetesSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcsAgentKubernetesSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcsAgentKubernetesSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcsAgentKubernetesSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference">DataHcsAgentKubernetesSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.managedApplicationNameInput">managed_application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.managedApplicationName">managed_application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.timeouts"></a>

```python
timeouts: DataHcsAgentKubernetesSecretTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference">DataHcsAgentKubernetesSecretTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_application_name_input`<sup>Optional</sup> <a name="managed_application_name_input" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.managedApplicationNameInput"></a>

```python
managed_application_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataHcsAgentKubernetesSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.managedApplicationName"></a>

```python
managed_application_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsAgentKubernetesSecretConfig <a name="DataHcsAgentKubernetesSecretConfig" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_kubernetes_secret

dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_application_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataHcsAgentKubernetesSecretTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.managedApplicationName">managed_application_name</a></code> | <code>str</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#id DataHcsAgentKubernetesSecret#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.managedApplicationName"></a>

```python
managed_application_name: str
```

- *Type:* str

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#managed_application_name DataHcsAgentKubernetesSecret#managed_application_name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#resource_group_name DataHcsAgentKubernetesSecret#resource_group_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#id DataHcsAgentKubernetesSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretConfig.property.timeouts"></a>

```python
timeouts: DataHcsAgentKubernetesSecretTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#timeouts DataHcsAgentKubernetesSecret#timeouts}

---

### DataHcsAgentKubernetesSecretTimeouts <a name="DataHcsAgentKubernetesSecretTimeouts" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_kubernetes_secret

dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#default DataHcsAgentKubernetesSecret#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_kubernetes_secret#default DataHcsAgentKubernetesSecret#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsAgentKubernetesSecretTimeoutsOutputReference <a name="DataHcsAgentKubernetesSecretTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_kubernetes_secret

dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataHcsAgentKubernetesSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.dataHcsAgentKubernetesSecret.DataHcsAgentKubernetesSecretTimeouts">DataHcsAgentKubernetesSecretTimeouts</a>]

---



