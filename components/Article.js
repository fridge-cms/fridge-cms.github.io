import Head from 'next/head'

export default ({ title, children, className = 'markdown' }) =>
  <article className={className}>
    <Head><title>{title} | Fridge</title></Head>
    <h1 className='post-title'>{title}</h1>
    {/* (by && date) &&
      <div className='post-meta'>
        <span className='by'>{by} </span>
        on <span className='data'>{dateformat(new Date(date), 'mmmm dS, yyyy')}</span>
      </div>
    */}
    <div className='post-body'>{children}</div>
  </article>
