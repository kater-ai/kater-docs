---
sidebar_position: 2
---

# MS-SQL

Kater can connect to MS-SQL using the `mssql` connection type. This guide will walk you through the process of setting up a connection to MS-SQL.

## How it Works
* Kater securely stores your MS-SQL credentials in your browser memory.
* When you connect to MS-SQL, Kater temporarily uses your credentials via SSL to authenticate with MS-SQL.
* Your credentials are never stored in Kater's database.
* Your selected metadata (table names, columns, datatypes) are stored in Kater's database, but never your data.
* Everything is encrypted at rest and in-transit.

