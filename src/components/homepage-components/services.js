import React from 'react'
import servicesStyles from './services.module.scss'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'


export default function Services({ className }) {
    return (
        <StaticQuery
            query={graphql`
                query {
                    klaviyo: file(relativePath: { eq: "images/brands/klaviyo-silver.png"}) {
                        childImageSharp {
                            fixed(width: 200){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    shopifyPlus: file(relativePath: { eq: "images/brands/shopify-plus.png"}) {
                        childImageSharp {
                            fixed(width: 150){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    } 
                    desktop: file(relativePath: { eq: "images/work.jpg" }) {
                        childImageSharp {
                            fluid(quality: 90, maxWidth: 1920) {
                                ...GatsbyImageSharpFluid_withWebp
                            },
                        }
                    }
                }
            `}
            render={data => (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={data.desktop.childImageSharp.fluid}
                    fadeIn={"soft"}
                    style={{
                        width: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundColor: 'transparent',
                        backgroundPosition: 'top',
                    }}
                >
                    <div className={servicesStyles.container}
                    >
                        <div className={servicesStyles.contentContainer}>
                            <div data-sal="fade"
                                data-sal-duration="2000"
                                // data-sal-delay="100"
                                data-sal-easing="ease">
                                <h1>Services</h1>
                                <hr />
                            </div>
                            <div>
                                <div className={servicesStyles.textContainer}
                                    data-sal="fade"
                                    data-sal-duration="2000"
                                    data-sal-delay="300"
                                    data-sal-easing="ease">
                                    <div className={servicesStyles.border}>
                                        <Img fixed={data.shopifyPlus.childImageSharp.fixed}
                                            alt="Shopify-Plus"
                                        />
                                        <p>Shopify is a global eCommerce platform, servicing small businesses, billion dollar businesses, and everything in between. Within the Shopify platform, I specialize in creating on-brand, best practice user experiences that turn more shoppers into buyers.</p>
                                    </div>
                                </div>

                                <div className={servicesStyles.textContainer}>
                                    <div className={servicesStyles.border}
                                        data-sal="fade"
                                        data-sal-duration="2000"
                                        data-sal-delay="300"
                                        data-sal-easing="ease"
                                    >
                                        <span><Img fixed={data.klaviyo.childImageSharp.fixed} /></span>
                                        <p>Email remains one of the highest returns on marketing investment you can make, with an estimated $38 in ROI for every $1 spent. Klaviyo seamlessly integrates with Shopify and automates your most common customer email interactions, allowing you more time to focus on growing your business. Other email platforms send emails - Klaviyo makes money.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ div>
                </ BackgroundImage >
            )
            }
        />
    )
}