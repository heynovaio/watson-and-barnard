export const dynamic = "force-static"

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "http://www.wbsurveys.bc.ca/sitemap.xml",
  }
}
