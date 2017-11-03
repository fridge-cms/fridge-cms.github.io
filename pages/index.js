import React, { Component } from 'react'
import Head from 'next/head'
import Page from '../components/Page'
import { Flex, Box } from 'grid-styled'
import Header from '../components/Header'
import Plan from '../components/Plan'
import Switch from '../components/Switch'
import plans from '../utils/plans'
import { colors } from '../utils/theme'

export default class Home extends Component {
  state = {
    annual: true
  }

  onChangePricing = (e) => {
    this.setState({annual: !!e.target.checked})
  }

  render () {
    const {annual} = this.state

    return <Page>
      <Head>
        <title>Fridge</title>
        <meta name='description' content='Fridge CMS' />
        <meta name='keywords' content='fridge, cms, content management system, api' />
      </Head>
      <Header className='home'>
        <div className='hero'>
          <h1><strong>Fridge.</strong> Real content management.</h1>
          <h2>A robust API and intuitive dashboard for any kind of content.</h2>
          <p>
            <a className='cta' href='https://fridgecms.com/signup'>Start Fridge for free</a>
          </p>
          <div className='interface'>
            <img src='/static/application-view.png' />
          </div>
        </div>
      </Header>
      <div className='intro'>
        <div className='container'>
          <h3>Fridge originated out of a need to provide true content management for everyone that made no assumptions. Developer friendly environment meets user focused intuitive UI.</h3>
        </div>
      </div>
      <div className='container features'>
        <Flex wrap mx={-3}>
          <Box width={1}>
            <h2>Content API</h2>
          </Box>
          <Box width={1 / 2} p={3}>
            <h3>Your content, anywhere</h3>
            <p>Fridge delivers a robust RESTful API making it accessible in several languages.</p>
          </Box>
          <Box width={1 / 2} p={3}>
            <h3>Complete user management</h3>
            <p>Create, manage, and authenticate users in any app you create.</p>
          </Box>
          <Box width={1 / 2} p={3}>
            <h3>Not just websites</h3>
            <p>By focusing on content rather than a website, you can use Fridge to power any project. Apps, menus, calendars, etc.</p>
          </Box>
          <Box width={1 / 2} p={3}>
            <h3>Webhooks</h3>
            <p>Integrate with other services by hooking into any content change.</p>
          </Box>
        </Flex>
        <Flex wrap mx={-3}>
          <Box width={1}>
            <h2>Powerful Dashboard</h2>
          </Box>
          <Box width={1 / 2} p={3}>
            <h3>Easily create any type of content.</h3>
            <p>Don't settle. Your content should be structured your way, not by the constraints of a CMS. A long list of flexible and modular content types allow you to compose even the most complex content.</p>
          </Box>
          <Box width={1 / 2} p={3}>
            <h3>Customizable interface</h3>
            <p>Make your dashboard your way with a wide range of customizable display options.</p>
          </Box>
          <Box width={1 / 2} p={3}>
            <h3>Fine-grained permissions</h3>
            <p>Create and define custom permission sets that meet your specific needs. </p>
          </Box>
          <Box width={1 / 2} p={3}>
            <h3>Client friendly</h3>
            <p>Powerful doesn’t have to be complicated. Fridge’s dashboard is easy to use for your clients and customers as well. </p>
          </Box>
        </Flex>
      </div>
      <div className='container prices'>
        <div className='text-center'>
          <h2>No Nonsense Pricing</h2>
          <div className='billing-cycle-switcher'>
            <Switch onChange={this.onChangePricing} checked={annual} />
          </div>
        </div>
        <Flex wrap mx={-2}>
          {plans.map((plan, i) =>
            <Box key={i} width={[1 / 2, 1 / 4]} p={2}>
              <Plan annual={annual} {...plan} />
            </Box>
          )}
        </Flex>
      </div>
      <style jsx>{`
        .container {
          max-width: 960px;
          margin: 0 auto;
        }

        .hero {
          text-align: center;
          padding: 5em 2em 0 2em;
          max-height: 900px;

          h1 {
            color: white;
            font-size: 2.25em;
            margin-bottom: 0.35em;

            strong {
              letter-spacing: 0.02em;
            }
          }

          h2 {
            color: rgba(255, 255, 255, .7);
          }

          .interface img {
            display: block;
            margin: 0 auto;
            pointer-events: none;
          }
        }

        .cta {
          background: ${colors.cta};
          display: inline-block;
          border-radius: 4px;
          padding: 0.4em 1em;
          color: white;
          text-decoration: none;
          margin: 0.5em 0 1.5em 0;
          transition: background .25s ease;

          &:hover {
            background: color(#70b934 shade(15%));
          }
        }

        .intro {
          border-top: 1px solid #d1d1d1;
          border-bottom: 1px solid #d1d1d1;
          padding: 4em 1em;
          text-align: center;

          h3 {
            margin: 0;
          }
        }

        .features {
          padding: 2em;

          h2 {
            text-align: center;
            margin: 3em 0 0 0;
          }

          h3 {
            margin-bottom: 1em;
          }

          h3 + p {
            margin-bottom: 2em;
          }
        }

        .billing-cycle-switcher {
          margin-bottom: 2em;

          :global(label) {
            position: relative;
          }

          :global(label .discount) {
            color: ${colors.cta};
            width: 75px;
            left: 100%;
            font-size: 0.9em;
          }
        }

        .prices {
          width: 90%;
        }
      `}</style>
    </Page>
  }
}
