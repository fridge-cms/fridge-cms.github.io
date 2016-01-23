import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import { rhythm, fontSizeToPx } from 'utils/typography';

export default class Footer extends Component {
  render() {
    return <footer {...this.props}>
      <Container style={{maxWidth: 960}}>
        <Grid columns={12} style={{padding: `${rhythm(1/2)} 0`}}>
          <Span columns={12} last={true}>
            <Link to='/'>Home</Link>
            <Link to='/docs/'>Documentation</Link>
            <Link to='/blog/'>Blog</Link>
            <a href='mailto:support@fridgecms.com'>Contact</a>
            <a href='https://twitter.com/fridgecms' target='__blank'>Twitter</a>
            <a href='https://github.com/fridge-cms' target='__blank'>Github</a>
          </Span>
        </Grid>
      </Container>
    </footer>
  }
}
