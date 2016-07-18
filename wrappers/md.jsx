import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

module.exports = React.createClass({
  render: function () {
    const post = this.props.route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <article className='markdown'>
          <h1 className='post-title'>{post.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.body}} />
        </article>
      </DocumentTitle>
    )
  }
})
