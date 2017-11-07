/* global localStorage */
import { Component } from 'react'
import docs from 'components/docs'
import LangPicker from 'components/api/LangPicker'
import { langs } from 'data/api'

import Sites from 'components/api/sections/sites'
import Types from 'components/api/sections/types'
import Content from 'components/api/sections/content'
import Roles from 'components/api/sections/roles'
import Users from 'components/api/sections/users'

export default class extends Component {
  state = {
    lang: 'node'
  }
  componentDidMount () {
    const defaultLang = localStorage.getItem('fridge:docs:lang')
    if (defaultLang) this.setState({lang: defaultLang})
  }

  onChangeLang = (lang) => {
    localStorage.setItem('fridge:docs:lang', lang)
    this.setState({lang})
  }

  render () {
    const {lang} = this.state

    const Component = docs({title: 'API Reference', className: 'api'},
      <div className={`lang-${lang}`}>
        <Sites />
        <Types />
        <Content />
        <Roles />
        <Users />
        <div className='code-bg' />
        <LangPicker value={lang} onChange={this.onChangeLang} langs={langs} />
        <style jsx global>{`
          .api {
            color: #444;
            margin: 0 0 30px 320px;
            padding-bottom: 50px;
            padding-top: 75px;
            position: relative;

            p, aside, ol, ul, table, dl,
            h1, h2, h3, h4, h5, h6 {
              margin-right: 50%;
            }

            h1, h2 {
              clear: both;
            }

            h1 {
              border-top: 1px solid #dfdfdf;
              margin-top: 2em;
              padding-top: 1em;
            }

            > h1 {
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
            background: #292929;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
          }
        `}</style>
        <style>
          {langs.map(lang => `
            .lang-${lang.value} .lang { display: none; }
            .lang-${lang.value} .lang-${lang.value} { display: block; }
          `).join('')}
        </style>
      </div>
    )

    return <Component />
  }
}