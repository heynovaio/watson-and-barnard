import Link from "next/link"
import styles from "@/src/components/ThankYou.module.css"

export const metadata = { title: "404: Not found" }

export default function NotFound() {
  return (
    <main id="main-content" className={styles.wrap}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist… the sadness.</p>
      <p>
        <Link href="/">Return home</Link>
      </p>
    </main>
  )
}
