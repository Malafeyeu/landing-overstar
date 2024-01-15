import type { Metadata } from 'next'
import './styles/index.scss'

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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body 
        id='root'
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
