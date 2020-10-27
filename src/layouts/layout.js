import React from 'react'
import Header from '../components/header'
import layoutStyles from './layout.module.scss'
import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"

export default function Layout(props) {
  // // const isHome = this.location.pathname !== '/'
  // if (location.pathname === '/') {
  return (

    <StaticQuery
      query={graphql`
                query {
                    klaviyo: file(relativePath: { eq: "images/brands/klaviyo-silver.png"}) {
                        childImageSharp {
                            fixed(width: 150){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    shopifyPlus: file(relativePath: { eq: "images/brands/shopify-plus.png"}) {
                        childImageSharp {
                            fixed(width: 130){
                                ...GatsbyImageSharpFixed
                            }
                        }
                    } 
                }
            `}
      render={data => (
        <div className={layoutStyles.container}>
          <div className={layoutStyles.contentContainer}>
            <Header />
            {props.children}
          </div>
          {/* <div className={layoutStyles.partners}>
            <Img fixed={data.shopifyPlus.childImageSharp.fixed}
              alt="Shopify Plus"
              style={{
                opacity: "0.7",
                marginRight: "4rem"
              }} />
            <Img fixed={data.klaviyo.childImageSharp.fixed}
              style={{
                opacity: "0.7"
              }} />
          </div> */}
        </div>
      )
      }
    />
  )
  // } else {
  //   return (
  //     <div className={layoutStyles.container}>
  //       <div className={layoutStyles.contentContainer}>
  //         <Header />
  //         {props.children}
  //       </div>
  //     </div>
  //   )
  // }
}

