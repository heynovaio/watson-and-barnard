import Header from "@/src/components/Header"
import ServiceDetail from "@/src/components/services/ServiceDetail"
import Feed from "@/src/components/Feed"
import { services } from "@/src/components/content"

export const metadata = { title: "Subdivisions and Legal Surveys" }

const service = services.property

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
