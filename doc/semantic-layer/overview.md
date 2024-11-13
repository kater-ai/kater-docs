---
sidebar_position: 0
title: Overview
---

Semantic modeling in Kater is done in a layered manner, where each layer can promote to the above layer. 

The system manages three core layers:
1. Database Schema which mirrors your database
2. Unified Governed Metric Layer
3. Metrics at an Individual Playbook Level

This is a simple way to think of modeling in Kater:
<div style={{ display: "flex", justifyContent: "center", padding: "0rem 0 3rem 0" }}>
    <img src={require("../../static/img/data_model_method.png").default} width="800" />
</div>

It's best to start building the metric layer in the Playbook and definitions can then be promoted to be shared to other Personas and Playbooks.

## Core Philosophies
We believe the semantic layer should arise organically as data teams use data to solve business problems. 

Starting with your database schema, Kater builds a profile of your database objects including documentation from dbt. As the data team continues building playbooks and answering business questions, the governed metric layer becomes more established.