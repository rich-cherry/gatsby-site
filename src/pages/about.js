import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default function About() {
  return (
      <div>
        <Header />
        <h1>About me</h1>
        <p>This page will eventually have information about me.</p>
        <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
        <Footer />
      </div>
    )
}
