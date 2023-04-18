# `provider`

Refer to the Terraform Registory for docs: [`hcs`](https://www.terraform.io/docs/providers/hcs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-hcs.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HcsProvider <a name="HcsProvider" id="@cdktf/provider-hcs.provider.HcsProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/hcs hcs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

new HcsProvider(Construct Scope, string Id, HcsProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig">HcsProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcs.provider.HcsProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcs.provider.HcsProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-hcs.provider.HcsProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAzureClientCertificatePassword` <a name="ResetAzureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePassword"></a>

```csharp
private void ResetAzureClientCertificatePassword()
```

##### `ResetAzureClientCertificatePath` <a name="ResetAzureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePath"></a>

```csharp
private void ResetAzureClientCertificatePath()
```

##### `ResetAzureClientId` <a name="ResetAzureClientId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientId"></a>

```csharp
private void ResetAzureClientId()
```

##### `ResetAzureClientSecret` <a name="ResetAzureClientSecret" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientSecret"></a>

```csharp
private void ResetAzureClientSecret()
```

##### `ResetAzureEnvironment` <a name="ResetAzureEnvironment" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureEnvironment"></a>

```csharp
private void ResetAzureEnvironment()
```

##### `ResetAzureMetadataHost` <a name="ResetAzureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureMetadataHost"></a>

```csharp
private void ResetAzureMetadataHost()
```

##### `ResetAzureMsiEndpoint` <a name="ResetAzureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureMsiEndpoint"></a>

```csharp
private void ResetAzureMsiEndpoint()
```

##### `ResetAzureSubscriptionId` <a name="ResetAzureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureSubscriptionId"></a>

```csharp
private void ResetAzureSubscriptionId()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureTenantId"></a>

```csharp
private void ResetAzureTenantId()
```

##### `ResetAzureUseMsi` <a name="ResetAzureUseMsi" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureUseMsi"></a>

```csharp
private void ResetAzureUseMsi()
```

##### `ResetHcpApiDomain` <a name="ResetHcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProvider.resetHcpApiDomain"></a>

```csharp
private void ResetHcpApiDomain()
```

##### `ResetHcsMarketplaceProductName` <a name="ResetHcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProvider.resetHcsMarketplaceProductName"></a>

```csharp
private void ResetHcsMarketplaceProductName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcs.provider.HcsProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

HcsProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcs.provider.HcsProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

HcsProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

HcsProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePasswordInput">AzureClientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePathInput">AzureClientCertificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientIdInput">AzureClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecretInput">AzureClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironmentInput">AzureEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHostInput">AzureMetadataHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpointInput">AzureMsiEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionIdInput">AzureSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsiInput">AzureUseMsiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomainInput">HcpApiDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductNameInput">HcsMarketplaceProductNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePassword">AzureClientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePath">AzureClientCertificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientId">AzureClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecret">AzureClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironment">AzureEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHost">AzureMetadataHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpoint">AzureMsiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsi">AzureUseMsi</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomain">HcpApiDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductName">HcsMarketplaceProductName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcs.provider.HcsProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcs.provider.HcsProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcs.provider.HcsProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcs.provider.HcsProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-hcs.provider.HcsProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-hcs.provider.HcsProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AzureClientCertificatePasswordInput`<sup>Optional</sup> <a name="AzureClientCertificatePasswordInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePasswordInput"></a>

```csharp
public string AzureClientCertificatePasswordInput { get; }
```

- *Type:* string

---

##### `AzureClientCertificatePathInput`<sup>Optional</sup> <a name="AzureClientCertificatePathInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePathInput"></a>

```csharp
public string AzureClientCertificatePathInput { get; }
```

- *Type:* string

---

##### `AzureClientIdInput`<sup>Optional</sup> <a name="AzureClientIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientIdInput"></a>

```csharp
public string AzureClientIdInput { get; }
```

- *Type:* string

---

##### `AzureClientSecretInput`<sup>Optional</sup> <a name="AzureClientSecretInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecretInput"></a>

```csharp
public string AzureClientSecretInput { get; }
```

- *Type:* string

---

##### `AzureEnvironmentInput`<sup>Optional</sup> <a name="AzureEnvironmentInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironmentInput"></a>

```csharp
public string AzureEnvironmentInput { get; }
```

- *Type:* string

---

##### `AzureMetadataHostInput`<sup>Optional</sup> <a name="AzureMetadataHostInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHostInput"></a>

```csharp
public string AzureMetadataHostInput { get; }
```

- *Type:* string

---

##### `AzureMsiEndpointInput`<sup>Optional</sup> <a name="AzureMsiEndpointInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpointInput"></a>

```csharp
public string AzureMsiEndpointInput { get; }
```

- *Type:* string

---

##### `AzureSubscriptionIdInput`<sup>Optional</sup> <a name="AzureSubscriptionIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionIdInput"></a>

```csharp
public string AzureSubscriptionIdInput { get; }
```

- *Type:* string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantIdInput"></a>

```csharp
public string AzureTenantIdInput { get; }
```

- *Type:* string

---

##### `AzureUseMsiInput`<sup>Optional</sup> <a name="AzureUseMsiInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsiInput"></a>

```csharp
public object AzureUseMsiInput { get; }
```

- *Type:* object

---

##### `HcpApiDomainInput`<sup>Optional</sup> <a name="HcpApiDomainInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomainInput"></a>

```csharp
public string HcpApiDomainInput { get; }
```

- *Type:* string

---

##### `HcsMarketplaceProductNameInput`<sup>Optional</sup> <a name="HcsMarketplaceProductNameInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductNameInput"></a>

```csharp
public string HcsMarketplaceProductNameInput { get; }
```

- *Type:* string

---

##### `AzureClientCertificatePassword`<sup>Optional</sup> <a name="AzureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePassword"></a>

```csharp
public string AzureClientCertificatePassword { get; }
```

- *Type:* string

---

##### `AzureClientCertificatePath`<sup>Optional</sup> <a name="AzureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePath"></a>

```csharp
public string AzureClientCertificatePath { get; }
```

- *Type:* string

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientId"></a>

```csharp
public string AzureClientId { get; }
```

- *Type:* string

---

##### `AzureClientSecret`<sup>Optional</sup> <a name="AzureClientSecret" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecret"></a>

```csharp
public string AzureClientSecret { get; }
```

- *Type:* string

---

##### `AzureEnvironment`<sup>Optional</sup> <a name="AzureEnvironment" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironment"></a>

```csharp
public string AzureEnvironment { get; }
```

- *Type:* string

---

##### `AzureMetadataHost`<sup>Optional</sup> <a name="AzureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHost"></a>

```csharp
public string AzureMetadataHost { get; }
```

- *Type:* string

---

##### `AzureMsiEndpoint`<sup>Optional</sup> <a name="AzureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpoint"></a>

```csharp
public string AzureMsiEndpoint { get; }
```

- *Type:* string

---

##### `AzureSubscriptionId`<sup>Optional</sup> <a name="AzureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionId"></a>

```csharp
public string AzureSubscriptionId { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `AzureUseMsi`<sup>Optional</sup> <a name="AzureUseMsi" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsi"></a>

```csharp
public object AzureUseMsi { get; }
```

- *Type:* object

---

##### `HcpApiDomain`<sup>Optional</sup> <a name="HcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomain"></a>

```csharp
public string HcpApiDomain { get; }
```

- *Type:* string

---

##### `HcsMarketplaceProductName`<sup>Optional</sup> <a name="HcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductName"></a>

```csharp
public string HcsMarketplaceProductName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcs.provider.HcsProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HcsProviderConfig <a name="HcsProviderConfig" id="@cdktf/provider-hcs.provider.HcsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.provider.HcsProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcs;

new HcsProviderConfig {
    string Alias = null,
    string AzureClientCertificatePassword = null,
    string AzureClientCertificatePath = null,
    string AzureClientId = null,
    string AzureClientSecret = null,
    string AzureEnvironment = null,
    string AzureMetadataHost = null,
    string AzureMsiEndpoint = null,
    string AzureSubscriptionId = null,
    string AzureTenantId = null,
    object AzureUseMsi = null,
    string HcpApiDomain = null,
    string HcsMarketplaceProductName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePassword">AzureClientCertificatePassword</a></code> | <code>string</code> | The password associated with the Azure Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePath">AzureClientCertificatePath</a></code> | <code>string</code> | The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientId">AzureClientId</a></code> | <code>string</code> | The Azure Client ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientSecret">AzureClientSecret</a></code> | <code>string</code> | The Azure Client Secret which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureEnvironment">AzureEnvironment</a></code> | <code>string</code> | The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMetadataHost">AzureMetadataHost</a></code> | <code>string</code> | The hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMsiEndpoint">AzureMsiEndpoint</a></code> | <code>string</code> | The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureSubscriptionId">AzureSubscriptionId</a></code> | <code>string</code> | The Azure Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | The Azure Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureUseMsi">AzureUseMsi</a></code> | <code>object</code> | Allowed Azure Managed Service Identity be used for Authentication. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcpApiDomain">HcpApiDomain</a></code> | <code>string</code> | The HashiCorp Cloud Platform API domain. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcsMarketplaceProductName">HcsMarketplaceProductName</a></code> | <code>string</code> | The HashiCorp Consul Service product name on the Azure marketplace. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#alias HcsProvider#alias}

---

##### `AzureClientCertificatePassword`<sup>Optional</sup> <a name="AzureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePassword"></a>

```csharp
public string AzureClientCertificatePassword { get; set; }
```

- *Type:* string

The password associated with the Azure Client Certificate.

For use when authenticating as a Service Principal using a Client Certificate

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#azure_client_certificate_password HcsProvider#azure_client_certificate_password}

---

##### `AzureClientCertificatePath`<sup>Optional</sup> <a name="AzureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePath"></a>

```csharp
public string AzureClientCertificatePath { get; set; }
```

- *Type:* string

The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#azure_client_certificate_path HcsProvider#azure_client_certificate_path}

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientId"></a>

```csharp
public string AzureClientId { get; set; }
```

- *Type:* string

The Azure Client ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#azure_client_id HcsProvider#azure_client_id}

---

##### `AzureClientSecret`<sup>Optional</sup> <a name="AzureClientSecret" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientSecret"></a>

```csharp
public string AzureClientSecret { get; set; }
```

- *Type:* string

The Azure Client Secret which should be used.

For use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#azure_client_secret HcsProvider#azure_client_secret}

---

##### `AzureEnvironment`<sup>Optional</sup> <a name="AzureEnvironment" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureEnvironment"></a>

```csharp
public string AzureEnvironment { get; set; }
```

- *Type:* string

The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#azure_environment HcsProvider#azure_environment}

---

##### `AzureMetadataHost`<sup>Optional</sup> <a name="AzureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMetadataHost"></a>

```csharp
public string AzureMetadataHost { get; set; }
```

- *Type:* string

The hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#azure_metadata_host HcsProvider#azure_metadata_host}

---

##### `AzureMsiEndpoint`<sup>Optional</sup> <a name="AzureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMsiEndpoint"></a>

```csharp
public string AzureMsiEndpoint { get; set; }
```

- *Type:* string

The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#azure_msi_endpoint HcsProvider#azure_msi_endpoint}

---

##### `AzureSubscriptionId`<sup>Optional</sup> <a name="AzureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureSubscriptionId"></a>

```csharp
public string AzureSubscriptionId { get; set; }
```

- *Type:* string

The Azure Subscription ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#azure_subscription_id HcsProvider#azure_subscription_id}

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; set; }
```

- *Type:* string

The Azure Tenant ID which should be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#azure_tenant_id HcsProvider#azure_tenant_id}

---

##### `AzureUseMsi`<sup>Optional</sup> <a name="AzureUseMsi" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureUseMsi"></a>

```csharp
public object AzureUseMsi { get; set; }
```

- *Type:* object

Allowed Azure Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#azure_use_msi HcsProvider#azure_use_msi}

---

##### `HcpApiDomain`<sup>Optional</sup> <a name="HcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcpApiDomain"></a>

```csharp
public string HcpApiDomain { get; set; }
```

- *Type:* string

The HashiCorp Cloud Platform API domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#hcp_api_domain HcsProvider#hcp_api_domain}

---

##### `HcsMarketplaceProductName`<sup>Optional</sup> <a name="HcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcsMarketplaceProductName"></a>

```csharp
public string HcsMarketplaceProductName { get; set; }
```

- *Type:* string

The HashiCorp Consul Service product name on the Azure marketplace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs#hcs_marketplace_product_name HcsProvider#hcs_marketplace_product_name}

---



