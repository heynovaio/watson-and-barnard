import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import logos from "@/public/images/logos@3x.jpg"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Watson and Barnard</h2>
      <div className={styles.logos}>
        <ExportedImage
          src={logos}
          alt="Professional association logos"
          sizes="565px"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <nav className={styles.nav} aria-label="Footer">
        <Link href="/">HOME</Link>
        <Link href="/services/">SERVICES</Link>
        <Link href="/about/">ABOUT</Link>
        <Link href="/resources/">RESOURCES</Link>
        <Link href="/contact/">CONTACT</Link>
      </nav>
    </footer>
  )
}
