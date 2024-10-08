---
sidebar_position: 1
---

# Build a Playbook

Build a playbook by navigating to the sidebar and clicking **Playbook Builder**. 
:::tip
User must have `Admin` permissions in Kater to build a Playbook.
:::

## 1. Ensure you have the correct Persona selected
Check the top right corner. 

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/persona_selected.png").default} width="1000" />
</div>

## 2. Node Types
There are 8 node types. 

1. **Objective:** What is this persona’s primary objective? 
    * Example: *“Understand how revenue changed and what influenced it".*
2. **KPI:** Key Performance Metric, typically relates to a metric.
    * Example: *“Churn”, “Internal Influences”*
3. **Discover:** One high-level question that requires multiple questions to answer.
    * Example: *"What are internal influences of revenue?"*
4. **Analysis:** One business question in the form of SQL.
    * Example: *“How did revenue change this week compared to last week?”*
5. **Segment:** A specific segment of the parent node’s data to drill down on.
    * Example: *“Product Categories”, "Geographic Location", "Customer Type"*
6. **If/Then:** A boolean condition to check for the next path.
    * Example: *“If revenue decreased >5%... then...”*
7. **Free Text:** Write anything here.
8. **Visualization:** A graph or chart that visualizes the parent node.
    * Example: *“Bar graph with x axis = date, y axis = revenue”*


## 3. General Rules
* Currently, you can have 1 `Objective` per Persona.
* `Analysis`, `Segment`, `If/Then`, and `Visualization` nodes require SQL.
