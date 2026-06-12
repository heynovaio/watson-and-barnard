import Header from "@/src/components/Header"
import ServiceDetail from "@/src/components/services/ServiceDetail"
import Feed from "@/src/components/Feed"

export const metadata = { title: "Construction Survey" }

export default function ServiceDetailPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServiceDetail title="Construction Survey" />
        <Feed />
      </main>
    </>
  )
}
