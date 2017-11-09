import { withRouter } from 'next/router'

const Link = ({ children, router, href, name, pages, ...props }) => {
  const onClick = e => {
    e.preventDefault()
    router.push(href)
  }

  props.href = href
  props.onClick = onClick

  if (router.pathname === href) {
    props.className = props.className ? `${props.className} active` : 'active'
  }

  return <a {...props}>{children || name}</a>
}

export default withRouter(Link)
