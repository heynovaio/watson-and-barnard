import Header from "@/src/components/Header"
import PageHero from "@/src/components/PageHero"
import Links from "@/src/components/resources/Links"
import Feed from "@/src/components/Feed"

export const metadata = {
  title: "Resources",
  description:
    "Through our network of professionals we can guide you to architects, house designers, arborists, archeologists, geotechnical and civil mechanical engineers.",
}

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero title="Resources" pMaxWidth={624}>
          Through our network of professionals, we can guide you in locating
          architects, house designers, arborists, archeologists, geotechnical and civil
          mechanical engineers.
        </PageHero>
        <Links />
        <Feed />
      </main>
    </>
  )
}
