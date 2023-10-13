// https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The url of the Azure blob storage container to write audit logs to if `audit_logging_enabled` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#audit_log_storage_container_url Cluster#audit_log_storage_container_url}
  */
  readonly auditLogStorageContainerUrl?: string;
  /**
  * Enables Consul audit logging for the cluster resource. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#audit_logging_enabled Cluster#audit_logging_enabled}
  */
  readonly auditLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The mode of the cluster ('Development' or 'Production'). Development clusters only have a single Consul server. Production clusters are fully supported, full featured, and deploy with a minimum of three hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#cluster_mode Cluster#cluster_mode}
  */
  readonly clusterMode: string;
  /**
  * The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#cluster_name Cluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The Consul data center name of the cluster. If not specified, it is defaulted to the value of `managed_application_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_datacenter Cluster#consul_datacenter}
  */
  readonly consulDatacenter?: string;
  /**
  * Denotes that the cluster has an external endpoint for the Consul UI. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_external_endpoint Cluster#consul_external_endpoint}
  */
  readonly consulExternalEndpoint?: boolean | cdktf.IResolvable;
  /**
  * The token used to join a federation of Consul clusters. If the cluster is not part of a federation, this field will be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#consul_federation_token Cluster#consul_federation_token}
  */
  readonly consulFederationToken?: string;
  /**
  * The contact email for the primary owner of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#email Cluster#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Azure region that the cluster is deployed to. If not specified, it is defaulted to the region of the Resource Group the Managed Application belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#location Cluster#location}
  */
  readonly location?: string;
  /**
  * The name of the HCS Azure Managed Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#managed_application_name Cluster#managed_application_name}
  */
  readonly managedApplicationName: string;
  /**
  * The name of the Managed Resource Group in which the cluster resources belong. If not specified, it is defaulted to the value of `managed_application_name` with 'mrg-' prepended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#managed_resource_group_name Cluster#managed_resource_group_name}
  */
  readonly managedResourceGroupName?: string;
  /**
  * The minimum Consul version of the cluster. If not specified, it is defaulted to the version that is currently recommended by HCS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#min_consul_version Cluster#min_consul_version}
  */
  readonly minConsulVersion?: string;
  /**
  * The name of the Azure Marketplace HCS plan for the cluster. If not specified, it will default to the current HCS default plan (see the `hcs_plan_defaults` data source).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#plan_name Cluster#plan_name}
  */
  readonly planName?: string;
  /**
  * The name of the Resource Group in which the HCS Azure Managed Application belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#resource_group_name Cluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * A mapping of tags to assign to the HCS Azure Managed Application resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#tags Cluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The VNET CIDR range of the Consul cluster. Defaults to `172.25.16.0/24`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#vnet_cidr Cluster#vnet_cidr}
  */
  readonly vnetCidr?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#timeouts Cluster#timeouts}
  */
  readonly timeouts?: ClusterTimeouts;
}
export interface ClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#create Cluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#default Cluster#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#delete Cluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster#update Cluster#update}
  */
  readonly update?: string;
}

export function clusterTimeoutsToTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster hcs_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster hcs_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_cluster',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '0.5.1',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditLogStorageContainerUrl = config.auditLogStorageContainerUrl;
    this._auditLoggingEnabled = config.auditLoggingEnabled;
    this._clusterMode = config.clusterMode;
    this._clusterName = config.clusterName;
    this._consulDatacenter = config.consulDatacenter;
    this._consulExternalEndpoint = config.consulExternalEndpoint;
    this._consulFederationToken = config.consulFederationToken;
    this._email = config.email;
    this._id = config.id;
    this._location = config.location;
    this._managedApplicationName = config.managedApplicationName;
    this._managedResourceGroupName = config.managedResourceGroupName;
    this._minConsulVersion = config.minConsulVersion;
    this._planName = config.planName;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._vnetCidr = config.vnetCidr;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_log_storage_container_url - computed: false, optional: true, required: false
  private _auditLogStorageContainerUrl?: string; 
  public get auditLogStorageContainerUrl() {
    return this.getStringAttribute('audit_log_storage_container_url');
  }
  public set auditLogStorageContainerUrl(value: string) {
    this._auditLogStorageContainerUrl = value;
  }
  public resetAuditLogStorageContainerUrl() {
    this._auditLogStorageContainerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogStorageContainerUrlInput() {
    return this._auditLogStorageContainerUrl;
  }

  // audit_logging_enabled - computed: false, optional: true, required: false
  private _auditLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get auditLoggingEnabled() {
    return this.getBooleanAttribute('audit_logging_enabled');
  }
  public set auditLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._auditLoggingEnabled = value;
  }
  public resetAuditLoggingEnabled() {
    this._auditLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLoggingEnabledInput() {
    return this._auditLoggingEnabled;
  }

  // blob_container_name - computed: true, optional: false, required: false
  public get blobContainerName() {
    return this.getStringAttribute('blob_container_name');
  }

  // cluster_mode - computed: false, optional: false, required: true
  private _clusterMode?: string; 
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }
  public set clusterMode(value: string) {
    this._clusterMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // consul_automatic_upgrades - computed: true, optional: false, required: false
  public get consulAutomaticUpgrades() {
    return this.getBooleanAttribute('consul_automatic_upgrades');
  }

  // consul_ca_file - computed: true, optional: false, required: false
  public get consulCaFile() {
    return this.getStringAttribute('consul_ca_file');
  }

  // consul_cluster_id - computed: true, optional: false, required: false
  public get consulClusterId() {
    return this.getStringAttribute('consul_cluster_id');
  }

  // consul_config_file - computed: true, optional: false, required: false
  public get consulConfigFile() {
    return this.getStringAttribute('consul_config_file');
  }

  // consul_connect - computed: true, optional: false, required: false
  public get consulConnect() {
    return this.getBooleanAttribute('consul_connect');
  }

  // consul_datacenter - computed: true, optional: true, required: false
  private _consulDatacenter?: string; 
  public get consulDatacenter() {
    return this.getStringAttribute('consul_datacenter');
  }
  public set consulDatacenter(value: string) {
    this._consulDatacenter = value;
  }
  public resetConsulDatacenter() {
    this._consulDatacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulDatacenterInput() {
    return this._consulDatacenter;
  }

  // consul_external_endpoint - computed: false, optional: true, required: false
  private _consulExternalEndpoint?: boolean | cdktf.IResolvable; 
  public get consulExternalEndpoint() {
    return this.getBooleanAttribute('consul_external_endpoint');
  }
  public set consulExternalEndpoint(value: boolean | cdktf.IResolvable) {
    this._consulExternalEndpoint = value;
  }
  public resetConsulExternalEndpoint() {
    this._consulExternalEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulExternalEndpointInput() {
    return this._consulExternalEndpoint;
  }

  // consul_external_endpoint_url - computed: true, optional: false, required: false
  public get consulExternalEndpointUrl() {
    return this.getStringAttribute('consul_external_endpoint_url');
  }

  // consul_federation_token - computed: false, optional: true, required: false
  private _consulFederationToken?: string; 
  public get consulFederationToken() {
    return this.getStringAttribute('consul_federation_token');
  }
  public set consulFederationToken(value: string) {
    this._consulFederationToken = value;
  }
  public resetConsulFederationToken() {
    this._consulFederationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulFederationTokenInput() {
    return this._consulFederationToken;
  }

  // consul_private_endpoint_url - computed: true, optional: false, required: false
  public get consulPrivateEndpointUrl() {
    return this.getStringAttribute('consul_private_endpoint_url');
  }

  // consul_root_token_accessor_id - computed: true, optional: false, required: false
  public get consulRootTokenAccessorId() {
    return this.getStringAttribute('consul_root_token_accessor_id');
  }

  // consul_root_token_secret_id - computed: true, optional: false, required: false
  public get consulRootTokenSecretId() {
    return this.getStringAttribute('consul_root_token_secret_id');
  }

  // consul_snapshot_interval - computed: true, optional: false, required: false
  public get consulSnapshotInterval() {
    return this.getStringAttribute('consul_snapshot_interval');
  }

  // consul_snapshot_retention - computed: true, optional: false, required: false
  public get consulSnapshotRetention() {
    return this.getStringAttribute('consul_snapshot_retention');
  }

  // consul_version - computed: true, optional: false, required: false
  public get consulVersion() {
    return this.getStringAttribute('consul_version');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // managed_application_id - computed: true, optional: false, required: false
  public get managedApplicationId() {
    return this.getStringAttribute('managed_application_id');
  }

  // managed_application_name - computed: false, optional: false, required: true
  private _managedApplicationName?: string; 
  public get managedApplicationName() {
    return this.getStringAttribute('managed_application_name');
  }
  public set managedApplicationName(value: string) {
    this._managedApplicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedApplicationNameInput() {
    return this._managedApplicationName;
  }

  // managed_identity_name - computed: true, optional: false, required: false
  public get managedIdentityName() {
    return this.getStringAttribute('managed_identity_name');
  }

  // managed_resource_group_name - computed: true, optional: true, required: false
  private _managedResourceGroupName?: string; 
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }
  public set managedResourceGroupName(value: string) {
    this._managedResourceGroupName = value;
  }
  public resetManagedResourceGroupName() {
    this._managedResourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedResourceGroupNameInput() {
    return this._managedResourceGroupName;
  }

  // min_consul_version - computed: false, optional: true, required: false
  private _minConsulVersion?: string; 
  public get minConsulVersion() {
    return this.getStringAttribute('min_consul_version');
  }
  public set minConsulVersion(value: string) {
    this._minConsulVersion = value;
  }
  public resetMinConsulVersion() {
    this._minConsulVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minConsulVersionInput() {
    return this._minConsulVersion;
  }

  // plan_name - computed: true, optional: true, required: false
  private _planName?: string; 
  public get planName() {
    return this.getStringAttribute('plan_name');
  }
  public set planName(value: string) {
    this._planName = value;
  }
  public resetPlanName() {
    this._planName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planNameInput() {
    return this._planName;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_account_name - computed: true, optional: false, required: false
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }

  // storage_account_resource_group - computed: true, optional: false, required: false
  public get storageAccountResourceGroup() {
    return this.getStringAttribute('storage_account_resource_group');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vnet_cidr - computed: false, optional: true, required: false
  private _vnetCidr?: string; 
  public get vnetCidr() {
    return this.getStringAttribute('vnet_cidr');
  }
  public set vnetCidr(value: string) {
    this._vnetCidr = value;
  }
  public resetVnetCidr() {
    this._vnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetCidrInput() {
    return this._vnetCidr;
  }

  // vnet_id - computed: true, optional: false, required: false
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }

  // vnet_name - computed: true, optional: false, required: false
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }

  // vnet_resource_group_name - computed: true, optional: false, required: false
  public get vnetResourceGroupName() {
    return this.getStringAttribute('vnet_resource_group_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_log_storage_container_url: cdktf.stringToTerraform(this._auditLogStorageContainerUrl),
      audit_logging_enabled: cdktf.booleanToTerraform(this._auditLoggingEnabled),
      cluster_mode: cdktf.stringToTerraform(this._clusterMode),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      consul_datacenter: cdktf.stringToTerraform(this._consulDatacenter),
      consul_external_endpoint: cdktf.booleanToTerraform(this._consulExternalEndpoint),
      consul_federation_token: cdktf.stringToTerraform(this._consulFederationToken),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      managed_application_name: cdktf.stringToTerraform(this._managedApplicationName),
      managed_resource_group_name: cdktf.stringToTerraform(this._managedResourceGroupName),
      min_consul_version: cdktf.stringToTerraform(this._minConsulVersion),
      plan_name: cdktf.stringToTerraform(this._planName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vnet_cidr: cdktf.stringToTerraform(this._vnetCidr),
      timeouts: clusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
