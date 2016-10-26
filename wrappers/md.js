import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import dateformat from 'dateformat'

export default class MarkdownWrapper extends Component {
  static propTypes = {
    route: PropTypes.object
  }

  render () {
    const {route} = this.props
    const {title, body, date, by} = route.page.data

    return <article className='markdown'>
      <Helmet
        title={`${title} | ${config.siteTitle}`}
      />
      <h1 className='post-title'>{title}</h1>
      {(by && date) &&
        <div className='post-meta'>
          <span className='by'>{by} </span>
          on <span className='data'>{dateformat(new Date(date), 'mmmm dS, yyyy')}</span>
        </div>
      }
      <div className='post-body' dangerouslySetInnerHTML={{__html: body}} />
    </article>
  }
}
