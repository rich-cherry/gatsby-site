import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

export default function About() {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <PageTransition>
          <h1>About me</h1>
          <p>This page will eventually have information about me.</p>
          <p>Need a developer?</p>
        </PageTransition>
      </Layout>
    </div>
  )
}
