import React, { Component, PropTypes } from 'react'
import { RouteHandler } from 'react-router'
import typography from 'utils/typography'
import Footer from '../components/Footer'

// Style code
import 'css/railscasts.css';
import 'css/main.styl'

export default class Template extends Component {
  componentDidMount() {
    Typekit.load({async: false})
  }

  render() {
    return <div>
      <RouteHandler typography={typography} {...this.props}/>
      <Footer />
    </div>
  }
}
