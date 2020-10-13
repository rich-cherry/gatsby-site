import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'


export default function IndexPage() {
    return (
        <Layout>
            <PageTransition>
                <Head title="Thanks" />
                <h2>Your Form Has Been Submitted!</h2>
            </PageTransition>
        </Layout>
    )
}