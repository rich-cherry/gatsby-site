import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import '../styles/index.scss'
import PageTransition from 'gatsby-v2-plugin-page-transitions'


export default function IndexPage() {
  return (
    <div>
      <Layout>
        <PageTransition>
          <Head title="Home" />
          <h1>Hello.</h1>
          <h2>I'm Rich, a developer.</h2>
        </PageTransition>
      </Layout>
    </div>
  )
}
