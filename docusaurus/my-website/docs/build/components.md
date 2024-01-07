---
sidebar_position: 2
---

# Components

A **component**<sup style={{color: "dodgerblue", fontSize: "0.8rem"}}>Beta</sup> is a block of transformation code. It is saved as a `.sql` file and represents one of two things: 
1. A data warehouse **asset** (view, table).
2. A script which alters or affects an existing data warehouse asset (aka. **a manipulator**). 


## Why this matters

Components ensure modularity and repeatability across all your transformations. 

Breaking transformations into smaller, repeatable pieces gives your team much more control over how data changes throughout your pipeline. 

When complications arise, precise identification of the issue becomes more straightforward. Likewise, when modifications are applied to a component, the ensuing adjustments required for downstream components can be managed more effectively.

Finally, embedding **data contracts**<sup style={{color: "dodgerblue", fontSize: "0.8rem"}}>Beta</sup> to each component ensures uncompromised data quality checks, making your data more trustworthy and reliable. 

## Build your first component

