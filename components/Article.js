export default ({ children, className = 'markdown' }) =>
  <article className={className}>
    {children}
    <style jsx>{`
      article {
        max-width: 900px;
        margin: 0 auto;
      }

      article :global(h1) {
        margin-top: 2.5rem;
        text-align: center;
      }
    `}</style>
  </article>
