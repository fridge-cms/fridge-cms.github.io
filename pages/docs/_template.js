import React, { Component, PropTypes } from 'react'
import DocsLink from '../../components/DocsLink'
import { Link } from 'react-router'
import { Breakpoint } from 'react-responsive-grid'

import typography from 'utils/typography'
const { rhythm } = typography

export default class Template extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  handleTopicChange (e) {
    return this.context.router.push(e.target.value)
  }

  renderNav (pages, path) {
    return pages.filter(p => p.path.match(path)).map(page => {
      return <DocsLink page={page} key={page.path} />
    })
  }

  render () {
    const {route: {pages}} = this.props

    const childPages = pages
      .filter(page => page.path.match(/^\/docs\//)).map(page => ({...page.data, path: page.path}))
      .sort((a, b) => a.order - b.order)

    const docOptions = childPages.map(child => {
      return <option key={child.path} value={child.path}>{child.title}</option>
    })

    return <div>
      <Breakpoint minWidth={700}>
        <div>
          <div className='docs-nav' style={{width: `calc(${rhythm(8)} - 1px)`}}>
            <Link to='/' className='branding'>
              <img src='/img/Fridge-dark.svg' alt='Fridge CMS' />
            </Link>
            <div className='docs-section'>
              <Link to='/docs/' activeClassName='active' onlyActiveOnIndex>Home</Link>
            </div>
            <div className='docs-section'>Introduction</div>
            <ul>{this.renderNav(childPages, /introduction/)}</ul>
            <div className='docs-section'>Development</div>
            <ul>{this.renderNav(childPages, /development/)}</ul>
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
