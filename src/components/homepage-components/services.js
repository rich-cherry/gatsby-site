import React from 'react'
import servicesStyles from './services.module.scss'
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

export default function Services({ className }) {
  return (
    <StaticQuery
      query={graphql`
                query {
                    desktop: file(relativePath: { eq: "images/work.jpg" }) {
                        childImageSharp {
                            fluid(quality: 100, maxWidth: 1920) {
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
            backgroundColor: 'black',
            backgroundPosition: 'top',
            zIndex: 20
          }}
        >
          <div className={servicesStyles.container}>
            <div className={servicesStyles.contentContainer}>
              <div data-sal="fade"
                data-sal-duration="2000"
                // data-sal-delay="100"
                data-sal-easing="ease">
                <Link to="/contact"><button className={servicesStyles.button}><span>Get in touch</span></button></Link>
              </div>
            </div>
          </div>
        </ BackgroundImage >
      )
      }
    />
  )
}
