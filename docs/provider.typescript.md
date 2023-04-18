# `provider`

Refer to the Terraform Registory for docs: [`hcs`](https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-hcs.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HcsProvider <a name="HcsProvider" id="@cdktf/provider-hcs.provider.HcsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs hcs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-hcs'

new provider.HcsProvider(scope: Construct, id: string, config?: HcsProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig">HcsProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-hcs.provider.HcsProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.provider.HcsProviderConfig">HcsProviderConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.provider.HcsProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcs.provider.HcsProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcs.provider.HcsProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcs.provider.HcsProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-hcs.provider.HcsProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAzureClientCertificatePassword` <a name="resetAzureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePassword"></a>

```typescript
public resetAzureClientCertificatePassword(): void
```

##### `resetAzureClientCertificatePath` <a name="resetAzureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientCertificatePath"></a>

```typescript
public resetAzureClientCertificatePath(): void
```

##### `resetAzureClientId` <a name="resetAzureClientId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientId"></a>

```typescript
public resetAzureClientId(): void
```

##### `resetAzureClientSecret` <a name="resetAzureClientSecret" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureClientSecret"></a>

```typescript
public resetAzureClientSecret(): void
```

##### `resetAzureEnvironment` <a name="resetAzureEnvironment" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureEnvironment"></a>

```typescript
public resetAzureEnvironment(): void
```

##### `resetAzureMetadataHost` <a name="resetAzureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureMetadataHost"></a>

```typescript
public resetAzureMetadataHost(): void
```

##### `resetAzureMsiEndpoint` <a name="resetAzureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureMsiEndpoint"></a>

```typescript
public resetAzureMsiEndpoint(): void
```

##### `resetAzureSubscriptionId` <a name="resetAzureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureSubscriptionId"></a>

```typescript
public resetAzureSubscriptionId(): void
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId(): void
```

##### `resetAzureUseMsi` <a name="resetAzureUseMsi" id="@cdktf/provider-hcs.provider.HcsProvider.resetAzureUseMsi"></a>

```typescript
public resetAzureUseMsi(): void
```

##### `resetHcpApiDomain` <a name="resetHcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProvider.resetHcpApiDomain"></a>

```typescript
public resetHcpApiDomain(): void
```

##### `resetHcsMarketplaceProductName` <a name="resetHcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProvider.resetHcsMarketplaceProductName"></a>

```typescript
public resetHcsMarketplaceProductName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcs.provider.HcsProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-hcs'

provider.HcsProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-hcs'

provider.HcsProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-hcs'

provider.HcsProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.provider.HcsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePasswordInput">azureClientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePathInput">azureClientCertificatePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientIdInput">azureClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecretInput">azureClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironmentInput">azureEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHostInput">azureMetadataHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpointInput">azureMsiEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionIdInput">azureSubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsiInput">azureUseMsiInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomainInput">hcpApiDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductNameInput">hcsMarketplaceProductNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePassword">azureClientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePath">azureClientCertificatePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientId">azureClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecret">azureClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironment">azureEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHost">azureMetadataHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpoint">azureMsiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsi">azureUseMsi</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomain">hcpApiDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductName">hcsMarketplaceProductName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.provider.HcsProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcs.provider.HcsProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.provider.HcsProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcs.provider.HcsProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-hcs.provider.HcsProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-hcs.provider.HcsProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcs.provider.HcsProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `azureClientCertificatePasswordInput`<sup>Optional</sup> <a name="azureClientCertificatePasswordInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePasswordInput"></a>

```typescript
public readonly azureClientCertificatePasswordInput: string;
```

- *Type:* string

---

##### `azureClientCertificatePathInput`<sup>Optional</sup> <a name="azureClientCertificatePathInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePathInput"></a>

```typescript
public readonly azureClientCertificatePathInput: string;
```

- *Type:* string

---

##### `azureClientIdInput`<sup>Optional</sup> <a name="azureClientIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientIdInput"></a>

```typescript
public readonly azureClientIdInput: string;
```

- *Type:* string

---

##### `azureClientSecretInput`<sup>Optional</sup> <a name="azureClientSecretInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecretInput"></a>

```typescript
public readonly azureClientSecretInput: string;
```

- *Type:* string

---

##### `azureEnvironmentInput`<sup>Optional</sup> <a name="azureEnvironmentInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironmentInput"></a>

```typescript
public readonly azureEnvironmentInput: string;
```

- *Type:* string

---

##### `azureMetadataHostInput`<sup>Optional</sup> <a name="azureMetadataHostInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHostInput"></a>

```typescript
public readonly azureMetadataHostInput: string;
```

- *Type:* string

---

##### `azureMsiEndpointInput`<sup>Optional</sup> <a name="azureMsiEndpointInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpointInput"></a>

```typescript
public readonly azureMsiEndpointInput: string;
```

- *Type:* string

---

##### `azureSubscriptionIdInput`<sup>Optional</sup> <a name="azureSubscriptionIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionIdInput"></a>

```typescript
public readonly azureSubscriptionIdInput: string;
```

- *Type:* string

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `azureUseMsiInput`<sup>Optional</sup> <a name="azureUseMsiInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsiInput"></a>

```typescript
public readonly azureUseMsiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hcpApiDomainInput`<sup>Optional</sup> <a name="hcpApiDomainInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomainInput"></a>

```typescript
public readonly hcpApiDomainInput: string;
```

- *Type:* string

---

##### `hcsMarketplaceProductNameInput`<sup>Optional</sup> <a name="hcsMarketplaceProductNameInput" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductNameInput"></a>

```typescript
public readonly hcsMarketplaceProductNameInput: string;
```

- *Type:* string

---

##### `azureClientCertificatePassword`<sup>Optional</sup> <a name="azureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePassword"></a>

```typescript
public readonly azureClientCertificatePassword: string;
```

- *Type:* string

---

##### `azureClientCertificatePath`<sup>Optional</sup> <a name="azureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientCertificatePath"></a>

```typescript
public readonly azureClientCertificatePath: string;
```

- *Type:* string

---

##### `azureClientId`<sup>Optional</sup> <a name="azureClientId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientId"></a>

```typescript
public readonly azureClientId: string;
```

- *Type:* string

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureClientSecret"></a>

```typescript
public readonly azureClientSecret: string;
```

- *Type:* string

---

##### `azureEnvironment`<sup>Optional</sup> <a name="azureEnvironment" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureEnvironment"></a>

```typescript
public readonly azureEnvironment: string;
```

- *Type:* string

---

##### `azureMetadataHost`<sup>Optional</sup> <a name="azureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMetadataHost"></a>

```typescript
public readonly azureMetadataHost: string;
```

- *Type:* string

---

##### `azureMsiEndpoint`<sup>Optional</sup> <a name="azureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureMsiEndpoint"></a>

```typescript
public readonly azureMsiEndpoint: string;
```

- *Type:* string

---

##### `azureSubscriptionId`<sup>Optional</sup> <a name="azureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureSubscriptionId"></a>

```typescript
public readonly azureSubscriptionId: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `azureUseMsi`<sup>Optional</sup> <a name="azureUseMsi" id="@cdktf/provider-hcs.provider.HcsProvider.property.azureUseMsi"></a>

```typescript
public readonly azureUseMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hcpApiDomain`<sup>Optional</sup> <a name="hcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcpApiDomain"></a>

```typescript
public readonly hcpApiDomain: string;
```

- *Type:* string

---

##### `hcsMarketplaceProductName`<sup>Optional</sup> <a name="hcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProvider.property.hcsMarketplaceProductName"></a>

```typescript
public readonly hcsMarketplaceProductName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.provider.HcsProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HcsProviderConfig <a name="HcsProviderConfig" id="@cdktf/provider-hcs.provider.HcsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.provider.HcsProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-hcs'

const hcsProviderConfig: provider.HcsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePassword">azureClientCertificatePassword</a></code> | <code>string</code> | The password associated with the Azure Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePath">azureClientCertificatePath</a></code> | <code>string</code> | The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientId">azureClientId</a></code> | <code>string</code> | The Azure Client ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientSecret">azureClientSecret</a></code> | <code>string</code> | The Azure Client Secret which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureEnvironment">azureEnvironment</a></code> | <code>string</code> | The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMetadataHost">azureMetadataHost</a></code> | <code>string</code> | The hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMsiEndpoint">azureMsiEndpoint</a></code> | <code>string</code> | The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureSubscriptionId">azureSubscriptionId</a></code> | <code>string</code> | The Azure Subscription ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | The Azure Tenant ID which should be used. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureUseMsi">azureUseMsi</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allowed Azure Managed Service Identity be used for Authentication. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcpApiDomain">hcpApiDomain</a></code> | <code>string</code> | The HashiCorp Cloud Platform API domain. |
| <code><a href="#@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcsMarketplaceProductName">hcsMarketplaceProductName</a></code> | <code>string</code> | The HashiCorp Consul Service product name on the Azure marketplace. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#alias HcsProvider#alias}

---

##### `azureClientCertificatePassword`<sup>Optional</sup> <a name="azureClientCertificatePassword" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePassword"></a>

```typescript
public readonly azureClientCertificatePassword: string;
```

- *Type:* string

The password associated with the Azure Client Certificate.

For use when authenticating as a Service Principal using a Client Certificate

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_password HcsProvider#azure_client_certificate_password}

---

##### `azureClientCertificatePath`<sup>Optional</sup> <a name="azureClientCertificatePath" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientCertificatePath"></a>

```typescript
public readonly azureClientCertificatePath: string;
```

- *Type:* string

The path to the Azure Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_certificate_path HcsProvider#azure_client_certificate_path}

---

##### `azureClientId`<sup>Optional</sup> <a name="azureClientId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientId"></a>

```typescript
public readonly azureClientId: string;
```

- *Type:* string

The Azure Client ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_id HcsProvider#azure_client_id}

---

##### `azureClientSecret`<sup>Optional</sup> <a name="azureClientSecret" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureClientSecret"></a>

```typescript
public readonly azureClientSecret: string;
```

- *Type:* string

The Azure Client Secret which should be used.

For use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_client_secret HcsProvider#azure_client_secret}

---

##### `azureEnvironment`<sup>Optional</sup> <a name="azureEnvironment" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureEnvironment"></a>

```typescript
public readonly azureEnvironment: string;
```

- *Type:* string

The Azure Cloud Environment which should be used. Possible values are public, usgovernment, german, and china. Defaults to public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_environment HcsProvider#azure_environment}

---

##### `azureMetadataHost`<sup>Optional</sup> <a name="azureMetadataHost" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMetadataHost"></a>

```typescript
public readonly azureMetadataHost: string;
```

- *Type:* string

The hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_metadata_host HcsProvider#azure_metadata_host}

---

##### `azureMsiEndpoint`<sup>Optional</sup> <a name="azureMsiEndpoint" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureMsiEndpoint"></a>

```typescript
public readonly azureMsiEndpoint: string;
```

- *Type:* string

The path to a custom endpoint for Azure Managed Service Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_msi_endpoint HcsProvider#azure_msi_endpoint}

---

##### `azureSubscriptionId`<sup>Optional</sup> <a name="azureSubscriptionId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureSubscriptionId"></a>

```typescript
public readonly azureSubscriptionId: string;
```

- *Type:* string

The Azure Subscription ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_subscription_id HcsProvider#azure_subscription_id}

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

The Azure Tenant ID which should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_tenant_id HcsProvider#azure_tenant_id}

---

##### `azureUseMsi`<sup>Optional</sup> <a name="azureUseMsi" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.azureUseMsi"></a>

```typescript
public readonly azureUseMsi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allowed Azure Managed Service Identity be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#azure_use_msi HcsProvider#azure_use_msi}

---

##### `hcpApiDomain`<sup>Optional</sup> <a name="hcpApiDomain" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcpApiDomain"></a>

```typescript
public readonly hcpApiDomain: string;
```

- *Type:* string

The HashiCorp Cloud Platform API domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcp_api_domain HcsProvider#hcp_api_domain}

---

##### `hcsMarketplaceProductName`<sup>Optional</sup> <a name="hcsMarketplaceProductName" id="@cdktf/provider-hcs.provider.HcsProviderConfig.property.hcsMarketplaceProductName"></a>

```typescript
public readonly hcsMarketplaceProductName: string;
```

- *Type:* string

The HashiCorp Consul Service product name on the Azure marketplace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcs/0.5.1/docs#hcs_marketplace_product_name HcsProvider#hcs_marketplace_product_name}

---



