import React from "react"
import Layout from "../layouts/layout"
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'



export default function BlogPage() {
  const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost (
          sort: {
            fields:publishedDate,
            order:DESC
          }
        ) {
          edges {
            node {
              title
              slug
              publishedDate(formatString:"MMMM Do, YYYY")
            }
          }
        }
      }
    `)


  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <PageTransition>
          <div className={blogStyles.container}>
            <h1>Blog Page</h1>
            <ol className={blogStyles.posts}>
              {data.allContentfulBlogPost.edges.map((edge) => {
                return (
                  <li className={blogStyles.post} key={edge.node.title}>
                    <Link to={`/blog/${edge.node.slug}`}>
                      <h2>{edge.node.title}</h2>
                      <p>{edge.node.publishedDate}</p>
                    </Link>
                  </li>
                )
              }
              )}
            </ol>
          </div>
        </PageTransition>
      </Layout>
    </div>
  )
}
