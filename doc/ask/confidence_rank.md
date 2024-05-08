---
sidebar_position: 2
---

# Confidence Rank
:::info Butler generates a confidence ranking based on several factors. 

This helps users determine whether they should validate the findings with a data member.
:::

## The rankings
<div style={{ display: "flex", justifyContent: "left", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/Confidence_Rank.png").default} width="300" />
</div>
1. **Yellow** - Needs Verification
2. **Dark Green** - High
3. **Bright Green** - Very High

## How we calculate it
The following factors influence the confidence ranking: 
- Number of previously validated relevent queries.
    - We've found that when there are at least 4 very similar relevent queries, accuracy increases to 98%.
- The % similarity for question + SQL in validated queries compared to current question + SQL. 
    - We use vectorized embeddings to calculate the similarity of previously asked questions to the current question.
- The complexity of the query 
    - For example, # of tables joined, advanced SQL functions, subqueries/CTEs required.
- Whether there are any filters that require access to actual data in the table 
    - For example, `WHERE column_name LIKE '%LOS ANGELES%'`
    - This automatically creates a `Yellow` rank because we don't pass your actual data into Butler, so Butler's query might not correctly know how to perform the filter on the string.

