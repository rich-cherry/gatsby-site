import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"

export default function NotFound() {
  return (
    <Layout>
      <Head title="Not Found" />
      <h1>Page Not Found</h1>
      <p><Link to="/">Head home</Link></p>
    </Layout>
    )
}
