import React, { Component, PropTypes } from 'react'
import { RouteHandler, Link } from 'react-router'
import { Breakpoint } from 'react-responsive-grid'
import Typography from 'typography'
import sortBy from 'lodash/collection/sortBy'
import { templateChildrenPages } from 'gatsby-helpers'
import Header from '../../components/Header'

var typography = new Typography();
var rhythm = typography.rhythm, fontSizeToMS = typography.fontSizeToMS;

export default class Template extends Component {
  static contextTypes = {
    router : PropTypes.func
  }

  handleTopicChange(e) {
    const {router} = this.context
    return router.transitionTo(e.target.value)
  }

  render() {
    const {router} = this.context
    var childPages, docOptions, docPages;
    rhythm = this.props.typography.rhythm;
    childPages = templateChildrenPages(__filename, this.props.state).map(child => {
      return {
        title: child.data.title,
        order: child.data.order,
        path: child.path
      }
    })
    childPages = sortBy(childPages, child => child.order)

    docOptions = childPages.map(child => {
      return <option key={child.path} value={child.path}>{child.title}</option>
    })

    docPages = childPages.map(child => {
      const isActive = router.isActive(child.path)
      return <li key={child.path} style={{marginBottom: rhythm(1/2)}}>
        <Link to={child.path} style={{textDecoration: 'none'}}>
          {isActive ? <strong>{child.title}</strong> : child.title }
        </Link>
      </li>
    })

    return <div>
      <Header />
      <Breakpoint minWidth={700}>
        <div>
          <div className='api-nav' style={{width: `calc(${rhythm(8)} - 1px)`}}>
            <ul
              style={{
                listStyle: 'none',
                marginLeft: 0,
                marginTop: rhythm(1/2)
              }}>
                {docPages}
            </ul>
          </div>
          <div style={{marginLeft: `calc(${rhythm(8)})`}} className='docs'>
            <RouteHandler typography={typography} {...this.props}/>
          </div>
        </div>
      </Breakpoint>
      <Breakpoint maxWidth={700}>
        <strong>Topics:</strong>
        {' '}
        <select
          defaultValue={this.props.state.path}
          onChange={this.handleTopicChange.bind(this)}
        >
          {docOptions}
        </select>
        <br />
        <br />
        <div className='docs'>
          <RouteHandler typography={typography} {...this.props}/>
        </div>
      </Breakpoint>
    </div>
  }
}
