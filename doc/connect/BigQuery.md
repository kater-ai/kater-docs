---
sidebar_position: 3
---

# BigQuery

Kater can connect to BigQuery using the `BigQuery` connection type. 

## How it Works
* Kater securely stores your BigQuery credentials in your browser memory. 
* When you connect to BigQuery, Kater temporarily uses your credentials via SSL to authenticate with BigQuery. 
* Your credentials are **never** stored in Kater's database.  
* Your selected metadata (table names, columns, datatypes) are stored in Kater's database, but never your data. 
* Everything is encrypted at rest and in-transit. 

## Prerequisites
1. [Create a BigQuery role](https://cloud.google.com/iam/docs/creating-custom-roles) with at least the following permissions:
```bigquery.datasets.get
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.list
bigquery.datasets.get
bigquery.jobs.create
bigquery.tables.list
```
2. [Create a service account](https://cloud.google.com/iam/docs/keys-create-delete#creating) with the **JSON Key Type**. Copy the key for the Kater Portal.

## Connect to Kater
Go to your Kater Portal and follow these steps to connect to BigQuery.

1. Click on the `Connect` tab on the sidebar.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectSidebar.png").default} width="150" />
</div>

2. Under `Data Store`, select `Big Query`.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/DataStore_BQ.png").default} width="900" />
</div>

3. Add your BigQuery Project ID and JSON Key Type as defined above, and click `Connect`. 

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectionBigQuery.png").default} width="500" />
</div>

4. Go to the Metadata Tab, click `Fetch Metadata`, and select the tables you want Kater to have access to. 
*Note: The tables you do not select will not be parsed and will not be available in Kater.*

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/SelectTablesDW.png").default} width="400" />
</div>

5. Click `Save Metadata`. 

6. You're ready to start [onboarding Butler](../category/onboard-butler)!