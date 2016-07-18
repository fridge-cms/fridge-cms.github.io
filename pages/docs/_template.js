import React, { Component, PropTypes } from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import { Breakpoint } from 'react-responsive-grid'
import sortBy from 'lodash/collection/sortBy'
import Header from '../../components/Header'
import { config } from 'config'

import typography from 'utils/typography'
const { rhythm } = typography

export default class Template extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleTopicChange (e) {
    return this.context.router.push(e.target.value)
  }

  render () {
    const {router} = this.context
    var docOptions, docPages;

    let childPages = config.docPages.map((p) => {
      const page = this.props.route.pages.filter(page => page.path === p).shift()
      console.log(page)
      return {
        title: page.data.title,
        path: page.path
      }
    })
    childPages = sortBy(childPages, child => child.order)

    docOptions = childPages.map(child => {
      return <option key={child.path} value={child.path}>{child.title}</option>
    })

    docPages = childPages.map(child => {
      console.log(child)
      const isActive = prefixLink(child.path) === this.props.location.pathname
      return <li key={child.path} style={{marginBottom: rhythm(1 / 2)}}>
        <Link to={prefixLink(child.path)} style={{textDecoration: 'none'}}>
          {isActive ? <strong>{child.title}</strong> : child.title}
        </Link>
      </li>
    })

    return <div>
      <Header />
      <Breakpoint minWidth={700}>
        <div>
          <div className='api-nav' style={{width: `calc(${rhythm(8)} - 1px)`}}>
            <ul>{docPages}</ul>
          </div>
          <div style={{marginLeft: `calc(${rhythm(8)})`}} className='docs'>
            {this.props.children}
          </div>
        </div>
      </Breakpoint>
      <Breakpoint maxWidth={700}>
        <strong>Topics:</strong>
        {' '}
        <select
          defaultValue={this.props.location.pathname}
          onChange={this.handleTopicChange.bind(this)}
        >
          {docOptions}
        </select>
        <br />
        <br />
        <div className='docs'>
          {this.props.children}
        </div>
      </Breakpoint>
    </div>
  }
}
