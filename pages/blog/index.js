import Head from 'next/head'
import ArticlePreview from 'components/ArticlePreview'
import posts from 'data/blog'

export default () =>
  <>
    <Head>
      <title>Blog - Fridge</title>
    </Head>
    {posts.map(post =>
      <ArticlePreview key={post.href} {...post}>
        {post.preview && <p>{post.preview}</p>}
      </ArticlePreview>
    )}
  </>
