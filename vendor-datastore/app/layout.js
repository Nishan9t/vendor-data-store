import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { NextAuthProvider } from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vendor-data-store',
  description: 'Generated by Nishant Pandey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
      <div className='max-w-4xl mx-auto '>
        <Navbar/>
        {children}
      </div>
      </NextAuthProvider>
      </body>
    </html>
  )
}
