// https://www.terraform.io/docs/providers/hcs/d/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the cluster Managed Resource. If not specified, it is defaulted to the value of `managed_application_name`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#cluster_name DataHcsCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#id DataHcsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the HCS Azure Managed Application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#managed_application_name DataHcsCluster#managed_application_name}
  */
  readonly managedApplicationName: string;
  /**
  * The name of the Resource Group in which the HCS Azure Managed Application belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#resource_group_name DataHcsCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#timeouts DataHcsCluster#timeouts}
  */
  readonly timeouts?: DataHcsClusterTimeouts;
}
export interface DataHcsClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/cluster#default DataHcsCluster#default}
  */
  readonly default?: string;
}

export function dataHcsClusterTimeoutsToTerraform(struct?: DataHcsClusterTimeoutsOutputReference | DataHcsClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class DataHcsClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHcsClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/hcs/d/cluster hcs_cluster}
*/
export class DataHcsCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/hcs/d/cluster hcs_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcsClusterConfig) {
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
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._managedApplicationName = config.managedApplicationName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blob_container_name - computed: true, optional: false, required: false
  public get blobContainerName() {
    return this.getStringAttribute('blob_container_name');
  }

  // cluster_mode - computed: true, optional: false, required: false
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
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

  // consul_datacenter - computed: true, optional: false, required: false
  public get consulDatacenter() {
    return this.getStringAttribute('consul_datacenter');
  }

  // consul_external_endpoint - computed: true, optional: false, required: false
  public get consulExternalEndpoint() {
    return this.getBooleanAttribute('consul_external_endpoint');
  }

  // consul_external_endpoint_url - computed: true, optional: false, required: false
  public get consulExternalEndpointUrl() {
    return this.getStringAttribute('consul_external_endpoint_url');
  }

  // consul_federation_token - computed: true, optional: false, required: false
  public get consulFederationToken() {
    return this.getStringAttribute('consul_federation_token');
  }

  // consul_private_endpoint_url - computed: true, optional: false, required: false
  public get consulPrivateEndpointUrl() {
    return this.getStringAttribute('consul_private_endpoint_url');
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

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // managed_resource_group_name - computed: true, optional: false, required: false
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }

  // plan_name - computed: true, optional: false, required: false
  public get planName() {
    return this.getStringAttribute('plan_name');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vnet_cidr - computed: true, optional: false, required: false
  public get vnetCidr() {
    return this.getStringAttribute('vnet_cidr');
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
  private _timeouts = new DataHcsClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcsClusterTimeouts) {
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
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      managed_application_name: cdktf.stringToTerraform(this._managedApplicationName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataHcsClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
