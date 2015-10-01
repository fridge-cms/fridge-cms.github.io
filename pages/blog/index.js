import React from 'react'

export default class Blog extends React.Component {
  getPosts() {
    return this.props.pages.filter(page => {
      return page.path.match(/\/blog\/(.+)/)
    })
  }

  render() {
    return <div>
      <ul>
        {this.getPosts().map(post => {
          return <li>{post.data.title}</li>
        })}
      </ul>
    </div>
  }
}
