const genCode = (path, data = null, method = "get") => {
  const parts = [""];

  if (method !== "get") {
    parts.push(`-X ${method.toUpperCase()}`);
  }

  parts.push(`-H "Authorization: xxxxxxxxxxxx"`);

  if (data) {
    parts.push(
      ...Object.keys(data).map(
        (key) => `-d ${key}=${JSON.stringify(data[key])}`
      )
    );
  }

  return `$ curl https://api.fridgecms.com/v2/${path}${parts.join(
    " \\\n    "
  )}`;
};

const sites = [
  {
    name: "site.list",
    code: genCode("sites"),
  },
  {
    name: "site.get",
    code: genCode("sites/1"),
  },
  {
    name: "site.create",
    code: genCode("sites", { name: "Website" }, "post"),
  },
  {
    name: "site.update",
    code: genCode("sites/1", { "webhooks[]": "http://example.com" }, "put"),
  },
  {
    name: "site.delete",
    code: genCode("sites/1", {}, "delete"),
  },
  {
    name: "site.keys",
    code: genCode("sites/1/regenerate_keys", {}, "put"),
  },
];

const types = [
  {
    name: "type.create",
    code: genCode(
      "types",
      {
        name: "Post",
        "parts[]": { name: "title", label: "Title", type: "text" },
      },
      "post"
    ),
  },
  {
    name: "type.get",
    code: genCode("types/3?site=1"),
  },
  {
    name: "type.update",
    code: genCode(
      "types/3",
      {
        name: "Post",
        "parts[]": { name: "published", label: "Publish Date", type: "date" },
      },
      "put"
    ),
  },
  {
    name: "type.delete",
    code: genCode("types/3", null, "delete"),
  },
  {
    name: "type.list",
    code: genCode("types"),
  },
];

const content = [
  {
    name: "content.create",
    code: genCode(
      "content/type/post",
      {
        title: "My Post Title",
        published: "2015-02-01",
        active: true,
      },
      "post"
    ),
  },
  {
    name: "content.get",
    code: genCode("content/15"),
  },
  {
    name: "content.update",
    code: genCode(
      "content/15",
      {
        title: "Draft Title",
        active: false,
      },
      "put"
    ),
  },
  {
    name: "content.delete",
    code: genCode("content/15", null, "delete"),
  },
  {
    name: "content.list",
    code: genCode("content?type=post"),
  },
  {
    name: "content.upload",
    code: `
$ curl https://api.fridgecms.com/v2/content/upload \
    -F file=@/path/to/filename.jpg \
    -H "Authorization: token xxxxxxxxxxx" \
    -d site=1 \
`,
  },
  {
    name: "content.file",
    code: genCode("content/upload/my_filename.txt"),
  },
  {
    name: "content.public",
    code: genCode("public/post", {
      title: "User submitted post",
      published: "2015-02-02",
      active: true,
    }),
  },
];

const roles = [
  {
    name: "role.create",
    code: genCode(
      "roles",
      {
        name: "Member",
        "parts[]": { name: "avatar", label: "Avatar", type: "image" },
      },
      "post"
    ),
  },
  {
    name: "role.get",
    code: genCode("roles/member"),
  },
  {
    name: "role.update",
    code: genCode(
      "roles/member",
      {
        permissions: {
          content_type: ["read"],
          content: ["read", "create", "update", "delete"],
        },
      },
      "put"
    ),
  },
  {
    name: "role.delete",
    code: genCode("roles/member", null, "delete"),
  },
  {
    name: "role.list",
    code: genCode("roles"),
  },
];

const users = [
  {
    name: "user.create",
    code: genCode(
      "users/role/member",
      {
        email: "support@fridgecms.com",
        active: true,
      },
      "post"
    ),
  },
  {
    name: "user.get",
    code: genCode("users/21"),
  },
  {
    name: "user.update",
    code: genCode(
      "users/21",
      {
        active: false,
      },
      "put"
    ),
  },
  {
    name: "user.delete",
    code: genCode("users/21", null, "delete"),
  },
  {
    name: "user.list",
    code: genCode("users?role=member"),
  },
];

const list = [...sites, ...types, ...content, ...roles, ...users];

export default (name) => list.find((item) => item.name === name);
