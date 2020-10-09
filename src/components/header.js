import React from 'react'
import { Link } from 'gatsby'


export default function Header() {
  return (
      <div>
        <div>
          <Link to="/">rc</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
}
