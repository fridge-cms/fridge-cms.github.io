import React from 'react'
import App, {Container} from 'next/app'
import Page from 'components/Page'
import Article from 'components/Article'
import Documentation from 'components/Documentation'

const getLayout = ({ pathname }) => {
  let component = 'div'
  const pageProps = {
    header: true
  }
  const layoutProps = {}

  if (pathname.substr(0, 5) === '/docs') {
    component = Documentation
    pageProps.header = false
  }

  if (pathname.substr(0, 5) === '/blog') {
    component = Article
  }

  if (pathname === '/privacy-policy') {
    component = Article
  }

  if (pathname === '/terms') {
    component = Article
  }

  if (pathname === '/') {
    pageProps.header = false
  }

  return {component, layoutProps, pageProps}
}

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let componentProps = {}

    if (Component.getInitialProps) {
      componentProps = await Component.getInitialProps(ctx)
    }

    return {componentProps}
  }

  render () {
    const {Component, componentProps, router} = this.props
    const {component: Layout, pageProps, layoutProps} = getLayout(router)

    return <Container>
      <Page {...pageProps}>
        <Layout {...layoutProps}>
          <Component {...componentProps} />
        </Layout>
      </Page>
    </Container>
  }
}
