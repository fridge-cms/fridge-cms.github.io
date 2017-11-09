/* global history, Event */
import { Component } from 'react'
import getOffset from 'dom-helpers/query/offset'

export default class extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll, false)
  }

  handleScroll = () => {
    window.cancelAnimationFrame(this._rafID)
    this._rafID = window.requestAnimationFrame(() => this.updateScroll())
  }

  updateScroll () {
    if (!this.el) return
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageOffsetY
    scrollTop += 200 // account for padding
    const path = document.location.pathname
    const current = document.location.hash.substr(1)

    const nodes = [].slice.call(this.el.querySelectorAll('h1[id], h2[id]'))
      .map(node => {
        return [node.id, getOffset(node).top]
      })
      .sort((a, b) => a[1] - b[1])

    for (let i = 0; i < nodes.length; i++) {
      const [name, offset] = nodes[i]
      const next = nodes[i + 1]

      if (current !== name && scrollTop >= offset && (!next || scrollTop < next[1])) {
        history.replaceState({}, '', `${path}#${name}`)
        const event = new Event('hashchange')
        window.dispatchEvent(event)
        break
      }
    }
  }

  render () {
    return <div ref={c => { this.el = c }}>
      {this.props.children}
    </div>
  }
}
