---
sidebar_position: 1
---

# Get Started with Kater.ai

Kater is a **decision tree builder** where you can define actionable steps to take based on data outcomes, bridging the gap between data analysis and decisions. 

Built by data engineers, Kater ensures your company doesn't compromise on engineering best practices. As you build playbooks, Kater organically builds a shared **data model** which serves as the source of truth for your business metrics and semantics.

This data model allows business users to answer their own data questions, taking adhoc data pulls off your data team’s plate and mind.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../static/img/Intro_2.png").default} width="800" />
</div>

## Quickstart
:::info[Get Set Up In 30 Minutes]
1. [Connect your data warehouse](./category/connect) (2 min)
2. [Set Up A Persona](./personas/) (2 min)
3. [Define Joins in Data Map](./data-map/set_up) (5 min)
4. [Build a Playbook](./playbooks/) (20 min)
:::


## How it works
### Data Playbooks

**Decision trees are the most natural and effective way to brainstorm solutions to complex business problems.** 

Kater lets you brainstorm a flow using plain English, rapidly transform it into SQL, capture the necessary decisions to make, and use the flow to generate reports dynamically.

In every analyst’s head, there’s a complex web of decision tree structures that guide them in:
1. what **data** exists,
2. which **hypotheses** to validate to solve the problem,
3. how to **write the SQL** to answer the hypotheses,
4. how to **structure & interpret** the results.

Data Playbooks are built to capture the **genius of your best analysts** by mimicking data analytics best practices:
1. Naturally **brainstorm a flow** with a business stakeholder
2. Rapidly transform each node into **SQL**
3. Define & save any **reusable metrics**
4. Run the playbook on a schedule to **generate reports** for your stakeholders
5. Guide future stakeholders to **ask the right questions** based on their problem

![sources](../static/img/Playbook.png)

* General Functionality:
    * A persona can have multiple playbooks.
    * A playbook consists of 1 primary objective.
    * Each node may represent 1 business question + 1 SQL query.
    * There are different node types (Analysis, Discover, Segment, Visualization, If/Then, etc...) with their own functionalities.
    * Like Jupyter Notebooks, you can optionally save a node’s output as a view to reference it downstream.
    * Your unified metric layer is continuously updated as you build playbooks, so your team starts defining a single source of truth for future analyses.

---
### Semantic Modeling
Semantic modeling in Kater is done in a layered manner, where each layer can promote to the above layer. 
This is a simple way to think of modeling in Kater:
<div style={{ display: "flex", justifyContent: "center", padding: "0rem 0 3rem 0" }}>
    <img src={require("../static/img/data_model_method.png").default} width="800" />
</div>

Read more about metrics and glossary terms [here](./semantic-layer/overview).

---

### Where Kater sits in your stack
Kater is built to sit in the middle of your data stack, combining the power of a unified metric layer with action-oriented decision trees. It supplements your existing BI tool, and provides additional support for any adhoc requests or reporting your business needs.

Kater currently integrates with 
* most data warehouses ([Snowflake](./connect/Snowflake), [BigQuery](./connect/BigQuery), [Redshift](./connect/Redshift), [Databricks](./connect/Snowflake))
* [dbt Cloud](./connect/integrations/dbt)
* [Slack](./connect/integrations/slack)
* [GitHub](./connect/integrations/github)

## Why Now?
We're a team of former data engineers and analysts with decades of experience working at companies like Microsoft and CREXi, who have committed our lives to helping businesses understand how they’ve used data to make past decisions and show them how to use that same data to drive future success.

### Define & Track Decisions from Data
Traditional Business Intelligence (BI) platforms tell you what’s happening, but not what questions to ask, or how to interpret the data to drive actions.

As a result, data teams are often inundated with adhoc requests from decision makers because they're unable to obtain the data they need to make a decision.

When decisions are made, they aren't defined and tracked.

Companies are left blind to how they used data in the past to made decisions, and how they can use the same data to make decisions moving forward. 

Kater provides the platform to map exactly this.

### Turn Data Into Profit Centers 
Decision-making journeys can, and should be, pre-defined.

<div style={{ display: "flex", justifyContent: "center", padding: "1rem 0 2rem 0" }}>
    <img src={require("../blog/img/ambiguous_outcome.png").default} width="900" />
</div>
*Data teams currently have no means of outlining the questions business users should ask given their desired outcome. There's no clear path to understanding how to interpret reports.*

<div style={{ display: "flex", justifyContent: "center", padding: "5rem 0 2rem 0" }}>
    <img src={require("../blog/img/new_decision_journey.png").default} width="900" />
</div>
*Data teams can structure which questions to ask, which hypotheses to verify, and give users a clear path towards actionable insights.*

Ready to get started? [Connect your data warehouse.](./category/connect)