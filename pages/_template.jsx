import React from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import includes from 'underscore.string/include';
import { link } from 'gatsby-helpers';

import typography from 'utils/typography';

// Style code
import 'css/github.css';
import 'css/styles.css';

const { rhythm, fontSizeToPx } = typography;

module.exports = React.createClass({
  mixins: [State],

  componentDidMount: function() {
    Typekit.load({async: false})
  },

  render: function() {
    var urlPrefix, routes, docsActive, examplesActive;
    if (__GH_PAGES__) {
      urlPrefix = this.props.config.ghPagesURLPrefix;
    } else {
      urlPrefix = "";
    }
    routes = this.getRoutes().map(function(route) {
      return route.path;
    });
    docsActive = (routes.indexOf(urlPrefix + "/docs/") >= 0);
    examplesActive = (routes.indexOf(urlPrefix + "/examples/") >= 0);

    return (
      <div>
        <header>
          <Container
            style={{
              maxWidth: 960,
              padding: `${rhythm(1/2)}`,
              paddingBottom: `${rhythm(1/2)}`
            }}
          >
            <Grid
              columns={12}
              style={{
                padding: `${rhythm(1/2)} 0`
              }}
            >
              <Span
                columns={4}
                style={{
                  height: 24 // Ugly hack. How better to constrain height of div?
                }}
              >
                <Link to={`${urlPrefix}/`}>
                  <img className='branding' src='/img/Fridge.svg' />
                </Link>
              </Span>
              <Span columns={8} last={true} className='nav'>
                <Link to={`${urlPrefix}/docs/`}>Documentation</Link>
                <Link to={`${urlPrefix}/pricing/`}>Pricing</Link>
                <Link to={`${urlPrefix}/blog/`}>Blog</Link>
              </Span>
            </Grid>
          </Container>
        </header>
        <RouteHandler typography={typography} {...this.props}/>
      </div>
    );
  }
});
