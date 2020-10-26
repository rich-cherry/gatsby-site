import React from 'react'
import overviewStyles from './overview.module.scss'
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

export default function Overview({ className, data }) {
    return (
        <StaticQuery
            query={graphql`
                query {
                    desktop: file(relativePath: { eq: "images/desktop6.jpg"}) {
                        childImageSharp {
                            fixed(width: 600){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }  
                    peony: file(relativePath: { eq: "images/peony.jpg"}) {
                        childImageSharp {
                            fixed(width: 400){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    desktop2: file(relativePath: { eq: "images/desktop4.jpg" }) {
                        childImageSharp {
                            fluid(quality: 90, maxWidth: 1920) {
                                ...GatsbyImageSharpFluid_withWebp
                            },
                        }
                    }  
                }
            `}
            render={data => (
                <div className={overviewStyles.container}>
                    <div className={overviewStyles.overviewContainer}>
                        <div className={overviewStyles.border}
                            data-sal="slide-right"
                            data-sal-duration="2000"
                            // data-sal-delay="1000"

                            data-sal-easing="ease">
                            <h1>overview</h1>
                            <hr />
                            <p>US-based Full-stack Developer with over six years' experience working within the Shopify platform, as well as building headless Shopify sites.</p>
                        </div>


                                <div className={overviewStyles.card}
                                    data-sal="slide-left"
                                    data-sal-duration="2000"
                                    // data-sal-delay="2000"
                                    data-sal-easing="ease">
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
                                        }} />

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}
        />
    )
}
