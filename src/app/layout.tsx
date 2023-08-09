import '@/app/globals.css'
import Navbar from '@/components/Navbar'
import { cousine } from './fonts'

export const metadata = {
  title: 'Rin Heimerle',
  description: 'Portfolio site for Rin Heimerle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cousine.className} bg-dark-green text-light-grey`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
