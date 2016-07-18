/* global Typekit */
import React, { Component } from 'react'
import Footer from '../components/Footer'

// Style code
import 'css/railscasts.css'
import 'css/main.styl'

export default class Template extends Component {
  componentDidMount () {
    Typekit.load({async: false})
  }

  render () {
    return <div>
      {this.props.children}
      <Footer />
    </div>
  }
}
