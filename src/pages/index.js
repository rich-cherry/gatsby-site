import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import '../styles/index.scss'
import indexStyles from './index.module.scss'


export default function IndexPage() {
  return (
    <Layout>
      <PageTransition>
        <div className={indexStyles.delay}>
          <Head title="Home" />
          <h1 className={indexStyles.animatePopIn}>We translate business goals into design strategy in order to</h1>
          <h2 className={indexStyles.animatePopIn}>I'm Rich, a developer.</h2>
        </div>
      </PageTransition>
    </Layout>
  )
}
