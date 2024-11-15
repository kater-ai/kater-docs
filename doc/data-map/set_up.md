---
sidebar_position: 2
---

# Set Up Your Data Map
The Data Map's skeleton is generated for you, given a couple inputs.

When you first go to the Data Map, it will look something like this, where each node is a table in your data warehouse.
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/PreSetup.png").default} width="500" />
</div>

## 1. Generate relationships
Click the settings button on the top right corner, then click `Generate Relationships`.
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/GenerateRelationships.png").default} width="900" />
</div>

A pop-up will appear. Define your warehouse's data model.
<div style={{ display: "flex", justifyContent: "center", padding: "0rem 0 3rem 0" }}>
    <img src={require("../../static/img/DefineModel.png").default} width="500" />
</div>

:::tip
Learn more about the difference between a Star/Snowflake data model and an OLTP data model [here](https://voiceofthedba.com/2022/02/09/oltp-star-snowflake-and-galaxy-schemas/). 
:::

### 1a. STAR/Snowflake Data Models
If you have a STAR/Snowflake data model, Kater helps you generate the join keys between each table.

To generate the most accurate join keys for you, please label each table a `FACT`, `DIMENSION`, or `LOOK UP`. 

<div style={{ display: "flex", justifyContent: "center", padding: "0rem 0 3rem 0" }}>
    <img src={require("../../static/img/Relationships.png").default} width="500" />
</div>

Then, click `Generate`, and hang tight for a couple minutes. When you come back, your data map should be ready to go. 

:::tip
It's important to review and validate the data map's edges and join keys. The data map is central for Butler's understanding of how to connect all your tables semantically. Having a solid data map will tremendously benefit you and your team's experience with Kater.
:::


### 1b. OLTP Data Models
If you're using a database like Postgres or MS-SQL server, you likely have an OLTP data model. The structure tends to be more opaque and not specifically built for large-scale data analysis. 

However, Kater can still help generate join keys and a Data Map for you. 

Click the tables that you want to create relationships for, and click `Generate`. 

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/OLTP.png").default} width="500" />
</div>


## 2. Watch the relationships generate
It may take up to 30 minutes depending on how many tables you have. Thanks for your patience.

The finished Data Map should look something like this (might be more complicated given how many tables you have):
<div style={{ display: "flex", justifyContent: "center", padding: "0rem 0 3rem 0" }}>
    <img src={require("../../static/img/finished_data_map.png").default} width="1000" />
</div>

## 3. You're ready to [build a Playbook](../playbooks/).