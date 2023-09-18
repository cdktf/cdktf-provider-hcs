/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcsAgentHelmConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the AKS cluster that will consume the Helm config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#aks_cluster_name DataHcsAgentHelmConfig#aks_cluster_name}
  */
  readonly aksClusterName: string;
  /**
  * The resource group name of the AKS cluster that will consume the Helm config. If not specified, it is defaulted to the value of `resource_group_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#aks_resource_group DataHcsAgentHelmConfig#aks_resource_group}
  */
  readonly aksResourceGroup?: string;
  /**
  * Denotes that the gossip ports should be exposed. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#expose_gossip_ports DataHcsAgentHelmConfig#expose_gossip_ports}
  */
  readonly exposeGossipPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#id DataHcsAgentHelmConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the HCS Azure Managed Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#managed_application_name DataHcsAgentHelmConfig#managed_application_name}
  */
  readonly managedApplicationName: string;
  /**
  * The name of the Resource Group in which the HCS Azure Managed Application belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#resource_group_name DataHcsAgentHelmConfig#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#timeouts DataHcsAgentHelmConfig#timeouts}
  */
  readonly timeouts?: DataHcsAgentHelmConfigTimeouts;
}
export interface DataHcsAgentHelmConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config#default DataHcsAgentHelmConfig#default}
  */
  readonly default?: string;
}

export function dataHcsAgentHelmConfigTimeoutsToTerraform(struct?: DataHcsAgentHelmConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class DataHcsAgentHelmConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataHcsAgentHelmConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHcsAgentHelmConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config hcs_agent_helm_config}
*/
export class DataHcsAgentHelmConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_agent_helm_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/data-sources/agent_helm_config hcs_agent_helm_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcsAgentHelmConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcsAgentHelmConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_agent_helm_config',
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
    this._aksClusterName = config.aksClusterName;
    this._aksResourceGroup = config.aksResourceGroup;
    this._exposeGossipPorts = config.exposeGossipPorts;
    this._id = config.id;
    this._managedApplicationName = config.managedApplicationName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aks_cluster_name - computed: false, optional: false, required: true
  private _aksClusterName?: string; 
  public get aksClusterName() {
    return this.getStringAttribute('aks_cluster_name');
  }
  public set aksClusterName(value: string) {
    this._aksClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aksClusterNameInput() {
    return this._aksClusterName;
  }

  // aks_resource_group - computed: false, optional: true, required: false
  private _aksResourceGroup?: string; 
  public get aksResourceGroup() {
    return this.getStringAttribute('aks_resource_group');
  }
  public set aksResourceGroup(value: string) {
    this._aksResourceGroup = value;
  }
  public resetAksResourceGroup() {
    this._aksResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aksResourceGroupInput() {
    return this._aksResourceGroup;
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // expose_gossip_ports - computed: false, optional: true, required: false
  private _exposeGossipPorts?: boolean | cdktf.IResolvable; 
  public get exposeGossipPorts() {
    return this.getBooleanAttribute('expose_gossip_ports');
  }
  public set exposeGossipPorts(value: boolean | cdktf.IResolvable) {
    this._exposeGossipPorts = value;
  }
  public resetExposeGossipPorts() {
    this._exposeGossipPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeGossipPortsInput() {
    return this._exposeGossipPorts;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataHcsAgentHelmConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataHcsAgentHelmConfigTimeouts) {
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
      aks_cluster_name: cdktf.stringToTerraform(this._aksClusterName),
      aks_resource_group: cdktf.stringToTerraform(this._aksResourceGroup),
      expose_gossip_ports: cdktf.booleanToTerraform(this._exposeGossipPorts),
      id: cdktf.stringToTerraform(this._id),
      managed_application_name: cdktf.stringToTerraform(this._managedApplicationName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataHcsAgentHelmConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
