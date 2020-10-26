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
                            fixed(width: 250){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    shopify: file(relativePath: { eq: "images/brands/shopify-mono-white.png"}) {
                        childImageSharp {
                            fixed(width: 150){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }   
                    shopifyPlus: file(relativePath: { eq: "images/brands/shopify-plus.png"}) {
                        childImageSharp {
                            fixed(width: 175){
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
                        data-sal="fade"
                        data-sal-duration="2000"
                        // data-sal-delay="1000"
                        data-sal-easing="ease"
                    >
                        <h1>Services</h1>
                        <div>
                            <div className={servicesStyles.textContainerBorder}
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="100"
                                data-sal-easing="ease">
                                <div className={servicesStyles.textContainer}>
                                    <Img fixed={data.shopifyPlus.childImageSharp.fixed}
                                        alt="Shopify-Plus"
                                    />
                                    <p>Shopify is a global eCommerce platform, servicing small business, billion dollar business, and everything in between.
                                        By 2021, worldwide retail ecommerce sales will reach $4.9 trillion.(Price level)</p>
                                </div>
                            </div>
                            <div className={servicesStyles.textContainerBorder}
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="500"
                                data-sal-easing="ease">
                                <div className={servicesStyles.textContainer}>
                                    <span><Img fixed={data.klaviyo.childImageSharp.fixed} /></span>
                                    <p>In terms on marketing, email remains one of the highest returns on investment you can make, with an estimated $38 in ROI for every dollar spent. I think Klaviyo is the best email marketing platform out there and as a Klaviyo advisor, I can get you set up so that your email is making you money.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </BackgroundImage >
            )}
        />
    )
}