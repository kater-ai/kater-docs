---
sidebar_position: 2
---

# Components

A **component**<sup style={{color: "dodgerblue", fontSize: "0.8rem"}}>Beta</sup> is a block of transformation code. It is saved as a `.sql` file and represents one of two things: 
1. A data warehouse asset
2. A script which alters or affects an existing data warehouse asset.

Components are designed to be flexible, powerful, and easy to use. Anyone who knows SQL can write a component and build a robust data pipeline. 


:::note

Components are still in development. Stay tuned for the beta release.

:::

## Why this matters

Components ensure modularity and repeatability across all your transformations. 

Breaking transformations into smaller, repeatable pieces gives your team much more control over how data changes throughout your pipeline. 

When complications arise, precise identification of the issue becomes more straightforward. Likewise, when modifications are applied to a component, the ensuing adjustments required for downstream components can be managed more effectively.

Finally, defined **data contracts**<sup style={{color: "dodgerblue", fontSize: "0.8rem"}}>Beta</sup> for each component ensures uncompromised data quality checks, making your data stable and reliable. 

## Types of Components

There are four types of components: 
### 1. Extractor
    - Used to extract or import data from outside sources into an existing Asset. Functionality here is data warehouse dependent. (i.e. Snowflake's `COPY INTO`, or Redshift's `COPY` commands). Can only be run in conjunction with an Asset Component.
        ```sql title="components/extractors/copy_into_fact_subscriptions.sql"
        COPY INTO fact_subscriptions (id, username, createdOn)
        FROM @your_s3_stage/your_file.csv
        FILE_FORMAT = (TYPE = 'CSV' FIELD_OPTIONALLY_ENCLOSED_BY='"')
        ON_ERROR = CONTINUE
        ```
### 2. Asset
    - Represents one object in your warehouse (view, table), written simply with a `select` statement. 
        ```sql title="components/assets/fact_subscriptions.sql"
        SELECT 
            id, 
            username, 
            createdOn 
        FROM dw.subscriptions
        ```
### 3. Manipulator
    - A block of code which alters an existing Asset (`update`, `delete`, `merge`, `upsert`, `truncate`). Can only be run in conjunction with an Asset Component. 
        ```sql title="components/manipulators/update_fact_subscriptions.sql"
        UPDATE dw.subscriptions
        SET 
            username = UPPER(username),
            createdOn = COALESCE(createdOn, 'default_date_value')
        ```
### 4. CTE
    - A block of code which is treated like a Common Table Expression (CTE). A temporary query which exists only within the transaction it is run.
        ```sql title="components/ctes/count_subscriptions.sql"
        SELECT 
            COUNT DISTINCT(id) as num_ids, 
            DATE_TRUNC('month', createdOn) as month
        FROM dw.fact_subscriptions
        ```

## Component Fundamentals

Every component consists of a
1. Configuration
2. SQL Query


