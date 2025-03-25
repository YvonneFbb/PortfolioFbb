import type { Metadata } from 'next'
import '@/app/globals.css'

import Header from '@/components/header'
import GlobalNav from '@/components/nav'

export const metadata: Metadata = {
  title: 'Fbb Portfolio',
  description: ''
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Header />
        <GlobalNav />
        <main className='relative z-10'>{children}</main>
      </body>
    </html>
  )
}
