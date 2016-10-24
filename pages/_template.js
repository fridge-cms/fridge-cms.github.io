/* global Typekit */
import React, { Component, PropTypes } from 'react'
import Footer from '../components/Footer'
import cookie from 'cookie'

// Style code
import 'css/railscasts.css'
import 'css/main.styl'

export default class Template extends Component {
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
    Typekit.load({async: false})
    const cookies = cookie.parse(document.cookie)
    if (cookies.logged_in && cookies.logged_in === true) {
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
