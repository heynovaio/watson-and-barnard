import Header from "@/src/components/Header"
import ServicesHero from "@/src/components/services/ServicesHero"
import Listings from "@/src/components/services/Listings"
import Feed from "@/src/components/Feed"

export const metadata = {
  title: "Services",
  description:
    "Areas of expertise: topographic, construction, subdivision and legal surveys, strata and air space plans, settlement monitoring, UAV drone surveys and laser scanning.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServicesHero />
        <Listings />
        <Feed />
      </main>
    </>
  )
}
