import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import topographic from "@/public/images/topographic-survey.jpg"
import construction from "@/public/images/construction-surveys.jpg"
import subdivisions from "@/public/images/subdivisions-legal-surveys.jpg"
import strata from "@/public/images/strata-surveys.jpg"
import settlement from "@/public/images/settlement-monitoring.jpg"
import drone from "@/public/images/uav-drone-surveys.jpg"
import laser from "@/public/images/laser-scanning.jpg"
import styles from "./Listings.module.css"

const SERVICES = [
  {
    img: topographic,
    title: "Topographic Survey",
    body: "Understand the land. Topographic surveys provide vital information used in the design and approval process of land development.",
    href: "/services/architect/",
  },
  {
    img: construction,
    title: "Construction Survey",
    body: "Accurate data, from start to finish. Construction surveys collect data to establish a preliminary survey control plan and inform on the accuracy of the work post-construction.",
    href: "/services/developer/",
  },
  {
    img: subdivisions,
    title: "Subdivisions and Legal Surveys",
    body: "Divide and conquer. Subdivision surveys establish new land parcel boundaries or adjust pre-existing parcels.",
    href: "/services/property/",
  },
  {
    img: strata,
    title: "Strata Surveys and Air Space Plans",
    body: "Precise plans for distinct projects. Strata surveys define the nature and location of legal boundaries of buildings in your unique development plan.",
    href: "/services/home/",
  },
  {
    img: settlement,
    title: "Settlement Monitorings",
    body: "Build responsibly. Seismic monitoring is used to detect horizontal and vertical movement when working next to neighbouring structures.",
    href: "/services/settlement/",
  },
  {
    img: drone,
    title: "UAV Drone Surveys",
    body: "Complete UAV solutions for surveying, mapping and other geospatial applications.",
    href: "/services/drone/",
  },
  {
    img: laser,
    title: "High Definition Laser Scanning",
    body: "Achieve greater accuracy in all types of complicated environments, quickly and efficiently.",
    href: "/services/laser/",
  },
]

export default function Listings() {
  return (
    <section className={styles.listings}>
      <div className={styles.outerContainer}>
        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div className={styles.card} key={s.title}>
              <ExportedImage src={s.img} alt="" sizes="363px" />
              <div className={styles.content}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link className={styles.learnBtn} href={s.href}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
