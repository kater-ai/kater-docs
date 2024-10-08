---
sidebar_position: 6
---

# Databricks

Kater can connect to Databricks using the `Databricks` connection type. 

:::info
## How it Works
* Kater encrypts your credentials via an encryption key stored in AWS secrets manager. 
* When you connect to Databricks, Kater temporarily uses your credentials via SSL to authenticate with Databricks. 
* Your selected metadata (table names, columns, datatypes) are stored in Kater's database.
* Everything is encrypted at rest and in-transit. 
:::

----

## Prerequisites
### 1. Create a [Personal Access Token (PAT)](https://docs.databricks.com/en/dev-tools/go-sql-driver.html#databricks-personal-access-token-authentication)
<details>
<summary>Steps to creating a Databricks PAT.</summary>
<p>
* In your Databricks workspace, click your Databricks username in the top bar, and then select **Settings** from the drop down.

* Click **Developer**.

* Next to **Access tokens**, click **Manage**.

* Click **Generate new token**.

* (Optional) Enter a comment that helps you to identify this token in the future, and change the token’s default lifetime of 90 days. To create a token with no lifetime (not recommended), leave the **Lifetime (days)** box empty (blank).

* Click **Generate**.

* Copy the displayed token to a secure location, and then click **Done**.
</p>
</details>

:::tip 
Copy this token, as it represents your **Access Token**.
:::

### 2. Obtain the **Server Hostname**, **Port**, and **Warehouse ID**
* In your Databricks instance, go to **SQL Warehouses**.
* Click the relevant warehouse.
* Go to **Connection Details** tab on the top. This is where you obtain your **Server Hostname** and **Warehouse ID**.
<div style={{ display: "flex", justifyContent: "center", padding: "1rem 0 1rem 0" }}>
    <img src={require("../../static/img/dbx_info.png").default} width="900" />
</div>

:::tip 
Your **port** is typically **443** unless otherwise specified.
:::

Now you have everything you need to connect to Kater, which are:
* Access Token
* Warehouse Domain
* Port
* Warehouse ID


----

## Connect to Kater
Go to your Kater Portal and follow these steps to connect to Databricks.

### 1. Click on the `Connect` tab on the sidebar.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectSidebar.png").default} width="150" />
</div>

### 2. Under `Data Store`, select `Databricks`.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/DataStore_DBX.png").default} width="400" />
</div>

### 3. Add your Databricks `Access Token`, `Warehouse Domain`, `Port`, and `Warehouse ID` as defined in the Prerequisites Section. 
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 1rem 0" }}>
    <img src={require("../../static/img/ConnectionDBX.png").default} width="400" />
</div>
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