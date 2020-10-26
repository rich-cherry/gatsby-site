import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
          <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link></li>
          <li style={{ display: "none" }}><Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
          <li><Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
          <li className={headerStyles.navItem}>
            <a href="https://github.com/rich-cherry" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          </li>
          <li className={headerStyles.navItem}>
            <a href="https://www.linkedin.com/in/rich-cherry/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          </li>
        </ul>
      </nav>
    </header >
  )
}
