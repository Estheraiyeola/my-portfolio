import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Esther\'s Portfolio ',
  description: 'Meet Esther',
  icons: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fea-logo-design_705304-103.jpg%3Fw%3D2000&f=1&nofb=1&ipt=3d551e20bde22b29f7dde0ac2f629617f32f42123ca13959e4c2ffec89b1ba69'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
