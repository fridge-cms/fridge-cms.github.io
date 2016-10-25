import React from 'react'
import { Link } from 'react-router'
import dateformat from 'dateformat'

export default class Blog extends React.Component {
  getPosts () {
    return this.props.route.pages
      .filter(page => page.path && page.path.match(/\/blog\/(.+)/))
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  }

  render () {
    return <div>
      {this.getPosts().map(post => {
        const {title, body, date, by} = post.data
        return <article key={post.path}>
          <h1 className='post-title'><Link to={post.path}>{title}</Link></h1>
          {(by && date) &&
            <div className='post-meta'>
              <span className='by'>{by} </span>
              on <span className='data'>{dateformat(new Date(date), 'mmmm dS, yyyy')}</span>
            </div>
          }
          <div className='post-body' dangerouslySetInnerHTML={{__html: body}} />
        </article>
      })}
    </div>
  }
}
