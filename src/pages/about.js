import React from "react"
import Layout from "../layouts/layout"
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

export default function About() {
  return (
    <div>
      <Layout>
        <PageTransition>
          <Head title="About" />
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores repellat libero minima unde sequi ut neque aut quod suscipit, dolores voluptatem, aliquid nisi illo error sed sit hic ad id.</p>
        </PageTransition>
      </Layout>
    </div >
  )
}
