import React from 'react'
import {Container, Grid, Breakpoint, Span} from 'react-responsive-grid'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='hero'>
          <h1><strong>Fridge.</strong> Real content management.</h1>
          <h2>A robust API and intuitive dashboard for any kind of content.</h2>
          <p>
            <a href=''>Learn more</a>
            <a href=''>Sign up free</a>
          </p>
        </div>
        <Container style={{maxWidth: 960}}>
          <Grid columns={12}>
            <Span columns={12}>
              <p><strong>Fridge</strong> is a content API.</p>
            </Span>
          </Grid>
        </Container>
      </div>
    )
  }
}
