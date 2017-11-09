export default ({ tag = 'h1', id = null, children }) => {
  if (id === null) {
    const text = typeof children === 'string' ? children : children.join('')
    id = text.toLowerCase().replace(/\s/g, '-').replace(/[?!]/g, '')
  }

  const Tag = tag

  return <Tag id={id}>{children}</Tag>
}
