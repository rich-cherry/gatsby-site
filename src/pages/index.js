import React from "react"
import Layout from "../layouts/layout"
import Head from "../components/head"
import Button from "../components/button"
import Footer from "../components/footer"
import Overview from "../components/overview"
import FooterLinks from "../components/footer-links"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import '../styles/index.scss'
import indexStyles from './index.module.scss'

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <PageTransition>
          <div className={indexStyles.hero}>
            <Head title="Home" />
            <h1 className={indexStyles.animatePopIn}>I create compelling eCommerce experiences on Shopify that increase sales.</h1>
            <h2 className={indexStyles.animatePopIn}>Need a developer?</h2>
            <Button>hire me today</Button>
            <hr />
          </div>
        </PageTransition>
      </Layout>
      <Overview />
      <Footer>
        <FooterLinks />
      </Footer>


    </div >
  )
}
