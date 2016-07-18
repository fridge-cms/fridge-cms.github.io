import React from 'react'
import { Link } from 'react-router'

export default class Blog extends React.Component {
  getPosts () {
    return this.props.route.pages.filter(page => {
      return page.path && page.path.match(/\/blog\/(.+)/)
    })
  }

  render () {
    return <div>
      {this.getPosts().map(post => {
        const {title, body} = post.data
        return <article key={post.path}>
          <h1 className='post-title'><Link to={post.path}>{title}</Link></h1>
          <div dangerouslySetInnerHTML={{__html: body}} />
        </article>
      })}
    </div>
  }
}
