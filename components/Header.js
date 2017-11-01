import { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class Header extends Component {
  static contextTypes = {
    loggedIn: PropTypes.bool
  }

  render () {
    const {loggedIn} = this.context
    const linkTitle = loggedIn ? 'Open dashboard' : 'Sign in'

    return <header {...this.props}>
      <div className='container'>
        <Link href='/'>
          <a className='branding'>
            <img src='/static/Fridge.svg' alt='Fridge CMS' />
          </a>
        </Link>
        <nav>
          <Link href='/docs/'><a>Documentation</a></Link>
          <Link href='/blog/'><a>Blog</a></Link>
          <a className='action' href='https://app.fridgecms.com'>{linkTitle}</a>
        </nav>
      </div>
      {this.props.children}
    </header>
  }
}
