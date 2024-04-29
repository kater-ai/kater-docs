---
sidebar_position: 1
---

# Github
:::info
Kater connects to your Github to read and write documentation back to your dbt YAML files.
:::

## Navigate to Integration Page
Connect --> Integrations
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/github.png").default} width="500" />
</div>

Click `Enable Github Integration`.

## Add Credentials
### 1. Https Clone URL
See where to find your https clone URL from [Github docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

### 2. Source Branch
This should be your production branch, i.e. `main`. 

When writing to Github, Kater automatically generates a branch which will always be in the format `kater-sync-<giud>`. 

:::tip
For example, if you sync your documentation to Github from Kater and create a PR, a branch with the name `kater-sync-d6ac605f-fdea-11ee-8138-745d223927b1` will be created.
:::

### 3. Personal Access Token (PAT)
Create a fine-grained PAT following [these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token).

:::info
The scope of the PAT should include:
    1. **Read-only** access to metadata 
    2. **Read & write** access to code and pull requests 
:::

### 4. Owner
Should be the username of whoever owns the repository.
