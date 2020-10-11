import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"


export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: ""
  })

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handeChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }

  return (
      <div>
        <Layout>
          <Head title="Contact" />
          <h1>Contact me</h1>

          <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" onChange={handeChange} value={formState.name} placeholder="Name" />

            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" onChange={handeChange} value={formState.email} placeholder="Email" />

            <button type="submit">Submit</button>
          </form>
        </Layout>
      </div>
    )
}
