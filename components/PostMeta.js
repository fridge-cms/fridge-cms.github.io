import { format } from 'date-fns'

export default ({ authors = [], date }) =>
  <div className='post-meta'>
    {authors.map(author => <span key={author}>{author}</span>)}
    {date && <span className='date'> on {format(date, 'MMMM D, YYYY')}</span>}
    <style jsx>{`
      .post-meta {
        color: #939da3;
        margin-bottom: 1rem;
        text-align: center;
      }
    `}</style>
  </div>
