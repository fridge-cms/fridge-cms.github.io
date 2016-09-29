/* global localStorage */
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import cn from 'classnames'
import DocumentTitle from 'react-document-title'
import getOffset from 'dom-helpers/query/offset'
import { addClass, removeClass } from 'dom-helpers/class'

import {title, order, body} from './_content.md'

const languages = {
  shell: 'curl',
  ruby: 'ruby',
  php: 'php'
}

const getToc = body => {
  const el = document.createElement('html')
  el.innerHTML = body
  const toc = el.querySelector('.table-of-contents')

  return toc.innerHTML
}

export default class Api extends Component {
  static metadata () {
    return {title, order, toc: getToc(body)}
  };

  state = {
    lang: 'shell',
    activeTarget: null
  };

  componentWillMount () {
    if (localStorage) {
      const lang = localStorage.getItem('docsLang')
      if (languages[lang]) {
        this.setState({lang})
      }
    }
  }

  componentDidMount () {
    this.updateLanguage()
    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentDidUpdate () {
    this.updateLanguage()
    this.updateTocNav()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll, false)
  }

  updateTocNav () {
    const {activeTarget} = this.state
    if (!activeTarget) return

    const toc = document.querySelector('.toc')
    const node = toc.querySelector(`a[href="#${activeTarget}"]`)
    const lis = [].slice.call(document.querySelectorAll('.toc > ul > li'))
    const anchors = [].slice.call(toc.querySelectorAll('a'))
    lis.forEach(li => {
      if (li.contains(node)) {
        addClass(li, 'active')
      } else {
        removeClass(li, 'active')
      }
    })
    anchors.forEach(anchor => {
      if (anchor === node) {
        addClass(anchor, 'active')
      } else {
        removeClass(anchor, 'active')
      }
    })
  }

  updateLanguage () {
    const {lang} = this.state

    Object.keys(languages).map(key => {
      const code = document.querySelectorAll(`.api-docs code.language-${key}`)
      for (let i = 0; i < code.length; i++) {
        code[i].parentNode.style.display = key === lang ? 'block' : 'none'
      }
    })
  }

  changeLanguage (lang, e) {
    e.preventDefault()
    this.setState({lang})
    localStorage && localStorage.setItem('docsLang', lang)
  }

  handleScroll = e => {
    window.cancelAnimationFrame(this._rafID)
    this._rafID = window.requestAnimationFrame(() => this.updateScroll())
  }

  updateScroll () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageOffsetY
    scrollTop += 200 // account for padding
    const {activeTarget} = this.state
    const node = findDOMNode(this)

    const nodes = [].slice.call(node.querySelectorAll('h1[id], h2[id]'))
      .map(node => {
        return [node.id, getOffset(node).top]
      })
      .sort((a, b) => a[1] - b[1])

    for (let i = 0; i < nodes.length; i++) {
      const [name, offset] = nodes[i]
      const next = nodes[i + 1]

      if (activeTarget !== name && scrollTop >= offset && (!next || scrollTop < next[1])) {
        this.setState({ activeTarget: name })
        break
      }
    }
  }

  render () {
    const {lang} = this.state

    return <DocumentTitle title='API Reference'>
      <div className='api-docs'>
        <div className='api-content' dangerouslySetInnerHTML={{__html: body}} />
        <div className='api-code'>
          <div className='lang-selector'>
            {Object.keys(languages).map(key => {
              const name = languages[key]
              const className = cn({active: lang === key})
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
