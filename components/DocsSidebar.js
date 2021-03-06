import Link from './Link'
import Toc from './api/Toc'
import docs from '../data/docs'

const isCurrentPage = (href) => {
  if (typeof document === 'undefined') return false
  return document.location.pathname === href || document.location.pathname === `${href}/`
}

export default () =>
  <div className='docs-nav'>
    <Link href='/' className='branding'>
      <img src='/static/Fridge-dark.svg' alt='Fridge CMS' />
    </Link>
    <div className='sidebar'>
      <section>
        <Link href='/docs'>Home</Link>
      </section>
      {docs.map(section =>
        <section key={section.name}>
          <label>{section.name}</label>
          <ul>
            {section.pages.map(page =>
              <li key={page.href}>
                <Link {...page} />
                {(page.toc && isCurrentPage(page.href)) && <Toc />}
              </li>
            )}
          </ul>
        </section>
      )}
    </div>
    <style jsx>{`
      .docs-nav {
        position: fixed;
        top: 0;
        left: 0;
        margin: 1.5rem 0 0 2rem;
      }

      .sidebar {
        position: fixed;
        width: 280px;
        margin: 0;
        bottom: 0;
        left: 0;
        top: 75px;
        padding-left: 2rem;
        overflow: auto;
      }

      .docs-nav :global(a:link), .docs-nav :global(a:visited) {
        color: #9199aa;
        text-decoration: none;
      }

      .docs-nav :global(a.active) {
        color: #0296ee;
      }

      ul {
        list-style: none;
        margin: 0.75rem 0 0 0;

        li {
          margin-bottom: 0.5rem;
        }
      }

      :global(.branding img) {
        height: 30px;
      }

      section {
        margin: 0.5rem 0 0 0;

        label {
          font-weight: 700;
        }

        a:link, a:visited {
          color: hsl(0%, 0%, 20%);
        }

        a.active {
          color: #0296ee;
        }
      }
    `}</style>
  </div>
