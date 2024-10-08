---
sidebar_position: 4
---

# BigQuery

Kater can connect to BigQuery using the `BigQuery` connection type. 

:::info
## How it Works
* Kater encrypts your credentials via an encryption key stored in AWS secrets manager. 
* When you connect to BigQuery, Kater temporarily uses your credentials via SSL to authenticate with BigQuery. 
* Your selected metadata (table names, columns, datatypes) are stored in Kater's database.
* Everything is encrypted at rest and in-transit. 
:::

----

## Prerequisites
1. [Create a BigQuery role](https://cloud.google.com/iam/docs/creating-custom-roles) with at least the following permissions:
```bigquery.datasets.get
bigquery.tables.get
bigquery.tables.getData
bigquery.tables.list
bigquery.datasets.get
bigquery.jobs.create
bigquery.tables.list
```
2. [Create a service account key through the Console](https://cloud.google.com/iam/docs/keys-create-delete#creating) with the **JSON Key Type**.
<details>
<summary>Steps to obtain JSON key.</summary>
<p>
In the Google Cloud console, go to the [Service accounts](https://console.cloud.google.com/iam-admin/serviceaccounts?walkthrough_id=iam--create-service-account-keys&start_index=1&_ga=2.122270155.177354488.1727564873-53767880.1727564873#step_index=1) page.

The remaining steps appear in the Google Cloud console.

1. Select a project.
2. Click the email address of the service account that you want to create a key for.
3. Click the **Keys** tab.
4. Click the Add key drop-down menu, then select **Create New Key**.
5. Select **JSON** as the **Key type** and click **Create**.
6. Clicking **Create** downloads a service account key file. After you download the key file, you cannot download it again.

The downloaded key has the following format, where `PRIVATE_KEY` is the private portion of the public/private key pair:
```json
{
  "type": "service_account",
  "project_id": "PROJECT_ID",
  "private_key_id": "KEY_ID",
  "private_key": "-----BEGIN PRIVATE KEY-----\nPRIVATE_KEY\n-----END PRIVATE KEY-----\n",
  "client_email": "SERVICE_ACCOUNT_EMAIL",
  "client_id": "CLIENT_ID",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/SERVICE_ACCOUNT_EMAIL"
}
```
Make sure to store the key file securely, because it can be used to authenticate as your service account. You can move and rename this file however you would like.

</p>
</details>

Make sure you copy the above generated `Key` for the Kater Portal.

----

## Connect to Kater
Go to your Kater Portal and follow these steps to connect to BigQuery.

### 1. Click on the `Connect` tab on the sidebar.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectSidebar.png").default} width="150" />
</div>

### 2. Under `Data Store`, select `Big Query`.

<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/DataStore_BQ.png").default} width="900" />
</div>

### 3. Add your BigQuery `Project ID` and `JSON Key Type` as defined in the Prerequisites Section. 
:::tip
**`PROJECT_ID`:** Your Google Cloud project ID. Project IDs are alphanumeric strings, like `my-project`.
:::
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/ConnectionBQ.png").default} width="500" />
</div>

### 4. Go to the `Metadata` tab on the top left.
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/Metadata_tab.png").default} width="400" />
</div>

### 5. Select the databases, schemas, and tables you want Kater to have access to. 
:::note
The tables you do not select will not be parsed and will not be available in Kater.
:::
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../static/img/SelectTablesDW.png").default} width="400" />
</div>

### 6. Click `Save and Process Metadata`. 
:::tip 
To import new tables, click the `Refresh` button on the bottom to retrieve new metadata.
<div style={{ display: "flex", justifyContent: "center", padding: "1rem 0 1rem 0" }}>
    <img src={require("../../static/img/retrieve_metadata.png").default} width="300" />
</div>
:::

### 7. You should see the tables being processed on the right, with 2 background jobs running: 
* **Description Generator:** We use AI to auto-generate descriptions for you where we haven't already found dbt descriptions for. 
* **Profiler:** For all varchar columns, we obtain a sample of data. For all numeric columns, we profile a min/max.

<div style={{ display: "flex", justifyContent: "center", padding: "1rem 0 3rem 0" }}>
    <img src={require("../../static/img/all_tables.png").default} width="1000" />
</div>

### 8. You're ready to [create a Persona](../personas/) so you can add these tables to a team.