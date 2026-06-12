"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import styles from "./Feed.module.css"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Feed() {
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
      <div className={styles.imgContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/survey.svg" alt="" />
      </div>
      <div className={styles.half}>
        <div className={styles.greenBox}>
          <div className={styles.center}>
            <div className={styles.width}>
              <div className={styles.textContainer}>
                <h2>Contact us</h2>
                <h3>We&apos;d love to hear from you</h3>
                <p>
                  Contact us to learn more about our services, get expert advice or to
                  request a quote.
                </p>
                <div className={styles.address}>
                  <div className={styles.addressItem}>
                    1524 56 St, Delta, BC
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className={styles.addressItem}>
                    <a href="tel:604-943-9433">604-943-9433</a>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </div>
                  <div className={styles.addressItem}>
                    <a href="mailto:contact@wbsurveys.ca">contact@wbsurveys.ca</a>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/survey.svg" alt="" />
                </div>
              </div>
              <form
                className={styles.form}
                method="POST"
                name="contact"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                action="/contact-thank-you/"
              >
                {/* Netlify form detection (static export) */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input name="email" type="email" id="email" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="message">Write us a message</label>
                  <textarea id="message" name="message" onChange={handleChange} />
                </div>
                <input type="submit" value="submit" />
              </form>
            </div>
          </div>
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
