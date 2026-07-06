import Script from "next/script"
import "./globals.css"
import Footer from "@/src/components/Footer"

const GTM_ID = "GTM-53PFQMHS"

export const metadata = {
  metadataBase: new URL("https://www.wbsurveys.bc.ca"),
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
        {/* Preconnect + preload to cut render-blocking / font delay (matches
            the production-trace findings: render-blocking ~1.34s, font display) */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/fonts/metropolis-medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/metropolis-semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Adobe Typekit (Astoria) — preloaded then injected after interactive
            so it doesn't block first render. Astoria is only used for the logo
            and section headings (not the LCP element), so async is safe. */}
        <link rel="preload" as="style" href="https://use.typekit.net/kzp1hfe.css" />
        <Script id="typekit" strategy="afterInteractive">
          {`(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://use.typekit.net/kzp1hfe.css';document.head.appendChild(l);})();`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link rel="stylesheet" href="https://use.typekit.net/kzp1hfe.css" />
        </noscript>
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
