import { poppins } from './fonts'
import './globals.css'


export const metadata = {
  title: 'Abhishek Pethe',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#121111]`} >{children}</body>
    </html>
  )
}
