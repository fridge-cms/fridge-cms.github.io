import { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import PropTypes from 'prop-types'
import cookie from 'cookie'

export default class extends Component {
  state = {
    loggedIn: false
  }

  static childContextTypes = {
    loggedIn: PropTypes.bool
  }

  static defaultProps = {
    header: false
  }

  getChildContext () {
    return this.state
  }

  componentDidMount () {
    const cookies = cookie.parse(document.cookie)
    if (cookies.logged_in && cookies.logged_in === 'true') {
      this.setState({loggedIn: true})
    }
  }

  render () {
    const {header} = this.props

    return <div>
      {header && <Header />}
      {this.props.children}
      <Footer />
      <style global jsx>{`
        * { box-sizing: border-box; }
        html {
          position: relative;
          font-size: 100%;
          line-height: 1.5;
          min-height: 100%;
          text-size-adjust: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }

        body {
          background: white;
          color: hsl(0, 0%, 20%);
          font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,sans-serif;
          margin: 0 0 100px 0;
        }

        a {
          color: #0296ee;
          transition: color .4s ease;
        }

        .text-center {
          text-align: center;
        }

        hr {
          background: #f4f6f7;
        }

        img {
          max-width: 100%;
        }

        p {
          margin: 0;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        ul {
          margin: 0;
          padding: 0;
          margin-bottom: 1.5rem;
          list-style-position: outside;
          margin-left: 1.5rem;

          li {
            padding-left: 0;
            margin-bottom: 0.75rem;
          }
        }

        h1, h2, h3 {
          margin: 0;
          padding: 0;
          margin-bottom: 1.5rem;
          font-weight: 400;
          line-height: 2.25rem;
        }

        h1 {
          font-size: 1.61803rem;
        }

        h2 {
          font-size: 1.46957rem;
        }

        h3 {
          font-size: 1.33473rem;
        }

        @media (max-width: 640px) {
          html {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  }
}
