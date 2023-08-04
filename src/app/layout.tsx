import Navbar from "@/components/Navbar"

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
