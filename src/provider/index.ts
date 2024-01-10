// https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HcsProviderConfig {
  /**
  * The password associated with the Azure Client Certificate. For use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_password HcsProvider#azure_client_certificate_password}
  */
  readonly azureClientCertificatePassword?: string;
  /**
  * The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_path HcsProvider#azure_client_certificate_path}
  */
  readonly azureClientCertificatePath?: string;
  /**
  * The Azure Client ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_id HcsProvider#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * The Azure Client Secret which should be used. For use when authenticating as a Service Principal using a Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_secret HcsProvider#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_environment HcsProvider#azure_environment}
  */
  readonly azureEnvironment?: string;
  /**
  * The hostname which should be used for the Azure Metadata Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_metadata_host HcsProvider#azure_metadata_host}
  */
  readonly azureMetadataHost?: string;
  /**
  * The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_msi_endpoint HcsProvider#azure_msi_endpoint}
  */
  readonly azureMsiEndpoint?: string;
  /**
  * The Azure Subscription ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_subscription_id HcsProvider#azure_subscription_id}
  */
  readonly azureSubscriptionId?: string;
  /**
  * The Azure Tenant ID which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_tenant_id HcsProvider#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Allowed Azure Managed Service Identity be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_use_msi HcsProvider#azure_use_msi}
  */
  readonly azureUseMsi?: boolean | cdktf.IResolvable;
  /**
  * The HashiCorp Cloud Platform API domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcp_api_domain HcsProvider#hcp_api_domain}
  */
  readonly hcpApiDomain?: string;
  /**
  * The HashiCorp Consul Service product name on the Azure marketplace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcs_marketplace_product_name HcsProvider#hcs_marketplace_product_name}
  */
  readonly hcsMarketplaceProductName?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#alias HcsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs hcs}
*/
export class HcsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HcsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HcsProvider to import
  * @param importFromId The id of the existing HcsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HcsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs hcs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HcsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HcsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcs',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '0.5.1',
        providerVersionConstraint: '~> 0.5'
      },
      terraformProviderSource: 'hcs'
    });
    this._azureClientCertificatePassword = config.azureClientCertificatePassword;
    this._azureClientCertificatePath = config.azureClientCertificatePath;
    this._azureClientId = config.azureClientId;
    this._azureClientSecret = config.azureClientSecret;
    this._azureEnvironment = config.azureEnvironment;
    this._azureMetadataHost = config.azureMetadataHost;
    this._azureMsiEndpoint = config.azureMsiEndpoint;
    this._azureSubscriptionId = config.azureSubscriptionId;
    this._azureTenantId = config.azureTenantId;
    this._azureUseMsi = config.azureUseMsi;
    this._hcpApiDomain = config.hcpApiDomain;
    this._hcsMarketplaceProductName = config.hcsMarketplaceProductName;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_client_certificate_password - computed: false, optional: true, required: false
  private _azureClientCertificatePassword?: string; 
  public get azureClientCertificatePassword() {
    return this._azureClientCertificatePassword;
  }
  public set azureClientCertificatePassword(value: string | undefined) {
    this._azureClientCertificatePassword = value;
  }
  public resetAzureClientCertificatePassword() {
    this._azureClientCertificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientCertificatePasswordInput() {
    return this._azureClientCertificatePassword;
  }

  // azure_client_certificate_path - computed: false, optional: true, required: false
  private _azureClientCertificatePath?: string; 
  public get azureClientCertificatePath() {
    return this._azureClientCertificatePath;
  }
  public set azureClientCertificatePath(value: string | undefined) {
    this._azureClientCertificatePath = value;
  }
  public resetAzureClientCertificatePath() {
    this._azureClientCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientCertificatePathInput() {
    return this._azureClientCertificatePath;
  }

  // azure_client_id - computed: false, optional: true, required: false
  private _azureClientId?: string; 
  public get azureClientId() {
    return this._azureClientId;
  }
  public set azureClientId(value: string | undefined) {
    this._azureClientId = value;
  }
  public resetAzureClientId() {
    this._azureClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_client_secret - computed: false, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this._azureClientSecret;
  }
  public set azureClientSecret(value: string | undefined) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_environment - computed: false, optional: true, required: false
  private _azureEnvironment?: string; 
  public get azureEnvironment() {
    return this._azureEnvironment;
  }
  public set azureEnvironment(value: string | undefined) {
    this._azureEnvironment = value;
  }
  public resetAzureEnvironment() {
    this._azureEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEnvironmentInput() {
    return this._azureEnvironment;
  }

  // azure_metadata_host - computed: false, optional: true, required: false
  private _azureMetadataHost?: string; 
  public get azureMetadataHost() {
    return this._azureMetadataHost;
  }
  public set azureMetadataHost(value: string | undefined) {
    this._azureMetadataHost = value;
  }
  public resetAzureMetadataHost() {
    this._azureMetadataHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMetadataHostInput() {
    return this._azureMetadataHost;
  }

  // azure_msi_endpoint - computed: false, optional: true, required: false
  private _azureMsiEndpoint?: string; 
  public get azureMsiEndpoint() {
    return this._azureMsiEndpoint;
  }
  public set azureMsiEndpoint(value: string | undefined) {
    this._azureMsiEndpoint = value;
  }
  public resetAzureMsiEndpoint() {
    this._azureMsiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMsiEndpointInput() {
    return this._azureMsiEndpoint;
  }

  // azure_subscription_id - computed: false, optional: true, required: false
  private _azureSubscriptionId?: string; 
  public get azureSubscriptionId() {
    return this._azureSubscriptionId;
  }
  public set azureSubscriptionId(value: string | undefined) {
    this._azureSubscriptionId = value;
  }
  public resetAzureSubscriptionId() {
    this._azureSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdInput() {
    return this._azureSubscriptionId;
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this._azureTenantId;
  }
  public set azureTenantId(value: string | undefined) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // azure_use_msi - computed: false, optional: true, required: false
  private _azureUseMsi?: boolean | cdktf.IResolvable; 
  public get azureUseMsi() {
    return this._azureUseMsi;
  }
  public set azureUseMsi(value: boolean | cdktf.IResolvable | undefined) {
    this._azureUseMsi = value;
  }
  public resetAzureUseMsi() {
    this._azureUseMsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUseMsiInput() {
    return this._azureUseMsi;
  }

  // hcp_api_domain - computed: false, optional: true, required: false
  private _hcpApiDomain?: string; 
  public get hcpApiDomain() {
    return this._hcpApiDomain;
  }
  public set hcpApiDomain(value: string | undefined) {
    this._hcpApiDomain = value;
  }
  public resetHcpApiDomain() {
    this._hcpApiDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcpApiDomainInput() {
    return this._hcpApiDomain;
  }

  // hcs_marketplace_product_name - computed: false, optional: true, required: false
  private _hcsMarketplaceProductName?: string; 
  public get hcsMarketplaceProductName() {
    return this._hcsMarketplaceProductName;
  }
  public set hcsMarketplaceProductName(value: string | undefined) {
    this._hcsMarketplaceProductName = value;
  }
  public resetHcsMarketplaceProductName() {
    this._hcsMarketplaceProductName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcsMarketplaceProductNameInput() {
    return this._hcsMarketplaceProductName;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_client_certificate_password: cdktf.stringToTerraform(this._azureClientCertificatePassword),
      azure_client_certificate_path: cdktf.stringToTerraform(this._azureClientCertificatePath),
      azure_client_id: cdktf.stringToTerraform(this._azureClientId),
      azure_client_secret: cdktf.stringToTerraform(this._azureClientSecret),
      azure_environment: cdktf.stringToTerraform(this._azureEnvironment),
      azure_metadata_host: cdktf.stringToTerraform(this._azureMetadataHost),
      azure_msi_endpoint: cdktf.stringToTerraform(this._azureMsiEndpoint),
      azure_subscription_id: cdktf.stringToTerraform(this._azureSubscriptionId),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      azure_use_msi: cdktf.booleanToTerraform(this._azureUseMsi),
      hcp_api_domain: cdktf.stringToTerraform(this._hcpApiDomain),
      hcs_marketplace_product_name: cdktf.stringToTerraform(this._hcsMarketplaceProductName),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_client_certificate_password: {
        value: cdktf.stringToHclTerraform(this._azureClientCertificatePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client_certificate_path: {
        value: cdktf.stringToHclTerraform(this._azureClientCertificatePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client_id: {
        value: cdktf.stringToHclTerraform(this._azureClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client_secret: {
        value: cdktf.stringToHclTerraform(this._azureClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_environment: {
        value: cdktf.stringToHclTerraform(this._azureEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_metadata_host: {
        value: cdktf.stringToHclTerraform(this._azureMetadataHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_msi_endpoint: {
        value: cdktf.stringToHclTerraform(this._azureMsiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_subscription_id: {
        value: cdktf.stringToHclTerraform(this._azureSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_use_msi: {
        value: cdktf.booleanToHclTerraform(this._azureUseMsi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hcp_api_domain: {
        value: cdktf.stringToHclTerraform(this._hcpApiDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hcs_marketplace_product_name: {
        value: cdktf.stringToHclTerraform(this._hcsMarketplaceProductName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
