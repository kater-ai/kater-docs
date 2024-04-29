---
sidebar_position: 1
---

# dbt Cloud
:::info
Kater connects to your dbt Cloud API to pull metadata (table descriptions, etc), and compiled metrics queries to help support Butler.
:::

## Navigate to Integration Page
Connect --> Integrations
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/dbtInt.png").default} width="500" />
</div>

Click `Enable dbt Integration`.

## Add Credentials
### 1. Environment ID
When you navigate to your environment in the dbt Cloud interface, your environment ID will be in the url, eg:
`https://cloud.getdbt.com/#/accounts/11111/projects/22222/environments/33333/`

Your environment ID is `33333`.

### 2. Auth Token
Kater needs a [**metadata-only Service Account Token**](https://docs.getdbt.com/docs/dbt-cloud-apis/service-tokens#permissions-for-service-account-tokens). dbt Cloud admin users can generate a Metadata Only service token that is authorized to execute a specific query against the Discovery API.

:::tip
Generate a **dbt service account token** with [the following steps](https://docs.getdbt.com/docs/dbt-cloud-apis/service-tokens#generate-service-account-tokens):
1. Open the **Account Settings** page by clicking the gear icon on the right-hand side.
2. On the left sidebar, click on **Service Tokens**.
3. Click the **+ New Token** button to generate a new token.
4. Once the token is generated, you won't be able to view this token again so make sure to save it somewhere safe.
:::

### 3. Endpoint
The endpoint will follow the format `https://metadata.{YOUR_ACCESS_URL}/graphql`.

Find your Access URL for your region and plan [here](https://docs.getdbt.com/docs/cloud/about-cloud/access-regions-ip-addresses).

:::note
For example, if you have a multi-tenant dbt Cloud plan in North America, your Access URL would be `cloud.getdbt.com`, and your endpoint would be `https://metadata.cloud.getdbt.com/graphql`.
:::