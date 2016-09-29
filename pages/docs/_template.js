import React, { Component, PropTypes } from 'react'
import Toc from '../../components/Toc'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import { Breakpoint } from 'react-responsive-grid'
import sortBy from 'lodash/collection/sortBy'
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
    let childPages = config.docPages.map((p) => {
      const page = this.props.route.pages.filter(page => page.path === p).shift()
      return {
        title: page.data.title,
        path: page.path,
        toc: page.data.toc
      }
    })
    childPages = sortBy(childPages, child => child.order)

    const docOptions = childPages.map(child => {
      return <option key={child.path} value={child.path}>{child.title}</option>
    })

    const docPages = childPages.map(child => {
      const isActive = prefixLink(child.path) === this.props.location.pathname
      return <li key={child.path} style={{marginBottom: rhythm(1 / 2)}}>
        <Link to={prefixLink(child.path)} activeClassName='active' onlyActiveOnIndex>
          {child.title}
        </Link>
        {(isActive && child.toc) && <Toc body={child.toc} />}
      </li>
    })

    return <div>
      <Breakpoint minWidth={700}>
        <div>
          <div className='docs-nav' style={{width: `calc(${rhythm(8)} - 1px)`}}>
            <Link to='/' className='branding'>
              <img src='/img/Fridge-dark.svg' alt='Fridge CMS' />
            </Link>
            <ul>{docPages}</ul>
          </div>
          <div style={{marginLeft: `calc(${rhythm(8)})`}} className='docs'>
            {this.props.children}
          </div>
        </div>
      </Breakpoint>
      <Breakpoint maxWidth={700}>
        <div className='docs-nav-mobile'>
          <Link to='/' className='branding'>
            <img src='/img/Fridge-dark.svg' alt='Fridge CMS' />
          </Link>
          <select
            defaultValue={this.props.location.pathname}
            onChange={this.handleTopicChange.bind(this)}
          >
            {docOptions}
          </select>
        </div>
        <div className='docs'>
          {this.props.children}
        </div>
      </Breakpoint>
    </div>
  }
}
