# Earth DS Demo

## Authenticate with GitHub packages

To authenticate to a GitHub Packages registry, you will need a personal access token with at least `read:packages` scope to install packages ([here](https://github.com/settings/tokens/new)).

```shell
npm login --scope=@adaptavant --registry=https://npm.pkg.github.com
```

Sign in with your GitHub username and the personal access token for the password.
