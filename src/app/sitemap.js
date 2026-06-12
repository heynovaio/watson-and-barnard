export const dynamic = "force-static"

const BASE = "http://www.wbsurveys.bc.ca"

const ROUTES = [
  "/",
  "/about/",
  "/services/",
  "/services/architect/",
  "/services/developer/",
  "/services/property/",
  "/services/home/",
  "/services/settlement/",
  "/services/drone/",
  "/services/laser/",
  "/resources/",
  "/contact/",
]

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }))
}
