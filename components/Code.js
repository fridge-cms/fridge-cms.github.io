import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light'
// set up syntax highlighting
import hlJs from 'react-syntax-highlighter/dist/languages/javascript'
import hlPhp from 'react-syntax-highlighter/dist/languages/php'
import hlRuby from 'react-syntax-highlighter/dist/languages/ruby'
import hlShell from 'react-syntax-highlighter/dist/languages/bash'
import hlJson from 'react-syntax-highlighter/dist/languages/json'

import atomOneDark from 'react-syntax-highlighter/dist/styles/atom-one-dark'

registerLanguage('javascript', hlJs)
registerLanguage('php', hlPhp)
registerLanguage('ruby', hlRuby)
registerLanguage('bash', hlShell)
registerLanguage('json', hlJson)

const style = {...atomOneDark,
  hljs: {
    background: atomOneDark.hljs.background,
    color: '#abb2bf',
    overflow: 'auto',
    padding: '1em',
    fontSize: '14px',
    fontWeight: 500
  }
}

export default ({ children, ...props }) =>
  <SyntaxHighlighter style={style} {...props}>
    {children}
  </SyntaxHighlighter>
