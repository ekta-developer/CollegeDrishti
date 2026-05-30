
import './globals.css'
import Navbar from '@/components/Header/Navbar'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'DU SOL',
  description: 'DU SOL Admission Portal'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}