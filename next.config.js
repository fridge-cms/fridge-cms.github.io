const blog = require('./data/blog')
const docs = require('./data/docs')
const withMDX = require('@zeit/next-mdx')()

module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/terms': { page: '/terms' },
      '/privacy-policy': { page: '/privacy-policy' },
      '/blog': { page: '/blog' },
      ...blog.reduce((obj, post) => {
        obj[post.href] = {page: post.href}
        return obj
      }, {}),
      '/docs': { page: '/docs' },
      ...docs.reduce((obj, doc) => {
        doc.pages.forEach(page => (obj[page.href] = { page: page.href }))
        return obj
      }, {})
    }
  }
})
