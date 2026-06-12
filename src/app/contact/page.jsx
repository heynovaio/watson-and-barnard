import Header from "@/src/components/Header"
import ContactHero from "@/src/components/contact/ContactHero"
import ContactFeed from "@/src/components/contact/ContactFeed"

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Watson & Barnard Land Surveyors in Delta, BC to learn more about our services, get expert advice, or request a quote.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactHero />
        <ContactFeed />
      </main>
    </>
  )
}
