import Header from "@/src/components/Header"
import Hero from "@/src/components/homepage/Hero"
import Clients from "@/src/components/homepage/Clients"
import Easy from "@/src/components/homepage/Easy"
import Past from "@/src/components/homepage/Past"
import Feed from "@/src/components/Feed"

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Clients />
        <Easy />
        <Past />
        <Feed />
      </main>
    </>
  )
}
