const site = {
  id: 1,
  name: 'Website',
  date_created: '2015-01-01 01:00:00',
  date_updated: '2015-01-01 01:00:00',
  endpoints: [],
  clients: [],
  webhooks: []
}

const ok = {
  status: 200
}

const type = {
  id: 3,
  site_id: 1,
  name: 'Post',
  slug: 'post',
  collection: true,
  date_created: '2015-01-01 01:00:00',
  date_updated: '2015-01-01 01:00:00',
  display_order: 0,
  options: {
    layout: 'default',
    api_access: true,
    sort_order: 'desc',
    sort_method: 'date_created'
  },
  parts: [
    {
      name: 'title',
      label: 'Title',
      type: 'text'
    }
  ]
}

const cont = {
  id: 15,
  site_id: 1,
  document_definition_id: 3,
  date_created: '2015-02-01 01:00:00',
  date_updated: '2015-02-01 01:00:00',
  display_order: 0,
  active: 1,
  content: {
    10: 'My Post Title',
    11: '2015-02-01'
  },
  slug: 'my_post_title',
  user_id: 90
}

const role = {
  id: 7,
  site_id: 1,
  name: 'Member',
  slug: 'member',
  date_created: '2015-01-01 01:00:00',
  date_updated: '2015-01-01 01:00:00',
  display_order: 0,
  options: {},
  parts: [
    {
      name: 'photo',
      label: 'Photo',
      type: 'image'
    }
  ],
  admin_access: false,
  permissions: {}
}

const user = {
  id: 21,
  date_created: '2015-02-01 01:00:00',
  date_updated: '2015-02-01 01:00:00',
  active: true,
  content: [],
  email: 'support@fridgecms.com'
}

const sites = [
  {
    name: 'site.auth',
    res: {
      access_token: '36334bb25b63b843754b34057f4ea66756fbc14d',
      expires_in: 3600,
      token_type: 'Bearer',
      scope: null
    }
  },
  {
    name: 'site.list',
    res: [
      site,
      {
        id: 2,
        name: 'Other Website',
        date_created: '2015-01-01 01:00:00',
        date_update: '2015-01-01 01:00:00',
        endpoints: [],
        clients: [],
        webhooks: []
      }
    ]
  },
  {
    name: 'site.get',
    res: site
  },
  {
    name: 'site.create',
    res: site
  },
  {
    name: 'site.update',
    res: {...site, webhooks: ['http://example.com']}
  },
  {
    name: 'site.delete',
    res: ok
  },
  {
    name: 'site.keys',
    res: {...site, clients: [
      {
        key: 'pk_xxxxxxxxxxx',
        secret: '',
        type: 'public'
      },
      {
        key: 'sk_xxxxxxxxxxx',
        secret: 'xxxxxxxxxxx',
        type: 'private'
      }
    ]}
  }
]

const types = [
  {
    name: 'type.create',
    res: type
  },
  {
    name: 'type.update',
    res: {...type,
      parts: [...type.parts, {
        name: 'published',
        label: 'Publish Date',
        type: 'date'
      }]
    }
  },
  {
    name: 'type.delete',
    res: ok
  },
  {
    name: 'type.list',
    res: [type, {
      id: 4,
      site_id: 1,
      name: 'Event',
      date_created: '2015-01-01 01:00:00',
      date_updated: '2015-01-01 01:00:00',
      display_order: 1,
      options: {},
      parts: [
        {
          id: 12,
          name: 'location',
          label: 'Location',
          hint: 'Where the event will be held',
          type: 'text',
          required: true
        }
      ]
    }]
  }
]

const content = [
  {
    name: 'content.create',
    res: cont
  },
  {
    name: 'content.get',
    res: cont
  },
  {
    name: 'content.update',
    res: {...cont, active: false, content: {
      10: 'Draft Title',
      11: '2015-02-01'
    }}
  },
  {
    name: 'content.delete',
    res: ok
  },
  {
    name: 'content.list',
    res: [cont]
  },
  {
    name: 'content.upload',
    res: {message: 'filename.jpg', status: 200}
  },
  {
    name: 'content.file',
    res: 'Binary'
  },
  {
    name: 'content.public',
    res: {
      id: 23,
      site_id: 1,
      document_definition_id: 3,
      date_created: '2015-02-01 01:00:00',
      date_updated: '2015-02-01 01:00:00',
      display_order: 0,
      active: 1,
      content: {
        10: 'User submitted post',
        11: '2015-02-01'
      },
      slug: 'user_submitted_post'
    }
  }
]

const roles = [
  {
    name: 'role.get',
    res: role
  },
  {
    name: 'role.create',
    res: role
  },
  {
    name: 'role.update',
    res: {...role}
  },
  {
    name: 'role.delete',
    res: ok
  },
  {
    name: 'role.list',
    res: [role]
  }
]

const users = [
  {
    name: 'user.create',
    res: user
  },
  {
    name: 'user.update',
    res: {...user}
  },
  {
    name: 'user.delete',
    res: ok
  },
  {
    name: 'user.get',
    res: user
  },
  {
    name: 'user.list',
    res: [user]
  }
]

const list = [...sites, ...types, ...content, ...roles, ...users]
export default (name) => list.find(item => item.name === name)
