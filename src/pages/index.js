import React from "react"
import Layout from "../layouts/layout"
import Head from "../components/head"
import Button from "../components/button"
import Footer from "../components/footer"
import Overview from "../components/homepage-components/overview"
import TechPartners from "../components/homepage-components/tech-partners"
import ActionCall from "../components/homepage-components/action-call"
import Services from "../components/homepage-components/services"
import FooterLinks from "../components/footer-links"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import '../styles/index.scss'
import indexStyles from './index.module.scss'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"


export default function IndexPage({ className }) {
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
        <div>
          <Layout>
            <PageTransition>
              <div className={indexStyles.hero}>
                <Head title="Home" />
                <h1 className={indexStyles.animatePopIn}>I create compelling eCommerce experiences on Shopify that increase sales.</h1>
                <h2 className={indexStyles.animatePopIn}>Need a developer?</h2>
                <Button>hire me today</Button>
                <hr />
                <div className={indexStyles.partners}>
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
                </div>
              </div>
            </PageTransition>
          </Layout>
          <Overview />
          <Services />
          <TechPartners />
          <ActionCall />
          <Footer>
            <FooterLinks />
          </Footer>
        </div >
      )}
    />

  )
}
