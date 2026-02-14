import { Playfair_Display } from 'next/font/google'
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic', 'normal'],
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={playfair.className}>
        {children}
      </body>
    </html>
  )
}