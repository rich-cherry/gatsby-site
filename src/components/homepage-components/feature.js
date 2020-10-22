import React from 'react'
import featureStyles from './feature.module.scss'
import FeatureLaptop from '../../images/backgrounds/feature-laptop'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"


export default function Feature() {
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
                }
            `}
            render={data => (
                <FeatureLaptop>
                    <div className={featureStyles.container}
                        data-sal="fade"
                        data-sal-duration="2000"
                        // data-sal-delay="1000"
                        data-sal-easing="ease"
                    >
                        <h1>Services</h1>
                        <div>
                            <div className={featureStyles.textContainer}
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="100"
                                data-sal-easing="ease">
                                <div className={featureStyles.textContainerBorder}>
                                    <Img fixed={data.shopifyPlus.childImageSharp.fixed}
                                        alt="Shopify-Plus"
                                    />
                                    <p> By the year 2021, worldwide retail ecommerce sales will reach $4.9 trillion.</p>
                                </div>
                            </div>
                            <div className={featureStyles.textContainer}
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="500"
                                data-sal-easing="ease">
                                <div className={featureStyles.textContainerBorder}>
                                    <Img fixed={data.klaviyo.childImageSharp.fixed} />
                                    <p>In terms on marketing, email remains one of the highest returns on investment you can make, with an estimated $38 in ROI for every dollar spent. I think Klaviyo is the best email marketing platform out there and as a Klaviyo advisor, I can get you set up so that your email is making you money.</p>
                                </div>
                            </div>
                            <div className={featureStyles.textContainer}
                                data-sal="fade"
                                data-sal-duration="2000"
                                data-sal-delay="900"
                                data-sal-easing="ease">
                                <div className={featureStyles.textContainerBorder}>
                                    <h2>Hello</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </FeatureLaptop>

            )}
        />
    )
}