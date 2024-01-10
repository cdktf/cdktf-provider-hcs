# `cluster` Submodule <a name="`cluster` Submodule" id="@cdktf/provider-hcs.cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cluster <a name="Cluster" id="@cdktf/provider-hcs.cluster.Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster hcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.cluster.Cluster.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import cluster

cluster.Cluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_mode: str,
  email: str,
  managed_application_name: str,
  resource_group_name: str,
  audit_logging_enabled: typing.Union[bool, IResolvable] = None,
  audit_log_storage_container_url: str = None,
  cluster_name: str = None,
  consul_datacenter: str = None,
  consul_external_endpoint: typing.Union[bool, IResolvable] = None,
  consul_federation_token: str = None,
  id: str = None,
  location: str = None,
  managed_resource_group_name: str = None,
  min_consul_version: str = None,
  plan_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ClusterTimeouts = None,
  vnet_cidr: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.clusterMode">cluster_mode</a></code> | <code>str</code> | The mode of the cluster ('Development' or 'Production'). |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.email">email</a></code> | <code>str</code> | The contact email for the primary owner of the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.managedApplicationName">managed_application_name</a></code> | <code>str</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.auditLoggingEnabled">audit_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Consul audit logging for the cluster resource. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.auditLogStorageContainerUrl">audit_log_storage_container_url</a></code> | <code>str</code> | The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.consulDatacenter">consul_datacenter</a></code> | <code>str</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.consulExternalEndpoint">consul_external_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.consulFederationToken">consul_federation_token</a></code> | <code>str</code> | The token used to join a federation of Consul clusters. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The Azure region that the cluster is deployed to. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | The name of the Managed Resource Group in which the cluster resources belong. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.minConsulVersion">min_consul_version</a></code> | <code>str</code> | The minimum Consul version of the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.planName">plan_name</a></code> | <code>str</code> | The name of the Azure Marketplace HCS plan for the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A mapping of tags to assign to the HCS Azure Managed Application resource. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.vnetCidr">vnet_cidr</a></code> | <code>str</code> | The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_mode`<sup>Required</sup> <a name="cluster_mode" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.clusterMode"></a>

- *Type:* str

The mode of the cluster ('Development' or 'Production').

Development clusters only have a single Consul server. Production clusters are fully supported, full featured, and deploy with a minimum of three hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#cluster_mode Cluster#cluster_mode}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.email"></a>

- *Type:* str

The contact email for the primary owner of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#email Cluster#email}

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.managedApplicationName"></a>

- *Type:* str

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#managed_application_name Cluster#managed_application_name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#resource_group_name Cluster#resource_group_name}

---

##### `audit_logging_enabled`<sup>Optional</sup> <a name="audit_logging_enabled" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.auditLoggingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Consul audit logging for the cluster resource. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#audit_logging_enabled Cluster#audit_logging_enabled}

---

##### `audit_log_storage_container_url`<sup>Optional</sup> <a name="audit_log_storage_container_url" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.auditLogStorageContainerUrl"></a>

- *Type:* str

The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#audit_log_storage_container_url Cluster#audit_log_storage_container_url}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.clusterName"></a>

- *Type:* str

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#cluster_name Cluster#cluster_name}

---

##### `consul_datacenter`<sup>Optional</sup> <a name="consul_datacenter" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.consulDatacenter"></a>

- *Type:* str

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_datacenter Cluster#consul_datacenter}

---

##### `consul_external_endpoint`<sup>Optional</sup> <a name="consul_external_endpoint" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.consulExternalEndpoint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_external_endpoint Cluster#consul_external_endpoint}

---

##### `consul_federation_token`<sup>Optional</sup> <a name="consul_federation_token" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.consulFederationToken"></a>

- *Type:* str

The token used to join a federation of Consul clusters.

If the cluster is not part of a federation, this field will be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_federation_token Cluster#consul_federation_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.location"></a>

- *Type:* str

The Azure region that the cluster is deployed to.

If not specified, it is defaulted to the region of the Resource Group the Managed Application belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#location Cluster#location}

---

##### `managed_resource_group_name`<sup>Optional</sup> <a name="managed_resource_group_name" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.managedResourceGroupName"></a>

- *Type:* str

The name of the Managed Resource Group in which the cluster resources belong.

If not specified, it is defaulted to the value of `managed_application_name` with 'mrg-' prepended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#managed_resource_group_name Cluster#managed_resource_group_name}

---

##### `min_consul_version`<sup>Optional</sup> <a name="min_consul_version" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.minConsulVersion"></a>

- *Type:* str

The minimum Consul version of the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#min_consul_version Cluster#min_consul_version}

---

##### `plan_name`<sup>Optional</sup> <a name="plan_name" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.planName"></a>

- *Type:* str

The name of the Azure Marketplace HCS plan for the cluster.

If not specified, it will default to the current HCS default plan (see the `hcs_plan_defaults` data source).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#plan_name Cluster#plan_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

A mapping of tags to assign to the HCS Azure Managed Application resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#tags Cluster#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `vnet_cidr`<sup>Optional</sup> <a name="vnet_cidr" id="@cdktf/provider-hcs.cluster.Cluster.Initializer.parameter.vnetCidr"></a>

- *Type:* str

The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#vnet_cidr Cluster#vnet_cidr}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetAuditLoggingEnabled">reset_audit_logging_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetAuditLogStorageContainerUrl">reset_audit_log_storage_container_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetConsulDatacenter">reset_consul_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetConsulExternalEndpoint">reset_consul_external_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetConsulFederationToken">reset_consul_federation_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetManagedResourceGroupName">reset_managed_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetMinConsulVersion">reset_min_consul_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetPlanName">reset_plan_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.resetVnetCidr">reset_vnet_cidr</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcs.cluster.Cluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcs.cluster.Cluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.cluster.Cluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.cluster.Cluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcs.cluster.Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcs.cluster.Cluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcs.cluster.Cluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcs.cluster.Cluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcs.cluster.Cluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcs.cluster.Cluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcs.cluster.Cluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcs.cluster.Cluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcs.cluster.Cluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.cluster.Cluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.cluster.Cluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcs.cluster.Cluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.cluster.Cluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcs.cluster.Cluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcs.cluster.Cluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcs.cluster.Cluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcs.cluster.Cluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.cluster.Cluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#create Cluster#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#default Cluster#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#delete Cluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcs.cluster.Cluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#update Cluster#update}.

---

##### `reset_audit_logging_enabled` <a name="reset_audit_logging_enabled" id="@cdktf/provider-hcs.cluster.Cluster.resetAuditLoggingEnabled"></a>

```python
def reset_audit_logging_enabled() -> None
```

##### `reset_audit_log_storage_container_url` <a name="reset_audit_log_storage_container_url" id="@cdktf/provider-hcs.cluster.Cluster.resetAuditLogStorageContainerUrl"></a>

```python
def reset_audit_log_storage_container_url() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktf/provider-hcs.cluster.Cluster.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_consul_datacenter` <a name="reset_consul_datacenter" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulDatacenter"></a>

```python
def reset_consul_datacenter() -> None
```

##### `reset_consul_external_endpoint` <a name="reset_consul_external_endpoint" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulExternalEndpoint"></a>

```python
def reset_consul_external_endpoint() -> None
```

##### `reset_consul_federation_token` <a name="reset_consul_federation_token" id="@cdktf/provider-hcs.cluster.Cluster.resetConsulFederationToken"></a>

```python
def reset_consul_federation_token() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-hcs.cluster.Cluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-hcs.cluster.Cluster.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_managed_resource_group_name` <a name="reset_managed_resource_group_name" id="@cdktf/provider-hcs.cluster.Cluster.resetManagedResourceGroupName"></a>

```python
def reset_managed_resource_group_name() -> None
```

##### `reset_min_consul_version` <a name="reset_min_consul_version" id="@cdktf/provider-hcs.cluster.Cluster.resetMinConsulVersion"></a>

```python
def reset_min_consul_version() -> None
```

##### `reset_plan_name` <a name="reset_plan_name" id="@cdktf/provider-hcs.cluster.Cluster.resetPlanName"></a>

```python
def reset_plan_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-hcs.cluster.Cluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-hcs.cluster.Cluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vnet_cidr` <a name="reset_vnet_cidr" id="@cdktf/provider-hcs.cluster.Cluster.resetVnetCidr"></a>

```python
def reset_vnet_cidr() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcs.cluster.Cluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcs import cluster

cluster.Cluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.cluster.Cluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcs import cluster

cluster.Cluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcs import cluster

cluster.Cluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.cluster.Cluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcs.cluster.Cluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcs import cluster

cluster.Cluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.cluster.Cluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcs.cluster.Cluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Cluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcs.cluster.Cluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Cluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.cluster.Cluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Cluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.blobContainerName">blob_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulAutomaticUpgrades">consul_automatic_upgrades</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulCaFile">consul_ca_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulClusterId">consul_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulConfigFile">consul_config_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulConnect">consul_connect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointUrl">consul_external_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulPrivateEndpointUrl">consul_private_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenAccessorId">consul_root_token_accessor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenSecretId">consul_root_token_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotInterval">consul_snapshot_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotRetention">consul_snapshot_retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulVersion">consul_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationId">managed_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedIdentityName">managed_identity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.storageAccountResourceGroup">storage_account_resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetId">vnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetName">vnet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetResourceGroupName">vnet_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabledInput">audit_logging_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrlInput">audit_log_storage_container_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterModeInput">cluster_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenterInput">consul_datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointInput">consul_external_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulFederationTokenInput">consul_federation_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationNameInput">managed_application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupNameInput">managed_resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersionInput">min_consul_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.planNameInput">plan_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetCidrInput">vnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabled">audit_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrl">audit_log_storage_container_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterMode">cluster_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenter">consul_datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpoint">consul_external_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.consulFederationToken">consul_federation_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationName">managed_application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersion">min_consul_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.planName">plan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.vnetCidr">vnet_cidr</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.cluster.Cluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcs.cluster.Cluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.cluster.Cluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcs.cluster.Cluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcs.cluster.Cluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.cluster.Cluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.cluster.Cluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.cluster.Cluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.cluster.Cluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.cluster.Cluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.cluster.Cluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.cluster.Cluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blob_container_name`<sup>Required</sup> <a name="blob_container_name" id="@cdktf/provider-hcs.cluster.Cluster.property.blobContainerName"></a>

```python
blob_container_name: str
```

- *Type:* str

---

##### `consul_automatic_upgrades`<sup>Required</sup> <a name="consul_automatic_upgrades" id="@cdktf/provider-hcs.cluster.Cluster.property.consulAutomaticUpgrades"></a>

```python
consul_automatic_upgrades: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `consul_ca_file`<sup>Required</sup> <a name="consul_ca_file" id="@cdktf/provider-hcs.cluster.Cluster.property.consulCaFile"></a>

```python
consul_ca_file: str
```

- *Type:* str

---

##### `consul_cluster_id`<sup>Required</sup> <a name="consul_cluster_id" id="@cdktf/provider-hcs.cluster.Cluster.property.consulClusterId"></a>

```python
consul_cluster_id: str
```

- *Type:* str

---

##### `consul_config_file`<sup>Required</sup> <a name="consul_config_file" id="@cdktf/provider-hcs.cluster.Cluster.property.consulConfigFile"></a>

```python
consul_config_file: str
```

- *Type:* str

---

##### `consul_connect`<sup>Required</sup> <a name="consul_connect" id="@cdktf/provider-hcs.cluster.Cluster.property.consulConnect"></a>

```python
consul_connect: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `consul_external_endpoint_url`<sup>Required</sup> <a name="consul_external_endpoint_url" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointUrl"></a>

```python
consul_external_endpoint_url: str
```

- *Type:* str

---

##### `consul_private_endpoint_url`<sup>Required</sup> <a name="consul_private_endpoint_url" id="@cdktf/provider-hcs.cluster.Cluster.property.consulPrivateEndpointUrl"></a>

```python
consul_private_endpoint_url: str
```

- *Type:* str

---

##### `consul_root_token_accessor_id`<sup>Required</sup> <a name="consul_root_token_accessor_id" id="@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenAccessorId"></a>

```python
consul_root_token_accessor_id: str
```

- *Type:* str

---

##### `consul_root_token_secret_id`<sup>Required</sup> <a name="consul_root_token_secret_id" id="@cdktf/provider-hcs.cluster.Cluster.property.consulRootTokenSecretId"></a>

```python
consul_root_token_secret_id: str
```

- *Type:* str

---

##### `consul_snapshot_interval`<sup>Required</sup> <a name="consul_snapshot_interval" id="@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotInterval"></a>

```python
consul_snapshot_interval: str
```

- *Type:* str

---

##### `consul_snapshot_retention`<sup>Required</sup> <a name="consul_snapshot_retention" id="@cdktf/provider-hcs.cluster.Cluster.property.consulSnapshotRetention"></a>

```python
consul_snapshot_retention: str
```

- *Type:* str

---

##### `consul_version`<sup>Required</sup> <a name="consul_version" id="@cdktf/provider-hcs.cluster.Cluster.property.consulVersion"></a>

```python
consul_version: str
```

- *Type:* str

---

##### `managed_application_id`<sup>Required</sup> <a name="managed_application_id" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationId"></a>

```python
managed_application_id: str
```

- *Type:* str

---

##### `managed_identity_name`<sup>Required</sup> <a name="managed_identity_name" id="@cdktf/provider-hcs.cluster.Cluster.property.managedIdentityName"></a>

```python
managed_identity_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcs.cluster.Cluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-hcs.cluster.Cluster.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `storage_account_resource_group`<sup>Required</sup> <a name="storage_account_resource_group" id="@cdktf/provider-hcs.cluster.Cluster.property.storageAccountResourceGroup"></a>

```python
storage_account_resource_group: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcs.cluster.Cluster.property.timeouts"></a>

```python
timeouts: ClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference">ClusterTimeoutsOutputReference</a>

---

##### `vnet_id`<sup>Required</sup> <a name="vnet_id" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetId"></a>

```python
vnet_id: str
```

- *Type:* str

---

##### `vnet_name`<sup>Required</sup> <a name="vnet_name" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetName"></a>

```python
vnet_name: str
```

- *Type:* str

---

##### `vnet_resource_group_name`<sup>Required</sup> <a name="vnet_resource_group_name" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetResourceGroupName"></a>

```python
vnet_resource_group_name: str
```

- *Type:* str

---

##### `audit_logging_enabled_input`<sup>Optional</sup> <a name="audit_logging_enabled_input" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabledInput"></a>

```python
audit_logging_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `audit_log_storage_container_url_input`<sup>Optional</sup> <a name="audit_log_storage_container_url_input" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrlInput"></a>

```python
audit_log_storage_container_url_input: str
```

- *Type:* str

---

##### `cluster_mode_input`<sup>Optional</sup> <a name="cluster_mode_input" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterModeInput"></a>

```python
cluster_mode_input: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `consul_datacenter_input`<sup>Optional</sup> <a name="consul_datacenter_input" id="@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenterInput"></a>

```python
consul_datacenter_input: str
```

- *Type:* str

---

##### `consul_external_endpoint_input`<sup>Optional</sup> <a name="consul_external_endpoint_input" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpointInput"></a>

```python
consul_external_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `consul_federation_token_input`<sup>Optional</sup> <a name="consul_federation_token_input" id="@cdktf/provider-hcs.cluster.Cluster.property.consulFederationTokenInput"></a>

```python
consul_federation_token_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-hcs.cluster.Cluster.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-hcs.cluster.Cluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-hcs.cluster.Cluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_application_name_input`<sup>Optional</sup> <a name="managed_application_name_input" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationNameInput"></a>

```python
managed_application_name_input: str
```

- *Type:* str

---

##### `managed_resource_group_name_input`<sup>Optional</sup> <a name="managed_resource_group_name_input" id="@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupNameInput"></a>

```python
managed_resource_group_name_input: str
```

- *Type:* str

---

##### `min_consul_version_input`<sup>Optional</sup> <a name="min_consul_version_input" id="@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersionInput"></a>

```python
min_consul_version_input: str
```

- *Type:* str

---

##### `plan_name_input`<sup>Optional</sup> <a name="plan_name_input" id="@cdktf/provider-hcs.cluster.Cluster.property.planNameInput"></a>

```python
plan_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-hcs.cluster.Cluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-hcs.cluster.Cluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>]

---

##### `vnet_cidr_input`<sup>Optional</sup> <a name="vnet_cidr_input" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetCidrInput"></a>

```python
vnet_cidr_input: str
```

- *Type:* str

---

##### `audit_logging_enabled`<sup>Required</sup> <a name="audit_logging_enabled" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLoggingEnabled"></a>

```python
audit_logging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `audit_log_storage_container_url`<sup>Required</sup> <a name="audit_log_storage_container_url" id="@cdktf/provider-hcs.cluster.Cluster.property.auditLogStorageContainerUrl"></a>

```python
audit_log_storage_container_url: str
```

- *Type:* str

---

##### `cluster_mode`<sup>Required</sup> <a name="cluster_mode" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterMode"></a>

```python
cluster_mode: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-hcs.cluster.Cluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `consul_datacenter`<sup>Required</sup> <a name="consul_datacenter" id="@cdktf/provider-hcs.cluster.Cluster.property.consulDatacenter"></a>

```python
consul_datacenter: str
```

- *Type:* str

---

##### `consul_external_endpoint`<sup>Required</sup> <a name="consul_external_endpoint" id="@cdktf/provider-hcs.cluster.Cluster.property.consulExternalEndpoint"></a>

```python
consul_external_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `consul_federation_token`<sup>Required</sup> <a name="consul_federation_token" id="@cdktf/provider-hcs.cluster.Cluster.property.consulFederationToken"></a>

```python
consul_federation_token: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-hcs.cluster.Cluster.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.cluster.Cluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-hcs.cluster.Cluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.cluster.Cluster.property.managedApplicationName"></a>

```python
managed_application_name: str
```

- *Type:* str

---

##### `managed_resource_group_name`<sup>Required</sup> <a name="managed_resource_group_name" id="@cdktf/provider-hcs.cluster.Cluster.property.managedResourceGroupName"></a>

```python
managed_resource_group_name: str
```

- *Type:* str

---

##### `min_consul_version`<sup>Required</sup> <a name="min_consul_version" id="@cdktf/provider-hcs.cluster.Cluster.property.minConsulVersion"></a>

```python
min_consul_version: str
```

- *Type:* str

---

##### `plan_name`<sup>Required</sup> <a name="plan_name" id="@cdktf/provider-hcs.cluster.Cluster.property.planName"></a>

```python
plan_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.cluster.Cluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-hcs.cluster.Cluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vnet_cidr`<sup>Required</sup> <a name="vnet_cidr" id="@cdktf/provider-hcs.cluster.Cluster.property.vnetCidr"></a>

```python
vnet_cidr: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.Cluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.cluster.Cluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterConfig <a name="ClusterConfig" id="@cdktf/provider-hcs.cluster.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.cluster.ClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import cluster

cluster.ClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_mode: str,
  email: str,
  managed_application_name: str,
  resource_group_name: str,
  audit_logging_enabled: typing.Union[bool, IResolvable] = None,
  audit_log_storage_container_url: str = None,
  cluster_name: str = None,
  consul_datacenter: str = None,
  consul_external_endpoint: typing.Union[bool, IResolvable] = None,
  consul_federation_token: str = None,
  id: str = None,
  location: str = None,
  managed_resource_group_name: str = None,
  min_consul_version: str = None,
  plan_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ClusterTimeouts = None,
  vnet_cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterMode">cluster_mode</a></code> | <code>str</code> | The mode of the cluster ('Development' or 'Production'). |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.email">email</a></code> | <code>str</code> | The contact email for the primary owner of the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.managedApplicationName">managed_application_name</a></code> | <code>str</code> | The name of the HCS Azure Managed Application. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | The name of the Resource Group in which the HCS Azure Managed Application belongs. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLoggingEnabled">audit_logging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Consul audit logging for the cluster resource. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLogStorageContainerUrl">audit_log_storage_container_url</a></code> | <code>str</code> | The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulDatacenter">consul_datacenter</a></code> | <code>str</code> | The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulExternalEndpoint">consul_external_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.consulFederationToken">consul_federation_token</a></code> | <code>str</code> | The token used to join a federation of Consul clusters. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#id Cluster#id}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.location">location</a></code> | <code>str</code> | The Azure region that the cluster is deployed to. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.managedResourceGroupName">managed_resource_group_name</a></code> | <code>str</code> | The name of the Managed Resource Group in which the cluster resources belong. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.minConsulVersion">min_consul_version</a></code> | <code>str</code> | The minimum Consul version of the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.planName">plan_name</a></code> | <code>str</code> | The name of the Azure Marketplace HCS plan for the cluster. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | A mapping of tags to assign to the HCS Azure Managed Application resource. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterConfig.property.vnetCidr">vnet_cidr</a></code> | <code>str</code> | The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_mode`<sup>Required</sup> <a name="cluster_mode" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterMode"></a>

```python
cluster_mode: str
```

- *Type:* str

The mode of the cluster ('Development' or 'Production').

Development clusters only have a single Consul server. Production clusters are fully supported, full featured, and deploy with a minimum of three hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#cluster_mode Cluster#cluster_mode}

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The contact email for the primary owner of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#email Cluster#email}

---

##### `managed_application_name`<sup>Required</sup> <a name="managed_application_name" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.managedApplicationName"></a>

```python
managed_application_name: str
```

- *Type:* str

The name of the HCS Azure Managed Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#managed_application_name Cluster#managed_application_name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

The name of the Resource Group in which the HCS Azure Managed Application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#resource_group_name Cluster#resource_group_name}

---

##### `audit_logging_enabled`<sup>Optional</sup> <a name="audit_logging_enabled" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLoggingEnabled"></a>

```python
audit_logging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Consul audit logging for the cluster resource. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#audit_logging_enabled Cluster#audit_logging_enabled}

---

##### `audit_log_storage_container_url`<sup>Optional</sup> <a name="audit_log_storage_container_url" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.auditLogStorageContainerUrl"></a>

```python
audit_log_storage_container_url: str
```

- *Type:* str

The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#audit_log_storage_container_url Cluster#audit_log_storage_container_url}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#cluster_name Cluster#cluster_name}

---

##### `consul_datacenter`<sup>Optional</sup> <a name="consul_datacenter" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulDatacenter"></a>

```python
consul_datacenter: str
```

- *Type:* str

The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_datacenter Cluster#consul_datacenter}

---

##### `consul_external_endpoint`<sup>Optional</sup> <a name="consul_external_endpoint" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulExternalEndpoint"></a>

```python
consul_external_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_external_endpoint Cluster#consul_external_endpoint}

---

##### `consul_federation_token`<sup>Optional</sup> <a name="consul_federation_token" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.consulFederationToken"></a>

```python
consul_federation_token: str
```

- *Type:* str

The token used to join a federation of Consul clusters.

If the cluster is not part of a federation, this field will be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_federation_token Cluster#consul_federation_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#id Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The Azure region that the cluster is deployed to.

If not specified, it is defaulted to the region of the Resource Group the Managed Application belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#location Cluster#location}

---

##### `managed_resource_group_name`<sup>Optional</sup> <a name="managed_resource_group_name" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.managedResourceGroupName"></a>

```python
managed_resource_group_name: str
```

- *Type:* str

The name of the Managed Resource Group in which the cluster resources belong.

If not specified, it is defaulted to the value of `managed_application_name` with 'mrg-' prepended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#managed_resource_group_name Cluster#managed_resource_group_name}

---

##### `min_consul_version`<sup>Optional</sup> <a name="min_consul_version" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.minConsulVersion"></a>

```python
min_consul_version: str
```

- *Type:* str

The minimum Consul version of the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#min_consul_version Cluster#min_consul_version}

---

##### `plan_name`<sup>Optional</sup> <a name="plan_name" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.planName"></a>

```python
plan_name: str
```

- *Type:* str

The name of the Azure Marketplace HCS plan for the cluster.

If not specified, it will default to the current HCS default plan (see the `hcs_plan_defaults` data source).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#plan_name Cluster#plan_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A mapping of tags to assign to the HCS Azure Managed Application resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#tags Cluster#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.timeouts"></a>

```python
timeouts: ClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#timeouts Cluster#timeouts}

---

##### `vnet_cidr`<sup>Optional</sup> <a name="vnet_cidr" id="@cdktf/provider-hcs.cluster.ClusterConfig.property.vnetCidr"></a>

```python
vnet_cidr: str
```

- *Type:* str

The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#vnet_cidr Cluster#vnet_cidr}

---

### ClusterTimeouts <a name="ClusterTimeouts" id="@cdktf/provider-hcs.cluster.ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import cluster

cluster.ClusterTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#create Cluster#create}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#default Cluster#default}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#delete Cluster#delete}. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#update Cluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#create Cluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#default Cluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#delete Cluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcs.cluster.ClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#update Cluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterTimeoutsOutputReference <a name="ClusterTimeoutsOutputReference" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import cluster

cluster.ClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcs.cluster.ClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcs.cluster.ClusterTimeouts">ClusterTimeouts</a>]

---



