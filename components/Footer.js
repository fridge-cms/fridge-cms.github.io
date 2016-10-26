import React, { Component } from 'react'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { rhythm } from 'utils/typography'

export default class Footer extends Component {
  render () {
    return <footer {...this.props}>
      <Container style={{maxWidth: 960}}>
        <Grid columns={12} style={{padding: `${rhythm(1 / 2)} 0`}}>
          <Span columns={12} last>
            <Link to='/'>Home</Link>
            <Link to='/docs/'>Documentation</Link>
            <Link to='/blog/'>Blog</Link>
            <a href='mailto:help@fridgecms.com'>Contact</a>
            <a href='https://twitter.com/fridgecms' target='_blank'>Twitter</a>
            <a href='https://github.com/fridge-cms' target='_blank'>Github</a>
            <Link to='/terms/'>Terms</Link>
            <Link to='/privacy-policy/'>Privacy Policy</Link>
          </Span>
        </Grid>
      </Container>
    </footer>
  }
}
