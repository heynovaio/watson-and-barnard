import Script from "next/script"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./globals.css"
import Footer from "@/src/components/Footer"

// FontAwesome injects its own CSS at runtime by default, which causes a flash of
// oversized icons. We import the CSS above and disable the auto-injection.
config.autoAddCss = false

const GTM_ID = "GTM-T4JDVQ9"

export const metadata = {
  metadataBase: new URL("http://www.wbsurveys.bc.ca"),
  title: {
    default: "Watson & Barnard Land Surveyors & Engineers",
    template: "%s | Watson & Barnard",
  },
  description:
    "We are a private land survey firm situated in Delta, BC, Canada that has been serving the Lower Mainland and surrounding areas including Washington State since 1989.",
  keywords: ["land surveyors", "Delta", "engineers", "land survey", "Washington", "BCLS"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Typekit (Astoria) */}
        <link rel="stylesheet" href="https://use.typekit.net/kzp1hfe.css" />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Bing UET */}
        <Script id="bing-uet" strategy="afterInteractive">
          {`(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"56178846"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`}
        </Script>
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <Footer />
      </body>
    </html>
  )
}
