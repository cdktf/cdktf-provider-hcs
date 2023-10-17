# `provider`

Refer to the Terraform Registory for docs: [`hcs`](https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-hcs.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HcsProvider <a name="HcsProvider" id="@cdktf/provider-hcs.provider.HcsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs hcs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/provider"

provider.NewHcsProvider(scope Construct, id *string, config HcsProviderConfig) HcsProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig">HcsProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.provider.HcsProviderConfig">HcsProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePassword">ResetAzureClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePath">ResetAzureClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientId">ResetAzureClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientSecret">ResetAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureEnvironment">ResetAzureEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureMetadataHost">ResetAzureMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureMsiEndpoint">ResetAzureMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureSubscriptionId">ResetAzureSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetAzureUseMsi">ResetAzureUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetHcpApiDomain">ResetHcpApiDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.resetHcsMarketplaceProductName">ResetHcsMarketplaceProductName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcs.provider.HcsProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcs.provider.HcsProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcs.provider.HcsProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-hcs.provider.HcsProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAzureClientCertificatePassword` <a name="ResetAzureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePassword"></a>

```go
func ResetAzureClientCertificatePassword()
```

##### `ResetAzureClientCertificatePath` <a name="ResetAzureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePath"></a>

```go
func ResetAzureClientCertificatePath()
```

##### `ResetAzureClientId` <a name="ResetAzureClientId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientId"></a>

```go
func ResetAzureClientId()
```

##### `ResetAzureClientSecret` <a name="ResetAzureClientSecret" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientSecret"></a>

```go
func ResetAzureClientSecret()
```

##### `ResetAzureEnvironment` <a name="ResetAzureEnvironment" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureEnvironment"></a>

```go
func ResetAzureEnvironment()
```

##### `ResetAzureMetadataHost` <a name="ResetAzureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureMetadataHost"></a>

```go
func ResetAzureMetadataHost()
```

##### `ResetAzureMsiEndpoint` <a name="ResetAzureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureMsiEndpoint"></a>

```go
func ResetAzureMsiEndpoint()
```

##### `ResetAzureSubscriptionId` <a name="ResetAzureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureSubscriptionId"></a>

```go
func ResetAzureSubscriptionId()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureTenantId"></a>

```go
func ResetAzureTenantId()
```

##### `ResetAzureUseMsi` <a name="ResetAzureUseMsi" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureUseMsi"></a>

```go
func ResetAzureUseMsi()
```

##### `ResetHcpApiDomain` <a name="ResetHcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProvider.resetHcpApiDomain"></a>

```go
func ResetHcpApiDomain()
```

##### `ResetHcsMarketplaceProductName` <a name="ResetHcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProvider.resetHcsMarketplaceProductName"></a>

```go
func ResetHcsMarketplaceProductName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HcsProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcs.provider.HcsProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/provider"

provider.HcsProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/provider"

provider.HcsProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/provider"

provider.HcsProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/provider"

provider.HcsProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HcsProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HcsProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HcsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.provider.HcsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HcsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePasswordInput">AzureClientCertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePathInput">AzureClientCertificatePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientIdInput">AzureClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecretInput">AzureClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironmentInput">AzureEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHostInput">AzureMetadataHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpointInput">AzureMsiEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionIdInput">AzureSubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsiInput">AzureUseMsiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomainInput">HcpApiDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductNameInput">HcsMarketplaceProductNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePassword">AzureClientCertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePath">AzureClientCertificatePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientId">AzureClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecret">AzureClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironment">AzureEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHost">AzureMetadataHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpoint">AzureMsiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsi">AzureUseMsi</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomain">HcpApiDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductName">HcsMarketplaceProductName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcs.provider.HcsProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcs.provider.HcsProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.provider.HcsProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcs.provider.HcsProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-hcs.provider.HcsProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-hcs.provider.HcsProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AzureClientCertificatePasswordInput`<sup>Optional</sup> <a name="AzureClientCertificatePasswordInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePasswordInput"></a>

```go
func AzureClientCertificatePasswordInput() *string
```

- *Type:* *string

---

##### `AzureClientCertificatePathInput`<sup>Optional</sup> <a name="AzureClientCertificatePathInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePathInput"></a>

```go
func AzureClientCertificatePathInput() *string
```

- *Type:* *string

---

##### `AzureClientIdInput`<sup>Optional</sup> <a name="AzureClientIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientIdInput"></a>

```go
func AzureClientIdInput() *string
```

- *Type:* *string

---

##### `AzureClientSecretInput`<sup>Optional</sup> <a name="AzureClientSecretInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecretInput"></a>

```go
func AzureClientSecretInput() *string
```

- *Type:* *string

---

##### `AzureEnvironmentInput`<sup>Optional</sup> <a name="AzureEnvironmentInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironmentInput"></a>

```go
func AzureEnvironmentInput() *string
```

- *Type:* *string

---

##### `AzureMetadataHostInput`<sup>Optional</sup> <a name="AzureMetadataHostInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHostInput"></a>

```go
func AzureMetadataHostInput() *string
```

- *Type:* *string

---

##### `AzureMsiEndpointInput`<sup>Optional</sup> <a name="AzureMsiEndpointInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpointInput"></a>

```go
func AzureMsiEndpointInput() *string
```

- *Type:* *string

---

##### `AzureSubscriptionIdInput`<sup>Optional</sup> <a name="AzureSubscriptionIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionIdInput"></a>

```go
func AzureSubscriptionIdInput() *string
```

- *Type:* *string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantIdInput"></a>

```go
func AzureTenantIdInput() *string
```

- *Type:* *string

---

##### `AzureUseMsiInput`<sup>Optional</sup> <a name="AzureUseMsiInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsiInput"></a>

```go
func AzureUseMsiInput() interface{}
```

- *Type:* interface{}

---

##### `HcpApiDomainInput`<sup>Optional</sup> <a name="HcpApiDomainInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomainInput"></a>

```go
func HcpApiDomainInput() *string
```

- *Type:* *string

---

##### `HcsMarketplaceProductNameInput`<sup>Optional</sup> <a name="HcsMarketplaceProductNameInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductNameInput"></a>

```go
func HcsMarketplaceProductNameInput() *string
```

- *Type:* *string

---

##### `AzureClientCertificatePassword`<sup>Optional</sup> <a name="AzureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePassword"></a>

```go
func AzureClientCertificatePassword() *string
```

- *Type:* *string

---

##### `AzureClientCertificatePath`<sup>Optional</sup> <a name="AzureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePath"></a>

```go
func AzureClientCertificatePath() *string
```

- *Type:* *string

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientId"></a>

```go
func AzureClientId() *string
```

- *Type:* *string

---

##### `AzureClientSecret`<sup>Optional</sup> <a name="AzureClientSecret" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecret"></a>

```go
func AzureClientSecret() *string
```

- *Type:* *string

---

##### `AzureEnvironment`<sup>Optional</sup> <a name="AzureEnvironment" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironment"></a>

```go
func AzureEnvironment() *string
```

- *Type:* *string

---

##### `AzureMetadataHost`<sup>Optional</sup> <a name="AzureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHost"></a>

```go
func AzureMetadataHost() *string
```

- *Type:* *string

---

##### `AzureMsiEndpoint`<sup>Optional</sup> <a name="AzureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpoint"></a>

```go
func AzureMsiEndpoint() *string
```

- *Type:* *string

---

##### `AzureSubscriptionId`<sup>Optional</sup> <a name="AzureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionId"></a>

```go
func AzureSubscriptionId() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `AzureUseMsi`<sup>Optional</sup> <a name="AzureUseMsi" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsi"></a>

```go
func AzureUseMsi() interface{}
```

- *Type:* interface{}

---

##### `HcpApiDomain`<sup>Optional</sup> <a name="HcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomain"></a>

```go
func HcpApiDomain() *string
```

- *Type:* *string

---

##### `HcsMarketplaceProductName`<sup>Optional</sup> <a name="HcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductName"></a>

```go
func HcsMarketplaceProductName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcs.provider.HcsProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HcsProviderConfig <a name="HcsProviderConfig" id="@cdktf/provider-hcs.provider.HcsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.provider.HcsProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-hcs-go/hcs/v7/provider"

&provider.HcsProviderConfig {
	Alias: *string,
	AzureClientCertificatePassword: *string,
	AzureClientCertificatePath: *string,
	AzureClientId: *string,
	AzureClientSecret: *string,
	AzureEnvironment: *string,
	AzureMetadataHost: *string,
	AzureMsiEndpoint: *string,
	AzureSubscriptionId: *string,
	AzureTenantId: *string,
	AzureUseMsi: interface{},
	HcpApiDomain: *string,
	HcsMarketplaceProductName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePassword">AzureClientCertificatePassword</a></code> | <code>*string</code> | The password associated with the Azure Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePath">AzureClientCertificatePath</a></code> | <code>*string</code> | The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientId">AzureClientId</a></code> | <code>*string</code> | The Azure Client ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientSecret">AzureClientSecret</a></code> | <code>*string</code> | The Azure Client Secret which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureEnvironment">AzureEnvironment</a></code> | <code>*string</code> | The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMetadataHost">AzureMetadataHost</a></code> | <code>*string</code> | The hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMsiEndpoint">AzureMsiEndpoint</a></code> | <code>*string</code> | The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>*string</code> | The Azure Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | The Azure Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureUseMsi">AzureUseMsi</a></code> | <code>interface{}</code> | Allowed Azure Managed Service Identity be used for Authentication. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcpApiDomain">HcpApiDomain</a></code> | <code>*string</code> | The HashiCorp Cloud Platform API domain. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcsMarketplaceProductName">HcsMarketplaceProductName</a></code> | <code>*string</code> | The HashiCorp Consul Service product name on the Azure marketplace. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#alias HcsProvider#alias}

---

##### `AzureClientCertificatePassword`<sup>Optional</sup> <a name="AzureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePassword"></a>

```go
AzureClientCertificatePassword *string
```

- *Type:* *string

The password associated with the Azure Client Certificate.

For use when authenticating as a Service Principal using a Client Certificate

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_password HcsProvider#azure_client_certificate_password}

---

##### `AzureClientCertificatePath`<sup>Optional</sup> <a name="AzureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePath"></a>

```go
AzureClientCertificatePath *string
```

- *Type:* *string

The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_path HcsProvider#azure_client_certificate_path}

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientId"></a>

```go
AzureClientId *string
```

- *Type:* *string

The Azure Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_id HcsProvider#azure_client_id}

---

##### `AzureClientSecret`<sup>Optional</sup> <a name="AzureClientSecret" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientSecret"></a>

```go
AzureClientSecret *string
```

- *Type:* *string

The Azure Client Secret which should be used.

For use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_secret HcsProvider#azure_client_secret}

---

##### `AzureEnvironment`<sup>Optional</sup> <a name="AzureEnvironment" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureEnvironment"></a>

```go
AzureEnvironment *string
```

- *Type:* *string

The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_environment HcsProvider#azure_environment}

---

##### `AzureMetadataHost`<sup>Optional</sup> <a name="AzureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMetadataHost"></a>

```go
AzureMetadataHost *string
```

- *Type:* *string

The hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_metadata_host HcsProvider#azure_metadata_host}

---

##### `AzureMsiEndpoint`<sup>Optional</sup> <a name="AzureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMsiEndpoint"></a>

```go
AzureMsiEndpoint *string
```

- *Type:* *string

The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_msi_endpoint HcsProvider#azure_msi_endpoint}

---

##### `AzureSubscriptionId`<sup>Optional</sup> <a name="AzureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureSubscriptionId"></a>

```go
AzureSubscriptionId *string
```

- *Type:* *string

The Azure Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_subscription_id HcsProvider#azure_subscription_id}

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureTenantId"></a>

```go
AzureTenantId *string
```

- *Type:* *string

The Azure Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_tenant_id HcsProvider#azure_tenant_id}

---

##### `AzureUseMsi`<sup>Optional</sup> <a name="AzureUseMsi" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureUseMsi"></a>

```go
AzureUseMsi interface{}
```

- *Type:* interface{}

Allowed Azure Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_use_msi HcsProvider#azure_use_msi}

---

##### `HcpApiDomain`<sup>Optional</sup> <a name="HcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcpApiDomain"></a>

```go
HcpApiDomain *string
```

- *Type:* *string

The HashiCorp Cloud Platform API domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcp_api_domain HcsProvider#hcp_api_domain}

---

##### `HcsMarketplaceProductName`<sup>Optional</sup> <a name="HcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcsMarketplaceProductName"></a>

```go
HcsMarketplaceProductName *string
```

- *Type:* *string

The HashiCorp Consul Service product name on the Azure marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcs_marketplace_product_name HcsProvider#hcs_marketplace_product_name}

---



