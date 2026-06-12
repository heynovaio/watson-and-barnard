import Header from "@/src/components/Header"
import ServiceDetail from "@/src/components/services/ServiceDetail"
import Feed from "@/src/components/Feed"

export const metadata = { title: "Strata Surveys and Air Space Plans" }

export default function ServiceDetailPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServiceDetail title="Strata Surveys and Air Space Plans" />
        <Feed />
      </main>
    </>
  )
}
