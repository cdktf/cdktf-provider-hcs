# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-hcs.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HcsProvider <a name="HcsProvider" id="@cdktf/provider-hcs.provider.HcsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs hcs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.provider.HcsProvider;

HcsProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .azureClientCertificatePassword(java.lang.String)
//  .azureClientCertificatePath(java.lang.String)
//  .azureClientId(java.lang.String)
//  .azureClientSecret(java.lang.String)
//  .azureEnvironment(java.lang.String)
//  .azureMetadataHost(java.lang.String)
//  .azureMsiEndpoint(java.lang.String)
//  .azureSubscriptionId(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .azureUseMsi(java.lang.Boolean)
//  .azureUseMsi(IResolvable)
//  .hcpApiDomain(java.lang.String)
//  .hcsMarketplaceProductName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientCertificatePassword">azureClientCertificatePassword</a></code> | <code>java.lang.String</code> | The password associated with the Azure Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientCertificatePath">azureClientCertificatePath</a></code> | <code>java.lang.String</code> | The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientId">azureClientId</a></code> | <code>java.lang.String</code> | The Azure Client ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientSecret">azureClientSecret</a></code> | <code>java.lang.String</code> | The Azure Client Secret which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureEnvironment">azureEnvironment</a></code> | <code>java.lang.String</code> | The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureMetadataHost">azureMetadataHost</a></code> | <code>java.lang.String</code> | The hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureMsiEndpoint">azureMsiEndpoint</a></code> | <code>java.lang.String</code> | The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureSubscriptionId">azureSubscriptionId</a></code> | <code>java.lang.String</code> | The Azure Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | The Azure Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureUseMsi">azureUseMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allowed Azure Managed Service Identity be used for Authentication. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.hcpApiDomain">hcpApiDomain</a></code> | <code>java.lang.String</code> | The HashiCorp Cloud Platform API domain. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.hcsMarketplaceProductName">hcsMarketplaceProductName</a></code> | <code>java.lang.String</code> | The HashiCorp Consul Service product name on the Azure marketplace. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#alias HcsProvider#alias}

---

##### `azureClientCertificatePassword`<sup>Optional</sup> <a name="azureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientCertificatePassword"></a>

- *Type:* java.lang.String

The password associated with the Azure Client Certificate.

For use when authenticating as a Service Principal using a Client Certificate

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_password HcsProvider#azure_client_certificate_password}

---

##### `azureClientCertificatePath`<sup>Optional</sup> <a name="azureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientCertificatePath"></a>

- *Type:* java.lang.String

The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_path HcsProvider#azure_client_certificate_path}

---

##### `azureClientId`<sup>Optional</sup> <a name="azureClientId" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientId"></a>

- *Type:* java.lang.String

The Azure Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_id HcsProvider#azure_client_id}

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureClientSecret"></a>

- *Type:* java.lang.String

The Azure Client Secret which should be used.

For use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_secret HcsProvider#azure_client_secret}

---

##### `azureEnvironment`<sup>Optional</sup> <a name="azureEnvironment" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureEnvironment"></a>

- *Type:* java.lang.String

The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_environment HcsProvider#azure_environment}

---

##### `azureMetadataHost`<sup>Optional</sup> <a name="azureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureMetadataHost"></a>

- *Type:* java.lang.String

The hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_metadata_host HcsProvider#azure_metadata_host}

---

##### `azureMsiEndpoint`<sup>Optional</sup> <a name="azureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureMsiEndpoint"></a>

- *Type:* java.lang.String

The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_msi_endpoint HcsProvider#azure_msi_endpoint}

---

##### `azureSubscriptionId`<sup>Optional</sup> <a name="azureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureSubscriptionId"></a>

- *Type:* java.lang.String

The Azure Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_subscription_id HcsProvider#azure_subscription_id}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureTenantId"></a>

- *Type:* java.lang.String

The Azure Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_tenant_id HcsProvider#azure_tenant_id}

---

##### `azureUseMsi`<sup>Optional</sup> <a name="azureUseMsi" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.azureUseMsi"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allowed Azure Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_use_msi HcsProvider#azure_use_msi}

---

##### `hcpApiDomain`<sup>Optional</sup> <a name="hcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.hcpApiDomain"></a>

- *Type:* java.lang.String

The HashiCorp Cloud Platform API domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcp_api_domain HcsProvider#hcp_api_domain}

---

##### `hcsMarketplaceProductName`<sup>Optional</sup> <a name="hcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.hcsMarketplaceProductName"></a>

- *Type:* java.lang.String

The HashiCorp Consul Service product name on the Azure marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcs_marketplace_product_name HcsProvider#hcs_marketplace_product_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePassword">resetAzureClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePath">resetAzureClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientId">resetAzureClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientSecret">resetAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureEnvironment">resetAzureEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureMetadataHost">resetAzureMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureMsiEndpoint">resetAzureMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureSubscriptionId">resetAzureSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureUseMsi">resetAzureUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetHcpApiDomain">resetHcpApiDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetHcsMarketplaceProductName">resetHcsMarketplaceProductName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.provider.HcsProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcs.provider.HcsProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcs.provider.HcsProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-hcs.provider.HcsProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAzureClientCertificatePassword` <a name="resetAzureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePassword"></a>

```java
public void resetAzureClientCertificatePassword()
```

##### `resetAzureClientCertificatePath` <a name="resetAzureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePath"></a>

```java
public void resetAzureClientCertificatePath()
```

##### `resetAzureClientId` <a name="resetAzureClientId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientId"></a>

```java
public void resetAzureClientId()
```

##### `resetAzureClientSecret` <a name="resetAzureClientSecret" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientSecret"></a>

```java
public void resetAzureClientSecret()
```

##### `resetAzureEnvironment` <a name="resetAzureEnvironment" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureEnvironment"></a>

```java
public void resetAzureEnvironment()
```

##### `resetAzureMetadataHost` <a name="resetAzureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureMetadataHost"></a>

```java
public void resetAzureMetadataHost()
```

##### `resetAzureMsiEndpoint` <a name="resetAzureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureMsiEndpoint"></a>

```java
public void resetAzureMsiEndpoint()
```

##### `resetAzureSubscriptionId` <a name="resetAzureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureSubscriptionId"></a>

```java
public void resetAzureSubscriptionId()
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureTenantId"></a>

```java
public void resetAzureTenantId()
```

##### `resetAzureUseMsi` <a name="resetAzureUseMsi" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureUseMsi"></a>

```java
public void resetAzureUseMsi()
```

##### `resetHcpApiDomain` <a name="resetHcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProvider.resetHcpApiDomain"></a>

```java
public void resetHcpApiDomain()
```

##### `resetHcsMarketplaceProductName` <a name="resetHcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProvider.resetHcsMarketplaceProductName"></a>

```java
public void resetHcsMarketplaceProductName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HcsProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcs.provider.HcsProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcs.provider.HcsProvider;

HcsProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcs.provider.HcsProvider;

HcsProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.hcs.provider.HcsProvider;

HcsProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcs.provider.HcsProvider;

HcsProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HcsProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HcsProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HcsProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HcsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HcsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePasswordInput">azureClientCertificatePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePathInput">azureClientCertificatePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientIdInput">azureClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecretInput">azureClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironmentInput">azureEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHostInput">azureMetadataHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpointInput">azureMsiEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionIdInput">azureSubscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsiInput">azureUseMsiInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomainInput">hcpApiDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductNameInput">hcsMarketplaceProductNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePassword">azureClientCertificatePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePath">azureClientCertificatePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientId">azureClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecret">azureClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironment">azureEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHost">azureMetadataHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpoint">azureMsiEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsi">azureUseMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomain">hcpApiDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductName">hcsMarketplaceProductName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.provider.HcsProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcs.provider.HcsProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.provider.HcsProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcs.provider.HcsProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-hcs.provider.HcsProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcs.provider.HcsProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `azureClientCertificatePasswordInput`<sup>Optional</sup> <a name="azureClientCertificatePasswordInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePasswordInput"></a>

```java
public java.lang.String getAzureClientCertificatePasswordInput();
```

- *Type:* java.lang.String

---

##### `azureClientCertificatePathInput`<sup>Optional</sup> <a name="azureClientCertificatePathInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePathInput"></a>

```java
public java.lang.String getAzureClientCertificatePathInput();
```

- *Type:* java.lang.String

---

##### `azureClientIdInput`<sup>Optional</sup> <a name="azureClientIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientIdInput"></a>

```java
public java.lang.String getAzureClientIdInput();
```

- *Type:* java.lang.String

---

##### `azureClientSecretInput`<sup>Optional</sup> <a name="azureClientSecretInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecretInput"></a>

```java
public java.lang.String getAzureClientSecretInput();
```

- *Type:* java.lang.String

---

##### `azureEnvironmentInput`<sup>Optional</sup> <a name="azureEnvironmentInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironmentInput"></a>

```java
public java.lang.String getAzureEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `azureMetadataHostInput`<sup>Optional</sup> <a name="azureMetadataHostInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHostInput"></a>

```java
public java.lang.String getAzureMetadataHostInput();
```

- *Type:* java.lang.String

---

##### `azureMsiEndpointInput`<sup>Optional</sup> <a name="azureMsiEndpointInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpointInput"></a>

```java
public java.lang.String getAzureMsiEndpointInput();
```

- *Type:* java.lang.String

---

##### `azureSubscriptionIdInput`<sup>Optional</sup> <a name="azureSubscriptionIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionIdInput"></a>

```java
public java.lang.String getAzureSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantIdInput"></a>

```java
public java.lang.String getAzureTenantIdInput();
```

- *Type:* java.lang.String

---

##### `azureUseMsiInput`<sup>Optional</sup> <a name="azureUseMsiInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsiInput"></a>

```java
public java.lang.Object getAzureUseMsiInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hcpApiDomainInput`<sup>Optional</sup> <a name="hcpApiDomainInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomainInput"></a>

```java
public java.lang.String getHcpApiDomainInput();
```

- *Type:* java.lang.String

---

##### `hcsMarketplaceProductNameInput`<sup>Optional</sup> <a name="hcsMarketplaceProductNameInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductNameInput"></a>

```java
public java.lang.String getHcsMarketplaceProductNameInput();
```

- *Type:* java.lang.String

---

##### `azureClientCertificatePassword`<sup>Optional</sup> <a name="azureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePassword"></a>

```java
public java.lang.String getAzureClientCertificatePassword();
```

- *Type:* java.lang.String

---

##### `azureClientCertificatePath`<sup>Optional</sup> <a name="azureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePath"></a>

```java
public java.lang.String getAzureClientCertificatePath();
```

- *Type:* java.lang.String

---

##### `azureClientId`<sup>Optional</sup> <a name="azureClientId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientId"></a>

```java
public java.lang.String getAzureClientId();
```

- *Type:* java.lang.String

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecret"></a>

```java
public java.lang.String getAzureClientSecret();
```

- *Type:* java.lang.String

---

##### `azureEnvironment`<sup>Optional</sup> <a name="azureEnvironment" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironment"></a>

```java
public java.lang.String getAzureEnvironment();
```

- *Type:* java.lang.String

---

##### `azureMetadataHost`<sup>Optional</sup> <a name="azureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHost"></a>

```java
public java.lang.String getAzureMetadataHost();
```

- *Type:* java.lang.String

---

##### `azureMsiEndpoint`<sup>Optional</sup> <a name="azureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpoint"></a>

```java
public java.lang.String getAzureMsiEndpoint();
```

- *Type:* java.lang.String

---

##### `azureSubscriptionId`<sup>Optional</sup> <a name="azureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionId"></a>

```java
public java.lang.String getAzureSubscriptionId();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `azureUseMsi`<sup>Optional</sup> <a name="azureUseMsi" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsi"></a>

```java
public java.lang.Object getAzureUseMsi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hcpApiDomain`<sup>Optional</sup> <a name="hcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomain"></a>

```java
public java.lang.String getHcpApiDomain();
```

- *Type:* java.lang.String

---

##### `hcsMarketplaceProductName`<sup>Optional</sup> <a name="hcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductName"></a>

```java
public java.lang.String getHcsMarketplaceProductName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.provider.HcsProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HcsProviderConfig <a name="HcsProviderConfig" id="@cdktf/provider-hcs.provider.HcsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.provider.HcsProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcs.provider.HcsProviderConfig;

HcsProviderConfig.builder()
//  .alias(java.lang.String)
//  .azureClientCertificatePassword(java.lang.String)
//  .azureClientCertificatePath(java.lang.String)
//  .azureClientId(java.lang.String)
//  .azureClientSecret(java.lang.String)
//  .azureEnvironment(java.lang.String)
//  .azureMetadataHost(java.lang.String)
//  .azureMsiEndpoint(java.lang.String)
//  .azureSubscriptionId(java.lang.String)
//  .azureTenantId(java.lang.String)
//  .azureUseMsi(java.lang.Boolean)
//  .azureUseMsi(IResolvable)
//  .hcpApiDomain(java.lang.String)
//  .hcsMarketplaceProductName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePassword">azureClientCertificatePassword</a></code> | <code>java.lang.String</code> | The password associated with the Azure Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePath">azureClientCertificatePath</a></code> | <code>java.lang.String</code> | The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientId">azureClientId</a></code> | <code>java.lang.String</code> | The Azure Client ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientSecret">azureClientSecret</a></code> | <code>java.lang.String</code> | The Azure Client Secret which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureEnvironment">azureEnvironment</a></code> | <code>java.lang.String</code> | The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMetadataHost">azureMetadataHost</a></code> | <code>java.lang.String</code> | The hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMsiEndpoint">azureMsiEndpoint</a></code> | <code>java.lang.String</code> | The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>java.lang.String</code> | The Azure Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | The Azure Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureUseMsi">azureUseMsi</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allowed Azure Managed Service Identity be used for Authentication. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcpApiDomain">hcpApiDomain</a></code> | <code>java.lang.String</code> | The HashiCorp Cloud Platform API domain. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcsMarketplaceProductName">hcsMarketplaceProductName</a></code> | <code>java.lang.String</code> | The HashiCorp Consul Service product name on the Azure marketplace. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#alias HcsProvider#alias}

---

##### `azureClientCertificatePassword`<sup>Optional</sup> <a name="azureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePassword"></a>

```java
public java.lang.String getAzureClientCertificatePassword();
```

- *Type:* java.lang.String

The password associated with the Azure Client Certificate.

For use when authenticating as a Service Principal using a Client Certificate

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_password HcsProvider#azure_client_certificate_password}

---

##### `azureClientCertificatePath`<sup>Optional</sup> <a name="azureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePath"></a>

```java
public java.lang.String getAzureClientCertificatePath();
```

- *Type:* java.lang.String

The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_path HcsProvider#azure_client_certificate_path}

---

##### `azureClientId`<sup>Optional</sup> <a name="azureClientId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientId"></a>

```java
public java.lang.String getAzureClientId();
```

- *Type:* java.lang.String

The Azure Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_id HcsProvider#azure_client_id}

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientSecret"></a>

```java
public java.lang.String getAzureClientSecret();
```

- *Type:* java.lang.String

The Azure Client Secret which should be used.

For use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_secret HcsProvider#azure_client_secret}

---

##### `azureEnvironment`<sup>Optional</sup> <a name="azureEnvironment" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureEnvironment"></a>

```java
public java.lang.String getAzureEnvironment();
```

- *Type:* java.lang.String

The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_environment HcsProvider#azure_environment}

---

##### `azureMetadataHost`<sup>Optional</sup> <a name="azureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMetadataHost"></a>

```java
public java.lang.String getAzureMetadataHost();
```

- *Type:* java.lang.String

The hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_metadata_host HcsProvider#azure_metadata_host}

---

##### `azureMsiEndpoint`<sup>Optional</sup> <a name="azureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMsiEndpoint"></a>

```java
public java.lang.String getAzureMsiEndpoint();
```

- *Type:* java.lang.String

The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_msi_endpoint HcsProvider#azure_msi_endpoint}

---

##### `azureSubscriptionId`<sup>Optional</sup> <a name="azureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureSubscriptionId"></a>

```java
public java.lang.String getAzureSubscriptionId();
```

- *Type:* java.lang.String

The Azure Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_subscription_id HcsProvider#azure_subscription_id}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

The Azure Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_tenant_id HcsProvider#azure_tenant_id}

---

##### `azureUseMsi`<sup>Optional</sup> <a name="azureUseMsi" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureUseMsi"></a>

```java
public java.lang.Object getAzureUseMsi();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allowed Azure Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_use_msi HcsProvider#azure_use_msi}

---

##### `hcpApiDomain`<sup>Optional</sup> <a name="hcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcpApiDomain"></a>

```java
public java.lang.String getHcpApiDomain();
```

- *Type:* java.lang.String

The HashiCorp Cloud Platform API domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcp_api_domain HcsProvider#hcp_api_domain}

---

##### `hcsMarketplaceProductName`<sup>Optional</sup> <a name="hcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcsMarketplaceProductName"></a>

```java
public java.lang.String getHcsMarketplaceProductName();
```

- *Type:* java.lang.String

The HashiCorp Consul Service product name on the Azure marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcs_marketplace_product_name HcsProvider#hcs_marketplace_product_name}

---



