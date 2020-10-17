import React from 'react'
import Header from './header'
import Footer from './footer'
import layoutContactStyles from './layoutContact.module.scss'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const LayoutContact2 = ({ className, ...props }) => (
    <StaticQuery
        query={graphql`
      query {
        desktop: file(relativePath: { eq: "images/workspace-desk2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
        render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid
            return (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                >
                    <div className={layoutContactStyles.mainContainer}>
                        <div className={layoutContactStyles.container}>
                            <div className={layoutContactStyles.content}>
                                <Header />
                                {props.children}
                            </div>
                            <Footer />
                        </div>
                    </div >
                </BackgroundImage>
            )
        }}
    />
)

const StyledBackgroundSection = styled(LayoutContact2)`
  width: 100%;
  background-position: left center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection