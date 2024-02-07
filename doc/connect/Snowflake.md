---
sidebar_position: 1
---

# Snowflake

Kater can connect to Snowflake using the `snowflake` connection type. This guide will walk you through the process of setting up a connection to Snowflake.

## How it Works
* Kater securely stores your Snowflake credentials in your browser memory. 
* When you connect to Snowflake, Kater temporarily uses your credentials via SSL to authenticate with Snowflake. 
* Your credentials are **never** stored in Kater's database.  
* Your selected metadata (table names, columns, datatypes) are stored in Kater's database, but never your data. 
* Everything is encrypted at rest and in-transit. 

## Prerequisites
### Create a Role
Ensure the default role of the account being used, or the role you provide in the connection, has necessary grants for all the objects in your databases.

The role should have the following grants:
- `USAGE` and `MONITOR` on the database (for the information schema to be accessible).
- Read-only access to all the tables, views, and materialized views in the database that you want Kater to access.

Following [access control framework design](../../blog/Access%20Control%20Framework%20Design), you can create a Kater-specific role and grant the necessary permissions to it. Then, you can assign this role to the user you use to connect to Snowflake.

### Set Permissions for the Role
If you haven't already set up access permissions in Snowflake, you can do so by following the script below:

```sql
set user_username='username';
set user_password='password';
set warehouse_size='warehouse_size';
set warehouse_name='warehouse_name';
set access_role='name_of_access_role';
set functional_role='name_of_functional_role';
set database_name='database_name';

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
grant select on warehouse identifier($warehouse_name) to role identifier($access_role);

-- Grant permissions for current objects in database to access role
grant all on all schemas in database identifier($database_name) to role identifier($access_role);
grant all on all tables in database identifier($database_name) to role identifier($access_role);
grant all on all views in database identifier($database_name) to role identifier($access_role);
grant all on all materialized views in database identifier($database_name) to role identifier($access_role);

-- Grant permissions for future objects in database to access role
grant all on future schemas in database identifier($database_name) to role identifier($access_role);
grant all on future tables in database identifier($database_name) to role identifier($access_role);
grant all on future views in database identifier($database_name) to role identifier($access_role);
grant all on future materialized views in database identifier($database_name) to role identifier($access_role);
```

## Connection Setup
1. Click on the `Connect` tab on the sidebar.

2. Add your Snowflake credentials and click `Save`. 

![Add Snowflake](../../static/img/snowflake_connection.png)

3. Wait a minute for your metadata to be parsed. 

4. You're ready to start!