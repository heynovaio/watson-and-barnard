import Header from "@/src/components/Header"
import PageHero from "@/src/components/PageHero"
import Team from "@/src/components/about/Team"
import Values from "@/src/components/about/Values"
import Leadership from "@/src/components/about/Leadership"
import Feed from "@/src/components/Feed"
import { team } from "@/src/components/content"

export const metadata = {
  title: "About Us",
  description:
    "Watson & Barnard is a private land survey firm in Delta, BC, serving the Lower Mainland and surrounding areas since 1989.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero title="About Us" imageSrc="/images/about-icon.svg" imageAlt="">
          We are a private land survey firm situated in Delta, BC, Canada that has been
          serving the Lower Mainland and surrounding areas since 1989.
        </PageHero>
        <Team />
        <Values />
        <Leadership
          leadership={team.leadership}
          technical={team.technical}
          field={team.field}
        />
        <Feed />
      </main>
    </>
  )
}