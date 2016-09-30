---
title: API Reference
order: 10
---


The Fridge API is organized around REST. It is designed to have predictable and readable URLs with HTTP response codes to indicate API errors. We support cross-origin resource sharing to allow you to interact securely with our API from a client-side web application. JSON will be returned in all responses from the API, including errors.

# Authentication

[[toc]]

```shell
$ curl https://api.fridgecms.com/v1/oauth/token \
    -d grant_type=client_credentials \
    -d client_id=sk_xxxxxxxxxxx \
    -d client_secret=xxxxxxxxxxx
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");
```

The Fridge API uses [OAuth 2.0](http://oauth.net/2/) to facilitate authentication. You provide the
public/private key and secret to retrieve an access token that can be used to
make requests. You can manage API keys on the settings page for any site you
have administrator priveledges.

API clients will take care of getting an access token for you. You only need to
provide your key and secret when creating the client.

<aside class="notice">
You must replace `client_id` and `client_secret` with the keys provided in your site settings.
</aside>

# Sites

## Create a new Site

```shell
$ curl https://api.fridgecms.com/v1/sites \
    -H "Authorization: token xxxxxxxxxxx"
    -d name="Website" \
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

site = client.post("sites", {
  :name => "Website"
})
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$site = $client->post("sites", array(
  "name" => "Website"
));
```

> Example Response:

```json
{
  "id": 1,
  "name": "Website",
  "date_created": "2015-01-01 01:00:00",
  "date_updated": "2015-01-01 01:00:00",
  "endpoints": [],
  "clients": [],
  "webhooks": []
}
```

Creates a new site. A default set of API keys will be generated and you will be
added to the reserved `Admin` User Role of the new site.

### Arguments

Parameter | Description
--------- | -----------
name | The name of the site. __Required__
webhooks | An array of URLs that will be sent a `POST` request upon site actions.
endpoints | An array of URLs that will be whitelisted for providing API access. _Experimental_

### HTTP Request

`POST https://api.fridgecms.com/v1/sites`

## Retrieve an existing Site

```shell
$ curl https://api.fridgecms.com/v1/sites/1 \
    -H "Authorization: token xxxxxxxxxxx"
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

site = client.get("sites/1")
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$site = $client->get("sites/1");
```

> Example Response:

```json
{
  "id": 1,
  "name": "Website",
  "date_created": "2015-01-01 01:00:00",
  "date_updated": "2015-01-01 01:00:00",
  "endpoints": [],
  "clients": [],
  "webhooks": []
}
```

Retrieve the details of an existing site. You must supply the unique site id.

### Arguments

Parameter | Description
--------- | -----------
id | The ID of the site to retrieve. __Required__

### HTTP Request

`GET https://api.fridgecms.com/v1/sites/{id}`

## Update a Site

```shell
$ curl https://api.fridgecms.com/v1/sites/1 \
    -X PUT \
    -H "Authorization: token xxxxxxxxxxx" \
    -d webhooks[]="http://example.com"
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

site = client.get("sites/1")
site.webhooks = ["http://example.com"]
client.put("sites/1", site.commit())
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$site = $client->get("sites/1");
$site->webhooks = array("http://example.com");
$client->put("sites/1", $site->commit());
```

> Example Response:

```json
{
  "id": 1,
  "name": "Website",
  "date_created": "2015-01-01 01:00:00",
  "date_updated": "2015-01-01 02:00:00",
  "endpoints": [],
  "clients": [],
  "webhooks": [
    "http://example.com"
  ]
}
```

Updates the specified site by setting the values of the paramters passed.

### Arguments

Parameter | Description
--------- | -----------
name      | The name of the site.
endpoints | An array of URLs that will be whitelisted for providing API access. _Experimental_
webhooks  | An array of URLs that will be sent a `POST` request upon site actions.

### HTTP Request

`PUT https://api.fridgecms.com/v1/sites/{id}`

## Delete a Site

```shell
$ curl https://api.fridgecms.com/v1/sites/1 \
    -X DELETE \
    -H "Authorization: token xxxxxxxxxxx" \
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

client.delete("sites/1")
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$client->delete("sites/1");
```

> Example Response:

```json
{
  "status": "200"
}
```

Permanently deletes a site. It cannot be undone.

<aside class="warning">
All content, settings, and users belonging to the specified site are also permanently deleted.
</aside>

### Arguments

Parameter | Description
--------- | -----------
id | The ID of the site to be deleted. __Required__

### HTTP Request

`DELETE https://api.fridgecms.com/v1/sites/{id}`

## List all Sites

```shell
$ curl https://api.fridgecms.com/v1/sites \
    -H "Authorization: token xxxxxxxxxxx" \
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

sites = client.get("sites")
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$sites = $client->get("sites");
```

> Example Response:

```json
[
  {
    "id": 1,
    "name": "Website",
    "date_created": "2015-01-01 01:00:00",
    "date_updated": "2015-01-01 02:00:00",
    "endpoints": [],
    "clients": [],
    "webhooks": [
      "http://example.com"
    ]
  },
  {
    "id": 2,
    "name": "Other Website",
    "date_created": "2015-01-01 01:00:00",
    "date_update": "2015-01-01 01:00:00",
    "endpoints": [],
    "clients": [],
    "webhooks": []
  }
]
```

Retrieve a list of sites.

### HTTP Request

`GET https://api.fridgecms.com/sites`


## Regenerate API keys for a Site

```shell
$ curl https://api.fridgecms.com/v1/sites/1/regenerate_keys \
    -X PUT \
    -H "Authorization: token xxxxxxxxxxx"
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

site = client.put("sites/1/regenerate_keys")
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$site = $client->put("sites/1/regenerate_keys");
```

> Example Response:

```json
{
  "id": 1,
  "name": "Website",
  "date_created": "2015-01-01 01:00:00",
  "date_updated": "2015-01-01 01:00:00",
  "endpoints": [],
  "clients": [
    {
      "key": "pk_xxxxxxxxxxx",
      "secret": "",
      "type": "public"
    },
    {
      "key": "sk_xxxxxxxxxxx",
      "secret": "xxxxxxxxxxx",
      "type": "private"
    }
  ],
  "webhooks": []
}
```

Deletes existing API keys and creates a new public key and private key/secret pair.

### Arguments

Parameter | Description
--------- | -----------
id | The ID of the site to regenerate API keys. __Required__

### HTTP Request

`PUT https://api.fridgecms.com/sites/{id}/regenerate_keys`

# Content Types

## Create a new Content Type

```shell
$ curl https://api.fridgecms.com/v1/types \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1 \
    -d name="Post"
    -d parts[]="{\"name\":\"title\", \"label\":\"Title\", \"type\": \"text\"}"
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

content_type = client.post("types", {
  :name => "Post",
  :parts => [
    {
      name: => "title",
      label: => "Title",
      type: => "text"
    }
  ]
})
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$contentType = $client->post("types", array(
  "name" => "Post",
  "parts" => array(
    array(
      "name" => "title",
      "label" => "Title",
      "type" => "text"
    )
  )
));
```

> Example Response:

```json
{
  "id": 3,
  "site_id": 1,
  "name": "Post",
  "date_created": "2015-01-01 01:00:00",
  "date_updated": "2015-01-01 01:00:00",
  "display_order": 0,
  "options": {},
  "parts": [
    {
      "name": "title",
      "label": "Title",
      "type": "text"
    }
  ]
}
```

Creates a new content type.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the content type will be created. __Required__
name | The name of the content type. __Required__
display_order | A zero-based number specifying the default order in which the content type is listed.
options | An object of key/value pair options.
parts | An array of part definition objects. __Required__

### HTTP Request

`POST https://api.fridgecms.com/v1/types`

## Retrieve an existing Content Type

```shell
$ curl https://api.fridgecms.com/v1/types/3?site=1 \
    -H "Authorization: token xxxxxxxxxxx" \
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

content_type = client.get("types/3")
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$contentType = $client->get("types/3");
```

> Example Response:

```json
{
  "id": 3,
  "site_id": 1,
  "name": "Post",
  "date_created": "2015-01-01 01:00:00",
  "date_updated": "2015-01-01 01:00:00",
  "display_order": 0,
  "options": {},
  "parts": [
    {
      "name": "title",
      "label": "Title",
      "type": "text"
    }
  ]
}
```

Retrieve the details of an existing content type. You must supply the unique content type id or slug.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the content type belongs. __Required__
identifier | The ID or slug of the content type to retrieve. __Required__

### HTTP Request

`GET https://api.fridgecms.com/v1/types/{identifier}`

## Update a Content Type

```shell
$ curl https://api.fridgecms.com/v1/types/3 \
    -X PUT \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1 \
    -d name="Post"
    -d parts[]="{\"name\":\"title\", \"label\":\"Title\", \"type\": \"text\"}" \
    -d parts[]="{\"name\":\"published\", \"label\":\"Publish Date\", \"type\": \"date\"}"
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

content_type = client.put("types/3", {
  :name => "Post",
  :parts => [
    {
      name:  => "title",
      label: => "Title",
      type:  => "text"
    },
    {
      name:  => "published",
      label: => "Publish Date",
      type:  => "date"
    }
  ]
})
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$contentType = $client->put("types/3", array(
  "name" => "Post",
  "parts" => array(
    array(
      "name"  => "title",
      "label" => "Title",
      "type"  => "text"
    ),
    array(
      "name"  => "published",
      "label" => "Publish Date"
      "type"  => "date"
    )
  )
));
```

> Example Response:

```json
{
  "id": 3,
  "site_id": 1,
  "name": "Post",
  "date_created": "2015-01-01 01:00:00",
  "date_updated": "2015-01-01 02:00:00",
  "display_order": 0,
  "options": {},
  "parts": [
    {
      "name": "title",
      "label": "Title",
      "type": "text"
    },
    {
      "name": "published",
      "label": "Publish Date",
      "type": "date"
    }
  ]
}
```

Updates the specified content type by setting the values of the parameters passed.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the content type belongs. __Required__
name | The name of the content type.
display_order | A zero-based number specifying the default order in which the content type is listed.
options | An object of key/value pair options.
parts | An array of part definition objects.

### HTTP Request

`PUT https://api.fridgecms.com/v1/types/{identifier}`

## Delete a Content Type

```shell
$ curl https://api.fridgecms.com/v1/types/3 \
    -X DELETE \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

client.delete("types/3")
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$client->delete("types/3");
```

> Example Response:

```json
{
  "status": "200"
}
```

Permanently deletes a content type. It cannot be undone.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the content type belongs. __Required__
id | The id of the content type to be deleted. __Required__

### HTTP Request

`DELETE https://api.fridgecms.com/v1/types/{id}`

## List all Content Types

```shell
$ curl https://api.fridgecms.com/v1/types \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

types = client.get("types")
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$types = $client->get("types");
```

> Example Response:

```json
[
  {
    "id": 3,
    "site_id": 1,
    "name": "Post",
    "date_created": "2015-01-01 01:00:00",
    "date_updated": "2015-01-01 02:00:00",
    "display_order": 0,
    "options": {},
    "parts": [
      {
        "id": "10",
        "name": "title",
        "label": "Title",
        "type": "text"
      },
      {
        "id": "11",
        "name": "published",
        "label": "Publish Date",
        "type": "date"
      }
    ]
  },
  {
    "id": 4,
    "site_id": 1,
    "name": "Event",
    "date_created": "2015-01-01 01:00:00",
    "date_updated": "2015-01-01 01:00:00",
    "display_order": 1,
    "options": {},
    "parts": [
      {
        "id": "12",
        "name": "location",
        "label": "Location",
        "hint": "Where the event will be held",
        "type": "text",
        "required": true
      }
    ]
  }
]
```

Retrieve a list of content types.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site to retrieve content types from. __Required__

### HTTP Request

`GET https://api.fridgecms.com/v1/types`

# Content

## Create a new Content item

```shell
$ curl https://api.fridgecms.com/v1/content/type/post \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1 \
    -d content[10]="My Post Title" \
    -d content[11]="2015-02-01" \
    -d active=1
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

post = client.post("content/type/post", {
  :content {
    :title => "My Post Title",
    :published => "2015-02-01",
  },
  :active => true
})
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$post = $client->post("content/type/post", array(
  "content" => array(
    "title" => "My Post Title",
    "published" => "2015-02-01"
  ),
  "active" => true
));
```

> Example Response:

```json
{
  "id": 15,
  "site_id": 1,
  "document_definition_id": 3,
  "date_created": "2015-02-01 01:00:00",
  "date_updated": "2015-02-01 01:00:00",
  "display_order": 0,
  "active": 1,
  "content": {
    "10": "My Post Title",
    "11": "2015-02-01"
  },
  "slug": "my_post_title",
  "user_id": 90
}
```

Creates a new content item.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the content item will be created. __Required__
identifier | The id or slug of the content type used to create the content item. __Required__
active | True or false value which indicates of the content item is active or not. Defaults to `true`.
slug | A unique slug identifier for the content item. One will be intelligently generated for you if not specified.
content | An array or hash of content values paired to part identifiers. __Required__

### HTTP Request

`POST https://api.fridgecms.com/v1/content/type/{identifier}`

## Retrieve an existing Content item

```shell
$ curl https://api.fridgecms.com/v1/content/15 \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1 \
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

post = client.get("content/15")
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$post = $client->get("content/15");
```

> Example Response:

```json
{
  "id": 15,
  "site_id": 1,
  "document_definition_id": 3,
  "date_created": "2015-02-01 01:00:00",
  "date_updated": "2015-02-01 01:00:00",
  "display_order": 0,
  "active": 1,
  "content": {
    "10": "My Post Title",
    "11": "2015-02-01"
  },
  "slug": "my_post_title",
  "user_id": 90
}
```

Retrieve the details of an existing content item. You must supply the unique site id and content id.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the content belongs. __Required__
identifier | The id or slug of the content item. __Required__

### HTTP Request

`GET https://api.fridgecms.com/v1/content/{identifier}`

## Update a Content item

```shell
$ curl https://api.fridgecms.com/v1/content/15 \
    -X PUT \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1 \
    -d content[10]="Draft Title" \
    -d content[11]="2015-02-01" \
    -d active=0
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

post = client.put("content/15", {
  :content {
    :title => "Draft Title",
    :published => "2015-02-01",
  },
  :active => false
})
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$post = $client->put("content/15", array(
  "content" => array(
    "title" => "Draft Title",
    "published" => "2015-02-01"
  ),
  "active" => false
));
```

> Example Response:

```json
{
  "id": 15,
  "site_id": 1,
  "document_definition_id": 3,
  "date_created": "2015-02-01 01:00:00",
  "date_updated": "2015-02-01 02:00:00",
  "display_order": 0,
  "active": 0,
  "content": {
    "10": "Draft Title",
    "11": "2015-02-01"
  },
  "slug": "draft_title",
  "user_id": 90
}
```

Updates the specified content item by setting the values of the parameters passed.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the content belongs. __Required__
identifier | The id or slug of the content item. __Required__
active | True or false value which indicates of the content item is active or not. Defaults to `true`.
slug | A unique slug identifier for the content item.
content | An array or hash of content values paired to part identifiers. __Required__

### HTTP Request

`PUT https://api.fridgecms.com/v1/content/{identifier}`

## Delete a Content item

```shell
$ curl https://api.fridgecms.com/v1/content/15 \
    -X DELETE \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1 \
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

client.delete("content/15")
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$client->delete("content/15");
```

> Example Response:

```json
{
  "status": "200"
}
```

Permanently deletes a content item. It cannot be undone.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the content belongs. __Required__
identifier | The id of the content item to be deleted. __Required__

### HTTP Request

`DELETE https://api.fridgecms.com/v1/content/{identifier}`

## List all Content

```shell
$ curl https://api.fridgecms.com/v1/content?site=1&type=3 \
    -H "Authorization: token xxxxxxxxxxx" \
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

posts = client.get("content?type=3")
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$posts = $client->get("content?type=3");
```

> Example Response:

```json
[
  {
    "id": 15,
    "site_id": 1,
    "document_definition_id": 3,
    "date_created": "2015-02-01 01:00:00",
    "date_updated": "2015-02-01 02:00:00",
    "display_order": 0,
    "active": 0,
    "content": {
      "10": "Draft Title",
      "11": "2015-02-01"
    },
    "slug": "draft_title",
    "user_id": 90
  }
]
```

Retrieve a list of content.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the content belongs. __Required__
type | The id or slug of a content type to filter by.
active | True or false or all. Filters content by active, inactive, or both states.
limit | A number which limits the amount of content retrieved.
offset | A number which offsets the start of content retrieved.
sort_method | Specify how content is sorted. Defaults to `date_created` or the sort method of a content type. Available methods are: `date_created`, `manual`, `hierarchy`, or any valid part name.
sort_order | Specify the direction of the sort. `asc` or `desc`
{part_name} | Any part name/part value pair to filter by.

### HTTP Request

`GET https://api.fridgecms.com/v1/content`

## Upload a file

```shell
$ curl https://api.fridgecms.com/v1/content/upload \
    -F file=@/path/to/filename.jpg \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1 \
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

client.post("content/upload", {:file => file})
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$client->post("content/upload", array("file" => $file_handle));
```

> Example Response:

```json
{
  "message": "filename.jpg",
  "status": "200"
}
```

Upload a file asset to the specified site.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the file belongs. __Required__
file | The file to upload. __Required__

### HTTP Request

`POST https://api.fridgecms.com/v1/content/upload`

## Retrieve an existing file

```shell
$ curl https://api.fridgecms.com/v1/content/filename.jpg \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1 \
```

```ruby
require 'fridge_api'

client = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})

client.post("content/upload", {:file => file})
```

```php
<?php

$client = new \FridgeApi\Client("sk_xxxxxxxxxxx", "xxxxxxxxxxx");

$client->post("content/upload", array("file" => $file_handle));
```

Retrieve an existing file. The file is sent as binary with proper `Content-Type` headers. You must supply the unique site id and filename.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the file belongs. __Required__
filename | The name of the file. __Required__

### HTTP Request

`GET https://api.fridgecms.com/v1/content/upload/{filename}`


## Public Content creation

If a content type allows for public content creation by setting the `api_create` option to `true`, a valid public key authorized token can create content.

### Arguments

Parameter | Description
--------- | -----------
type | The id or slug of the content type used to create the content item. __Required__
content | An array or hash of content values paired to part identifiers. __Required__

### HTTP Request

`POST https://api.fridgecms.com/v1/public/{identifier}`

# Settings

## Create a new Setting set

Creates a new settings set.

### Arguments

Parameter | Description
--------- | -----------
name | The name of the settings. __Required__
display_order | A zero-based number specifying the default order in which the setting set is displayed.
options | An object of key/value pair options.
parts | An array of part definition objects. __Required__

### HTTP Request

`POST https://api.fridgecms.com/v1/settings`

## Retrieve an existing Setting set

Retrieve the details of an existing setting set. You must supply the unique site id and setting set id.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the setting set belongs. __Required__
identifier | The id or slug of the setting set. __Required__

### HTTP Request

`GET https://api.fridgecms.com/v1/settings/{identifier}`

## Update a Setting set

Updates the specified setting set by setting the values of the parameters passed.

### Arguments

Parameter | Description
--------- | -----------
name | The name of the settings. __Required__
display_order | A zero-based number specifying the default order in which the setting set is displayed.
options | An object of key/value pair options.
parts | An array of part definition objects. __Required__
settings | An array or hash of values paired to part identifiers.

### HTTP Request

`PUT https://api.fridgecms.com/v1/settings/{identifier}`

## Delete a Setting set

Permanently deletes a setting set. It cannot be undone.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the setting set belongs. __Required__
identifier | The id of the setting set to be deleted. __Required__

### HTTP Request

`DELETE https://api.fridgecms.com/v1/settings/{identifier}`

## List all Settings

Retrieve a list of setting sets.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site to retrieve setting sets from. __Required__

### HTTP Request

`GET https://api.fridgecms.com/v1/settings`

# User Roles

## Create a new User Role

Creates a new user role.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the user role will be created. __Required__
name | The name of the user role. __Required__
display_order | A zero-based number specifying the default order in which the user role is listed.
options | An object of key/value pair options.
parts | An array of part definition objects. __Required__

### HTTP Request

`POST https://api.fridgecms.com/v1/roles`

## Retrieve an existing User Role

Retrieve the details of an existing user role. You must supply the unique site id and user role id or slug.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the user role belongs. __Required__
identifier | The ID or slug of the user role to retrieve. __Required__

### HTTP Request

`GET https://api.fridgecms.com/v1/roles/{identifier}`

## Update a User Role

Updates the specified user role by setting the values of the parameters passed.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the user role belongs. __Required__
name | The name of the user role.
display_order | A zero-based number specifying the default order in which the user role is listed.
options | An object of key/value pair options.
parts | An array of part definition objects.

### HTTP Request

`PUT https://api.fridgecms.com/v1/roles/{identifier}`

## Delete a User Role

Permanently deletes a user role. It cannot be undone.

<aside class="warning">
All users that belong to the specified user role will also be permanently deleted.
</aside>

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the user role belongs. __Required__
id | The id of the user role to be deleted. __Required__

### HTTP Request

`DELETE https://api.fridgecms.com/v1/roles/{id}`

## List all User Roles

Retrieve a list of user roles.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site to retrieve user roles from. __Required__

### HTTP Request

`GET https://api.fridgecms.com/v1/roles`

# Users

## Create a new User

Creates a new user.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the user will be created. __Required__
identifier | The id or slug of the user role used to create the user. __Required__
active | True or false value which indicates if the user is active or not. Defaults to `true`.
email | Email address. __Required__
password | Password. __Required__
content | An array or hash of content values paired to part identifiers. __Required__

<aside>
If you create a new user that has the same email as another user from a different site, Fridge will allow that existing user access to the specified site id rather than creating a new user.
</aside>

### HTTP Request

`POST https://api.fridgecms.com/v1/users/role/{identifier}`

## Retrieve an existing User

Retrieve the details of an existing user. You must supply the unique site id and user id.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the user belongs. __Required__
identifier | The ID of the user. __Required__

### HTTP Request

`GET https://api.fridgecms.com/v1/users/{identifier}`

## Update a User

Updates the specified user by setting the values of the parameters passed.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the user belongs. __Required__
identifier | The id of the user. __Required__
active | True or false value which indicates of the content item is active or not. Defaults to `true`.
email | The email of the user. __Required__
password | Supplying a password will change the password of the user.
content | An array or hash of content values paired to part identifiers. __Required__

### HTTP Request

`PUT https://api.fridgecms.com/v1/users/{identifier}`

## Delete a User

Permanently deletes a user. It cannot be undone.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the user belongs. __Required__
identifier | The id of the user to be deleted. __Required__

### HTTP Request

`DELETE https://api.fridgecms.com/v1/user/{identifier}`

## List all Users

Retrieve a list of users.

### Arguments

Parameter | Description
--------- | -----------
site | The id of the site where the user belongs. __Required__
role | The id or slug of a user role to filter by.
active | True or false or all. Filters users by active, inactive, or both states.
limit | A number which limits the amount of users retrieved.
offset | A number which offsets the start of users retrieved.
sort_method | Specify how users are sorted. Defaults to `date_created` or the sort method of a user role. Available methods are: `date_created`, `manual`, or any valid part name.
sort_order | Specify the direction of the sort. `asc` or `desc`
{part_name} | Any part name/part value pair to filter by.

### HTTP Request

`GET https://api.fridgecms.com/v1/users`


