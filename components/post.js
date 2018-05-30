import PageTitle from 'components/PageTitle'
import posts from '../data/blog'

export const getPost = (file) => {
  // const path = file.split('/').slice(-2).join('/').replace('.js', '')
  return posts.find(post => post.href === `/blog/${file}`)
}

export default ({ slug }) => {
  const post = getPost(slug)
  return <PageTitle {...post} />
}

