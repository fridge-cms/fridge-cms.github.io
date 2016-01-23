import React, { Component } from 'react'
import { Link } from 'react-router'
import { rhythm, fontSizeToPx } from 'utils/typography';

export default class Header extends Component {
  render() {
    return <header {...this.props}>
      <div className='container'>
        <Link to='/' className='branding'>
          <img src='/img/Fridge.svg' alt='Fridge CMS' />
        </Link>
        <nav>
          <Link to='/docs/'>Documentation</Link>
          <Link to='/blog/'>Blog</Link>
          <a className='action' href='https://fridgecms.com'>Sign in</a>
        </nav>
      </div>
      {this.props.children}
    </header>
  }
}
