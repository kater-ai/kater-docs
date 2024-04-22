---
sidebar_position: 1
---

# What is the Data Map?
The data map defines all the semantic and SQL relationships between your tables.

It is auto-generated based on the table names, columns, and descriptions. 

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <video controls width="900">
        <source src={require("../../static/img/DataMap.mp4").default} />
    </video>
</div>

## How the Data Map is Used: Relationships
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/Whatisarelationship.png").default} width="900" />
</div>

Each edge on the map represents a `Relationship`.

A `Relationship` defines the plain English meaning behind two table's business relationship. 

:::tip
A `Relationship` helps Butler define things like "When I have a question about **Revenue**, which table do I start with? Which tables do I join to get answers about **Revenue by Product**?"
:::

This is crucial for Butler's general understanding of your entire data estate, and helps him join multiple tables at a time to answer your questions.

## How is it generated? 
Using a combination of GenAI and existing data from dbt, Butler can infer the join keys between FACT and DIMENSION tables. He also infers the semantic relationships between each table, so when someone asks a question, Butler knows which tables to join together. 

## Why is this important? 
The data map is the foundation for how Butler knows how and when to join multiple tables together. 

Setting up the data map correctly is crucial for any data team to start using Kater to its full potential. 