---
sidebar_position: 3
---

# MS-SQL

Kater can connect to MS-SQL using the `mssql` connection type. This guide will walk you through the process of setting up a connection to MS-SQL.

:::info
## How it Works
* Kater encrypts your credentials via an encryption key stored in AWS secrets manager. 
* You connect your MS-SQL server instance to Kater's server by white-listing Kater's static IP address.
* When you establish a connection to MS-SQL through Kater, Kater temporarily uses your credentials via SSL to authenticate with MS-SQL.
* Your selected metadata (table names, columns, datatypes) are stored in Kater's database.
* Everything is encrypted at rest and in-transit.
:::

## Prerequisites
In your MS-SQL server, 
1. Whitelist Kater's static IP address `54.183.87.164`, so Kater's server can connect to your MS-SQL instance through the firewall. 
2. Create a new user with read-only access to `sys.schemas`, `information_schema.columns`, and `information_schema.tables`. This is required for Kater to fetch metadata about your tables and columns.
3. The user should have read-only access to any objects you want to query in Kater.

## Connect to Kater
Once your MS-SQL user is ready, go to your Kater Portal and follow these steps to connect to Snowflake.

### 1. Click on the `Connect` tab on the sidebar.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectSidebar.png").default} width="150" />
</div>

### 2. Under `Data Store`, select `SQL Server`.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/SQLServeConnect.png").default} width="400" />
</div>

### 3. Add your MS-SQL credentials. 

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