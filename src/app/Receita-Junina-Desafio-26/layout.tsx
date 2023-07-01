import { ReactNode } from 'react'
import { Source_Serif_4, Source_Sans_3 } from 'next/font/google'

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--source-serif',
})
const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--source-sans',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-br"
      className={`${sourceSans3.variable} ${sourceSerif4.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
