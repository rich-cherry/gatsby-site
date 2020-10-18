import React from "react"
import Layout from "../layouts/layout"
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import '../styles/index.scss'
import indexStyles from './index.module.scss'

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <PageTransition>
          <div className={indexStyles.delay}>
            <Head title="Home" />

            <h1 className={indexStyles.animatePopIn}>I help eCommerce companies create compelling customer experiences that increase sales. </h1>
            <h2 className={indexStyles.animatePopIn}>Need a developer?</h2>
            <hr className={indexStyles.line} />
          </div>
        </PageTransition>
      </Layout>
      <div className={indexStyles.featureContent}>
        <h1>Overview &#10143;</h1>
      </div>
    </div>
  )
}
