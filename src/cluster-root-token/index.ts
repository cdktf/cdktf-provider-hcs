/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster_root_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterRootTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster_root_token#id ClusterRootToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the HCS Azure Managed Application.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster_root_token#managed_application_name ClusterRootToken#managed_application_name}
  */
  readonly managedApplicationName: string;
  /**
  * The name of the Resource Group in which the HCS Azure Managed Application belongs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster_root_token#resource_group_name ClusterRootToken#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster_root_token#timeouts ClusterRootToken#timeouts}
  */
  readonly timeouts?: ClusterRootTokenTimeouts;
}
export interface ClusterRootTokenTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster_root_token#default ClusterRootToken#default}
  */
  readonly default?: string;
}

export function clusterRootTokenTimeoutsToTerraform(struct?: ClusterRootTokenTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class ClusterRootTokenTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterRootTokenTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterRootTokenTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster_root_token hcs_cluster_root_token}
*/
export class ClusterRootToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_cluster_root_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs/resources/cluster_root_token hcs_cluster_root_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterRootTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterRootTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_cluster_root_token',
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
    this._id = config.id;
    this._managedApplicationName = config.managedApplicationName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor_id - computed: true, optional: false, required: false
  public get accessorId() {
    return this.getStringAttribute('accessor_id');
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

  // kubernetes_secret - computed: true, optional: false, required: false
  public get kubernetesSecret() {
    return this.getStringAttribute('kubernetes_secret');
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

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterRootTokenTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterRootTokenTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      managed_application_name: cdktf.stringToTerraform(this._managedApplicationName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: clusterRootTokenTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
