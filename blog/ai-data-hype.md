---
slug: AI and Data
title: Is there too much hype around AI + Data?
authors: [yvonne]
date: 2024-09-23T18:00
---
Since the introduction of GPT-3 and GenAI taking the world by storm, one of the most commonly requested applications of GenAI is "chat with your data".

<div style={{ display: "flex", justifyContent: "center", padding: "0rem 0 2rem 0" }}>
    <img src={require("../blog/img/is_ai_in_data_hype.jpeg").default} width="900" />
</div>

Many companies have tried building their own internal "data copilot". 

Dozens of emerging companies are building plug-and-play "text-to-sql" tools, like [this](https://www.text2sql.ai/), and [this](https://simplyput.ai/?spad=true&gad_source=1&gclid=Cj0KCQjw3vO3BhCqARIsAEWblcAwb3oFLUojHNSWg3YiCGA115lpUoDMHWY5PZdH7-nNKcah1tdZL40aAtiNEALw_wcB), [this](https://datagpt.com/), and [this](https://vanna.ai/), [this](https://www.dataherald.com/), and oh, [this](https://www.waii.ai/).

There's also [Databricks Genie](https://www.databricks.com/product/ai-bi/genie), [Snowflake Cortex Analyst](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst), [Tableau Einstein](https://www.tableau.com/products/einstein-discovery), [PowerBI Copilot](https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction), etc. Every data company under the sun is applying conversational AI to their product.

The question remains for the next several months -- **Is AI + Data just hype? Is it possible to achieve the future we all envision?**

<!-- truncate -->
----

## AI is a tool, not a human-being replacement.

The short answer is: **as the technology stands today, AI in data is best used to augment a skilled worker's abilities.**

Of course, AI could [improve faster than we can imagine](https://tmb.apaopen.org/pub/qebl3hrd/release/1), and I'm not going to rule out its potential for completely replacing skilled work in the future. 

Part of our job as founders building in cutting edge technology is to educate people on the technology's capabilities and elucidate the reality of AI application to data. 

It's incredibly easy to overestimate the capabilities of AI. 

So let's talk first about its limitations.

----
## Limitations of AI in Data
As of today, 9/23/2024:

1. AI is not capable of **complex deductive reasoning** and **critical thinking** (yet).
    * It's great at pattern recognition and summarization for now, and that's what we're finding the most business value from AI.
    * Summarizing the findings from a report and highlighting important key takeaways is the best use case for this.
2. The user's prompting matters **a lot more than you'd think**. 
    * Users need to know exactly how to ask the right question in the right format.
    * Changing one word could change the entire query. 
    * We're addressing and mitigating this through [Kater's Playbooks](../../docs/playbooks/).
3. A **human in the loop** is required.
    * Since AI is probabilistic, there's chance for error. For any business critical decisions, there should still be a human verifying the responses. 

That being said, AI is [rapidly evolving](https://synthedia.substack.com/p/a-timeline-of-large-language-model), and even where it is today, there's so much value AI brings to the table that we've never seen before. Let's discuss that below.

----
## What AI Unlocks
AI has the potential to **bridge the knowledge gap** between data teams and business experts.

The result is that data teams and business experts can start speaking the same language. They can operate under the same assumptions. Data becomes a product that drives revenue, rather than a cost center. 

### 1. "Pulling data" no longer becomes a data-team specific task.

I see us rapidly moving towards a future where the data team's primary job is building and maintaining **question-to-SQL knowledge graphs** which continuously train AI agents.

* These AI agents will become the main interface for business users to access their data.
* Low-hanging fruit will be addressed quickly.
* Actions that are taken as a result of data will start being tracked and measured. 

That doesn't render the data team obsolete. On the contrary, data teams' jobs will transition into higher-level strategic thinking and planning. 

* Fewer adhoc "data pulls" to export into CSVs. 
* Fewer sudden month-long Executive Reports requiring a team of five to produce.
* Move from Descriptive Analytics into Diagnostic, Predictive, and Prescriptive analytics.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 2rem 0" }}>
    <img src={require("../blog/img/data_products.png").default} width="900" />
</div>

### 2. Decision-making journeys can be pre-defined.

Resources will be spent continuously improving the decision trees which power the decision trees that help stakeholders make decisions for their desired outcome.

<div style={{ display: "flex", justifyContent: "center", padding: "5rem 0 2rem 0" }}>
    <img src={require("../blog/img/ambiguous_outcome.png").default} width="900" />
</div>
*Data teams currently have no means of outlining the questions business users should ask given their desired outcome. There's no clear path to understanding how to interpret reports.*

<div style={{ display: "flex", justifyContent: "center", padding: "5rem 0 2rem 0" }}>
    <img src={require("../blog/img/new_decision_journey.png").default} width="900" />
</div>
*Data teams can structure which questions to ask, which hypotheses to verify, and give users a clear path towards actionable insights.*

If you're interested in learning more about the Decision Journey approach, [click here](../../docs/playbooks/) to see how the team at kater.ai are building this next-gen solution.

### 3. Organizations as a whole will become more data-driven and data-literate.

Since LLMs are great at translating technical language into business user-friendly language, organizations will start being able to interact with data more naturally. 

Data will become more integral to business users' everyday workflow. 

----

## Who are the people who will benefit the most from AI + Data applications? 

Curious, data-driven individuals who don't really know how to code. Digging deeper comes naturally to them. They question everything, they aren't intimidated by numbers, but rather get excited when they have access to more numbers.

If this sounds like you, [reach out](https://www.kater.ai/waitlist). We'd love to chat.

----

## Conclusion
In short- no, there is **not** too much hype around AI and Data. 

AI is proving to be a powerful enabler for improved data literacy, increased data accessibility, and has the potential to solve problems that we've experienced for 20+ years. 