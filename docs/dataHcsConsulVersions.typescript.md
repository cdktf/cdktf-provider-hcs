# `dataHcsConsulVersions` Submodule <a name="`dataHcsConsulVersions` Submodule" id="@cdktf/provider-hcs.dataHcsConsulVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcsConsulVersions <a name="DataHcsConsulVersions" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions"></a>

Represents a {@link https://www.terraform.io/docs/providers/hcs/d/consul_versions hcs_consul_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer"></a>

```typescript
import { dataHcsConsulVersions } from '@cdktf/provider-hcs'

new dataHcsConsulVersions.DataHcsConsulVersions(scope: Construct, id: string, config?: DataHcsConsulVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig">DataHcsConsulVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig">DataHcsConsulVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.putTimeouts"></a>

```typescript
public putTimeouts(value: DataHcsConsulVersionsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isConstruct"></a>

```typescript
import { dataHcsConsulVersions } from '@cdktf/provider-hcs'

dataHcsConsulVersions.DataHcsConsulVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformElement"></a>

```typescript
import { dataHcsConsulVersions } from '@cdktf/provider-hcs'

dataHcsConsulVersions.DataHcsConsulVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformDataSource"></a>

```typescript
import { dataHcsConsulVersions } from '@cdktf/provider-hcs'

dataHcsConsulVersions.DataHcsConsulVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.available">available</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.preview">preview</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.recommended">recommended</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference">DataHcsConsulVersionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.available"></a>

```typescript
public readonly available: string[];
```

- *Type:* string[]

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.preview"></a>

```typescript
public readonly preview: string[];
```

- *Type:* string[]

---

##### `recommended`<sup>Required</sup> <a name="recommended" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.recommended"></a>

```typescript
public readonly recommended: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcsConsulVersionsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference">DataHcsConsulVersionsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataHcsConsulVersionsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcsConsulVersionsConfig <a name="DataHcsConsulVersionsConfig" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.Initializer"></a>

```typescript
import { dataHcsConsulVersions } from '@cdktf/provider-hcs'

const dataHcsConsulVersionsConfig: dataHcsConsulVersions.DataHcsConsulVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/consul_versions#id DataHcsConsulVersions#id}. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/consul_versions#id DataHcsConsulVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataHcsConsulVersionsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/consul_versions#timeouts DataHcsConsulVersions#timeouts}

---

### DataHcsConsulVersionsTimeouts <a name="DataHcsConsulVersionsTimeouts" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts.Initializer"></a>

```typescript
import { dataHcsConsulVersions } from '@cdktf/provider-hcs'

const dataHcsConsulVersionsTimeouts: dataHcsConsulVersions.DataHcsConsulVersionsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/consul_versions#default DataHcsConsulVersions#default}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/hcs/d/consul_versions#default DataHcsConsulVersions#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcsConsulVersionsTimeoutsOutputReference <a name="DataHcsConsulVersionsTimeoutsOutputReference" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataHcsConsulVersions } from '@cdktf/provider-hcs'

new dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataHcsConsulVersionsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-hcs.dataHcsConsulVersions.DataHcsConsulVersionsTimeouts">DataHcsConsulVersionsTimeouts</a> | cdktf.IResolvable

---



