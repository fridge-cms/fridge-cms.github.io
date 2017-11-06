import markdown from 'markdown-in-js'
import Code from '../Code'
import { Params, Param } from '../Params'

export default () => markdown`
# User Roles

## Create a new User Role

<div>
${<Code name='role.create' />}
</div>

Creates a new user role.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the user role will be created.
  </Param>
  <Param name='name' required>
    The name of the user role.
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
  <Param name='admin_access' extra={<span>Admins only</span>}>
    Control if this role has access to the Fridge dashboard.
  </Param>
  <Param name='permissions' extra={<span>Admins only</span>}>
    An object of role-based permissions
  </Param>
</Params>}
</div>


### HTTP Request

\`POST https://api.fridgecms.com/v1/roles\`

## Retrieve an existing User Role

<div>
${<Code name='role.get' />}
</div>

Retrieve the details of an existing user role. You must supply the unique site id and user role id or slug.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the user role belongs.
  </Param>
  <Param name=':identifier' required>
    The id or slug of the user role.
  </Param>
</Params>}
</div>

### HTTP Request

\`GET https://api.fridgecms.com/v1/roles/:identifier\`

## Update a User Role

<div>
${<Code name='role.update' />}
</div>

Updates the specified user role by setting the values of the parameters passed.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the user role will be created.
  </Param>
  <Param name='name'>
    The name of the user role.
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
  <Param name='admin_access' extra={<span>Admins only</span>}>
    Control if this role has access to the Fridge dashboard.
  </Param>
  <Param name='permissions' extra={<span>Admins only</span>}>
    An object of role-based permissions
  </Param>
</Params>}
</div>

### HTTP Request

\`PUT https://api.fridgecms.com/v1/roles/:identifier\`

## Delete a User Role

<div>
${<Code name='role.delete' />}
</div>

Permanently deletes a user role. It cannot be undone.

<aside className='warning'>
All users that belong to the specified user role will also be permanently deleted.
</aside>

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the user role belongs.
  </Param>
  <Param name=':identifier' required>
    The id or slug of the user role.
  </Param>
</Params>}
</div>

### HTTP Request

\`DELETE https://api.fridgecms.com/v1/roles/:identifier\`

## List all User Roles

<div>
${<Code name='role.list' />}
</div>

Retrieve a list of user roles.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site.
  </Param>
</Params>}
</div>

### HTTP Request

\`GET https://api.fridgecms.com/v1/roles\`
`
