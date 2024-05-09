---
sidebar_position: 5
---

# Redshift
:::info 
## How it Works
* Kater connects using the [Amazon Redshift Data API](https://docs.aws.amazon.com/redshift/latest/mgmt/data-api-access.html).
* Kater encrypts your credentials via an encryption key stored in AWS secrets manager. 
* When you connect to Redshift, Kater uses **temporary credentials** to authenticate to a serverless workgroup or a cluster.
* Your selected metadata (table names, columns, datatypes) are stored in Kater's database, but **never your data**. 
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

1. Click on the `Connect` tab on the sidebar.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectSidebar.png").default} width="150" />
</div>

2. Under `Data Store`, select `Redshift`.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/Redshift.png").default} width="500" />
</div>

3. Add your Access Key ID, Secret Key as defined above, and all other information. Click `Connect`. 

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectRedshift.png").default} width="500" />
</div>

4. Go to the Metadata Tab, click `Fetch Metadata`, and select the tables you want Kater to have access to. 
*Note: The tables you do not select will not be parsed and will not be available in Kater.*

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/SelectTablesDW.png").default} width="400" />
</div>

5. Click `Save Metadata`. 

6. You're ready to start [setting up your Data Map](../data-map/data_map_intro)!

