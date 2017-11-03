import Link from './Link'
import PostMeta from './PostMeta'

export default ({ name, href, date, authors, children, className = 'markdown' }) =>
  <article className={className}>
    <h1 className='post-title'>
      <Link href={href} name={name} />
    </h1>
    <PostMeta date={date} authors={authors} />
    <div className='post-body'>{children}</div>
    <style jsx>{`
      article {
        max-width: 900px;
        margin: 0 auto;
      }

      h1 {
        margin-bottom: 0;
        margin-top: 2.5rem;
        text-align: center;

        :global(a) {
          color: hsl(0, 0%, 20%);
          text-decoration: none;
        }
      }
    `}</style>
  </article>
