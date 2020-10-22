import React from "react"
import Layout from "../layouts/layout"
import Head from "../components/head"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3Alt, faFigma, faHtml5, faGithub, faJs, faNodeJs, faReact, faSass, faShopify } from '@fortawesome/free-brands-svg-icons'

export default function About() {
  return (
    <div>
      <Layout>
        <PageTransition>
          <Head title="About" />
          <h1>About me</h1>
          <h3>Hi, I'm Rich -</h3>
          <p>I'm a developer with 6+ years of experience in creating and managing eCommerce websites on Shopify and Shopify Plus, which includes everything from small tweaks and customization to building full headless sites from scratch.</p>
          <p>Need help? Let's get together and build something great.</p>
          <p>In case you're curious...</p>
          <p>I most frequently work with:</p>
          <ul>
            <li>CSS3 <FontAwesomeIcon icon={faCss3Alt} /></li>
            <li>HTML5 <FontAwesomeIcon icon={faHtml5} /></li>
            <li>GatsbyJS <FontAwesomeIcon icon={faReact} /></li>
            <li>Git <FontAwesomeIcon icon={faGithub} /></li>
            <li>GraphQL</li>
            <li>Javascript <FontAwesomeIcon icon={faJs} /></li>
            <li>NodeJS <FontAwesomeIcon icon={faNodeJs} /></li>
            <li>Liquid <FontAwesomeIcon icon={faShopify} /></li>
            <li>ReactJS <FontAwesomeIcon icon={faReact} /></li>
            <li>Sass <FontAwesomeIcon icon={faSass} /></li>
          </ul>
          <p>I occasionally work with:</p>
          <ul>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Bootstrap <FontAwesomeIcon icon={faBootstrap} /></li>
            <li>Figma <FontAwesomeIcon icon={faFigma} /></li>
            <li>Ruby <FontAwesomeIcon /></li>
            <li>Ruby on Rails</li>
            <li>SketchUp</li>
            <li>SQL</li>
          </ul>
          <p>Favorite CMS / eCommerce / Hosting Platforms & Tools:</p>
          <ul>
            <li>Contenful</li>
            <li>Klaviyo</li>
            <li>Netlify</li>
            <li>Shopify <FontAwesomeIcon icon={faShopify} /></li>
            <li>Whimsical</li>
            <li>Zapier</li>
          </ul>
          <p>Previous eCommerce experience has included:</p>
          <ul>
            <li>Accounting Integration</li>
            <li>Custom User Features</li>
            <li>Inventory Management</li>
            <li>Marketing
             <ul>
                <li>Klaviyo</li>
                <li>Constant Contact</li>
                <li>Google Analytics Integration</li>
                <li>Product Creation and Copy</li>
                <li>Shogun</li>
                <li>Shopify Launchpad</li>
                <li>Shopify Scripts</li>
              </ul>
            </li>
            <li>Migration from other platforms</li>
            <li>Theme Design and Development</li>
            <li>Transportation Management & Fulfillment
             <ul>
                <li>Ground</li>
                <li>LTL</li>
              </ul>
            </li>
            <li>UX / UI Optimization</li>
          </ul>
        </PageTransition>
      </Layout>
    </div >
  )
}
