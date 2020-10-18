import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faShopify } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          logo
        }
      }
    }
    `)
  return (
    <header className={headerStyles.header}>
      <Link to="/"><div className={headerStyles.logo} id="rc">
        <h1>{data.site.siteMetadata.logo}</h1>
      </div></Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}><FontAwesomeIcon icon={faShopify} /> Why Shopify?</li>
          <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link></li>
          <li><Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
          <li><Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
          <li className={headerStyles.navItem}>Client Login <FontAwesomeIcon icon={faSignInAlt} /></li>
        </ul>
      </nav>
    </header >
  )
}
