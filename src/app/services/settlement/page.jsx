import Header from "@/src/components/Header"
import ServiceDetail from "@/src/components/services/ServiceDetail"
import Feed from "@/src/components/Feed"
import { services } from "@/src/components/content"

export const metadata = { title: "Settlement Monitorings" }

const service = services.settlement

export default function ServiceDetailPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ServiceDetail {...service} />
        <Feed />
      </main>
    </>
  )
}
