import React from "react"
import { navigate } from 'gatsby'
import Head from "../components/head"
import contactStyles from './contact.module.scss'
import buttonStyles from "../components/button.module.scss"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import Footer from "../components/footer"
import Layout from "../layouts/layout"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <Head title="Contact" />
      <PageTransition>
        <div className={contactStyles.container}>
          <form
            name="contact v7"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className={contactStyles.form}
          >
            <div>
              <h1>Let's Talk</h1>
            </div>
            <input type="hidden" name="form-name" value="contact v7" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <div className={contactStyles.inputRow}>
              <p>
                <label htmlFor="first-name">
                  First Name:
            <br />
                  <input className={contactStyles.input} id="first-name" type="text" name="First Name" onChange={handleChange} placeholder="First Name" autocomplete="on" />
                </label>
              </p>
              <div className={contactStyles.space}></div>
              <p>
                <label htmlFor="last-name">
                  Last Name:
            <br />
                  <input className={contactStyles.input} id="last-name" type="text" name="Last Name" onChange={handleChange} placeholder="Last Name" />
                </label>
              </p>
            </div>
            <div className={contactStyles.inputRow}>
              <p>
                <label htmlFor="email">
                  Your email:
            <br />
                  <input className={contactStyles.input} id="email" type="email" name="email" onChange={handleChange} placeholder="Email" required />
                </label>
              </p>
              <div className={contactStyles.space}></div>
              <p>
                <label htmlFor="phone">
                  Phone:
            <br />
                  <input className={contactStyles.input} id="phone" type="tel" name="Phone" onChange={handleChange} placeholder="Phone" />
                </label>
              </p>
            </div>
            <p>
              What can I help you with?
            <br />
              <input type="checkbox" className={contactStyles.checkbox} id="newShopifyStore" name="interest" onChange={handleChange} value="New Shopify Store" /><label for="newShopifyStore" htmlFor="newShopifyStore">New Shopify Store</label><br />

              <input type="checkbox" className={contactStyles.checkbox} id="shopifyMigration" name="interest" onChange={handleChange} value="Shopify Migration" /><label for="shopifyMigration" htmlFor="shopifyMigration">Migrate an existing eCommerce store to Shopify</label><br />

              <input type="checkbox" className={contactStyles.checkbox} id="shopifyCustomizations" name="interest" onChange={handleChange} value="Shopify Tweaks and Customizations" /><label for="shopifyCustomizations" htmlFor="shopifyCustomizations">Shopify Tweaks / Customizations</label><br />

              <input type="checkbox" className={contactStyles.checkbox} id="klavioSetup" name="interest" onChange={handleChange} value="Klaviyo Email Integration and Setup" /><label for="klavioSetup" htmlFor="klavioSetup">Klaviyo Email Integration / Setup</label>
            </p>
            <p>
              <label htmlFor="website">
                Website (if applicable):
            <br />
                <input className={contactStyles.input} id="website" type="url" name="Website" onChange={handleChange} placeholder="Website" />
              </label>
            </p>

            <p>
              <label htmlFor="message">
                Message:
            <br />
                <textarea className={contactStyles.input} id="message" name="message" onChange={handleChange} placeholder="Tell us a bit about yourself and your company." />
              </label>
            </p>
            <div className={buttonStyles.buttonContainer}>
              <button className={buttonStyles.button} type="submit" formnovalidate="formnovalidate">Send</button>
            </div>
          </form>
        </div>
      </PageTransition>
      <Footer />
    </Layout>
  )
}