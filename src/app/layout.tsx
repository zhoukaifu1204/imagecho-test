import type { Metadata } from 'next'
import { DM_Sans, Nunito_Sans } from 'next/font/google'
import "@/app/styles/globals.css"

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin']
})

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Imagecho.ai',
  description: 'Imagecho.ai',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='referrer' content='never' />
      </head>
      <body className={`${dmSans.variable} ${nunitoSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
