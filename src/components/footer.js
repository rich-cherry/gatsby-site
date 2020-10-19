import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
      <p>Created by {data.site.siteMetadata.author}, © {new Date().getFullYear()}</p>
    </div>
  )
}
