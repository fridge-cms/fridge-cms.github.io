import Head from 'next/head'
import PostMeta from './PostMeta'

export default ({ name, children, date, authors = [], className = 'markdown' }) =>
  <article className={className}>
    <Head>
      <title>Fridge{name && ` - ${name}`}</title>
    </Head>
    <h1 className='post-title'>{name}</h1>
    <PostMeta date={date} authors={authors} />
    <div className='post-body'>{children}</div>
    <style jsx>{`
      article {
        max-width: 900px;
        margin: 0 auto;
      }

      h1 {
        margin-top: 2.5rem;
        text-align: center;
      }
    `}</style>
  </article>
