import React from "react";
import App, { Container } from "next/app";
import Page from "components/Page";
import Article from "components/Article";
import Documentation, { components } from "components/Documentation";

/*
 * MDX Pages don't have a way to inform their parent
 * what layout they want to use, so we decipher that here
 * without having to muddy up the markdown.
 */
const getLayout = ({ pathname }) => {
  let component = "div";
  const pageProps = {
    header: true,
  };
  const layoutProps = {};

  if (pathname.substr(0, 5) === "/docs") {
    component = Documentation;
    pageProps.header = false;
    if (pathname.split("/").pop() === "api") {
      layoutProps.className = "api";
    }
  }

  if (pathname.substr(0, 5) === "/blog") {
    component = Article;
  }

  if (pathname === "/privacy-policy") {
    component = Article;
  }

  if (pathname === "/terms") {
    component = Article;
  }

  if (pathname === "/") {
    pageProps.header = false;
  }

  return { component, layoutProps, pageProps };
};

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let componentProps = {};

    if (Component.getInitialProps) {
      componentProps = await Component.getInitialProps(ctx);
    }

    return { componentProps };
  }

  render() {
    const { Component, componentProps, router } = this.props;
    const { component: Layout, pageProps, layoutProps } = getLayout(router);

    if (Layout === Documentation) {
      componentProps.components = components;
    }

    return (
      <Container>
        <Page {...pageProps}>
          <Layout {...layoutProps}>
            <Component {...componentProps} />
          </Layout>
        </Page>
      </Container>
    );
  }
}
