---
sidebar_position: 2
---

# Snowflake

Kater can connect to Snowflake using the `snowflake` connection type.

:::info
## How it Works
* Kater encrypts your credentials via an encryption key stored in AWS secrets manager. 
* When you connect to Snowflake, Kater temporarily uses your credentials via SSL to authenticate with Snowflake.  
* Your selected metadata (table names, columns, datatypes) are stored in Kater's database. 
* Everything is encrypted at rest and in-transit. 
:::

----

## Prerequisites
In your Snowflake UI, ensure the default role provided in the connection has necessary grants for all the objects in your databases.

The Snowflake role should have the following grants:
- `USAGE` and `MONITOR` on the database (for the information schema to be accessible).
- Read-only access to all the tables, views, and materialized views in the database that you want Kater to access.

Following [access control framework design](/blog/Access%20Control%20Framework%20Design), you can create a Kater-specific role and grant the necessary permissions to it. Then, you can assign this role to the user you use to connect to Snowflake.

### Set Permissions for the Role in Snowflake
If you don't already have a role and user set up, you can use the following script to help you.

<details>
<summary>Script to create new role in Snowflake</summary>
<p>
Replace variables with appropriate names.
```sql
SET user_username='username';
SET user_password='password';
SET warehouse_size='warehouse_size';
SET warehouse_name='warehouse_name';
SET access_role='name_of_access_role';
SET functional_role='name_of_functional_role';
SET database_name='database_name';

-- Set role for grants
USE ROLE USERADMIN;

-- Create the roles
CREATE ROLE IF NOT EXISTS identifier($access_role);
CREATE ROLE IF NOT EXISTS identifier($functional_role);

-- Create user and grant access to functional role. Grant functional role access to access role.
CREATE USER IF NOT EXISTS identifier($user_username) PASSWORD=$user_password DEFAULT_ROLE=$functional_role;
GRANT ROLE identifier($access_role) TO ROLE identifier($functional_role);
GRANT ROLE identifier($functional_role) TO USER identifier($user_username);

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS identifier($database_name);

-- Grant metadata privileges to database to be monitored
GRANT USAGE,MONITOR ON DATABASE identifier($database_name) TO ROLE identifier($access_role);
GRANT USAGE,MONITOR ON ALL SCHEMAS IN DATABASE identifier($database_name) TO ROLE identifier($access_role);

-- Grant metadata privileges to future objects in database to be monitored
GRANT USAGE,MONITOR ON FUTURE SCHEMAS IN DATABASE identifier($database_name) TO ROLE identifier($access_role);

-- Grant permissions to use the new warehouse
GRANT SELECT ON WAREHOUSE identifier($warehouse_name) TO ROLE identifier($access_role);

-- Grant permissions for current objects in database to access role
GRANT ALL ON ALL SCHEMAS IN DATABASE identifier($database_name) TO ROLE identifier($access_role);
GRANT ALL ON ALL TABLES IN DATABASE identifier($database_name) TO ROLE identifier($access_role);
GRANT ALL ON ALL VIEWS IN DATABASE identifier($database_name) TO ROLE identifier($access_role);
GRANT ALL ON ALL MATERIALIZED VIEWS IN DATABASE identifier($database_name) TO ROLE identifier($access_role);

-- Grant permissions for future objects in database to access role
GRANT ALL ON FUTURE SCHEMAS IN DATABASE identifier($database_name) TO ROLE identifier($access_role);
GRANT ALL ON FUTURE TABLES IN DATABASE identifier($database_name) TO ROLE identifier($access_role);
GRANT ALL ON FUTURE VIEWS IN DATABASE identifier($database_name) TO ROLE identifier($access_role);
GRANT ALL ON FUTURE MATERIALIZED VIEWS IN DATABASE identifier($database_name) TO ROLE identifier($access_role);
```

</p>
</details>

----

## Connect to Kater
Once your Snowflake role and user is ready, go to your Kater Portal and follow these steps to connect to Snowflake.

### 1. Click on the `Connect` tab on the sidebar.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectSidebar.png").default} width="150" />
</div>

### 2. Under `Data Store`, select `Snowflake`.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/DataStore_SNOWFLAKE.png").default} width="900" />
</div>

### 3. Add your Snowflake credentials.
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

### 8. You're ready to [create a Persona](/docs/personas/) so you can add these tables to a team.