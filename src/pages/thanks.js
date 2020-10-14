import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'


export default function IndexPage() {
    return (
        <Layout>
            <PageTransition>
                <Head title="Thanks" />
                <h1>Thanks for dropping a line!</h1>
                <h2>I'll be in touch!</h2>

            </PageTransition>
        </Layout>
    )
}