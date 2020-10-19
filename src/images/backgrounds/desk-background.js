import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import backgroundStyles from './background.module.scss'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const Background = ({ className, ...props }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "images/workspace-desk2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            },
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
          fadeIn={"soft"}

        >
          <div className={backgroundStyles.container}>
            {props.children}
          </div >
        </BackgroundImage >
      )
    }}
  />
)

const DeskBackground = styled(Background)`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  background-position: bottom left;
  background-attachment: fixed;
  

    &::before,
    &::after {
        filter: invert(
        ${({ isDarken }) => {
    return isDarken ? '80%' : '0%'
  }}
        );
    }
`

export default DeskBackground