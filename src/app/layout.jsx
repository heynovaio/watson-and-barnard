import "./globals.css"

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
      </head>
      <body>{children}</body>
    </html>
  )
}
