import Link from 'next/link'
import { Flex, Box } from 'grid-styled'

export default (props) =>
  <footer {...props}>
    <div className='container'>
      <Flex>
        <Box>
          <Link href='/'><a>Home</a></Link>
          <Link href='/docs'><a>Documentation</a></Link>
          <Link href='/blog'><a>Blog</a></Link>
          <a href='mailto:help@fridgecms.com'>Contact</a>
          <a href='https://twitter.com/fridgecms' target='_blank'>Twitter</a>
          <a href='https://github.com/fridge-cms' target='_blank'>Github</a>
          <Link href='/terms'><a>Terms</a></Link>
          <Link href='/privacy-policy'><a>Privacy Policy</a></Link>
        </Box>
      </Flex>
    </div>
    <style jsx>{`
      footer {
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: .9em;
        width: 100%;
        padding: 1em 0.75rem;
      }

      .container {
        max-width: 960px;
        margin: 0 auto;
      }

      a:link, a:visited {
        display: inline-block;
        margin: 0 0.5em;
        text-decoration: none;
        color: #6c6c6c;
      }

      a:link:hover, a:visited:hover {
        color: #6c6c6c;
      }
    `}</style>
  </footer>
