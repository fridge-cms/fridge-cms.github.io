const genCode = (path, data = null, method = 'get') => {
  const parts = ['']
  if (method !== 'get') parts.push(`-X ${method.toUpperCase()}`)
  if (data) {
    parts.push(...Object.keys(data).map(key =>
      `-d ${key}=${JSON.stringify(data[key])}`
    ))
  }

  return `$ curl https://api.fridgecms.com/v1/${path}${parts.join(' \\\n    ')}`
}

const sites = [
  {
    name: 'site.auth',
    code: genCode('oauth/token', {
      grant_type: 'client_credentials',
      client_id: 'sk_xxxxxxxxxxx',
      client_secret: 'xxxxxxxxxxx'
    })
  },
  {
    name: 'site.list',
    code: genCode('sites')
  },
  {
    name: 'site.get',
    code: genCode('sites/1')
  },
  {
    name: 'site.create',
    code: genCode('sites', {name: 'Website'}, 'post')
  },
  {
    name: 'site.update',
    code: genCode('sites/1', {'webhooks[]': 'http://example.com'}, 'put')
  },
  {
    name: 'site.delete',
    code: genCode('sites/1', {}, 'delete')
  },
  {
    name: 'site.keys',
    code: genCode('sites/1/regenerate_keys', {}, 'put')
  }
]

const types = [
  {
    name: 'type.create',
    code: genCode('types', {
      site: 1,
      name: 'Post',
      'parts[]': {name: 'title', label: 'Title', type: 'text'}
    }, 'post')
  },
  {
    name: 'type.get',
    code: genCode('types/3?site=1')
  },
  {
    name: 'type.update',
    code: genCode('types/3', {
      site: 1,
      name: 'Post',
      'parts[]': {name: 'published', label: 'Publish Date', type: 'date'}
    }, 'put')
  },
  {
    name: 'type.delete',
    code: genCode('types/3', {site: 1}, 'delete')
  },
  {
    name: 'type.list',
    code: genCode('types')
  }
]

const content = [
  {
    name: 'content.create',
    code: genCode('content/type/post', {
      site: 1,
      'content[title]': 'My Post Title',
      'content[published]': '2015-02-01',
      active: 1
    }, 'post')
  },
  {
    name: 'content.get',
    code: genCode('content/15', {site: 1})
  },
  {
    name: 'content.update',
    code: genCode('content/15', {
      site: 1,
      'content[title]': 'Draft Title',
      active: 0
    }, 'put')
  },
  {
    name: 'content.delete',
    code: genCode('content/15', {site: 1}, 'delete')
  },
  {
    name: 'content.list',
    code: genCode('content?type=post&site=1')
  },
  {
    name: 'content.upload',
    code: `
$ curl https://api.fridgecms.com/v1/content/upload \
    -F file=@/path/to/filename.jpg \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1 \
`
  },
  {
    name: 'content.file',
    code: genCode('content/upload/my_filename.txt', {site: 1})
  },
  {
    name: 'content.public',
    code: genCode('public/post', {
      site: 1,
      'content[title]': 'User submitted post',
      'content[published]': '2015-02-02',
      active: 1
    })
  }
]

const roles = [
  {
    name: 'role.create',
    code: genCode('roles', {
      site: 1,
      name: 'Member',
      'parts[]': {name: 'avatar', label: 'Avatar', type: 'image'}
    }, 'post')
  },
  {
    name: 'role.get',
    code: genCode('roles/member?site=1')
  },
  {
    name: 'role.update',
    code: genCode('roles/member', {
      site: 1,
      permissions: {content_type: ['read'], content: ['read', 'create', 'update', 'delete']}
    }, 'put')
  },
  {
    name: 'role.delete',
    code: genCode('roles/member', {site: 1}, 'delete')
  },
  {
    name: 'role.list',
    code: genCode('roles?site=1')
  }
]

const users = [
  {
    name: 'user.create',
    code: genCode('users/role/member', {
      site: 1,
      email: 'support@fridgecms.com',
      active: 1
    }, 'post')
  },
  {
    name: 'user.get',
    code: genCode('users/21?site=1')
  },
  {
    name: 'user.update',
    code: genCode('users/21', {
      site: 1,
      active: 0
    }, 'put')
  },
  {
    name: 'user.delete',
    code: genCode('users/21', {site: 1}, 'delete')
  },
  {
    name: 'user.list',
    code: genCode('users?role=member&site=1')
  }
]

const list = [...sites, ...types, ...content, ...roles, ...users]

export default (name) => list.find(item => item.name === name)
