import React from "react"
import Layout from "../layouts/layout"
import Head from "../components/head"
import Button from "../components/button"
import Footer from "../components/footer"
import Overview from "../components/homepage-components/overview"
import Services from "../components/homepage-components/services"
import FooterLinks from "../components/footer-links"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import '../styles/index.scss'
import indexStyles from './index.module.scss'
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function IndexPage() {
  return (
    <StaticQuery
      query={graphql`
                query {
                    storetasker: file(relativePath: { eq: "images/brands/storetasker.png"}) {
                        childImageSharp {
                            fixed(width: 120){
                                ...GatsbyImageSharpFixed_withWebp
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
                <Head title="Developer" />
                <h1 className={indexStyles.animatePopIn}>Shopify Developer offering tweaks, custom features, migrations, site builds from scratch, and custom private apps.</h1>
                <h2 className={indexStyles.animatePopIn}>Need help with a project?</h2>
                <Button>Get in touch</Button>
                <p className={indexStyles.animatePopIn}>Also on
                    <a href="https://www.storetasker.com/experts/rich-cherry"
                    target="_blank" rel="noreferrer noopener" alt="Storetasker"
                    data-sal="fade"
                    data-sal-duration="2000"
                    data-sal-delay="400"
                    data-sal-easing="ease"
                  >
                    <Img className={indexStyles.storetasker} fixed={data.storetasker.childImageSharp.fixed} />
                  </a>
                </p>
                <hr />
              </div>
            </PageTransition>
          </Layout>
          <Overview />
          {/*}<Footer>
            <FooterLinks />
      </Footer>*/}
        </div>
      )}
    />
  )
}

