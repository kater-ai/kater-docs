---
sidebar_position: 1
---

# Build a Playbook

Build a playbook by navigating to the sidebar and clicking **Playbook Builder**. 

## 1. Ensure you have the correct Persona selected
Check the top right corner. 

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/persona_selected.png").default} width="1000" />
</div>

## 2. Node Types
There are 8 node types. 

1. **Objective:** What is this persona’s primary objective? 
*i.e. “Understand how revenue changed and what influenced it".*
2. **KPI:** Key Performance Metric 
*i.e. “Churn”, “Internal Influences”*
3. **Discover:** What is a high-level question that requires multiple questions to answer? 
*"What are internal influences?"*
4. **Analysis:** What specific question about your data would you ask? 
*i.e. “How did revenue change this week compared to last week?”*
5. **Segment:** Describe a specific segment of the parent node’s data to drill down on. 
*i.e. “Product Category”*
6. **If/Then:** Describe a condition to check for the next path. 
*i.e. “If revenue decreased >5%…”*
7. **Free Text:** Write anything here.
8. **Visualization:** Describe a visualization to generate. 
*i.e. “Bar graph with x axis = date, y axis = revenue”*