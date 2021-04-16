import http from "data/api/http";
import node from "data/api/node";
import ruby from "data/api/ruby";
import php from "data/api/php";
import response from "data/api/response";
import { langs } from "data/api";
import Code from "../Code";

const modules = { http, node, ruby, php };

export default ({ name }) => {
  const exampleResponse = response(name);
  return (
    <div className="code">
      <div className="wrap">
        {langs.map((lang, i) => {
          const api = modules[lang.value](name);
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
