---
slug: Access Control Framework Design
title: Guide to Access Control Framework Design
authors: [yvonne]
---

When designing a data warehouse's permissions and security framework, having clear guardrails for access control is fundamental to ensuring security compliance and governance as your company scales. 

This blog will help you design the rules of your access control by providing some templates and frameworks. 

<!-- truncate -->

## General Frameworks
#### Discretionary Access Control (DAC) 
Imagine each object in a house has an owner, and that owner holds the keys to that object. The owner can choose to share their keys with others, allowing them access to the object. It's like the owner of a room deciding who gets a key to enter.

#### Role-based Access Control (RBAC)
Think of access privileges like keys to different rooms in a house. Roles are like sets of keys, and users are the people holding those sets. Each role (set of keys) grants specific access to certain rooms, and users get access based on the keys (roles) they hold.


## Recommended Framework
We recommend combining DAC and RBAC and follow this design: 

- ACCESS ROLES: cover a set of low-level privileges on objects. For example, an access role can encompass read-only privileges on a particular database. They are not granted to users directly. 

        * `company_db_r` as a read-only role for database `company_db`
        * `sales_schema_r` as a read-only role for schema `sales`
        * `company_db_rw` as a read & write role for database `company_db`
        * `company_db_a` as an admin role for database `company_db`
- FUNCTIONAL ROLES: are the roles granted to users. They encompass a set of access roles. They are created for a specific team.

        * `dev` receives access to `company_db_rw` because developers need to update objects
        * `analyst` receives access to `company_db_r` because analysts only need select-access
        * `sales` receives access to `sales_schema_r` and `company_db_r` because they need specific access to certain tables in a schema
        * `admin` receives access to `company_db_a` and granted full admin access to all objects

Define access roles at the database level. It makes it easy to replicate the privileges from one environment to another. It's also a trade-off between the flexibility we grant to end users and the strict application of the least privilege principle.

At the database level, define 3 levels of access roles:
1. Read-only
2. Read and write
3. Admin

Then apply a similar strategy to warehouse access with two types of roles:
1. User
2. Admin



## Example Snowflake Script for Dev Functional Role
Let's say you want to grant developer access to a Snowflake database. Here's a script you can run in Snowflake. It performs the following: 
* Sets up a user with a specified username, password, warehouse size, warehouse name, access role, functional role, and database name.
* Establishes access and functional roles, assigning the functional role to the user and linking it to the access role.
* Creates a database if it doesn't exist and grants metadata privileges for monitoring.
* Enables monitoring for future objects in the database.
* Grants permissions for using a specific warehouse and accessing current and future objects in the specified database.
:::note
Please update this script to reflect your desired access structure. It differs for every org. 
::: 

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
grant all on warehouse identifier($warehouse_name) to role identifier($access_role);

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
