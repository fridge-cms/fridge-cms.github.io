import React, { Component, PropTypes } from 'react'
import cn from 'classnames'
import DocumentTitle from 'react-document-title'

import {title, order, body} from './_content.md'

const languages = {
  shell: 'curl',
  ruby: 'ruby',
  php: 'php'
}

export default class Api extends Component {
  static metadata() {
    return {title, order}
  };

  state = {
    lang: 'shell'
  };

  componentDidMount() {
    this.updateLanguage()
  }

  componentDidUpdate() {
    this.updateLanguage()
  }

  updateLanguage() {
    const {lang} = this.state

    Object.keys(languages).map(key => {
      const code = document.querySelectorAll(`.api-docs code.language-${key}`)
      for (let i=0; i < code.length; i++) {
        code[i].parentNode.style.display = key == lang ? 'block' : 'none'
      }
    })
  }

  changeLanguage(lang, e) {
    e.preventDefault()
    this.setState({lang})
  }

  render() {
    const {lang} = this.state

    return <DocumentTitle title='API Reference'>
      <div className='api-docs'>
        <div className='api-content' dangerouslySetInnerHTML={{__html: body}} />
        <div className='api-code'>
          <div className='lang-selector'>
            {Object.keys(languages).map(key => {
              const name = languages[key]
              const className = cn({active: lang == key})
              return <a key={key}
                      className={className}
                      onClick={this.changeLanguage.bind(this, key)}>{name}</a>
            })}
          </div>
        </div>
      </div>
    </DocumentTitle>
  }
}
