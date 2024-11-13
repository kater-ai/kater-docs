---
sidebar_position: 3
title: Glossary Terms
---

Glossary terms are plain English definitions of your business terminology. 

Glossary terms typically outline two things: 
1. What does the term mean to the company?
2. How do you use data to define the term?

## Create a Term
The easiest way to create or update a glossary term is through the Playbook Builder UI as you answer business questions with SQL queries. 

You can also create a Glossary term through the Semantics tab.

## Example Terms
| Name                       | Definition                                                                                                                                                                                                                                                                                            | Keywords/Tags                           |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| Account Sources            | Direct Sales, Direct Traffic, Email Campaign, Online Advertisement, Organic Search, Referral, Social Media                                                                                                                      | acquisition channels, account origin, account acquisition    |
| Active Opportunity         | All opportunities that aren't closed as won or lost yet.                                                                                                                                                                                            | sales pipeline, open opportunities      |
| Average Purchase Frequency Rate (APFR) | APFR = Number of Unique Customers in a Period / Number of Purchases in that Period. Measures how often a customer purchases within a specified timeframe.                                                                                                                        | purchase R=rate, frequently customer purchase, often purchase       |
| Loyal Customer               | Users with >1 repeat purchase and have re-purchased over the course of >1 years.                                                                                                                                                                                                    | customer retention, repeat buyers       |
| Opportunity Conversion Rate | Divide the number of accounts converted to opportunities by the total number of leads (accounts that are either in closed won, closed lost, or post purchase) and then multiply that number by 100 to get the percentage. A converted opportunity is one that has closed won or post-purchase. Note: every account has been part of at least one opportunity. | lead conversion, sales conversion rate  |


## Creating Good Glossary Terms
Glossary terms tend to go hand-in-hand with `Metrics`. As you saw in the examples, some Terms are actually Metrics, but defined using English rather than SQL. 

Sometimes it's easier to first define a Metric using plain English via a Glossary Term, and then over time, structure the SQL Metric formula from that English definition. This is especially true for organizations that don't already have a defined Metric layer.

Glossary Terms are purposefully built to be flexible. Language is complex; businesses are complex; but that doesn't mean we shouldn't start building a source of truth.

1. Name
    * The best Glossary names encapsulate nuanced and specific language that often arises during conversations about company data.

2. Definition 
    * How would you explain to a junior analyst what this term means, and how they would use the data to define it?
    * The definition should always include how the term relates to data. 
    * Keep it succinct. 

3. Keywords / Tags
    * Used in semantic and keyword search to pull relevant Terms that should be used to answer someone's business question in Kater.
    * Try to capture all the different ways one might phrase a Term differently.



