import React, { Component, PropTypes } from 'react'
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import includes from 'underscore.string/include';
import { link } from 'gatsby-helpers';

import typography from 'utils/typography';

// Style code
import 'css/railscasts.css';
import 'css/main.styl'

const { rhythm, fontSizeToPx } = typography;

export default class Template extends Component {
  componentDidMount() {
    Typekit.load({async: false})
  }

  render() {
    const urlPrefix = ''

    return <div>
      <header>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1/2)}`,
            paddingBottom: `${rhythm(1/2)}`
          }}>
          <Grid columns={12} style={{padding: `${rhythm(1/2)} 0`}}>
            <Span columns={4} style={{height: 24}}>
              <Link to={`${urlPrefix}/`}>
                <img className='branding' src='/img/Fridge.svg' />
              </Link>
            </Span>
            <Span columns={8} last={true} className='nav'>
              <Link to={`${urlPrefix}/docs/`}>Documentation</Link>
              <Link to={`${urlPrefix}/pricing/`}>Pricing</Link>
              <Link to={`${urlPrefix}/blog/`}>Blog</Link>
              <a className='action' href='https://fridgecms.com'>Sign in</a>
            </Span>
          </Grid>
        </Container>
      </header>
      <RouteHandler typography={typography} {...this.props}/>
    </div>
  }
}
