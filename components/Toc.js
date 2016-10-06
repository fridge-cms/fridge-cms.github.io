import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

export default class Toc extends Component {
  static propTypes = {
    body: PropTypes.string.isRequired
  }

  componentDidMount () {
    const node = findDOMNode(this)
    node && node.addEventListener('click', this.handleLink, false)
  }

  componentWillUnmount () {
    const node = findDOMNode(this)
    node && node.removeEventListener('click', this.handleLink, false)
  }

  handleLink = e => {
    e.preventDefault()
    const el = document.querySelector(e.target.getAttribute('href'))
    el && el.scrollIntoView()
  }

  render () {
    const {body} = this.props
    return <div className='toc' dangerouslySetInnerHTML={{__html: body}} />
  }
}
