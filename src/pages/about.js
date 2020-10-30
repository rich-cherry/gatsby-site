import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layouts/layout"
import Head from "../components/head"
import Footer from "../components/footer"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3Alt, faFigma, faHtml5, faGithub, faJs, faReact, faSass, faShopify } from '@fortawesome/free-brands-svg-icons'
import aboutStyles from "./about.module.scss"

export default function About(data) {
  return (
    <StaticQuery
      query={graphql`
                query {
                    rc: file(relativePath: { eq: "images/rc_color.png"}) {
                        childImageSharp {
                            fluid(quality: 100){
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }      
                }
            `}
      render={data => (
        <Layout>
          <PageTransition>
            <Head title="About" />
            <div className={aboutStyles.wrapper}>
              <div className={aboutStyles.photo}
                data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                <Img fluid={data.rc.childImageSharp.fluid}
                  style={{
                    width: "100%",
                    height: "100%"
                  }} />
              </div>
              <div className={aboutStyles.intro}
                data-sal="slide-left"
                data-sal-duration="2000"
                data-sal-easing="ease"
              >
                <h1>About</h1>
                <hr />
                <p>I'm Rich - I'm a developer with 6+ years of experience creating and managing eCommerce websites on Shopify and Shopify Plus, from small theme tweaks and customizations to full, headless, custom-built sites from scratch.</p>
                <Link to="/contact"><h3>Need help? Let's get together and build something great.</h3></Link>
              </div>
              <div className={aboutStyles.stack1}
                data-sal="slide-right"
                data-sal-duration="2000"
                // data-sal-delay="1000"
                data-sal-easing="ease"
              >
                <div className={aboutStyles.border}>
                  <h4>I most frequently work with:</h4>
                  <ul>
                    <li>CSS3 <FontAwesomeIcon icon={faCss3Alt} /></li>
                    <li>HTML5 <FontAwesomeIcon icon={faHtml5} /></li>
                    <li>GatsbyJS <FontAwesomeIcon icon={faReact} /></li>
                    <li>Git <FontAwesomeIcon icon={faGithub} /></li>
                    <li>GraphQL</li>
                    <li>Javascript <FontAwesomeIcon icon={faJs} /></li>
                    <li>Liquid <FontAwesomeIcon icon={faShopify} /></li>
                    <li>ReactJS <FontAwesomeIcon icon={faReact} /></li>
                    <li>Sass <FontAwesomeIcon icon={faSass} /></li>
                  </ul>
                </div>
              </div>
              <div className={aboutStyles.stack2}
                data-sal="slide-down"
                data-sal-duration="2000"
                data-sal-easing="ease"
              >
                <div className={aboutStyles.border}>
                  <h4>Proficient with:</h4>
                  <ul>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Bootstrap <FontAwesomeIcon icon={faBootstrap} /></li>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                    <li>Shogun</li>
                    <li>SketchUp</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
              <div className={aboutStyles.stack3}
                data-sal="slide-left"
                data-sal-duration="2000"
                data-sal-easing="ease"
              >
                <div className={aboutStyles.border}>
                  <h4>Favorite Platforms & Tools</h4>
                  <ul>
                    <li>Contenful</li>
                    <li>Figma <FontAwesomeIcon icon={faFigma} /></li>
                    <li>Klaviyo</li>
                    <li>Netlify</li>
                    <li>Shopify <FontAwesomeIcon icon={faShopify} /></li>
                    <li>Whimsical</li>
                    <li>Zapier</li>
                  </ul>
                </div>
              </div>
            </div>
            <Footer />
          </ PageTransition>
        </ Layout>
      )
      }
    />
  )
}
