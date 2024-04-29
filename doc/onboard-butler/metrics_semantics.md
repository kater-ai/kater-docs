---
sidebar_position: 4
---

# Metrics & Semantics
:::info
We are determined to help you and your company establish a centralized, consistent semantic layer to ensure that everyone in your organization speaks the same language. 
:::

## Metrics

`Metric` = a calculation represented by a SQL formula.

:::tip
Think of the `Metrics` tab as the single place to find all the formulas and definitions for your company's KPIs and general business terms. 
:::
These can range from standard metrics like "MRR" and "CAC" to more nuanced, company-specific metrics like "Marketing Channel Efficiency" or "Sales Conversion Funnel". 

Each `Metric` can be assigned to a Persona(s). 

### Set up a Metric

Go to the `Metrics` tab and click on the `+` button to create a new metric.

`*` = Required Field

| Metric*  | Formula*| Tables* | Required Metrics | Description | 
| -------- | ------- | ------ | ---------------- | ----------- | 
| Metric Name| `SELECT * FROM DB.SCHEMA.TABLE`| DB.SCHEMA.TABLE | Metric names whose formulas are used in this metric | Description of metric| 
| Purchase Frequency| `SELECT AVG(purchase_frequency) AS overall_average_purchase_frequency FROM (SELECT customer_id, COUNT(*) AS purchase_frequency FROM purchases GROUP BY customer_id) AS purchase_counts;`| DW.PROD.PURCHASES | | The average number of transactions a customer makes in a given period | 

### How to use Metrics

If a user's question contains a certain level of similarity to the `Metric` name, Butler will automatically consider the `Metric's` SQL formula in its calculations. 

Butler will surface whatever metrics he used as inputs to his calculation. The user can provide feedback on whether the `Metric(s)` was relevant to the question or not.

This feedback is used to improve Butler's understanding of the `Metric` and its relevance to future users' questions.

### Addressing Changing Metrics

We understand that metrics can change over time. If a `Metric`'s formula changes, you can update the `Metric`'s formula in the `Metrics` tab. 

Using you as his second pair of eyes, Butler will help you automatically update all previous questions in the Query Bank which use this `Metric` as an input.  

You can rest assured that all future questions using this `Metric` will be updated to reflect the new formula.

---

## Semantics

`Semantic` = a column name that appears multiple times across your database. 

The `Semantics` tab takes your most commonly used columns across your entire database and helps you assign synonyms and definitions to them. Kater queries your database and counts the column names that appear most frequently. You can then assign synonyms and definitions to these columns.

These global synonyms ensures that everyone in your organization speaks the same language.

### Set up a Semantic
`*` = Required Field

| Count  | Tables*| Columns* | Synonyms | Additional Context |
| -------- | ------- | ------ | ---------------- | ---------- |
| Pre-populated; # of times column appears in your db| DB.SCHEMA.TABLE.COLUMN | Column Name | Synonyms related to column name | Any additional context about column|
| 3| DW.PROD.VTARGETMAIL.CUSTOMERKEY, DW.PROD.FACTSURVEYRESPONSE.CUSTOMERKEY, DW.PROD.DIMCUSTOMER.CUSTOMERKEY | CUSTOMERKEY | user, member, subscriber, client| Customers can be users without a subscription. To find number of subscribers, filter by status IN ('active')|


### How to use Semantics
When a user asks a question with a word that exists as a `Synonym` in the `Semantics` tab, Butler will automatically consider the associated column and additional context in his calculations.

The user can provide feedback on whether the `Semantic` was relevant to the question or not.