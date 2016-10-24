import React, { Component, PropTypes } from 'react'
import Toc from './Toc'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

export default class DocsLink extends Component {
  static propTypes = {
    page: PropTypes.object
  }

  render () {
    const {page} = this.props
    const pagePath = prefixLink(page.path)

    return <li>
      <Link to={pagePath} activeClassName='active' onlyActiveOnIndex>
        {page.title}
      </Link>
      {(!!page.toc) && <Toc body={page.toc} />}
    </li>
  }
}
