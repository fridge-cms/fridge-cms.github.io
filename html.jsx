import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'

import typography from './utils/typography'
const { TypographyStyle } = typography

export default class Html extends Component {
  static defaultProps = {
    body: ''
  };

  render() {
    let title = DocumentTitle.rewind()
    if (this.props.title) {
      title = this.props.title
    }

    return <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name='viewport' content='user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
        <title>{title}</title>
        <link rel="shortcut icon" href={this.props.favicon}/>
        <TypographyStyle/>
        <script src='https://use.typekit.net/mfk7jju.js'/>
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
        <script src={link('/bundle.js')}/>
      </body>
    </html>
  }
}
