import markdown from 'markdown-in-js'
import Code from '../Code'
import { Params, Param } from '../Params'
import { components } from 'components/docs'

export default () => markdown(components)`
# Sites

## Create a new Fridge site

<div>
${<Code name='site.create' />}
</div>

Creates a new site. A default set of API keys will be generated and you will be
added to the reserved \`Admin\` User Role of the new site.

### Arguments

<div>
${<Params>
  <Param name='name' required>
    The name of the site.
  </Param>
  <Param name='webhooks'>
    An array of URLs that will be sent a <code>POST</code> request upon site actions.
  </Param>
  <Param name='endpoints' extra={<em>Experimental</em>}>
    An array of URLs that will be whitelisted for providing API access.
  </Param>
</Params>}
</div>

### HTTP Request

\`POST https://api.fridgecms.com/v1/sites\`

## Retrieve an existing Fridge site

<div>
${<Code name='site.get' />}
</div>

Retrieve the details of an existing site. You must supply the unique site id.

### Arguments

<div>
${<Params>
  <Param name=':id' required>
    The id of the site to retrieve.
  </Param>
</Params>}
</div>

### HTTP Request

\`GET https://api.fridgecms.com/v1/sites/:id\`

## Update a Fridge site

<div>
${<Code name='site.update' />}
</div>

Updates the specified site by setting the values of the paramters passed.

### Arguments

<div>
${<Params>
  <Param name='name'>
    The name of the site.
  </Param>
  <Param name='webhooks'>
    An array of URLs that will be sent a <code>POST</code> request upon site actions.
  </Param>
  <Param name='endpoints' extra={<em>Experimental</em>}>
    An array of URLs that will be whitelisted for providing API access.
  </Param>
</Params>}
</div>

### HTTP Request

\`PUT https://api.fridgecms.com/v1/sites/:id\`

## Delete a Fridge site

<div>
${<Code name='site.delete' />}
</div>

Permanently deletes a site. It cannot be undone.

<p className='warning'>
  All content, settings, and users belonging to the specified site are also permanently deleted.
</p>

### Arguments

<div>
${<Params>
  <Param name='id' required>
    The ID of the site to be deleted.
  </Param>
</Params>}
</div>

### HTTP Request

\`DELETE https://api.fridgecms.com/v1/sites/:id\`

## List all Fridge sites

<div>
${<Code name='site.list' />}
</div>

Retrieve a list of sites.

### HTTP Request

\`GET https://api.fridgecms.com/sites\`

## Regenerate API keys for a Fridge site

<div>
${<Code name='site.keys' />}
</div>

Deletes existing API keys and creates a new public key and private key/secret pair.

### Arguments

<div>
${<Params>
  <Param name='id' required>
    The ID of the site.
  </Param>
</Params>}
</div>

### HTTP Request

\`PUT https://api.fridgecms.com/sites/:id/regenerate_keys\`
`
