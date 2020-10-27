import React from "react"
import Layout from "../layouts/layout"
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import thanksStyles from './thanks.module.scss'


export default function IndexPage() {
    return (
        <Layout>
            <PageTransition>
                <Head title="Thanks" />
                <div className={thanksStyles.text}>
                    <h1>Thanks for dropping a line.</h1>
                    <h2>I'll be in touch!</h2>
                </div>

            </PageTransition>
        </Layout>
    )
}