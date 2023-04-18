# `data_hcs_cluster`

Refer to the Terraform Registory for docs: [`data_hcs_cluster`](https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster).

# `dataHcsCluster` Submodule <a name="`dataHcsCluster` Submodule" id="@cdktf/provider-hcs.dataHcsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsCluster <a name="DataHcsCluster" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster hcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_cluster

dataHcsCluster.DataHcsCluster(
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
  cluster_name: str = None,
  id: str = None,
  timeouts: DataHcsClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.managedApplicationName">managed_application_name</a></code> | <code>str</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#id DataHcsCluster#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.managedApplicationName"></a>

- *Type:* str

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#managed_application_name DataHcsCluster#managed_application_name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#resource_group_name DataHcsCluster#resource_group_name}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.clusterName"></a>

- *Type:* str

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#cluster_name DataHcsCluster#cluster_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.Initializer.parameter.id"></a>

- *Type:* str

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
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts"></a>

```python
def put_timeouts(
  default: str = None
) -> None
```

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#default DataHcsCluster#default}.

---

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_cluster

dataHcsCluster.DataHcsCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_cluster

dataHcsCluster.DataHcsCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_cluster

dataHcsCluster.DataHcsCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.blobContainerName">blob_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterMode">cluster_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulAutomaticUpgrades">consul_automatic_upgrades</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulCaFile">consul_ca_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulClusterId">consul_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConfigFile">consul_config_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConnect">consul_connect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulDatacenter">consul_datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpoint">consul_external_endpoint</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpointUrl">consul_external_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulFederationToken">consul_federation_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulPrivateEndpointUrl">consul_private_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotInterval">consul_snapshot_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotRetention">consul_snapshot_retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulVersion">consul_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationId">managed_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.planName">plan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountResourceGroup">storage_account_resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference">DataHcsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetCidr">vnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetId">vnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetName">vnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetResourceGroupName">vnet_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationNameInput">managed_application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationName">managed_application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `blob_container_name`<sup>Required</sup> <a name="blob_container_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.blobContainerName"></a>

```python
blob_container_name: str
```

- *Type:* str

---

##### `cluster_mode`<sup>Required</sup> <a name="cluster_mode" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterMode"></a>

```python
cluster_mode: str
```

- *Type:* str

---

##### `consul_automatic_upgrades`<sup>Required</sup> <a name="consul_automatic_upgrades" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulAutomaticUpgrades"></a>

```python
consul_automatic_upgrades: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `consul_ca_file`<sup>Required</sup> <a name="consul_ca_file" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulCaFile"></a>

```python
consul_ca_file: str
```

- *Type:* str

---

##### `consul_cluster_id`<sup>Required</sup> <a name="consul_cluster_id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulClusterId"></a>

```python
consul_cluster_id: str
```

- *Type:* str

---

##### `consul_config_file`<sup>Required</sup> <a name="consul_config_file" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConfigFile"></a>

```python
consul_config_file: str
```

- *Type:* str

---

##### `consul_connect`<sup>Required</sup> <a name="consul_connect" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulConnect"></a>

```python
consul_connect: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `consul_datacenter`<sup>Required</sup> <a name="consul_datacenter" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulDatacenter"></a>

```python
consul_datacenter: str
```

- *Type:* str

---

##### `consul_external_endpoint`<sup>Required</sup> <a name="consul_external_endpoint" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpoint"></a>

```python
consul_external_endpoint: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `consul_external_endpoint_url`<sup>Required</sup> <a name="consul_external_endpoint_url" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulExternalEndpointUrl"></a>

```python
consul_external_endpoint_url: str
```

- *Type:* str

---

##### `consul_federation_token`<sup>Required</sup> <a name="consul_federation_token" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulFederationToken"></a>

```python
consul_federation_token: str
```

- *Type:* str

---

##### `consul_private_endpoint_url`<sup>Required</sup> <a name="consul_private_endpoint_url" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulPrivateEndpointUrl"></a>

```python
consul_private_endpoint_url: str
```

- *Type:* str

---

##### `consul_snapshot_interval`<sup>Required</sup> <a name="consul_snapshot_interval" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotInterval"></a>

```python
consul_snapshot_interval: str
```

- *Type:* str

---

##### `consul_snapshot_retention`<sup>Required</sup> <a name="consul_snapshot_retention" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulSnapshotRetention"></a>

```python
consul_snapshot_retention: str
```

- *Type:* str

---

##### `consul_version`<sup>Required</sup> <a name="consul_version" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.consulVersion"></a>

```python
consul_version: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_application_id`<sup>Required</sup> <a name="managed_application_id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationId"></a>

```python
managed_application_id: str
```

- *Type:* str

---

##### `managed_resource_group_name`<sup>Required</sup> <a name="managed_resource_group_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedResourceGroupName"></a>

```python
managed_resource_group_name: str
```

- *Type:* str

---

##### `plan_name`<sup>Required</sup> <a name="plan_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.planName"></a>

```python
plan_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `storage_account_resource_group`<sup>Required</sup> <a name="storage_account_resource_group" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.storageAccountResourceGroup"></a>

```python
storage_account_resource_group: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeouts"></a>

```python
timeouts: DataHcsClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference">DataHcsClusterTimeoutsOutputReference</a>

---

##### `vnet_cidr`<sup>Required</sup> <a name="vnet_cidr" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetCidr"></a>

```python
vnet_cidr: str
```

- *Type:* str

---

##### `vnet_id`<sup>Required</sup> <a name="vnet_id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetId"></a>

```python
vnet_id: str
```

- *Type:* str

---

##### `vnet_name`<sup>Required</sup> <a name="vnet_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetName"></a>

```python
vnet_name: str
```

- *Type:* str

---

##### `vnet_resource_group_name`<sup>Required</sup> <a name="vnet_resource_group_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.vnetResourceGroupName"></a>

```python
vnet_resource_group_name: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_application_name_input`<sup>Optional</sup> <a name="managed_application_name_input" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationNameInput"></a>

```python
managed_application_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataHcsClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>, cdktf.IResolvable]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.managedApplicationName"></a>

```python
managed_application_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsClusterConfig <a name="DataHcsClusterConfig" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_cluster

dataHcsCluster.DataHcsClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_application_name: str,
  resource_group_name: str,
  cluster_name: str = None,
  id: str = None,
  timeouts: DataHcsClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.managedApplicationName">managed_application_name</a></code> | <code>str</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#id DataHcsCluster#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.managedApplicationName"></a>

```python
managed_application_name: str
```

- *Type:* str

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#managed_application_name DataHcsCluster#managed_application_name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#resource_group_name DataHcsCluster#resource_group_name}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#cluster_name DataHcsCluster#cluster_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#id DataHcsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterConfig.property.timeouts"></a>

```python
timeouts: DataHcsClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#timeouts DataHcsCluster#timeouts}

---

### DataHcsClusterTimeouts <a name="DataHcsClusterTimeouts" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_cluster

dataHcsCluster.DataHcsClusterTimeouts(
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#default DataHcsCluster#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/cluster#default DataHcsCluster#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsClusterTimeoutsOutputReference <a name="DataHcsClusterTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import data_hcs_cluster

dataHcsCluster.DataHcsClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataHcsClusterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-hcs.dataHcsCluster.DataHcsClusterTimeouts">DataHcsClusterTimeouts</a>, cdktf.IResolvable]

---



