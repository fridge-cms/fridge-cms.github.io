import { Component } from 'react'
import api from 'data/api'

const isActive = (href) => {
  if (typeof document === 'undefined') return false
  return document.location.hash === href
}

const Link = ({ href, name }) =>
  <a href={href} className={isActive(href) ? 'active' : ''}>{name}</a>

export default class extends Component {
  state = {
    hash: ''
  }

  componentDidMount () {
    window.addEventListener('hashchange', this.onReplaceState, false)
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.onReplaceState, false)
  }

  onReplaceState = (e) => {
    this.setState({hash: document.location.hash})
  }

  getSectionClassName = (page) => {
    const {hash} = this.state
    if (page.href === hash) return 'active'
    if (page.pages && page.pages.find(sub => sub.href === hash)) return 'active'
    return ''
  }

  render () {
    return <ul>
      {api.map(page =>
        <li key={page.href} className={this.getSectionClassName(page)}>
          <a href={page.href}>{page.name}</a>
          {(page.pages && page.pages.length > 0) &&
            <ul>
              {page.pages.map(subPage =>
                <li key={subPage.href}>
                  <Link {...subPage} />
                </li>
              )}
            </ul>
          }
        </li>
      )}
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0.75rem 0 0 0;
        }

        ul ul li {
          font-size: .9em;
          margin-bottom: 0.5rem;
        }

        ul ul {
          display: none;
          margin: 0.5rem 0 0 0.5rem;
        }

        li.active ul {
          display: block;
        }

      `}</style>
    </ul>
  }
}
