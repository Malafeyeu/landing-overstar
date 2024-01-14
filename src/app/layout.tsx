import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './styles/index.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Overstars',
  description: 'landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        id='root'
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
