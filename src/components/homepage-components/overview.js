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
                        <div>
                            <h1> overview</h1>
                            <hr />
                            <p>Full-stack Developer with over six years' experience working within the Shopify platform, as well as building headless Shopify sites.</p>
                        </div>


                    </div>
                    <div className={overviewStyles.b}>

                    </div>
                    <div className={overviewStyles.c}>

                    </div>
                    <div className={overviewStyles.d}>

                    </div>
                    <div className={overviewStyles.e}>

                    </div>
                    <div className={overviewStyles.f}>

                    </div>
                </ div >
            )
            }
        />
    )
}
