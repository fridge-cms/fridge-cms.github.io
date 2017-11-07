import Page from './Page'
import Head from 'next/head'
import DocsSidebar from './DocsSidebar'

export default ({ title, className = 'docs', footer = true }, children) => {
  return () =>
    <Page footer={footer}>
      <Head>
        <title>{title && `${title} - `}Fridge Documentation</title>
      </Head>
      <DocsSidebar />
      <div className={className}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
      <style jsx>{`
        .docs {
          margin: 75px 30px 30px 320px;
          max-width: 600px;
          padding-bottom: 50px;
        }
      `}</style>
    </Page>
}
