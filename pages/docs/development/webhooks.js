import docs from 'components/docs'
import markdown from 'markdown-in-js'

export default docs({
  title: 'Webhooks'
}, markdown`
Webhooks allow developers to add functionality to their Fridge projects that react to changes in Fridge content.

## Creating Webhooks

On the *Fridge Settings* page, there is a section to add webhooks. Enter the full URL for each webhook you wish Fridge to send events to.

## Event Payload

When Fridge sends out webhooks, it sends a \`POST\` request to the URLs that have been assigned. The body of the request is a \`JSON\` payload of the event that has occurred. Here is a list of the possible events:

* \`site.create\`
* \`site.update\`
* \`site.delete\`
* \`type.create\`
* \`type.update\`
* \`type.delete\`
* \`settings.create\`
* \`settings.update\`
* \`settings.delete\`
* \`content.create\`
* \`content.update\`
* \`content.delete\`
* \`user_role.create\`
* \`user_role.update\`
* \`user_role.delete\`
* \`users.create\`
* \`users.update\`
* \`users.add_location\`
* \`users.delete\`

Example Event payload:

\`\`\`json
{
  "type": "content.create",
  "site_id": 1,
  "request": "/v1/content/type/blog_post",
  "data": {
    "id": 15,
    "site_id": 1,
    "document_definition_id": 3,
    "date_created": "2015-02-01 01:00:00",
    "date_updated": "2015-02-01 01:00:00",
    "display_order": 0,
    "active": true,
    "content": {
      "title": "My Post Title",
      "published": true
    },
    "slug": "my_post_title",
    "user_id": 90
  }
}
\`\`\`
`)
