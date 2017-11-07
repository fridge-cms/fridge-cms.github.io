import Toc from './Toc'
import Link from './Link'

export default ({ page }) =>
  <li>
    <Link href={page.path}>{page.title}</Link>
    {(!!page.toc) && <Toc body={page.toc} />}
  </li>
