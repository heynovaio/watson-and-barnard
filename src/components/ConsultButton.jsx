"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Lazy-load react-calendly only when the user opens the popup, so it never
// ships in the initial bundle (performance budget).
const PopupModal = dynamic(
  () => import("react-calendly").then((m) => m.PopupModal),
  { ssr: false }
)

export default function ConsultButton({ className, text = "Book a free consult" }) {
  const [open, setOpen] = useState(false)
  const [rootEl, setRootEl] = useState(null)

  useEffect(() => {
    setRootEl(document.body)
  }, [])

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
      >
        {text}
      </button>
      {rootEl && (
        <PopupModal
          url="https://calendly.com/wbls/consult30min"
          open={open}
          onModalClose={() => setOpen(false)}
          rootElement={rootEl}
        />
      )}
    </>
  )
}
