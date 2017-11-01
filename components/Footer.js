import Link from 'next/link'
import { Flex, Box } from 'grid-styled'

export default (props) =>
  <footer {...props}>
    <Flex>
      <Box>
        <Link to='/'><a>Home</a></Link>
        <Link to='/docs/'><a>Documentation</a></Link>
        <Link to='/blog/'><a>Blog</a></Link>
        <a href='mailto:help@fridgecms.com'>Contact</a>
        <a href='https://twitter.com/fridgecms' target='_blank'>Twitter</a>
        <a href='https://github.com/fridge-cms' target='_blank'>Github</a>
        <Link to='/terms/'><a>Terms</a></Link>
        <Link to='/privacy-policy/'><a>Privacy Policy</a></Link>
      </Box>
    </Flex>
  </footer>
