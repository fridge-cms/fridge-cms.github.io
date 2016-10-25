import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import dateformat from 'dateformat'

export default class MarkdownWrapper extends Component {
  static propTypes = {
    route: PropTypes.object
  }

  render () {
    const {route} = this.props
    const {title, body, date, by} = route.page.data

    return <DocumentTitle title={`${title} | ${config.siteTitle}`}>
      <article className='markdown'>
        <h1 className='post-title'>{title}</h1>
        {(by && date) &&
          <div className='post-meta'>
            <span className='by'>{by} </span>
            on <span className='data'>{dateformat(new Date(date), 'mmmm dS, yyyy')}</span>
          </div>
        }
        <div className='post-body' dangerouslySetInnerHTML={{__html: body}} />
      </article>
    </DocumentTitle>
  }
}
