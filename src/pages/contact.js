import React, { useState } from "react"
import { navigate } from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from './contact.module.scss'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}



// export default function Contact() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     company: "",
//     phone: "",
//     message: "",
//     interest: ""
//   })



// const handleChange = (e) => {
//   setFormState({
//     ...formState, [e.target.name]: e.target.value
//   })
// }

// const handleSubmit = (e) => {
//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: encode({ "form-name": "contact", ...formState })
//   })
//     .then(() => alert("Success!"))
//     .catch(error => alert(error));

//   e.preventDefault();
// }

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
      <h1>Contact me</h1>

      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >

        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">Name</label>
        <input className={contactStyles.input} id="name" type="text" name="name" onChange={handleChange} placeholder="Name" />

        <label htmlFor="email">Email</label>
        <input className={contactStyles.input} id="email" type="email" name="email" onChange={handleChange} placeholder="Email" required />



        <label htmlFor="company">Company</label>
        <input className={contactStyles.input} id="company" type="text" name="company" onChange={handleChange} placeholder="Company" /><br />

        {/* 
        <label htmlFor="interest">What can we help you with?</label><br />
        <input id="new-store" type="checkbox" name="interest" onChange={handleChange} value="new-shopify-store" />New Shopify Store <br />
        <input id="shopify-migration" type="checkbox" name="interest" onChange={handleChange} value="shopify-migration" />Shopify Migration <br /> */}


        <label htmlFor="message">Message</label><br />
        <textarea className={contactStyles.input} id="message" name="message" cols="30" rows="10" onChange={handleChange} placeholder="Tell us a little bit about yourself and your company or project." /><br />

        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}
