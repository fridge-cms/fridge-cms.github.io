import Page from './Page'
import Article from './Article'
import posts from '../data/blog'

export default (post, children) => {
  return () =>
    <Page header>
      <Article {...post}>
        {children}
      </Article>
    </Page>
}

export const getPost = (file) => {
  // const path = file.split('/').slice(-2).join('/').replace('.js', '')
  return posts.find(post => post.href === `/blog/${file}`)
}
