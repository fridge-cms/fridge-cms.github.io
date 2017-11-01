/* global Typekit */
import { Component } from 'react'
import Footer from './Footer'
import PropTypes from 'prop-types'
import cookie from 'cookie'

// Style code
// import 'css/railscasts.css'
// import 'css/main.styl'

export default class extends Component {
  state = {
    loggedIn: false
  }

  static childContextTypes = {
    loggedIn: PropTypes.bool
  }

  getChildContext () {
    return this.state
  }

  componentDidMount () {
    // Typekit.load({async: false})
    const cookies = cookie.parse(document.cookie)
    if (cookies.logged_in && cookies.logged_in === 'true') {
      this.setState({loggedIn: true})
    }
  }

  render () {
    return <div>
      {this.props.children}
      <Footer />
    </div>
  }
}
