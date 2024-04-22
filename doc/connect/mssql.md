---
sidebar_position: 2
---

# MS-SQL

Kater can connect to MS-SQL using the `mssql` connection type. This guide will walk you through the process of setting up a connection to MS-SQL.

## How it Works
* Kater securely stores your MS-SQL credentials in your browser memory.
* You connect your MS-SQL server instance to Kater's server by white-listing Kater's static IP address.
* When you establish a connection to MS-SQL through Kater, Kater temporarily uses your credentials via SSL to authenticate with MS-SQL.
* Your credentials are never stored in Kater's database.
* Your selected metadata (table names, columns, datatypes) are stored in Kater's database, but never your data.
* Everything is encrypted at rest and in-transit.

## Prerequisites
In your MS-SQL server, 
1. Whitelist Kater's static IP address `54.183.87.164`, so Kater's server can connect to your MS-SQL instance through the firewall. 
2. Create a new user with read-only access to `sys.schemas`, `information_schema.columns`, and `information_schema.tables`. This is required for Kater to fetch metadata about your tables and columns.
3. The user should have read-only access to any objects you want to query in Kater.

## Connect to Kater
Once your MS-SQL user is ready, go to your Kater Portal and follow these steps to connect to Snowflake.

1. Click on the `Connect` tab on the sidebar.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectSidebar.png").default} width="150" />
</div>

2. Under `Data Store`, select `SQL Server`.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/SQLServeConnect.png").default} width="400" />
</div>

3. Add your MS-SQL credentials and click `Connect`. 

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectMssql.png").default} width="400" />
</div>

4. Select the databases, schemas, and tables you want Kater to have access to. 
*Note: The tables you do not select will not be parsed and will not be available in Kater.*
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/SelectTablesDW.png").default} width="400" />
</div>

5. Click `Save Metadata`. 

6. You're ready to start [onboarding Butler](../category/onboard-butler)!