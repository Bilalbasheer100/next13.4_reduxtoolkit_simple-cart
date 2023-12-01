import Navbar from '@/componet/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Prvider from '@/Redux/Prvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ReduxToolkit Cart',
  description: 'Cart using redux toolkit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Prvider>
        <Navbar/>
        {children}
        </Prvider>
        </body>
    </html>
  )
}
