import React from 'react'
import overviewStyles from './overview.module.scss'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Overview(data) {
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
                }
            `}
            render={data => (
                <div className={overviewStyles.container}>
                    <div className={overviewStyles.overviewContainer}>
                        <div className={overviewStyles.overviewText}
                            data-sal="slide-right"
                            data-sal-duration="2000"
                            // data-sal-delay="1000"
                            data-sal-easing="ease">
                            <h1>overview</h1>
                            <hr />
                            <p>Full-stack Developer with over six years' experience working within the Shopify platform, as well as building headless Shopify sites.</p>
                        </div>

                        <div className={overviewStyles.card}
                            data-sal="slide-left"
                            data-sal-duration="2000"
                            // data-sal-delay="2000"
                            data-sal-easing="ease">
                            <p>(picture)</p>
                            <div className={overviewStyles.cardBackground}
                                data-sal="slide-right"
                                data-sal-duration="2000"
                                // data-sal-delay="1000"
                                data-sal-easing="ease">

                                <Img fixed={data.desktop.childImageSharp.fixed} />
                            </div>
                        </div>

                    </div>
                </div>
            )}
        />
    )
}
