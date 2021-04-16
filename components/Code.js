import refractor from "refractor/core";
import bash from "refractor/lang/bash";
import js from "refractor/lang/javascript";
import php from "refractor/lang/php";
import ruby from "refractor/lang/ruby";
import json from "refractor/lang/json";
import toH from "hast-to-hyperscript";
import React from "react";

refractor.register(bash);
refractor.register(js);
refractor.register(php);
refractor.register(ruby);
refractor.register(json);

export default ({ children = "", language, ...props }) => {
  const code = toH(
    React.createElement,
    {
      type: "element",
      tagName: "code",
      properties: props,
      children: refractor.highlight(String(children), language),
    },
    { react: true }
  );

  return (
    <pre data-language={language} className={`language-${language}`}>
      {code}
      <style jsx global>{`
        code[class*="language-"],
        pre[class*="language-"] {
          font-family: Hack, monospace;
          font-size: 14px;
          line-height: 1.375;
          direction: ltr;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;

          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;

          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
          background: #2a2433;
          /* color: #b886fd; */
          color: #c7a0fe;
        }

        pre[class*="language-"]::-moz-selection,
        pre[class*="language-"] ::-moz-selection,
        code[class*="language-"]::-moz-selection,
        code[class*="language-"] ::-moz-selection {
          text-shadow: none;
          background: #8f51e6;
        }

        pre[class*="language-"]::selection,
        pre[class*="language-"] ::selection,
        code[class*="language-"]::selection,
        code[class*="language-"] ::selection {
          text-shadow: none;
          background: #8f51e6;
        }

        /* Code blocks */
        pre[class*="language-"] {
          padding: 1em;
          margin: 0.5em 0;
          overflow: auto;
        }

        /* Inline code */
        :not(pre) > code[class*="language-"] {
          padding: 0.1em;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #635775;
        }

        .token.punctuation {
          color: #635775;
        }

        .token.namespace {
          opacity: 0.7;
        }

        .token.tag,
        .token.operator,
        .token.number {
          color: #ed655e;
        }

        .token.property,
        .token.function {
          color: #b886fd;
        }

        .token.tag-id,
        .token.selector,
        .token.atrule-id {
          color: #f3ebff;
        }

        code.language-javascript,
        .token.attr-name {
          color: #d6b9fe;
        }

        code.language-css,
        code.language-scss,
        .token.boolean,
        .token.string,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .language-scss .token.string,
        .style .token.string,
        .token.attr-value,
        .token.keyword,
        .token.control,
        .token.directive,
        .token.unit,
        .token.statement,
        .token.regex,
        .token.atrule {
          color: #ffb6b3;
        }

        .token.placeholder,
        .token.variable {
          color: #ffb6b3;
        }

        .token.deleted {
          text-decoration: line-through;
        }

        .token.inserted {
          border-bottom: 1px dotted #f3ebff;
          text-decoration: none;
        }

        .token.italic {
          font-style: italic;
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }

        .token.important {
          color: #d6b9fe;
        }

        .token.entity {
          cursor: help;
        }

        pre > code.highlight {
          outline: 0.4em solid #aa75f5;
          outline-offset: 0.4em;
        }

        /* overrides color-values for the Line Numbers plugin
      * http://prismjs.com/plugins/line-numbers/
      */
        .line-numbers .line-numbers-rows {
          border-right-color: #372f42;
        }

        .line-numbers-rows > span:before {
          color: #372f42;
        }

        /* overrides color-values for the Line Highlight plugin
      * http://prismjs.com/plugins/line-highlight/
      * alpha transparency in 8 digits hex notation coming to a browser near you soon:
      * https://drafts.csswg.org/css-color/#hex-notation
      */
        .line-highlight {
          background: #ed655e33;
          background: linear-gradient(to right, #ed655e33 70%, #ed655e00);
        }
      `}</style>
    </pre>
  );
};
