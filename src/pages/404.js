import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/layout'
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

export default function NotFound() {
  return (
    <Layout>
      <PageTransition>
        <Head title="Not Found" />
        <h1>Page Not Found</h1>
        <p><Link to="/">Head home</Link></p>
      </PageTransition>
    </Layout>
  )
}
