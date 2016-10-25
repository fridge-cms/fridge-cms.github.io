import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  static contextTypes = {
    loggedIn: PropTypes.bool
  }

  render () {
    const {loggedIn} = this.context
    const linkTitle = loggedIn ? 'Open dashboard' : 'Sign in'

    return <header {...this.props}>
      <div className='container'>
        <Link to='/' className='branding'>
          <img src='/img/Fridge.svg' alt='Fridge CMS' />
        </Link>
        <nav>
          <Link to='/docs/'>Documentation</Link>
          <Link to='/blog/'>Blog</Link>
          <a className='action' href='https://app.fridgecms.com'>{linkTitle}</a>
        </nav>
      </div>
      {this.props.children}
    </header>
  }
}
