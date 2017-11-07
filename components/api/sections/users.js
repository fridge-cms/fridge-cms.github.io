import markdown from 'markdown-in-js'
import Code from '../Code'
import { Params, Param } from '../Params'

export default () => markdown`
# Users

## Create a new user

<div>
${<Code name='user.create' />}
</div>

Creates a new user.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the user will be created.
  </Param>
  <Param name=':identifier' required>
    The id or slug of the user role used to create the user.
  </Param>
  <Param name='active' extra={<span>default is <strong>true</strong></span>}>
    The id of the site where the user will be created.
  </Param>
  <Param name='email' required extra='unique'>
    Email address.
  </Param>
  <Param name='password' required>
    Password.
  </Param>
  <Param name='content' required>
    An array or hash of content values paired to part identifiers
  </Param>
</Params>}
</div>

> If you create a new user that has the same email as another user from a different site, Fridge will allow that existing user access to the specified site id rather than creating a new user.

### HTTP Request

\`POST https://api.fridgecms.com/v1/users/role/:identifier\`

## Retrieve an existing User

<div>
${<Code name='user.get' />}
</div>

Retrieve the details of an existing user. You must supply the unique site id and user id.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the user belongs.
  </Param>
  <Param name=':id' required>
    The id of the user.
  </Param>
</Params>}
</div>

### HTTP Request

\`GET https://api.fridgecms.com/v1/users/:identifier\`

## Update a User

<div>
${<Code name='user.update' />}
</div>

Updates the specified user by setting the values of the parameters passed.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the user belongs.
  </Param>
  <Param name=':id' required>
    The id of the user.
  </Param>
  <Param name='active' extra={<span>default is <strong>true</strong></span>}>
    Boolean which indicates if the user is active or not.
  </Param>
  <Param name='email' required extra='unique'>
    Email address.
  </Param>
  <Param name='password' required extra='Admins only'>
    Supplying a passowrd will change the password of the user.
  </Param>
  <Param name='content' required>
    An array or hash of content values paired to part identifiers
  </Param>
</Params>}
</div>

### HTTP Request

\`PUT https://api.fridgecms.com/v1/users/:id\`

## Delete a User

<div>
${<Code name='user.delete' />}
</div>

Permanently deletes a user. It cannot be undone.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site where the user belongs.
  </Param>
  <Param name=':id' required>
    The id of the user.
  </Param>
  <Param name='active' extra={<span>default is <strong>true</strong></span>}>
    Boolean which indicates if the user is active or not.
  </Param>
  <Param name='email' required extra='unique'>
    Email address.
  </Param>
  <Param name='password' required extra='Admins only'>
    Supplying a passowrd will change the password of the user.
  </Param>
  <Param name='content' required>
    An array or hash of content values paired to part identifiers
  </Param>
</Params>}
</div>

### HTTP Request

\`DELETE https://api.fridgecms.com/v1/user/:id\`

## List all Users

<div>
${<Code name='user.list' />}
</div>

Retrieve a list of users.

### Arguments

<div>
${<Params>
  <Param name='site' required>
    The id of the site.
  </Param>
  <Param name='role'>
    The id or slug of a user role to filter by.
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
  <Param name='sort_method' extra={<span>default is <code>date_created</code> or the sort method of the user role</span>}>
    Specify how users are sorted. Options are <code>date_created</code>, <code>manual</code>, or any valid part name.
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

\`GET https://api.fridgecms.com/v1/users\`
`
