const init = `
require 'fridge_api'

fridge = FridgeApi.client({
  :client_id => "sk_xxxxxxxxxxx"
  :client_secret => "xxxxxxxxxxx"
})
`

const sites = [
  {
    name: 'site.list',
    code: `${init}
sites = fridge.get("sites")`
  },
  {
    name: 'site.get',
    code: `${init}
site = fridge.get("sites/1")
`
  },
  {
    name: 'site.create',
    code: `${init}
site = fridge.post("sites", {
  :name => "My Website"
})
`
  },
  {
    name: 'site.update',
    code: `${init}
site = fridge.get("sites/1")
site.webhooks = ["http://example.com"]
fridge.put("sites/1", site.commit())
`
  },
  {
    name: 'site.delete',
    code: `${init}
fridge.delete("sites/1")`
  },
  {
    name: 'site.keys',
    code: `${init}
site = fridge.put("sites/1/regenerate_keys")
`
  }
]

const types = [
  {
    name: 'type.create',
    code: `${init}
content_type = fridge.post("types", {
  :name => "Post",
  :parts => [
    {
      :name => "title",
      :label => "Title",
      :type => "text"
    }
  ]
})`
  },
  {
    name: 'type.update',
    code: `${init}
content_type = fridge.put("types/3", {
  :name => "Post",
  :parts => [
    {
      :name => "title",
      :label => "Title",
      :type => "text"
    },
    {
      :name => "published",
      :label => "Published",
      :type => "date"
    }
  ]
})`
  },
  {
    name: 'type.delete',
    code: `${init}
fridge.delete("types/3")
`
  },
  {
    name: 'type.list',
    code: `${init}
types = fridge.get("types")`
  }
]

const content = [
  {
    name: 'content.create',
    code: `${init}
post = fridge.post("content/type/post", {
  :content => {
    :title => "My Post Title",
    :published => "2015-02-01"
  },
  :active => true
})`
  },
  {
    name: 'content.get',
    code: `${init}
post = fridge.get("content/15")`
  },
  {
    name: 'content.update',
    code: `${init}
post = fridge.put("content/15", {
  :content => {
    :title => "Draft Title",
    :published => "2015-02-01"
  },
  :active => false
})`
  },
  {
    name: 'content.delete',
    code: `${init}
fridge.delete("content/15")`
  },
  {
    name: 'content.list',
    code: `${init}
posts = fridge.get("content", {type: "post"})
`
  },
  {
    name: 'content.upload',
    code: `${init}
fridge.post("content/upload", {:file => file})`
  },
  {
    name: 'content.file',
    code: `${init}
file = fridge.get("content/upload/my_filename.txt")`
  },
  {
    name: 'content.public',
    code: `${init}
post = fridge.post("public/post", {
  :content => {
    :title => "User submitted post",
    :published => "2015-02-02"
  },
  :active => true
})`
  }
]

const roles = [
  {
    name: 'role.get',
    code: `${init}
member_role = fridge.get("roles/member")`
  },
  {
    name: 'role.create',
    code: `${init}
member_role = fridge.post("roles", {
  :name => "Member",
  :parts => [
    {
      :name => "avatar",
      :label => "Avatar",
      :type => "image"
    }
  ]
})`
  },
  {
    name: 'role.update',
    code: `${init}
fridge.put("roles/member", {
  :permissions => {
    :content_type => [:read],
    :content => [:read, :create, :update, :delete]
  }
})
`
  },
  {
    name: 'role.delete',
    code: `${init}
fridge.delete("roles/member")`
  },
  {
    name: 'role.list',
    code: `${init}
user_roles = fridge.get("roles")
`
  }
]

const users = [
  {
    name: 'user.create',
    code: `${init}
user = fridge.post("users/role/member", {
  :email => "support@fridgecms.com",
  :active => true
})
`
  },
  {
    name: 'user.update',
    code: `${init}
user = fridge.put("users/21", {
  :active => false
})
`
  },
  {
    name: 'user.delete',
    code: `${init}
fridge.delete("users/21")
`
  },
  {
    name: 'user.get',
    code: `${init}
user = fridge.get("users/21")
`
  },
  {
    name: 'user.list',
    code: `${init}
members = fridge.get("users/role/member")
`
  }
]

const list = [...sites, ...types, ...content, ...roles, ...users]

export default (name) => list.find(item => item.name === name)
