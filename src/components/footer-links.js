import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import footerStyles from './footer-links.module.scss'

export default function FooterLinks() {
    return (
        <StaticQuery
            query={graphql`
                query {
                    klaviyo: file(relativePath: { eq: "images/brands/klaviyo-silver.png"}) {
                        childImageSharp {
                            fixed(width: 150){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    shopifyPlus: file(relativePath: { eq: "images/brands/shopify-plus.png"}) {
                        childImageSharp {
                            fixed(width: 145){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    } 
                }
            `}
            render={data => (
                <div className={footerStyles.links}>
                    <ul>
                        <li><a href="https://www.shopify.com/plus"
                            target="_blank"
                            rel="noreferrer noopener"
                            alt="Shopify"><Img fixed={data.shopifyPlus.childImageSharp.fixed}
                                alt="Shopify Plus"
                                style={{
                                    opacity: "0.7",
                                    margin: ".5rem 0"

                                }} /></a></li>
                        <li><a href="https://www.klaviyo.com/partner/signup?utm_source=0013o00002TrPtG&utm_medium=partner"
                            target="_blank"
                            rel="noreferrer noopener"
                            alt="Klavio"><Img fixed={data.klaviyo.childImageSharp.fixed}
                                style={{
                                    opacity: "0.7",
                                    margin: ".5rem 0"
                                }} /></a></li>
                    </ul>
                    <ul className={footerStyles.socialLinks}>
                        <li><a href="https://github.com/rich-cherry" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a href="https://www.linkedin.com/in/rich-cherry/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>
            )
            }
        />
    )
}



