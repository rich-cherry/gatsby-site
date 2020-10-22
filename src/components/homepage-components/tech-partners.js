import React from 'react'
import techPartnerStyles from './tech-partners.module.scss'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function TechPartners(data) {
    return (
        <StaticQuery
            query={graphql`
                query {
                    shopify: file(relativePath: { eq: "images/brands/shopify_logo_black.png"}) {
                        childImageSharp {
                            fixed(width: 125){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }  
                    klaviyo: file(relativePath: { eq: "images/brands/klaviyo.png"}) {
                        childImageSharp {
                            fixed(width: 150){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    zapier: file(relativePath: { eq: "images/brands/zapier.png"}) {
                        childImageSharp {
                            fixed(width: 105){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }    
                    netlify: file(relativePath: { eq: "images/brands/netlify.png"}) {
                        childImageSharp {
                            fixed(width: 125){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    contentful: file(relativePath: { eq: "images/brands/contentful.png"}) {
                        childImageSharp {
                            fixed(width: 155){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }      
                }
            `}
            render={data => (
                <div className={techPartnerStyles.container}>
                    <div className={techPartnerStyles.techPartnerContainer}>
                        <div className={techPartnerStyles.techPartnerText}
                            data-sal="fade"
                            data-sal-duration="2000"
                            // data-sal-delay="1000"
                            data-sal-easing="ease">
                            <h1>Tech Partners</h1>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui temporibus quis voluptas totam unde, quae omnis architecto? Aliquid optio quis officia enim corrupti natus aut quod dignissimos magnam odit.</p>
                        </div>
                        <div className={techPartnerStyles.techPartnerGrid}
                            data-sal="fade"
                            data-sal-duration="2000"
                            // data-sal-delay="2000"
                            data-sal-easing="ease">
                            <div className={techPartnerStyles.box}>
                                <Img fixed={data.shopify.childImageSharp.fixed} />
                            </div>
                            <div className={techPartnerStyles.box}>
                                <Img fixed={data.klaviyo.childImageSharp.fixed} />
                            </div>
                            <div className={techPartnerStyles.box}>
                                <Img fixed={data.zapier.childImageSharp.fixed} />
                            </div>
                            <div className={techPartnerStyles.box}>Logo D</div>
                            <div className={techPartnerStyles.box}>
                                <Img fixed={data.netlify.childImageSharp.fixed} />
                            </div>
                            <div className={techPartnerStyles.box}>
                                <Img fixed={data.contentful.childImageSharp.fixed} />
                            </div>
                        </div>
                    </div>
                </div >
            )}
        />
    )
}