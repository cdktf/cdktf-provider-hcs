# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-hcs.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HcsProvider <a name="HcsProvider" id="@cdktf/provider-hcs.provider.HcsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs hcs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import provider

provider.HcsProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  azure_client_certificate_password: str = None,
  azure_client_certificate_path: str = None,
  azure_client_id: str = None,
  azure_client_secret: str = None,
  azure_environment: str = None,
  azure_metadata_host: str = None,
  azure_msi_endpoint: str = None,
  azure_subscription_id: str = None,
  azure_tenant_id: str = None,
  azure_use_msi: typing.Union[bool, IResolvable] = None,
  hcp_api_domain: str = None,
  hcs_marketplace_product_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientCertificatePassword">azure_client_certificate_password</a></code> | <code>str</code> | The password associated with the Azure Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientCertificatePath">azure_client_certificate_path</a></code> | <code>str</code> | The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientId">azure_client_id</a></code> | <code>str</code> | The Azure Client ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientSecret">azure_client_secret</a></code> | <code>str</code> | The Azure Client Secret which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureEnvironment">azure_environment</a></code> | <code>str</code> | The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureMetadataHost">azure_metadata_host</a></code> | <code>str</code> | The hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureMsiEndpoint">azure_msi_endpoint</a></code> | <code>str</code> | The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureSubscriptionId">azure_subscription_id</a></code> | <code>str</code> | The Azure Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | The Azure Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureUseMsi">azure_use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allowed Azure Managed Service Identity be used for Authentication. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.hcpApiDomain">hcp_api_domain</a></code> | <code>str</code> | The HashiCorp Cloud Platform API domain. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.hcsMarketplaceProductName">hcs_marketplace_product_name</a></code> | <code>str</code> | The HashiCorp Consul Service product name on the Azure marketplace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#alias HcsProvider#alias}

---

##### `azure_client_certificate_password`<sup>Optional</sup> <a name="azure_client_certificate_password" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientCertificatePassword"></a>

- *Type:* str

The password associated with the Azure Client Certificate.

For use when authenticating as a Service Principal using a Client Certificate

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_password HcsProvider#azure_client_certificate_password}

---

##### `azure_client_certificate_path`<sup>Optional</sup> <a name="azure_client_certificate_path" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientCertificatePath"></a>

- *Type:* str

The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_path HcsProvider#azure_client_certificate_path}

---

##### `azure_client_id`<sup>Optional</sup> <a name="azure_client_id" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientId"></a>

- *Type:* str

The Azure Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_id HcsProvider#azure_client_id}

---

##### `azure_client_secret`<sup>Optional</sup> <a name="azure_client_secret" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientSecret"></a>

- *Type:* str

The Azure Client Secret which should be used.

For use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_secret HcsProvider#azure_client_secret}

---

##### `azure_environment`<sup>Optional</sup> <a name="azure_environment" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureEnvironment"></a>

- *Type:* str

The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_environment HcsProvider#azure_environment}

---

##### `azure_metadata_host`<sup>Optional</sup> <a name="azure_metadata_host" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureMetadataHost"></a>

- *Type:* str

The hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_metadata_host HcsProvider#azure_metadata_host}

---

##### `azure_msi_endpoint`<sup>Optional</sup> <a name="azure_msi_endpoint" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureMsiEndpoint"></a>

- *Type:* str

The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_msi_endpoint HcsProvider#azure_msi_endpoint}

---

##### `azure_subscription_id`<sup>Optional</sup> <a name="azure_subscription_id" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureSubscriptionId"></a>

- *Type:* str

The Azure Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_subscription_id HcsProvider#azure_subscription_id}

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureTenantId"></a>

- *Type:* str

The Azure Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_tenant_id HcsProvider#azure_tenant_id}

---

##### `azure_use_msi`<sup>Optional</sup> <a name="azure_use_msi" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureUseMsi"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allowed Azure Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_use_msi HcsProvider#azure_use_msi}

---

##### `hcp_api_domain`<sup>Optional</sup> <a name="hcp_api_domain" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.hcpApiDomain"></a>

- *Type:* str

The HashiCorp Cloud Platform API domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcp_api_domain HcsProvider#hcp_api_domain}

---

##### `hcs_marketplace_product_name`<sup>Optional</sup> <a name="hcs_marketplace_product_name" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.hcsMarketplaceProductName"></a>

- *Type:* str

The HashiCorp Consul Service product name on the Azure marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcs_marketplace_product_name HcsProvider#hcs_marketplace_product_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePassword">reset_azure_client_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePath">reset_azure_client_certificate_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientId">reset_azure_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientSecret">reset_azure_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureEnvironment">reset_azure_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureMetadataHost">reset_azure_metadata_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureMsiEndpoint">reset_azure_msi_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureSubscriptionId">reset_azure_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureTenantId">reset_azure_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureUseMsi">reset_azure_use_msi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetHcpApiDomain">reset_hcp_api_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetHcsMarketplaceProductName">reset_hcs_marketplace_product_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcs.provider.HcsProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcs.provider.HcsProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcs.provider.HcsProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcs.provider.HcsProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-hcs.provider.HcsProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_azure_client_certificate_password` <a name="reset_azure_client_certificate_password" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePassword"></a>

```python
def reset_azure_client_certificate_password() -> None
```

##### `reset_azure_client_certificate_path` <a name="reset_azure_client_certificate_path" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePath"></a>

```python
def reset_azure_client_certificate_path() -> None
```

##### `reset_azure_client_id` <a name="reset_azure_client_id" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientId"></a>

```python
def reset_azure_client_id() -> None
```

##### `reset_azure_client_secret` <a name="reset_azure_client_secret" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientSecret"></a>

```python
def reset_azure_client_secret() -> None
```

##### `reset_azure_environment` <a name="reset_azure_environment" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureEnvironment"></a>

```python
def reset_azure_environment() -> None
```

##### `reset_azure_metadata_host` <a name="reset_azure_metadata_host" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureMetadataHost"></a>

```python
def reset_azure_metadata_host() -> None
```

##### `reset_azure_msi_endpoint` <a name="reset_azure_msi_endpoint" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureMsiEndpoint"></a>

```python
def reset_azure_msi_endpoint() -> None
```

##### `reset_azure_subscription_id` <a name="reset_azure_subscription_id" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureSubscriptionId"></a>

```python
def reset_azure_subscription_id() -> None
```

##### `reset_azure_tenant_id` <a name="reset_azure_tenant_id" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureTenantId"></a>

```python
def reset_azure_tenant_id() -> None
```

##### `reset_azure_use_msi` <a name="reset_azure_use_msi" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureUseMsi"></a>

```python
def reset_azure_use_msi() -> None
```

##### `reset_hcp_api_domain` <a name="reset_hcp_api_domain" id="@cdktf/provider-hcs.provider.HcsProvider.resetHcpApiDomain"></a>

```python
def reset_hcp_api_domain() -> None
```

##### `reset_hcs_marketplace_product_name` <a name="reset_hcs_marketplace_product_name" id="@cdktf/provider-hcs.provider.HcsProvider.resetHcsMarketplaceProductName"></a>

```python
def reset_hcs_marketplace_product_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HcsProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcs.provider.HcsProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcs import provider

provider.HcsProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.provider.HcsProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcs import provider

provider.HcsProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_hcs import provider

provider.HcsProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcs import provider

provider.HcsProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HcsProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HcsProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HcsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HcsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePasswordInput">azure_client_certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePathInput">azure_client_certificate_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientIdInput">azure_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecretInput">azure_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironmentInput">azure_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHostInput">azure_metadata_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpointInput">azure_msi_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionIdInput">azure_subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantIdInput">azure_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsiInput">azure_use_msi_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomainInput">hcp_api_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductNameInput">hcs_marketplace_product_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePassword">azure_client_certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePath">azure_client_certificate_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientId">azure_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecret">azure_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironment">azure_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHost">azure_metadata_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpoint">azure_msi_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionId">azure_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsi">azure_use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomain">hcp_api_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductName">hcs_marketplace_product_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.provider.HcsProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcs.provider.HcsProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.provider.HcsProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcs.provider.HcsProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-hcs.provider.HcsProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcs.provider.HcsProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `azure_client_certificate_password_input`<sup>Optional</sup> <a name="azure_client_certificate_password_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePasswordInput"></a>

```python
azure_client_certificate_password_input: str
```

- *Type:* str

---

##### `azure_client_certificate_path_input`<sup>Optional</sup> <a name="azure_client_certificate_path_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePathInput"></a>

```python
azure_client_certificate_path_input: str
```

- *Type:* str

---

##### `azure_client_id_input`<sup>Optional</sup> <a name="azure_client_id_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientIdInput"></a>

```python
azure_client_id_input: str
```

- *Type:* str

---

##### `azure_client_secret_input`<sup>Optional</sup> <a name="azure_client_secret_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecretInput"></a>

```python
azure_client_secret_input: str
```

- *Type:* str

---

##### `azure_environment_input`<sup>Optional</sup> <a name="azure_environment_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironmentInput"></a>

```python
azure_environment_input: str
```

- *Type:* str

---

##### `azure_metadata_host_input`<sup>Optional</sup> <a name="azure_metadata_host_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHostInput"></a>

```python
azure_metadata_host_input: str
```

- *Type:* str

---

##### `azure_msi_endpoint_input`<sup>Optional</sup> <a name="azure_msi_endpoint_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpointInput"></a>

```python
azure_msi_endpoint_input: str
```

- *Type:* str

---

##### `azure_subscription_id_input`<sup>Optional</sup> <a name="azure_subscription_id_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionIdInput"></a>

```python
azure_subscription_id_input: str
```

- *Type:* str

---

##### `azure_tenant_id_input`<sup>Optional</sup> <a name="azure_tenant_id_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantIdInput"></a>

```python
azure_tenant_id_input: str
```

- *Type:* str

---

##### `azure_use_msi_input`<sup>Optional</sup> <a name="azure_use_msi_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsiInput"></a>

```python
azure_use_msi_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hcp_api_domain_input`<sup>Optional</sup> <a name="hcp_api_domain_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomainInput"></a>

```python
hcp_api_domain_input: str
```

- *Type:* str

---

##### `hcs_marketplace_product_name_input`<sup>Optional</sup> <a name="hcs_marketplace_product_name_input" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductNameInput"></a>

```python
hcs_marketplace_product_name_input: str
```

- *Type:* str

---

##### `azure_client_certificate_password`<sup>Optional</sup> <a name="azure_client_certificate_password" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePassword"></a>

```python
azure_client_certificate_password: str
```

- *Type:* str

---

##### `azure_client_certificate_path`<sup>Optional</sup> <a name="azure_client_certificate_path" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePath"></a>

```python
azure_client_certificate_path: str
```

- *Type:* str

---

##### `azure_client_id`<sup>Optional</sup> <a name="azure_client_id" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientId"></a>

```python
azure_client_id: str
```

- *Type:* str

---

##### `azure_client_secret`<sup>Optional</sup> <a name="azure_client_secret" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecret"></a>

```python
azure_client_secret: str
```

- *Type:* str

---

##### `azure_environment`<sup>Optional</sup> <a name="azure_environment" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironment"></a>

```python
azure_environment: str
```

- *Type:* str

---

##### `azure_metadata_host`<sup>Optional</sup> <a name="azure_metadata_host" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHost"></a>

```python
azure_metadata_host: str
```

- *Type:* str

---

##### `azure_msi_endpoint`<sup>Optional</sup> <a name="azure_msi_endpoint" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpoint"></a>

```python
azure_msi_endpoint: str
```

- *Type:* str

---

##### `azure_subscription_id`<sup>Optional</sup> <a name="azure_subscription_id" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionId"></a>

```python
azure_subscription_id: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `azure_use_msi`<sup>Optional</sup> <a name="azure_use_msi" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsi"></a>

```python
azure_use_msi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hcp_api_domain`<sup>Optional</sup> <a name="hcp_api_domain" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomain"></a>

```python
hcp_api_domain: str
```

- *Type:* str

---

##### `hcs_marketplace_product_name`<sup>Optional</sup> <a name="hcs_marketplace_product_name" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductName"></a>

```python
hcs_marketplace_product_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.provider.HcsProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HcsProviderConfig <a name="HcsProviderConfig" id="@cdktf/provider-hcs.provider.HcsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.provider.HcsProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcs import provider

provider.HcsProviderConfig(
  alias: str = None,
  azure_client_certificate_password: str = None,
  azure_client_certificate_path: str = None,
  azure_client_id: str = None,
  azure_client_secret: str = None,
  azure_environment: str = None,
  azure_metadata_host: str = None,
  azure_msi_endpoint: str = None,
  azure_subscription_id: str = None,
  azure_tenant_id: str = None,
  azure_use_msi: typing.Union[bool, IResolvable] = None,
  hcp_api_domain: str = None,
  hcs_marketplace_product_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePassword">azure_client_certificate_password</a></code> | <code>str</code> | The password associated with the Azure Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePath">azure_client_certificate_path</a></code> | <code>str</code> | The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientId">azure_client_id</a></code> | <code>str</code> | The Azure Client ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientSecret">azure_client_secret</a></code> | <code>str</code> | The Azure Client Secret which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureEnvironment">azure_environment</a></code> | <code>str</code> | The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMetadataHost">azure_metadata_host</a></code> | <code>str</code> | The hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMsiEndpoint">azure_msi_endpoint</a></code> | <code>str</code> | The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureSubscriptionId">azure_subscription_id</a></code> | <code>str</code> | The Azure Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | The Azure Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureUseMsi">azure_use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allowed Azure Managed Service Identity be used for Authentication. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcpApiDomain">hcp_api_domain</a></code> | <code>str</code> | The HashiCorp Cloud Platform API domain. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcsMarketplaceProductName">hcs_marketplace_product_name</a></code> | <code>str</code> | The HashiCorp Consul Service product name on the Azure marketplace. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#alias HcsProvider#alias}

---

##### `azure_client_certificate_password`<sup>Optional</sup> <a name="azure_client_certificate_password" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePassword"></a>

```python
azure_client_certificate_password: str
```

- *Type:* str

The password associated with the Azure Client Certificate.

For use when authenticating as a Service Principal using a Client Certificate

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_password HcsProvider#azure_client_certificate_password}

---

##### `azure_client_certificate_path`<sup>Optional</sup> <a name="azure_client_certificate_path" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePath"></a>

```python
azure_client_certificate_path: str
```

- *Type:* str

The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_path HcsProvider#azure_client_certificate_path}

---

##### `azure_client_id`<sup>Optional</sup> <a name="azure_client_id" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientId"></a>

```python
azure_client_id: str
```

- *Type:* str

The Azure Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_id HcsProvider#azure_client_id}

---

##### `azure_client_secret`<sup>Optional</sup> <a name="azure_client_secret" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientSecret"></a>

```python
azure_client_secret: str
```

- *Type:* str

The Azure Client Secret which should be used.

For use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_secret HcsProvider#azure_client_secret}

---

##### `azure_environment`<sup>Optional</sup> <a name="azure_environment" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureEnvironment"></a>

```python
azure_environment: str
```

- *Type:* str

The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_environment HcsProvider#azure_environment}

---

##### `azure_metadata_host`<sup>Optional</sup> <a name="azure_metadata_host" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMetadataHost"></a>

```python
azure_metadata_host: str
```

- *Type:* str

The hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_metadata_host HcsProvider#azure_metadata_host}

---

##### `azure_msi_endpoint`<sup>Optional</sup> <a name="azure_msi_endpoint" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMsiEndpoint"></a>

```python
azure_msi_endpoint: str
```

- *Type:* str

The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_msi_endpoint HcsProvider#azure_msi_endpoint}

---

##### `azure_subscription_id`<sup>Optional</sup> <a name="azure_subscription_id" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureSubscriptionId"></a>

```python
azure_subscription_id: str
```

- *Type:* str

The Azure Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_subscription_id HcsProvider#azure_subscription_id}

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

The Azure Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_tenant_id HcsProvider#azure_tenant_id}

---

##### `azure_use_msi`<sup>Optional</sup> <a name="azure_use_msi" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureUseMsi"></a>

```python
azure_use_msi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allowed Azure Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_use_msi HcsProvider#azure_use_msi}

---

##### `hcp_api_domain`<sup>Optional</sup> <a name="hcp_api_domain" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcpApiDomain"></a>

```python
hcp_api_domain: str
```

- *Type:* str

The HashiCorp Cloud Platform API domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcp_api_domain HcsProvider#hcp_api_domain}

---

##### `hcs_marketplace_product_name`<sup>Optional</sup> <a name="hcs_marketplace_product_name" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcsMarketplaceProductName"></a>

```python
hcs_marketplace_product_name: str
```

- *Type:* str

The HashiCorp Consul Service product name on the Azure marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcs_marketplace_product_name HcsProvider#hcs_marketplace_product_name}

---



