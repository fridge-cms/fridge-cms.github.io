/* global localStorage */
import { Component } from "react";
import Docs, { components } from "components/Documentation";
import PageTitle from "components/PageTitle";
import LangPicker from "components/api/LangPicker";
import { langs } from "data/api";
import ScrollTrackHeading from "components/ScrollTrackHeading";
import { MDXProvider } from "@mdx-js/react";

import Auth from "components/api/v2/auth.mdx";
// import Sites from "components/api/v2/sites.mdx";
// import Types from "components/api/sections/types.mdx";
// import Content from "components/api/sections/content.mdx";
// import Roles from "components/api/sections/roles.mdx";
// import Users from "components/api/sections/users.mdx";

export default class extends Component {
  state = {
    lang: "node",
  };

  componentDidMount() {
    const defaultLang = localStorage.getItem("fridge:docs:lang");
    if (defaultLang) this.setState({ lang: defaultLang });
  }

  onChangeLang = (lang) => {
    localStorage.setItem("fridge:docs:lang", lang);
    this.setState({ lang });
  };

  render() {
    const { lang } = this.state;

    const Component = () => (
      <div className={`lang-${lang}`}>
        <PageTitle name="API Reference" />
        <MDXProvider components={components}>
          <Auth />
          {/* <Sites />
          <Types />
          <Content />
          <Roles />
          <Users /> */}
        </MDXProvider>
        <div className="code-bg" />
        <LangPicker value={lang} onChange={this.onChangeLang} langs={langs} />
        <style jsx global>{`
          .api {
            color: #444;
            margin: 0 0 0 320px;
            padding-bottom: 80px;
            padding-top: 75px;
            position: relative;

            p,
            aside,
            ol,
            ul,
            table,
            dl,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin-right: 50%;
            }

            h1,
            h2 {
              clear: both;
            }

            h1 {
              border-top: 1px solid #dfdfdf;
              margin-top: 2em;
              padding-top: 1em;
            }

            > h1,
            :global(.page-title) {
              border: 0;
            }

            h2 {
              margin: 5rem 0 0.25em 0;
            }

            h3 {
              font-size: 0.75em;
              margin-bottom: 0;
              text-transform: uppercase;
            }

            .warning {
              border-left: 2px solid orange;
              padding-left: 1rem;
            }
          }

          .code-bg {
            width: 50%;
            //background: #292929;
            background: #2a2734;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
          }
        `}</style>
        <style>
          {langs
            .map(
              (lang) => `
          .lang-${lang.value} [data-language] { display: none; }
          .lang-${lang.value} [data-language=${lang.syntax}] { display: block; }
          .lang-${lang.value} [data-language=json] { display: block; }
        `
            )
            .join("")}
        </style>
      </div>
    );

    return (
      <ScrollTrackHeading>
        <Component />
      </ScrollTrackHeading>
    );
  }
}
