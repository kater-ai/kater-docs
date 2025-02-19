---
sidebar_position: 1
---

# Playbook Overview

Playbooks are dynamic decision trees where each node is a Jupyter notebook that runs based on data-driven conditions, enabling teams to define and automate logical business workflows. 

They provide a structured way to experiment, iterate, and measure the impact of decisions in real time—ensuring executives always have clear, data-backed action steps and the ability to ask follow-up questions using natural language.

A unified data model is created while playbooks are built, ensuring consistency in semantic definitions across the entire platform.

## How it works
    * A persona can have multiple playbooks.
    * A playbook consists of 1 primary objective.
    * Each node represents cells in a Jupyter notebook (see Notebook View).
    * There are different node types (Analysis, Overview Question, Segment, Action, etc...) with their own functionalities.
    * Like Jupyter Notebooks, you can optionally save a node’s output as a variable or dataframe to reference it downstream.
    * Your unified metric layer is continuously updated as you build playbooks, so your team starts defining a single source of truth for future analyses.


## Build a Playbook
User must have `Admin` permissions in Kater to build a Playbook.


### Node Types
There are 6 node types.

1. **Primary Objective:** What is this persona’s primary objective? 
        * Understand how revenue changed and what influenced it.
        * Is there significant movement in open opportunities for any specific cohort of customers?


2. **KPI:** Key Performance Metric, typically relates to a `Metric`.
        * Churn
        * MRR
3. **Overview Question:** One high-level question that requires multiple questions to answer.
        * What are internal influences of revenue?
        * Did we see significant movement of the same metric in our segments?
4. **Analysis:** One business question that can be answered with a query.
        * What's the avg conversion rate for the month prior to last month?
        * Compare the differences in active opportunities from last month compared to the month before, grouped by account source, grouped by month.
5. **Segment:** A specific grouping of data to group a query or metric on, typically represented by a `GROUP BY`.
        * Product Categories
        * Geographic Location
6. **Action:** Free text to define an action, insight, or decision. This is prioritized in the Report Generator.
        * There is no significant movement for this KPI.
        * We don't have any data on trade shows.

**Edge Conditions:** A boolean condition to check for the next path, typically represented by `CASE WHEN...`.
        * If yes...
        * If there's any account source that saw >4% increase in opportunities within last month and the month before...
<!-- 
### Analysis Best Practices & Templates
Below are template best practices for how to build a playbook given generic objectives. Send requests for additional templates to support@kater.ai.

<details>
<summary>**Objective Example #1:** Did `metric` move significantly between last week and the week before?</summary>
<p>


</p>
</details>


<details>
<summary>**Objective Example #2:** How has `metric` changed recently?</summary>
<p>


</p>
</details>

<details>
<summary>**Objective Example #3:** Has `metric` moved significantly across our main customer segments?</summary>
<p>


</p>
</details>

 -->
