import React, { Component } from 'react'
import Header from '../../components/Header'

export default class Blog extends Component {
  getPosts () {
    return this.props.route.pages.filter(page => {
      return page.path && page.path.match(/\/blog\/(.+)/)
    })
  }

  render () {
    return <div>
      <Header />
      <div className='blog'>
        {this.props.children}
      </div>
    </div>
  }
}
