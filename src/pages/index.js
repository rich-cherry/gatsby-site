import React from "react"
import Layout from "../components/layout"
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
            <h1 className={indexStyles.animatePopIn}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, possimus</h1>
            <h2 className={indexStyles.animatePopIn}>Hola, konichiwa</h2>
          </div>
        </PageTransition>
      </Layout>
      <div className={indexStyles.featureContent}>
        <h1>Design &#10143; Build &#10144; Grow</h1>
        <h1>Design &#9679; Build &#9675; Grow</h1>
      </div>
    </div>
  )
}
