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
      <div className={contactStyles.container}>

        <form
          name="contact v3"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className={contactStyles.form}
        >
          <h1 className={contactStyles.container}>Contact</h1>
          <input type="hidden" name="form-name" value="contact v3" />
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
                <input className={contactStyles.input} id="first-name" type="text" name="First Name" onChange={handleChange} placeholder="First Name" autocomplete="on" autoFocus />
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
            <label htmlFor="interest">
              What can we help you with?
             <br />
              <input type="checkbox" className={contactStyles.checkbox} id="interest" name="New Shopify Store" onChange={handleChange} /><span> New Shopify Store </span><br />
              <input type="checkbox" className={contactStyles.checkbox} id="interest" name="Shopify Migration" onChange={handleChange} />Shopify Migration<br />
              <input type="checkbox" className={contactStyles.checkbox} id="interest" name="Shopify Tweaks and Customizations" onChange={handleChange} />Shopify Tweaks and Customizations <br />
              <input type="checkbox" className={contactStyles.checkbox} id="interest" name="Klaviyo Email Integration and Setup" onChange={handleChange} />Klaviyo Email Integration and Setup <br />
            </label>
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

          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </Layout>
  )
}