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
      <div className={footerStyles.container}>
        <Link className={footerStyles.contact} to="/contact"><button className={footerStyles.button}><span>Get in touch</span></button></Link>
        <div className={footerStyles.links}>
          {props.children}
        </div>
        <Link className={footerStyles.created} to="/"><p>Created by {data.site.siteMetadata.author}, © {new Date().getFullYear()}</p></Link>
      </div >
    </div>
  )
}
