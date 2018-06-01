import { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class Header extends Component {
  static contextTypes = {
    loggedIn: PropTypes.bool
  }

  render () {
    const {loggedIn} = this.context
    const {className = '', children} = this.props
    const linkTitle = loggedIn ? 'Open dashboard' : 'Sign in'

    return <header className={className}>
      <div className='container'>
        <Link href='/'>
          <a className='branding'>
            <img src='/static/Fridge.svg' alt='Fridge CMS' />
          </a>
        </Link>
        <nav>
          <Link href='/docs'><a>Documentation</a></Link>
          <Link href='/blog'><a>Blog</a></Link>
          <a className='action' href='https://fridge.app'>{linkTitle}</a>
        </nav>
      </div>
      {children}
      <style jsx>{`
        header {
          background: #15222c;
          padding: 3em 0 2em 0;

          &.home {
            background: linear-gradient(to bottom, #15222c 0%, #294151 200%);
            padding: 3em 0 0 0;
          }
        }

        .container {
          width: 90%;
          max-width: 960px;
          margin: 0 auto;
        }

        .branding img {
          height: 40px;
          margin: -0.5em 0 0 0;
        }

        nav {
          float: right;
          text-align: right;

          a {
            color: rgba(255, 255, 255, .7);
            margin-left: 1em;
            text-decoration: none;

            &:hover {
              color: rgba(255, 255, 255, 1);
            }

            &.action {
              color: white;
              border: 1px solid white;
              border-radius: 3px;
              padding: .25em .6em;

              &:hover {
                color: white;
              }
            }
          }
        }

        @media (max-width: 640px) {
          .branding {
            display: block;
            margin-bottom: 1em;
            text-align: center;
          }

          nav {
            display: block;
            float: none;
            text-align: center;
          }
        }
      `}</style>
    </header>
  }
}
