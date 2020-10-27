import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/layout'
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import errorStyles from './404.module.scss'

export default function NotFound() {
  return (
    <Layout>
      <PageTransition>
        <Head title="Not Found" />
        <div className={errorStyles.container}
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-easing="ease">
          <h1>Uh oh...</h1>
          <h2>That page doesn't seem to exist.</h2>
          <h2><Link to="/">Head back home?</Link></h2>
        </div>

      </PageTransition>
    </Layout>
  )
}
