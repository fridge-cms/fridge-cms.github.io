import React from 'react'
import { RouteHandler, Link } from 'react-router'

export default class Blog extends React.Component {
  getPosts() {
    return this.props.pages.filter(page => {
      return page.path && page.path.match(/\/blog\/(.+)/)
    })
  }

  render() {
    return <div className='blog'>
      <RouteHandler {...this.props} />
    </div>
  }
}
