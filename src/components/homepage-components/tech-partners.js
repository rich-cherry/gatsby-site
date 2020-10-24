import React from 'react'
import techPartnerStyles from './tech-partners.module.scss'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function TechPartners(data) {
    return (
        <StaticQuery
            query={graphql`
                query {
                    shopify: file(relativePath: { eq: "images/brands/shopify.png"}) {
                        childImageSharp {
                            fixed(width: 190){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }  
                    klaviyo: file(relativePath: { eq: "images/brands/klaviyo.png"}) {
                        childImageSharp {
                            fixed(width: 200){
                                ...GatsbyImageSharpFixed_withWebp
                            }
                        }
                    }
                    zapier: file(relativePath: { eq: "images/brands/zapier.png"}) {
                        childImageSharp {
                            fixed(width: 130){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }    
                    netlify: file(relativePath: { eq: "images/brands/netlify.png"}) {
                        childImageSharp {
                            fixed(width: 175){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    contentful: file(relativePath: { eq: "images/brands/contentful.png"}) {
                        childImageSharp {
                            fixed(width: 185){
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
                        <div className={techPartnerStyles.techPartnerGrid}>
                            <a href="https://www.shopify.com" target="_blank"
                                rel="noreferrer noopener" alt="Shopify"
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="400"
                                data-sal-easing="ease"
                            >
                                <Img fixed={data.shopify.childImageSharp.fixed} />
                            </a>

                            <a href="https://www.klaviyo.com/partner/signup?utm_source=0013o00002TrPtG&utm_medium=partner"
                                target="_blank"
                                rel="noreferrer noopener"
                                alt="Klavio"
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="600"
                                data-sal-easing="ease">
                                <Img fixed={data.klaviyo.childImageSharp.fixed} />

                            </a>
                            <a href="https://zapier.com" target="_blank" rel="noreferrer noopener" alt="Zapier"
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="600"
                                data-sal-easing="ease">
                                <Img fixed={data.zapier.childImageSharp.fixed} />
                            </a>
                            <a href="https://google.com"
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="400"
                                data-sal-easing="ease"
                            >Logo D</a>
                            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer noopener" alt="Netlify"
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="600"
                                data-sal-easing="ease">
                                <Img fixed={data.netlify.childImageSharp.fixed} />
                            </a>
                            <a href="https://www.contentful.com/" target="_blank" rel="noreferrer noopener" alt="Contentful"
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="800"
                                data-sal-easing="ease">
                                <Img fixed={data.contentful.childImageSharp.fixed} />
                            </a>
                        </div>
                    </div>
                </div >
            )}
        />
    )
}

