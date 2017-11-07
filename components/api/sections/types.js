import markdown from 'markdown-in-js'
import Code from '../Code'
import { Params, Param } from '../Params'

export default () => markdown`
# Content Types

## Create a new Content Type

<div>
${<Code name='type.create' />}
</div>

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the content type will be created.
  </Param>
  <Param name='name' required>
    The name of the content type.
  </Param>
  <Param name='display_order'>
    A 0-based number specifying the default order in which the content type is listed.
  </Param>
  <Param name='options'>
    An object of key/value pair options.
  </Param>
  <Param name='parts' required>
    An array of part definition objects.
  </Param>
</Params>}
</div>

### HTTP Request

\`POST https://api.fridgecms.com/v1/types\`

## Retrieve an existing Content Type

<div>
${<Code name='type.get' />}
</div>

Retrieve the details of an existing content type. You must supply the unique content type id or slug.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the content type belongs.
  </Param>
  <Param name=':identifier' required>
    The id or slug of the content type to retrieve.
  </Param>
</Params>}
</div>

### HTTP Request

\`GET https://api.fridgecms.com/v1/types/:identifier\`

## Update a Content Type

<div>
${<Code name='type.update' />}
</div>

Updates the specified content type by setting the values of the parameters passed.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the content type belongs.
  </Param>
  <Param name='name'>
    The name of the content type.
  </Param>
  <Param name='display_order'>
    A 0-based number specifying the default order in which the content type is listed.
  </Param>
  <Param name='options'>
    An object of key/value pair options.
  </Param>
  <Param name='parts' required>
    An array of part definition objects.
  </Param>
</Params>}
</div>

### HTTP Request

\`PUT https://api.fridgecms.com/v1/types/:identifier\`

## Delete a Content Type

<div>
${<Code name='type.delete' />}
</div>

Permanently deletes a content type. It cannot be undone.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the content type belongs.
  </Param>
  <Param name='id' required>
    The id of the content type.
  </Param>
</Params>}
</div>

### HTTP Request

\`DELETE https://api.fridgecms.com/v1/types/:id\`

## List all Content Types

<div>
${<Code name='type.list' />}
</div>

Retrieve a list of content types.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site.
  </Param>
</Params>}
</div>

### HTTP Request

\`GET https://api.fridgecms.com/v1/types\`
`
