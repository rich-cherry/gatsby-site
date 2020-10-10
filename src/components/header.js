import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'


export default function Header() {
  return (
      <header className={headerStyles.header}>
        <h1 className={headerStyles.logo}>
          <Link to="/">rc</Link>
        </h1>
        <nav>
          <ul className={headerStyles.navList}>
            <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link></li>
            <li><Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
            <li><Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
}
