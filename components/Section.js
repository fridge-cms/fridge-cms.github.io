export default ({ children, ...props }) =>
  <section {...props}>
    {children}
    <style jsx>{`
      section {
        max-width: 960px;
        margin: 0 auto;
      }
    `}</style>
  </section>
