import Toc from './Toc'
import Link from 'next/link'

// activeClassName='active' onlyActiveOnIndex

export default ({ page }) =>
  <li>
    <Link href={page.path}>
      <a>
        {page.title}
      </a>
    </Link>
    {(!!page.toc) && <Toc body={page.toc} />}
  </li>
