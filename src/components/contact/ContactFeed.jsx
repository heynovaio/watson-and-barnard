"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./ContactFeed.module.css"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function ContactFeed() {
  const router = useRouter()
  const [state, setState] = useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...state }),
    })
      .then(() => router.push(form.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    <section className={styles.feed}>
      <div className={styles.center}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/survey.svg" alt="" />
        <div className={styles.pushRight}>
          <form
            className={styles.form}
            method="POST"
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            action="/contact-thank-you/"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <label htmlFor="c-email">Email Address</label>
            <input name="email" type="email" id="c-email" onChange={handleChange} />
            <label htmlFor="c-name">Name</label>
            <input id="c-name" name="name" type="text" onChange={handleChange} />
            <label htmlFor="c-message">Write us a message</label>
            <textarea id="c-message" name="message" onChange={handleChange} />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          title="Google Map of Watson & Barnard office"
          src="https://snazzymaps.com/embed/188647"
          loading="lazy"
        />
      </div>
    </section>
  )
}
