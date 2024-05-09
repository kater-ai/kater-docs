---
sidebar_position: 1
---

# Focuses
:::tip There are 4 types of Focuses. Each one represents a different response format.
1. Discover: high-level plan
2. Analysis: summary, assumptions, query, output
3. Output: query and output ONLY
4. General: anything and everything else!
:::

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/Focuses.png").default} width="800" />
</div>

## When to use each focus
:::warning Keep in mind
Only `Analysis` and `Output` focuses run the generated SQL against your database to return an output (table).
:::
----
### Discover
Is this you?
- You have a high-level problem and aren't sure what questions you should ask. 
- You have a general understanding of your question but want more options for peripheral relevant questions to ask.
- You want to discover what's possible given the state of your data today.
- You want to find where certain tables live and how they're relevant to your needs. 

If any of this sounds familiar, use `Discover` Focus!

----

### Analysis
Is this you?
- You have a question that you want a SQL query and table for.
- You also want a detailed English summary of what the query does, and any underlying assumptions Butler made.

If this sounds familiar, use `Analysis` Focus!

----

### Output
Is this you? 
- You have a question and ONLY want to the SQL and table, nothing else.

If this sounds familiar, use `Output` Focus!

----

### General
Is this you?
- You have a question that doesn't necessarily fit any of the above formats, and want to see if Butler can help you in any way. 

If this sounds familiar, use `General` Focus!

