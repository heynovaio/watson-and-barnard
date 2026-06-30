import Link from "next/link"
import styles from "./Clients.module.css"

const CLIENTS = [
  {
    icon: "construction.svg",
    alt: "Hard hat icon",
    title: "Developers",
    par: "Not knowing your land’s potential is your only obstacle.",
    big: true,
  },
  {
    icon: "house-icon.svg",
    alt: "House icon",
    title: "Residential and Urban Construction",
    par: "Start off effectively right from the start — ensure you meet all criteria and requirements.",
    big: false,
  },
  {
    icon: "architect.svg",
    alt: "Architect icon",
    title: "Architects",
    par: "Design courageously by knowing your limits and land restrictions.",
    big: true,
  },
  {
    icon: "buildings.svg",
    alt: "Buildings icon",
    title: "Municipalities and Government",
    par: "Build to ensure a safe and functional community.",
    big: true,
  },
  {
    icon: "shape.svg",
    alt: "Fence icon",
    title: "Home/Property Owners",
    par: "“Good fences make good neighbours.” Be a good neighbour.",
    big: true,
  },
  {
    icon: "scroll.svg",
    alt: "Scroll icon",
    title: "First Nations",
    par: "We were involved with the first urban treaty survey in British Columbia. We are familiar with, and sensitive to, the legislature and agreements involved in First Nations Lands and Treaty Surveys.",
    big: false,
  },
]

export default function Clients() {
  return (
    <section className={styles.associates}>
      <h2>We Work With</h2>
      <div className={styles.itemGallery}>
        {CLIENTS.map((c) => (
          <div className={styles.itemContainer} key={c.title}>
            <div className={styles.item}>
              <div className={styles.imageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/${c.icon}`} alt={c.alt} />
              </div>
              <h3>{c.title}</h3>
              <p className={c.big ? styles.bigPar : styles.lilPar}>{c.par}</p>
            </div>
          </div>
        ))}
      </div>
      <Link className={styles.button} href="/services/">
        View Services
      </Link>
    </section>
  )
}
