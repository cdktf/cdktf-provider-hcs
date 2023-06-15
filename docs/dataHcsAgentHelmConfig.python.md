# `data_hcs_agent_helm_config`

Refer to the Terraform Registory for docs: [`data_hcs_agent_helm_config`](https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config).

# `dataHcsAgentHelmConfig` Submodule <a name="`dataHcsAgentHelmConfig` Submodule" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsAgentHelmConfig <a name="DataHcsAgentHelmConfig" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config hcs_agent_helm_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_helm_config

dataHcsAgentHelmConfig.DataHcsAgentHelmConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aks_cluster_name: str,
  managed_application_name: str,
  resource_group_name: str,
  aks_resource_group: str = None,
  expose_gossip_ports: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: DataHcsAgentHelmConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.aksClusterName">aks_cluster_name</a></code> | <code>str</code> | The name of the AKS cluster that will consume the Helm config. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.managedApplicationName">managed_application_name</a></code> | <code>str</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.aksResourceGroup">aks_resource_group</a></code> | <code>str</code> | The resource group name of the AKS cluster that will consume the Helm config. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.exposeGossipPorts">expose_gossip_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes that the gossip ports should be exposed. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#id DataHcsAgentHelmConfig#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aks_cluster_name`<sup>Required</sup> <a name="aks_cluster_name" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.aksClusterName"></a>

- *Type:* str

The name of the AKS cluster that will consume the Helm config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#aks_cluster_name DataHcsAgentHelmConfig#aks_cluster_name}

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.managedApplicationName"></a>

- *Type:* str

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#managed_application_name DataHcsAgentHelmConfig#managed_application_name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#resource_group_name DataHcsAgentHelmConfig#resource_group_name}

---

##### `aks_resource_group`<sup>Optional</sup> <a name="aks_resource_group" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.aksResourceGroup"></a>

- *Type:* str

The resource group name of the AKS cluster that will consume the Helm config.

If not specified, it is defaulted to the value of `resource_group_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#aks_resource_group DataHcsAgentHelmConfig#aks_resource_group}

---

##### `expose_gossip_ports`<sup>Optional</sup> <a name="expose_gossip_ports" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.exposeGossipPorts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes that the gossip ports should be exposed. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#expose_gossip_ports DataHcsAgentHelmConfig#expose_gossip_ports}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#id DataHcsAgentHelmConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#timeouts DataHcsAgentHelmConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetAksResourceGroup">reset_aks_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetExposeGossipPorts">reset_expose_gossip_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.putTimeouts"></a>

```python
def put_timeouts(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#default DataHcsAgentHelmConfig#default}.

---

##### `reset_aks_resource_group` <a name="reset_aks_resource_group" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetAksResourceGroup"></a>

```python
def reset_aks_resource_group() -> None
```

##### `reset_expose_gossip_ports` <a name="reset_expose_gossip_ports" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetExposeGossipPorts"></a>

```python
def reset_expose_gossip_ports() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_helm_config

dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_helm_config

dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_helm_config

dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.config">config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference">DataHcsAgentHelmConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterNameInput">aks_cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroupInput">aks_resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPortsInput">expose_gossip_ports_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationNameInput">managed_application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterName">aks_cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroup">aks_resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPorts">expose_gossip_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationName">managed_application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.config"></a>

```python
config: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeouts"></a>

```python
timeouts: DataHcsAgentHelmConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference">DataHcsAgentHelmConfigTimeoutsOutputReference</a>

---

##### `aks_cluster_name_input`<sup>Optional</sup> <a name="aks_cluster_name_input" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterNameInput"></a>

```python
aks_cluster_name_input: str
```

- *Type:* str

---

##### `aks_resource_group_input`<sup>Optional</sup> <a name="aks_resource_group_input" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroupInput"></a>

```python
aks_resource_group_input: str
```

- *Type:* str

---

##### `expose_gossip_ports_input`<sup>Optional</sup> <a name="expose_gossip_ports_input" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPortsInput"></a>

```python
expose_gossip_ports_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_application_name_input`<sup>Optional</sup> <a name="managed_application_name_input" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationNameInput"></a>

```python
managed_application_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataHcsAgentHelmConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a>]

---

##### `aks_cluster_name`<sup>Required</sup> <a name="aks_cluster_name" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksClusterName"></a>

```python
aks_cluster_name: str
```

- *Type:* str

---

##### `aks_resource_group`<sup>Required</sup> <a name="aks_resource_group" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.aksResourceGroup"></a>

```python
aks_resource_group: str
```

- *Type:* str

---

##### `expose_gossip_ports`<sup>Required</sup> <a name="expose_gossip_ports" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.exposeGossipPorts"></a>

```python
expose_gossip_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.managedApplicationName"></a>

```python
managed_application_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsAgentHelmConfigConfig <a name="DataHcsAgentHelmConfigConfig" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_helm_config

dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aks_cluster_name: str,
  managed_application_name: str,
  resource_group_name: str,
  aks_resource_group: str = None,
  expose_gossip_ports: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: DataHcsAgentHelmConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksClusterName">aks_cluster_name</a></code> | <code>str</code> | The name of the AKS cluster that will consume the Helm config. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.managedApplicationName">managed_application_name</a></code> | <code>str</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksResourceGroup">aks_resource_group</a></code> | <code>str</code> | The resource group name of the AKS cluster that will consume the Helm config. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.exposeGossipPorts">expose_gossip_ports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes that the gossip ports should be exposed. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#id DataHcsAgentHelmConfig#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aks_cluster_name`<sup>Required</sup> <a name="aks_cluster_name" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksClusterName"></a>

```python
aks_cluster_name: str
```

- *Type:* str

The name of the AKS cluster that will consume the Helm config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#aks_cluster_name DataHcsAgentHelmConfig#aks_cluster_name}

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.managedApplicationName"></a>

```python
managed_application_name: str
```

- *Type:* str

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#managed_application_name DataHcsAgentHelmConfig#managed_application_name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#resource_group_name DataHcsAgentHelmConfig#resource_group_name}

---

##### `aks_resource_group`<sup>Optional</sup> <a name="aks_resource_group" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.aksResourceGroup"></a>

```python
aks_resource_group: str
```

- *Type:* str

The resource group name of the AKS cluster that will consume the Helm config.

If not specified, it is defaulted to the value of `resource_group_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#aks_resource_group DataHcsAgentHelmConfig#aks_resource_group}

---

##### `expose_gossip_ports`<sup>Optional</sup> <a name="expose_gossip_ports" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.exposeGossipPorts"></a>

```python
expose_gossip_ports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes that the gossip ports should be exposed. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#expose_gossip_ports DataHcsAgentHelmConfig#expose_gossip_ports}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#id DataHcsAgentHelmConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigConfig.property.timeouts"></a>

```python
timeouts: DataHcsAgentHelmConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#timeouts DataHcsAgentHelmConfig#timeouts}

---

### DataHcsAgentHelmConfigTimeouts <a name="DataHcsAgentHelmConfigTimeouts" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_helm_config

dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#default DataHcsAgentHelmConfig#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#default DataHcsAgentHelmConfig#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsAgentHelmConfigTimeoutsOutputReference <a name="DataHcsAgentHelmConfigTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_agent_helm_config

dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataHcsAgentHelmConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.dataHcsAgentHelmConfig.DataHcsAgentHelmConfigTimeouts">DataHcsAgentHelmConfigTimeouts</a>]

---



