import http from 'data/api/http'
import node from 'data/api/node'
import ruby from 'data/api/ruby'
import php from 'data/api/php'
import { langs } from 'data/api'

const modules = {http, node, ruby, php}

export default ({ name }) => {
  return <div className='code'>
    {langs.map((lang, i) => {
      const api = modules[lang.value](name)
      return <pre key={i} className={`lang lang-${lang.value}`}>
        {api
          ? <code>{api.code}</code>
          : <span>Coming Soon...</span>}
      </pre>
    })}
    <style jsx>{`
      .code {
        float: right;
        width: 50%;
      }

      pre {
        color: white;
        padding: 2em 28px;
        margin: 0;
        clear: right;
        text-shadow: 0 1px 2px rgba(0, 0, 0, .4);
        white-space: pre-wrap;
      }

      code {
        font-size: 0.85rem;
        line-height: 1.2rem;
      }
    `}</style>
  </div>
}
