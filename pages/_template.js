/* global Typekit */
import React, { Component, PropTypes } from 'react'
import Footer from '../components/Footer'

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

    // check if logged in to FridgeCMS
    const loginCheck = document.createElement('iframe')
    loginCheck.src = 'https://fridgecms.com/login?redirect=/fridge_logo.svg'
    loginCheck.style = 'display: none'
    loginCheck.onload = e => {
      this.setState({loggedIn: true})
    }
    document.body.appendChild(loginCheck)
  }

  render () {
    return <div>
      {this.props.children}
      <Footer />
    </div>
  }
}
