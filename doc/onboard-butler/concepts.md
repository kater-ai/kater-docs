---
sidebar_position: 2
---

# Concepts

A `Concept` is a collection of terms that represent similar domains about your business. 

Think about how you would teach a new data analyst when they first join your team. How would you walk them through your data house? How would you help them decide which tables to use depending on the question? How would you classify the different types of main concepts your company deals with? 

We try to keep `Concepts` as free-form as possible, allowing you to create them as you see fit for the nuances of your business use-case. 

## What is a Concept?
A `Concept` consists of: 

### 1. Tags (optional)
The specific keywords that trigger the `Concept` to be recognized by Butler (i.e. "sales", "revenue", "profit", etc).

A `Concept` can have multiple tags, or it can have no tags at all.

If a Concept doesn't have a tag, it defaults to "always relevant", and everything in the Context automatically gets passed to Butler no matter the question.
    
When a user asks a question, Butler looks for these tags in the question. If it finds a match, it will then look for the `Concept` that the tag is associated with.

### 2. Context
Contextual information that is attached to the tag. (i.e. "When the question asks about sales, always start with KATER.DW.FACT_SALES as the base table").

The context attached to each `Concept` gets programmatically passed into Butler every time someone asks a question and it detects a tag that is associated with a `Concept`.

## Example
**Concept:** `Sales`

**Tags:** `sales, revenue, profit, sold`

**Context:** 
```markdown
Always default to LEFT JOIN, unless there's an explicit reason you're using INNER JOIN. 

For all questions regarding sales, use "KATER.ADVENTUREWORKSDW.FACTINTERNETSALES AS fis" as the base table for all data. 
    For product-related questions to sales: Left Join KATER.ADVENTUREWORKSDW.DIMPRODUCT
    For questions related to reasons behind sales: 
        LEFT JOIN KATER.ADVENTUREWORKSDW.FACTINTERNETSALESREASON fisr
         ON fis.SALESORDERNUMBER = fisr.SALESORDERNUMBER 
        LEFT JOIN KATER.ADVENTUREWORKSDW.DIMSALESREASON ds
         ON fisr.salesreasonkey = ds.salesreasonkey
    For questions related to sales dates, left join KATER.ADVENTUREWORKSDW.DIMDATE
    For questions related to the types of customers for your sales, left join KATER.ADVENTUREWORKSDW.DIMORGANIZATION
    For questions related to the sales promotions, left join KATER.ADVENTUREWORKSDW.DIMPROMOTION
    For questions related to sales currencies, left join KATER.ADVENTUREWORKSDW.DIMCURRENCY
    For questions related to sales territories, left join KATER.ADVENTUREWORKSDW.DIMSALESTERRITORY
    For questions related to sales orders, count distinct SALESORDERNUMBER from FACTINTERNETSALES table
    For questions related to prices, sum UNITPRICE from FACTINTERNETSALES table
```

We're keeping this purposely open-ended for you to play around with different concepts and see what works best for your business.