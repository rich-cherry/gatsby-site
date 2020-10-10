import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from 'gatsby'



export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
    `)


  return (
      <div>
        <Layout>
          <h1>Blog Page</h1>
          <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                  <li key={edge.node.frontmatter.title}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.frontmatter.date}</p>
                  </li>
                  )
              }
            )}
          </ol>
        </Layout>
      </div>
    )
}
