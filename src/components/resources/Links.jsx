import { LinkIcon } from "../icons"
import styles from "./Links.module.css"

const LINKS = [
  { href: "https://abcls.ca/", label: "Association of BC Land Surveyors" },
  { href: "https://www.egbc.ca/", label: "Engineers & Geoscientists British Columbia" },
  { href: "https://www.acls-aatc.ca/", label: "Association of Canada Lands Surveyors" },
]

export default function Links() {
  return (
    <section className={styles.links}>
      <div className={styles.box}>
        <h2>Check out these helpful links:</h2>
        <div className={styles.container}>
          {LINKS.map((l) => (
            <div key={l.href}>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                <LinkIcon /> {l.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
