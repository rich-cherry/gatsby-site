import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import '../styles/index.scss'


export default function IndexPage() {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello.</h1>
        <h2>I'm Rich, a developer.</h2>
      </Layout>
    </div>
  )
}
