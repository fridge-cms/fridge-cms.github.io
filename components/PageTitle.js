import Head from 'next/head'
import PostMeta from 'components/PostMeta'

export default ({ name, authors = [], date = null }) =>
  <hgroup>
    <h1 className='page-title'>{name}</h1>
    <Head>
      <title>Fridge{name && ` - ${name}`}</title>
    </Head>
    <PostMeta date={date} authors={authors} />
  </hgroup>
