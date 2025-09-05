import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: "Čistý Domov",
  description: "Poskytujeme úklid domácností a kanceláří s důrazem na kvalitu a spolehlivost.",
  keywords: "úklid, čistý domov, domácnost, kancelář, profesionální úklid, úklid Brno, tepování Brno, tepování sedaček, mytí oken, úklidové služby",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon-192x192.png" />
      <head>
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
