---
sidebar_position: 3
---

# Slack
:::info This integration allows your company to ask Butler questions directly through Slack. 

We recommend setting Butler up in a global data channel. 
:::

## Create Butler: your new Slack app
### 1. Slack Apps Page
Go to your slack apps page at https://api.slack.com/apps.

Click `create an app`. 
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/SlackCreateApp.png").default} width="500" />
</div>

Click `from an app manifest`. 
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/appmanifest.png").default} width="500" />
</div>

Pick the appropriate **workspace** you want to install Kater.

### 2. Paste the provided app manifest in YAML section
We provide an **app manifest YAML** for you to **paste** into the **`Enter app manifest below`** YAML section.


:::info Paste this Kater-specific YAML into the section:

```yaml
_metadata:
  major_version: 1
  minor_version: 1
display_information:
  name: Butler
  description: Butler is a Slack bot that helps you to answer questions about your data estate.
  background_color: "#df644a"
features:
  app_home:
    home_tab_enabled: false
    messages_tab_enabled: true
    messages_tab_read_only_enabled: true
  bot_user:
    display_name: Butler
    always_online: false
  slash_commands:
    - command: /ask
      description: Ask Butler a question about your data estate.
      usage_hint: how many customers do we have?
oauth_config:
  scopes:
    bot:
      - channels:history
      - channels:read
      - chat:write
      - groups:history
      - im:history
      - mpim:history
      - users:read
      - users:read.email
      - commands
settings:
  event_subscriptions:
    bot_events:
      - message.channels
      - message.groups
      - message.im
      - message.mpim
  interactivity:
    is_enabled: true
  org_deploy_enabled: false
  socket_mode_enabled: true
```
:::

It should look something like this:
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/yamlcopy.png").default} width="500" />
</div>

Click **Next**, and you've now created a new app in Slack!

---

## Add credentials for Kater connection
Now that you've created a new app in Slack, you can generate the tokens required to connect Kater's app to your Slack channel. 

### 1. Navigate to Integration Page
Connect --> Integrations
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/Slack.png").default} width="500" />
</div>

Click `Enable Slack Integration`.

### 2. App Token
In your new Slack app, go to -> **Basic Information** and scroll down until you see **App-Level Tokens**. 
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/appleveltoken.png").default} width="500" />
</div>

Generate a new App-Level Token with the `connections:write` scope. 
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/katertoken.png").default} width="500" />
</div>

Click **Generate** and copy this token into the **App Token** field in Kater.

### 3. Bot Token
Go to your new app and then under -> **OAuth and Permissions**.
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/oauth.png").default} width="200" />
</div>

Install **OAuth Tokens for your Workspace** if it isn't already installed.
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/enable_bot.png").default} width="600" />
</div>

Copy the **Bot User Oauth Token** and paste this in the **Bot Token** field in Kater.
<div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 3rem 0" }}>
    <img src={require("../../../static/img/oauth_token.png").default} width="600" />
</div>

You're all set!