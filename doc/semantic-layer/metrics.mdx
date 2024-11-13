---
sidebar_position: 1
title: Metrics
---

Metrics are the centralized data modeling layer which powers SQL generation and responses to future data questions. They encapsulate the base SQL formula, as well as optional filters and groupings.

:::note Metrics consist of 5 parts:
1. Name
2. Keywords / Tags
3. Base SQL 
4. Optional Filters 
5. Optional Groupings
:::

## Create a Metric
The easiest way to create or update a metric is through the Playbook Builder UI as you answer business questions with SQL queries.

## Example Metrics
The below metrics are all derived from the same SQL script that answers the question: 
"What is the % diff between last month's average conversion rate compared to the month prior to last month, segmented by billing state?"
  <details>
  <summary>**SQL script** the below metrics are derived from</summary>
  <p>
  ```sql 
  WITH
    LastMonth AS (
      WITH
        ConvertedOpportunities AS (
          SELECT
            COUNT(DISTINCT o.ACCOUNTID) AS count_accounts,
            a.BILLINGSTATE
          FROM
            KATER.SALESFORCE.OPPORTUNITY o
            JOIN KATER.SALESFORCE.ACCOUNT a ON o.ACCOUNTID = a.ACCOUNTNUMBER
          WHERE
            o.STAGE IN ('closed won', 'post purchase')
            AND o.CLOSEDATE >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 month'
            AND o.CLOSEDATE < DATE_TRUNC('month', CURRENT_DATE)
          GROUP BY
            a.BILLINGSTATE
        ),
        TotalLeads AS (
          SELECT
            COUNT(DISTINCT o.ACCOUNTID) AS count_accounts,
            a.BILLINGSTATE
          FROM
            KATER.SALESFORCE.OPPORTUNITY o
            JOIN KATER.SALESFORCE.ACCOUNT a ON o.ACCOUNTID = a.ACCOUNTNUMBER
          WHERE
            o.STAGE IN ('closed won', 'closed lost', 'post purchase')
            AND o.CLOSEDATE >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 month'
            AND o.CLOSEDATE < DATE_TRUNC('month', CURRENT_DATE)
          GROUP BY
            a.BILLINGSTATE
        )
      SELECT
        co.BILLINGSTATE,
        ROUND((co.count_accounts / tl.count_accounts) * 100, 2) AS OpportunityConversionRate
      FROM
        ConvertedOpportunities co
        JOIN TotalLeads tl ON co.BILLINGSTATE = tl.BILLINGSTATE
    ),
    MonthPriorToLast AS (
      WITH
        ConvertedOpportunities AS (
          SELECT
            COUNT(DISTINCT o.ACCOUNTID) AS count_accounts,
            a.BILLINGSTATE
          FROM
            KATER.SALESFORCE.OPPORTUNITY o
            JOIN KATER.SALESFORCE.ACCOUNT a ON o.ACCOUNTID = a.ACCOUNTNUMBER
          WHERE
            o.STAGE IN ('closed won', 'post purchase')
            AND o.CLOSEDATE >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '2 months'
            AND o.CLOSEDATE < DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 month'
          GROUP BY
            a.BILLINGSTATE
        ),
        TotalLeads AS (
          SELECT
            COUNT(DISTINCT o.ACCOUNTID) AS count_accounts,
            a.BILLINGSTATE
          FROM
            KATER.SALESFORCE.OPPORTUNITY o
            JOIN KATER.SALESFORCE.ACCOUNT a ON o.ACCOUNTID = a.ACCOUNTNUMBER
          WHERE
            o.STAGE IN ('closed won', 'closed lost', 'post purchase')
            AND o.CLOSEDATE >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '2 months'
            AND o.CLOSEDATE < DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '1 month'
          GROUP BY
            a.BILLINGSTATE
        )
      SELECT
        co.BILLINGSTATE,
        ROUND((co.count_accounts / tl.count_accounts) * 100, 2) AS OpportunityConversionRate
      FROM
        ConvertedOpportunities co
        JOIN TotalLeads tl ON co.BILLINGSTATE = tl.BILLINGSTATE
    )
  SELECT
    lm.BILLINGSTATE,
    ROUND(lm.OpportunityConversionRate, 2) AS last_month_conversion_rate,
    ROUND(mp.OpportunityConversionRate, 2) AS month_before_last_month_conversion_rate,
    ROUND(
      (
        (
          lm.OpportunityConversionRate - mp.OpportunityConversionRate
        ) / mp.OpportunityConversionRate
      ) * 100,
      2
    ) AS PercentageDifference
  FROM
    LastMonth lm
    JOIN MonthPriorToLast mp ON lm.BILLINGSTATE = mp.BILLINGSTATE;
  ```

  </p>
  </details>

  <details>
  <summary>**Explanation** of how the metrics are derived</summary>
  <p>
  The SQL script is complex at first glance, but in the context of the business question, it's relatively straightforward.

  We have the main formula: 
  
  `Opportunity Conversion Rate` = (`Converted Opportunities` / `Total Leads`) * 100

  Best practice is to turn each component of this formula into a metric. 
  
  The SQL is comparing two time frames of the same formula: 
  1. Last month
  2. The month prior to last month

  Within the `Last Month` CTE, there are two nested CTEs and one final conversion rate formula: 
    1. `Converted Opportunities`, filtered by the relevant date range
    2. `Total Leads`, filtered by the relevant date range
    3. `Opportunity Conversion Rate`, dividing the output of the above two CTEs

  We see the same two sub-CTEs in the `Month Prior to Last Month` CTE, but with **different date filters**. 

  **That pattern is a clear indicator** that we should turn `Converted Opportunities` and `Total Leads` into two different metrics, with the date column as an optional filter.

  The next question is: what's the minimum SQL required to correctly identify a `Converted Opportunity`? What about `Total Leads`? This becomes the **Base SQL**. 

  Any additional time slice filters go in the **Optional Filters** section. 

  Any additional aggregations on the columns like `COUNT()` which require a `GROUP BY` go in the **Optional Groupings** section.
  </p>
  </details>

----
### Metric 1: Converted Opportunities
* **Name:** Converted Opportunities
* **Base SQL:** 
  ```sql
  SELECT 
    COUNT(DISTINCT KATER.SALESFORCE.OPPORTUNITY.ACCOUNTID) AS count_accounts
  FROM 
    KATER.SALESFORCE.OPPORTUNITY 
  WHERE 
    KATER.SALESFORCE.OPPORTUNITY.STAGE IN ('closed won', 'post purchase')
  ```
* **Keywords:** 
    * `closed won opportunities`
    * `converted leads`
    * `won leads`
    * `converted customers`
    * `closed won`
    * `purchased`
* **Optional Filters:** 
    * `KATER.SALESFORCE.OPPORTUNITY.[CLOSEDATE]`
* **Optional Groupings:** 
    * `KATER.SALESFORCE.ACCOUNT.[BILLINGSTATE]`
----
### Metric 2: Closed Leads
* **Name:** Closed Leads
* **Base SQL:** 
  ```sql
  SELECT 
    COUNT(DISTINCT KATER.SALESFORCE.OPPORTUNITY.ACCOUNTID) AS count_accounts
  FROM 
    KATER.SALESFORCE.OPPORTUNITY 
  WHERE 
    KATER.SALESFORCE.OPPORTUNITY.CLOSEDATE.STAGE 
    IN ('closed won', 'closed lost', 'post purchase')
  ```
* **Keywords:** 
    * `all leads who closed` 
    * `closed leads` 
    * `all closed leads`
    * `total closed opportunities`
* **Optional Filters:** 
    * `KATER.SALESFORCE.OPPORTUNITY.[CLOSEDATE]`
* **Optional Groupings:** 
    * `KATER.SALESFORCE.ACCOUNT.[BILLINGSTATE]`
----
### Metric 3: Opportunity Conversion Rate
* **Name:** Opportunity Conversion Rate
* **Base SQL:** 
  ```sql
  SELECT
    co.BILLINGSTATE,
    ROUND(
      (co.count_accounts / tl.count_accounts) * 100, 2
         ) AS OpportunityConversionRate
  FROM
    {{Converted Opportunities}} co
  JOIN
    {{Total Leads}} tl ON co.BILLINGSTATE = tl.BILLINGSTATE
  ```
* **Keywords:**
    * `lead conversion rate` 
    * `customer conversion rate` 
    * `rate for lead conversion`
* **Optional Filters:** N/A
* **Optional Groupings:** N/A
----

## Creating Good Metrics
Defining metrics is an art that takes some practice, but when mastered serves as a robust foundational structure by standardizing nuances to tricky business concepts and automating future data pulls for stakeholders.
1. Name
    * Keep metric names specific enough for your persona, while broad enough to capture a breadth of use cases. Traditional KPI names are a good start.

    * For B2B SaaS companies, we highly recommend using the standard [SOMA Metric](https://github.com/Levers-Labs/SOMA-B2B-SaaS/tree/main/definitions/metrics) names and definitions.
2. Keywords
    * Used in semantic and keyword search to pull relevant metrics that should be used to answer someone's business question in Kater. 

    * Try to capture all the different ways one might phrase a metric differently.
3. Base SQL 
    * Consists of the minimum information required to correctly calculate the metric at its base level, without any additional time filters or segment groupings. 

    * It typically consists of at least `SELECT <column> FROM <table>`, with an aggregation on a column.

    * To be consistent and follow best practices, always use the **fully qualified object name**. This avoids potential errors downstream.
      * Fully qualified names follow this format: `<db_name>.<schema_name>.<table_name>.<column_name>`

    * It can be a **SQL Fragment**, meaning it doesn't need to be a complete compilable SQL script.
        
        :::note
        You can reference other metric names in your Base SQL using mustache syntax `{{ }}`.
        :::

        <details>
        <summary>Sample Base SQLs</summary>
        <p>
        Active Opportunities
        ```sql
        SELECT 
          COUNT(KATER.SALESFORCE.OPPORTUNITY.OPPORTUNITYID) AS active_opportunities
        FROM 
          KATER.SALESFORCE.OPPORTUNITY 
        WHERE 
          KATER.SALESFORCE.OPPORTUNITY.STAGE 
            NOT IN ('closed won', 'closed lost', 'post purchase')
        ```
        Opportunity Lifecycle Duration
        ```sql
        SELECT 
          KATER.SALESFORCE.OPPORTUNITY.OPPORTUNITYID, 
          DATEDIFF(
            'day', 
            KATER.SALESFORCE.OPPORTUNITY.CREATEDDATE, 
            KATER.SALESFORCE.OPPORTUNITY.CLOSEDATE
          ) AS LIFECYCLE_DURATION 
        FROM 
          KATER.SALESFORCE.OPPORTUNITY
        ```
        Expected Revenue from Total Opportunities
        ```sql
        SELECT
          DATE_TRUNC ('month', KATER.SALESFORCE.OPPORTUNITY.CREATEDDATE) AS MONTH,
          SUM(KATER.SALESFORCE.OPPORTUNITY.OPPORTUNITYAMOUNT) AS TOTAL_OPPORTUNITY_AMOUNT,
          SUM(KATER.SALESFORCE.OPPORTUNITY.EXPECTEDREVENUE) AS TOTAL_EXPECTED_REVENUE
        FROM
          KATER.SALESFORCE.OPPORTUNITY
        ```
        </p>
        </details>

4. Optional Filters 
    * A comma-separated list of fully qualified column names used in the `WHERE` clause on the Base SQL.

    * You can list columns from tables outside of the Base SQL, as long as you use the **fully qualified column name**. 

    * Usually represents time filters.
5. Optional Groupings
    * A comma-separated list of fully qualified column names used in the `GROUP BY` clause on the Base SQL.

    * You can list columns from tables outside of the Base SQL, as long as you use the **fully qualified column name**. 

    * Usually represents segments.

      :::tip NOTE 
      This will only work if there are some aggregations performed in the Base SQL.

      For example, this Base SQL can have Optional Groupings:
        ```sql
        SELECT
          COUNT(*) AS TOTAL_ACTIVE_OPPORTUNITIES
        FROM
          KATER.PLAYBOOK_VIEWS.PLAYBOOK_V_OPP_ACCOUNT_TEAM
        WHERE
          KATER.PLAYBOOK_VIEWS.PLAYBOOK_V_OPP_ACCOUNT_TEAM.OPPORTUNITY_STAGE 
            NOT IN ('closed won', 'closed lost')
        ```

      But this one cannot since there's no aggregation in the `SELECT` clause:
        ```sql
        SELECT 
          KATER.SALESFORCE.OPPORTUNITY.OPPORTUNITYID 
        FROM 
          KATER.SALESFORCE.OPPORTUNITY 
        WHERE 
          KATER.SALESFORCE.OPPORTUNITY.STAGE 
            NOT IN ('closed won', 'closed lost', 'post-purchase')
        ```
      :::


## Metric Usage

If a question contains similarity to the `Metric` name or keywords, Butler will automatically consider the `Metric's` definition in its calculations. 

Butler will surface whatever metrics he used as inputs to his calculation. 

## Changing Metrics

We understand that metrics can change over time. If a `Metric`'s formula changes, you can update the `Metric`'s formula in the `Metrics` tab. 

Using you as his second pair of eyes, Butler will help you automatically update all nodes in the Playbook which use this `Metric`.  

You can rest assured that all future questions using this `Metric` will be updated to reflect the new formula.