export default (genCode, init) => {
  const sites = [
    {
      name: 'site.auth',
      code: init
    },
    {
      name: 'site.list',
      code: genCode('sites')
    },
    {
      name: 'site.get',
      code: genCode('sites/1', null, 'get', 'site')
    },
    {
      name: 'site.create',
      code: genCode('sites', {name: 'Website'}, 'post')
    },
    {
      name: 'site.update',
      code: genCode('sites/1', {webhooks: ['http://example.com']}, 'put')
    },
    {
      name: 'site.delete',
      code: genCode('sites/1', null, 'delete')
    },
    {
      name: 'site.keys',
      code: genCode('sites/1/regenerate_keys', null, 'put')
    }
  ]

  const types = [
    {
      name: 'type.create',
      code: genCode('types', {
        site: 1,
        name: 'Post',
        parts: [{name: 'title', label: 'Title', type: 'text'}]
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
        parts: [
          {name: 'title', label: 'Title', type: 'text'},
          {name: 'published', label: 'Publish Date', type: 'date'}
        ]
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
        content: {
          title: 'My Post Title',
          published: '2015-02-01'
        },
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
        content: {
          title: 'Draft Title',
          published: '2015-02-01'
        },
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
      code: genCode('content/upload', {site: 1, file: 'file'}, 'post')
    },
    {
      name: 'content.file',
      code: genCode('content/upload/my_filename.txt', {site: 1})
    },
    {
      name: 'content.public',
      code: genCode('public/post', {
        site: 1,
        content: {
          title: 'User submitted post',
          published: '2015-02-01'
        },
        active: 1
      }, 'post')
    }
  ]

  const roles = [
    {
      name: 'role.create',
      code: genCode('roles', {
        site: 1,
        name: 'Member',
        parts: [{name: 'avatar', label: 'Avatar', type: 'image'}]
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

  return [...sites, ...types, ...content, ...roles, ...users]
}
