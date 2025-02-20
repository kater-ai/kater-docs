---
id: index
title: What is Kater
slug: /
---

# What is Kater?

<span class="subheader-text">Kater lets data teams build the blueprint for decision-making.</span>

### Logical, Repeatable Analyses
Kater transforms how companies make decisions by enabling data teams to build structured **Playbooks** — interactive decision trees where each node is a Jupyter notebook that runs dynamically based on data conditions. 

Kater is like an architect’s blueprint for decision-making. Instead of leaving teams to navigate data like an empty construction site, data teams can build a structured framework to be expanded on.

**The answer to a business question becomes a carefully placed beam, and every analysis done is a sturdy pillar that adds to the team’s foundation.**

With a modernized and familiar Jupyter Notebooks interface and the power of AI that actually understands your business, teams can refine and expand their playbooks, ensuring every decision is built on a consolidated foundation, not guesswork.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../static/img/kater_overview.png").default} width="600" />
</div>

**How We Do It:**  
- **The Playbook** – Define business questions as a structured decision tree for consistent, repeatable analysis.  
- **Automated Execution** – Jupyter notebooks run dynamically based on real-time data conditions.  
- **Shared Variables & Semantics** – Promote variables into a **unified semantic layer** for consistency and reuse across decision nodes.  
- **Continuous AI Learning** – Playbooks train **Butler AI** to understand your data, enabling executives to ask questions in natural language.  
- **Report Key Takeaways** – Playbook Reports highlight action items and show clear decision logic, allowing executives to ask follow-ups without involving data teams.  
- **Iterate & Improve** – Set dynamic thresholds to rapidly experiment, refine decisions, and measure business impact in real time.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../static/img/Intro_2.png").default} width="500" />
</div>

## How is Kater different? 
<span class="larger-text">Kater is the first and only decision-focused analytics platform.</span>

By combining the flexibility of Jupyter notebooks, powerful LLMs, and an intelligent semantic layer, companies can now proactively address outliers in data they never could before.

Data Playbooks are built to capture the **genius of your best analysts** by mimicking data analytics best practices:
1. Naturally **brainstorm a business flow** with a business stakeholder
2. Rapidly answer each node with **SQL, Python, and LLMs**
3. Define & save any **reusable metrics**
4. Run the playbook on a schedule to **generate reports** for your stakeholders
5. Guide future stakeholders to **ask the right questions** based on their problem

## The first data decision engineering platform
Running a business without tracking how decisions impact results is like training for a marathon without timing your runs. 

You might be putting in the effort, but without measuring pace and progress, you won’t know if you’re improving or need to adjust your strategy. 

**Kater’s Playbooks give you the data and visibility to assess what’s working, what’s not, and what to consider next—so you can make informed decisions with confidence.**

## Quickstart
:::info[Get Set Up In 30 Minutes]
1. [Connect your data warehouse](/docs/category/connect) (2 min)
2. [Set Up A Persona](/docs/personas) (2 min)
3. [Define Joins in Data Map](/docs/data-map/overview) (5 min)
4. [Build a Playbook](/docs/playbooks/playbook_overview) (20 min)
:::


## Methodology

### Decision Trees

In every analyst’s head, there’s a complex web of decision tree structures that guide them in:
1. what **data** exists,
2. which **hypotheses** to validate to solve the problem,
3. how to **write the SQL** to answer the hypotheses,
4. how to **structure & interpret** the results.

Sample Playbook:
<div style={{ display: "flex", justifyContent: "center", padding: "1rem 0 3rem 0" }}>
    <img src={require("../static/img/Playbook.png").default} width="600" />
</div>
Read more about playbooks [here](/docs/playbooks/playbook_overview).


### Semantic Modeling
Semantic modeling in Kater is done in a layered manner, where each layer can promote to the above layer. 
This is a simple way to think of modeling in Kater:
<div style={{ display: "flex", justifyContent: "center", padding: "0rem 0 3rem 0" }}>
    <img src={require("../static/img/data_model_method.png").default} width="600" />
</div>

Read more about metrics and glossary terms [here](/docs/semantic-layer/overview).


### Where Kater sits in your stack
Kater is built to sit in the middle of your data stack, combining the power of a unified metric layer with action-oriented decision trees. It supplements your existing BI tool, and provides additional support for any adhoc requests or reporting your business needs.

Kater currently integrates with 
* most data warehouses ([Snowflake](/docs/connect/Snowflake), [BigQuery](/docs/connect/BigQuery), [Redshift](/docs/connect/Redshift), [Databricks](/docs/connect/Databricks))
* [dbt Cloud](/docs/connect/integrations/dbt)
* [Slack](/docs/connect/integrations/slack)
* [GitHub](/docs/connect/integrations/github)

## Why Now?
We're a team of former data engineers and analysts with decades of experience working at companies like Microsoft and CREXi, who have committed our lives to helping businesses understand how they’ve used data to make past decisions and show them how to use that same data to drive future success.

### The current decision-making landscape
Making decisions with data today is like trying to navigate a road trip without a GPS. You're collecting maps (data), but there’s no real-time feedback on whether you're on the right path. 

You make a turn (a business decision), but there’s no clear way to see if it got you closer to your destination or if you need to adjust.

Kater changes that with Playbooks. **They act as your GPS for decision-making, continuously tracking the impact of past actions, learning from business outcomes, and guiding your next move, ensuring data actually drives decisions, not just sits in reports.**

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

Ready to get started? [Connect your data warehouse.](/docs/category/connect)