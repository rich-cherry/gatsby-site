import React from 'react'
import { Link } from 'gatsby'


export default function Header() {
  return (
      <div>
        <h1>
          <Link to="/">rc</Link>
        </h1>
        <nav>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </nav>
      </div>
    )
}
