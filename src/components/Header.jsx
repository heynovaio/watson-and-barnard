"use client"

import { useState } from "react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import arrow from "@/public/images/bitmap@3x.png"
import ConsultButton from "./ConsultButton"
import styles from "./Header.module.css"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <ExportedImage
        className={styles.arrowLogo}
        src={arrow}
        alt="Watson & Barnard logo"
        sizes="48px"
        priority
      />

      <Link href="/" className={styles.title} aria-label="Watson and Barnard home">
        <span aria-hidden="true">
          <div>W</div>
          <div>atson</div>
          <div>and</div>
          <div>B</div>
          <div>arnard</div>
        </span>
      </Link>

      <div className={styles.verticalContainer}>
        <div className={styles.phoneLogo}>
          <FontAwesomeIcon icon={faPhoneAlt} />
        </div>
        <a className={styles.phone} href="tel:604-943-9433">
          604.943.9433
        </a>
        <div className={styles.mailLogo}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <a className={styles.email} href="mailto:contact@wbsurveys.ca">
          contact@wbsurveys.ca
        </a>
      </div>

      <button
        type="button"
        className={styles.hamburger}
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <div />
        <div />
        <div />
      </button>

      <div className={styles.menuContainerOuter}>
        <div className={`${styles.menuContainerInner} ${open ? styles.open : ""}`}>
          <button
            type="button"
            className={styles.exit}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <div />
            <div />
          </button>
          <nav className={styles.menu} aria-label="Main">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/services/">Our Services</Link>
            </div>
            <div>
              <Link href="/about/">About Us</Link>
            </div>
            <div>
              <Link href="/resources/">Resources</Link>
            </div>
            <div>
              <Link href="/contact/">Contact Us</Link>
            </div>
          </nav>
          <div className={styles.contact}>
            <a href="tel:604-943-9433" aria-label="Call us">
              <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            </a>
            <a href="mailto:contact@wbsurveys.ca" aria-label="Email us">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>

      <ConsultButton className={styles.consultButton} text="Book a free consult" />
    </header>
  )
}
