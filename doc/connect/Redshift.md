---
sidebar_position: 5
---

# Redshift
:::info 
## How it Works
* Kater connects using the [Amazon Redshift Data API](https://docs.aws.amazon.com/redshift/latest/mgmt/data-api-access.html).
* Kater encrypts your credentials via an encryption key stored in AWS secrets manager. 
* When you connect to Redshift, Kater uses **temporary credentials** to authenticate to a serverless workgroup or a cluster.
* Your selected metadata (table names, columns, datatypes) are stored in Kater's database.
* Everything is **encrypted** at rest and in-transit. 
:::

## Prerequisites
1. [Create an IAM user](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-managed-policies-data-full-access) with `AmazonRedshiftDataFullAccess` policy. 
    :::note 
    If you're using Redshift serverless, you also need `redshift-serverless:GetCredentials` permissions. 
    
    Find out if you're using Redshift serverless or a provisioned data warehouse [here](https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-console-comparison.html).
    :::

2.  [Grant `select` access](https://docs.aws.amazon.com/redshift/latest/dg/r_GRANT.html) for the desired tables in Redshift to the new IAM user you created.
3. You'll need your [Access Key ID and Secret Key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for the new IAM user you created.


## Connect to Kater
Go to your Kater Portal and follow these steps to connect to Redshift.

### 1. Click on the `Connect` tab on the sidebar.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectSidebar.png").default} width="150" />
</div>

### 2. Under `Data Store`, select `Redshift`.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/Redshift.png").default} width="500" />
</div>

### 3. Add your Access Key ID, Secret Key as defined above, and all other information. 

Click `Test Connection` to test, and click `Save Connection` to save. 

### 4. Go to the `Metadata` tab on the top left.
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/Metadata_tab.png").default} width="400" />
</div>

### 5. Select the databases, schemas, and tables you want Kater to have access to. 
:::note
The tables you do not select will not be parsed and will not be available in Kater.
:::
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/SelectTablesDW.png").default} width="400" />
</div>

### 6. Click `Save and Process Metadata`. 
:::tip 
To import new tables, click the `Refresh` button on the bottom to retrieve new metadata.
<div style={{ display: "flex", justifyContent: "center", padding: "1rem 0 1rem 0" }}>
    <img src={require("../../static/img/retrieve_metadata.png").default} width="300" />
</div>
:::

### 7. You should see the tables being processed on the right, with 2 background jobs running: 
* **Description Generator:** We use AI to auto-generate descriptions for you where we haven't already found dbt descriptions for. 
* **Profiler:** For all varchar columns, we obtain a sample of data. For all numeric columns, we profile a min/max.

<div style={{ display: "flex", justifyContent: "center", padding: "1rem 0 3rem 0" }}>
    <img src={require("../../static/img/all_tables.png").default} width="1000" />
</div>

### 8. You're ready to [create a Persona](../personas/) so you can add these tables to a team.
