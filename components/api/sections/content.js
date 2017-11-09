import markdown from 'markdown-in-js'
import Code from '../Code'
import { Params, Param } from '../Params'
import { components } from 'components/docs'

export default () => markdown(components)`
# Content

## Create a new content item

<div>
${<Code name='content.create' />}
</div>

Creates a new content item.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the content will be created.
  </Param>
  <Param name=':identifier' required>
    The id or slug of the content type used to create the content item.
    The name of the content type.
  </Param>
  <Param name='active' extra={<span>default is <code>true</code></span>}>
    Boolean value indicates if the content item is active or not.
  </Param>
  <Param name='slug'>
    A unique slug identifier for the content item. One will be intelligently generated for you if not specified.
  </Param>
  <Param name='content' required>
    An array or hash of content values paired to part definition identifiers.
  </Param>
</Params>}
</div>

### HTTP Request

\`POST https://api.fridgecms.com/v1/content/type/:identifier\`

## Retrieve an existing Content item

<div>
${<Code name='content.get' />}
</div>

Retrieve the details of an existing content item. You must supply the unique site id and content id.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the content belongs.
  </Param>
  <Param name=':identifier' required>
    The id or slug of the content item.
  </Param>
</Params>}
</div>

### HTTP Request

\`GET https://api.fridgecms.com/v1/content/:identifier\`

## Update a Content item

<div>
${<Code name='content.update' />}
</div>

Updates the specified content item by setting the values of the parameters passed.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the content will be created.
  </Param>
  <Param name=':identifier' required>
    The id or slug of the content type used to create the content item.
    The name of the content type.
  </Param>
  <Param name='active' extra={<span>default is <code>true</code></span>}>
    Boolean value indicates if the content item is active or not.
  </Param>
  <Param name='slug'>
    A unique slug identifier for the content item. One will be intelligently generated for you if not specified.
  </Param>
  <Param name='content' required>
    An array or hash of content values paired to part definition identifiers.
  </Param>
</Params>}
</div>

### HTTP Request

\`PUT https://api.fridgecms.com/v1/content/:identifier\`

## Delete a Content item

<div>
${<Code name='content.delete' />}
</div>

Permanently deletes a content item. It cannot be undone.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site.
  </Param>
  <Param name=':identifier' required>
    The id of the content.
  </Param>
</Params>}
</div>

### HTTP Request

\`DELETE https://api.fridgecms.com/v1/content/:identifier\`

## List all Content

<div>
${<Code name='content.list' />}
</div>

Retrieve a list of content.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site.
  </Param>
  <Param name='type'>
    The id or slug of a content type to filter by.
  </Param>
  <Param name='active'>
    <code>true</code> or <code>false</code> or <code>all</code>. Filters content by active, inactive, or both.
  </Param>
  <Param name='limit'>
    A number which limits the amount of content retrieved.
  </Param>
  <Param name='offset'>
    A number which offsets the start of content retrieved.
  </Param>
  <Param name='sort_method' extra={<span>default is <code>date_created</code> or the sort method of the content type</span>}>
    Specify how content is sorted. Options are <code>date_created</code>, <code>manual</code>, <code>hierarchy</code>, or any valid part name.
  </Param>
  <Param name='sort_order'>
    Specify the direction of the sort. <code>asc</code> or <code>desc</code>
  </Param>
  <Param name='{part_name}'>
    Any part name/part value pair to filter by.
  </Param>
</Params>}
</div>

### HTTP Request

\`GET https://api.fridgecms.com/v1/content\`

## Upload a file

<div>
${<Code name='content.upload' />}
</div>

Upload a file asset to the specified site.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site.
  </Param>
  <Param name='file' required>
    The file to upload.
  </Param>
</Params>}
</div>

### HTTP Request

\`POST https://api.fridgecms.com/v1/content/upload\`

## Retrieve an existing file

<div>
${<Code name='content.file' />}
</div>

Retrieve an existing file. The file is sent as binary with proper \`Content-Type\` headers. You must supply the unique site id and filename.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site.
  </Param>
  <Param name=':filename' required>
    The name of the file.
  </Param>
</Params>}
</div>

### HTTP Request

\`GET https://api.fridgecms.com/v1/content/upload/:filename\`


## Public Content creation

<div>
${<Code name='content.public' />}
</div>

If a content type allows for public content creation by setting the \`api_create\` option to \`true\`, a valid public key authorized token can create content.

### Arguments

<div>
${<Params>
  <Param name=':type' required>
    The id or slug of the content type used to create the content.
  </Param>
  <Param name='content' required>
    An array or hash of content values paired to part definition identifiers.
  </Param>
</Params>}
</div>

### HTTP Request

\`POST https://api.fridgecms.com/v1/public/:type\`
`
