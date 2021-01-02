import React from 'react'
import Layout from '../layouts/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from "../components/head"
import Footer from "../components/footer"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import blogStyles from './blog.module.scss'
import Img from "gatsby-image"


export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}){
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
    contentfulYouTubeVideo {
      embedUrl {
        embedUrl
      }
    }  
    contentfulIntroImage {
      image {
        fluid{
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulCodeBlock {
      code {
        json
      }
    }
  }
`


export default function Blog(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }
  console.log(props.data.contentfulCodeBlock.code.code)
  return (
    <Layout>
      <PageTransition>
        <Head title={props.data.contentfulBlogPost.title} />
        <div className={blogStyles.container}>
          <Img
            fluid={props.data.contentfulIntroImage.image.fluid} />
          <div className={blogStyles.blogContentContainer}>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <div className={blogStyles.aspectRatio}
              dangerouslySetInnerHTML={{ __html: props.data.contentfulYouTubeVideo.embedUrl.embedUrl }}
            />
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            <div className={blogStyles.codeBlock}>
              {documentToReactComponents(props.data.contentfulCodeBlock.code.json, options)}
            </div>

          </div>
        </div>
      </PageTransition>
      <Footer />
    </Layout>
  )
}
