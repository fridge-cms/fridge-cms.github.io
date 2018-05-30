import Page from './Page'
import Head from 'next/head'
import Heading from './text/Heading'
import DocsSidebar from './DocsSidebar'

export const components = {
  h1: (props) => <Heading tag='h1' {...props} />,
  h2: (props) => <Heading tag='h2' {...props} />
}

export default ({ children }) =>
  <div>
    <DocsSidebar />
    <div className='docs'>
      {children}
    </div>
    <style jsx>{`
      .docs {
        margin: 75px 30px 30px 320px;
        max-width: 600px;
        padding-bottom: 50px;
      }
    `}</style>
  </div>
