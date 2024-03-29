
# CDKTF prebuilt bindings for hashicorp/hcs provider version 0.5.1

HashiCorp made the decision to stop publishing new versions of prebuilt [Terraform hcs provider](https://registry.terraform.io/providers/hashicorp/hcs/0.5.1) bindings for [CDK for Terraform](https://cdk.tf) on January 17, 2024. As such, this repository has been archived and is no longer supported in any way by HashiCorp. Previously-published versions of this prebuilt provider will still continue to be available on their respective package managers (e.g. npm, PyPi, Maven, NuGet), but these will not be compatible with new releases of `cdktf` past `0.20.0` and are no longer eligible for commercial support.

As a reminder, you can continue to use the `hashicorp/hcs` provider in your CDK for Terraform (CDKTF) projects, even with newer versions of CDKTF, but you will need to generate the bindings locally. The easiest way to do so is to use the [`provider add` command](https://developer.hashicorp.com/terraform/cdktf/cli-reference/commands#provider-add), optionally with the `--force-local` flag enabled:

`cdktf provider add hashicorp/hcs --force-local`

For more information and additional examples, check out our documentation on [generating provider bindings manually](https://cdk.tf/imports).

## Deprecated Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktf/provider-hcs](https://www.npmjs.com/package/@cdktf/provider-hcs).

`npm install @cdktf/provider-hcs`

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktf-cdktf-provider-hcs](https://pypi.org/project/cdktf-cdktf-provider-hcs).

`pipenv install cdktf-cdktf-provider-hcs`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Hcs](https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Hcs).

`dotnet add package HashiCorp.Cdktf.Providers.Hcs`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-hcs](https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-hcs).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-provider-hcs</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```

### Go

The go package is generated into the [`github.com/cdktf/cdktf-provider-hcs-go`](https://github.com/cdktf/cdktf-provider-hcs-go) package.

`go get github.com/cdktf/cdktf-provider-hcs-go/hcs`

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-hcs).
