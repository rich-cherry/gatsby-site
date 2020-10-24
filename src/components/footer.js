import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

export default function Footer(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
    `)
  return (
    <div className={footerStyles.footer}>
      {props.children}
      <Link to="/"><p>Created by {data.site.siteMetadata.author}, © {new Date().getFullYear()}</p></Link>
    </div>
  )
}
