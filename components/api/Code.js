// v1
import v1http from "data/api/v1/http";
import v1node from "data/api/v1/node";
import v1ruby from "data/api/v1/ruby";
import v1php from "data/api/v1/php";
import v1response from "data/api/v1/response";

// v2
import http from "data/api/v2/http";
import node from "data/api/v2/node";
import ruby from "data/api/v2/ruby";
import php from "data/api/v2/php";
import response from "data/api/v2/response";

import { langs } from "data/api";
import Code from "../Code";

const modules = {
  v1: {
    http: v1http,
    node: v1node,
    ruby: v1ruby,
    php: v1php,
    response: v1response,
  },
  v2: { http, node, ruby, php, response },
};

export default ({ name, version }) => {
  const exampleResponse = modules[version].response(name);
  return (
    <div className="code">
      <div className="wrap">
        {langs.map((lang, i) => {
          const api = modules[version][lang.value](name);
          return (
            <Code key={i} language={lang.syntax}>
              {api ? api.code : "Coming soon..."}
            </Code>
          );
        })}
        {exampleResponse && (
          <div className="response">
            <p>Example Response:</p>
            <Code language="json">
              {JSON.stringify(exampleResponse.res, null, 2)}
            </Code>
          </div>
        )}
      </div>
      <style jsx>{`
        .code {
          color: white;
          font-size: 0.9rem;
          float: right;
          width: 50%;
          -webkit-font-smoothing: auto;
        }

        .wrap {
          padding: 0 28px;
        }

        .code :global(pre) {
          margin: 0 0 2em 0;
          clear: right;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};
