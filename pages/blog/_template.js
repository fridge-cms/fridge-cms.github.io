import React from 'react'
import { RouteHandler, Link } from 'react-router'
import Header from '../../components/Header'

export default class Blog extends React.Component {
  getPosts() {
    return this.props.pages.filter(page => {
      return page.path && page.path.match(/\/blog\/(.+)/)
    })
  }

  render() {
    return <div>
      <Header />
      <div className='blog'>
        <RouteHandler {...this.props} />
      </div>
    </div>
  }
}
