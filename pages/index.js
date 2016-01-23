import React, { Component } from 'react'
import {Container, Grid, Breakpoint, Span} from 'react-responsive-grid'
import Header from '../components/Header'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header className='home'>
          <div className='hero'>
            <h1><strong>Fridge.</strong> Real content management.</h1>
            <h2>A robust API and intuitive dashboard for any kind of content.</h2>
            <p>
              <a className='cta' href='https://fridgecms.com/signup'>Start Fridge for free</a>
            </p>
            <div className='interface'>
              <img src='/img/application-view.png' />
            </div>
          </div>
        </Header>
        <div className='intro'>
          <Container style={{maxWidth: 960}}>
            <h3>Fridge originated out of a need to provide true content management for everyone that made no assumptions. Developer friendly environment meets user focused intuitive UI.</h3>
          </Container>
        </div>
        <Container style={{maxWidth: 960}} className='features'>
          <Grid columuns={12} gutterRatio={2}>
            <Span columns={12}>
              <h2>Content API</h2>
            </Span>
            <Span columns={6}>
              <h3>Your content, anywhere</h3>
              <p>Fridge delivers a robust RESTful API making it accessible in several languages.</p>
            </Span>
            <Span columns={6} last>
              <h3>Complete user management</h3>
              <p>Create, manage, and authenticate users in any app you create.</p>
            </Span>
            <Span columns={6}>
              <h3>Not just websites</h3>
              <p>By focusing on content rather than a website, you can use Fridge to power any project. Apps, menus, calendars, etc.</p>
            </Span>
            <Span columns={6} last>
              <h3>Webhooks</h3>
              <p>Integrate with other services by hooking into any content change.</p>
            </Span>
          </Grid>
          <Grid columuns={12} gutterRatio={2}>
            <Span columns={12}>
              <h2>Powerful Dashboard</h2>
            </Span>
            <Span columns={6}>
              <h3>Easily create any type of content.</h3>
              <p>Don't settle. Your content should be structured your way, not by the constraints of a CMS. A long list of flexible and modular content types allow you to compose even the most complex content.</p>
            </Span>
            <Span columns={6} last>
              <h3>Customizable interface</h3>
              <p>Make your dashboard your way with a wide range of customizable display options.</p>
            </Span>
            <Span columns={6}>
              <h3>Find-grained permissions</h3>
              <p>Create and define custom permission sets that meet your specific needs. </p>
            </Span>
            <Span columns={6} last>
              <h3>Client friendly</h3>
              <p>Powerful doesn’t have to be complicated. Fridge’s dashboard is easy to use for your clients and customers as well. </p>
            </Span>
          </Grid>
        </Container>
      </div>
    )
  }
}
