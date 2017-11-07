## Starting a docs pages

```js
import docs from 'components/docs'
import markdown from 'markdown-in-js'

export default docs({
  title: ''
}, markdown`

`)
```

## Starting a blog post

```js
import post, { getPost } from 'components/post'
import markdown from 'markdown-in-js'

export default post(getPost('post-slug'), markdown`
`)
```
