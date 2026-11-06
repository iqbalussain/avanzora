import type { ReactNode } from "react"

export const metadata = { title: "curious-guardrails-771209.framer.app" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
