const blog = require("./data/blog");
const docs = require("./data/docs");
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "ts", "tsx", "mdx"],
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/terms": { page: "/terms" },
      "/privacy-policy": { page: "/privacy-policy" },
      "/blog": { page: "/blog" },
      ...blog.reduce((obj, post) => {
        obj[post.href] = { page: post.href };
        return obj;
      }, {}),
      "/docs": { page: "/docs" },
      ...docs.reduce((obj, doc) => {
        doc.pages.forEach((page) => (obj[page.href] = { page: page.href }));
        return obj;
      }, {}),
      "/docs/v2/api": { page: "/docs/v2/api" },
      "/docs/v1/api": { page: "/docs/v1/api" },
    };
  },
  async redirects() {
    return [
      {
        source: "/docs/api",
        destination: "/docs/v2/api",
        permanent: false,
      },
    ];
  },
});
