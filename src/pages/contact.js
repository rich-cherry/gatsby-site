import React from "react"
import { navigate } from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from './contact.module.scss'

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
      <h1>Contact</h1>
      <form
        name="contact v2"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className={contactStyles.form}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact v2" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            First Name:
            <br />
            <input className={contactStyles.input} type="text" name="First Name" onChange={handleChange} placeholder="First Name" />
          </label>
        </p>
        <p>
          <label>
            Last Name:
            <br />
            <input className={contactStyles.input} type="text" name="Last Name" onChange={handleChange} placeholder="Last Name" />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input className={contactStyles.input} type="email" name="email" onChange={handleChange} placeholder="Email" required />
          </label>
        </p>
        <p>
          What can we help you with?
             <br />
          <input type="checkbox" name="New Shopify Store" onChange={handleChange} />New Shopify Store <br />
          <input type="checkbox" name="Shopify Migration" onChange={handleChange} />Shopify Migration<br />
          <input type="checkbox" name="Shopify Tweaks and Customizations" onChange={handleChange} />Shopify Tweaks and Customizations <br />
          <input type="checkbox" name="Klaviyo Email Integration and Setup" onChange={handleChange} />Klaviyo Email Integration and Setup <br />
        </p>
        <p>
          <label>
            Website (if applicable):
            <br />
            <input className={contactStyles.input} type="url" name="Website" onChange={handleChange} placeholder="Website" />
          </label>
        </p>
        <p>
          <label>
            Phone:
            <br />
            <input className={contactStyles.input} type="tel" name="Phone" onChange={handleChange} placeholder="Phone" />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea className={contactStyles.input} name="message" onChange={handleChange} placeholder="Tell us a bit about yourself and your company." />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}