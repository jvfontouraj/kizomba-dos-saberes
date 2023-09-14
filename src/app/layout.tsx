import React from 'react'
import './globals.css'
import { Ubuntu } from 'next/font/google'
import localFont from 'next/font/local'
import { Menu } from '@/components/Menu'
import { Footer } from '@/components/Footer'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400',
})

const paletteMosaic = localFont({
  src: '../../public/PaletteMosaic-Regular.ttf',
  display: 'swap',
  variable: '--palette-mosaic',
})

export const metadata = {
  title: 'Kizomba dos Saberes',
  description: 'Website do Kizomba dos Saberes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body
        id="body"
        className={`${ubuntu.className} ${paletteMosaic.variable}, relative`}
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
