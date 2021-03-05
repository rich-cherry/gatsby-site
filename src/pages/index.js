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

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <PageTransition>
          <div className={indexStyles.hero}>
            <Head title="Developer" />
            <h1 className={indexStyles.animatePopIn}>US-based Shopify Developer offering tweaks, custom features, migrations, site builds from scratch, and custom private apps.</h1>
            <h2 className={indexStyles.animatePopIn}>Need help with a project?</h2>
            <Button>hire me today</Button>
            <hr />
          </div>
        </PageTransition>
      </Layout>
      <Overview />
      <Services />
      <Footer>
        <FooterLinks />
      </Footer>
    </div>
  )
}

