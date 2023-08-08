import './globals.css'
import Header from '../components/Header'
import { font } from './font'

export const metadata = {
  title: 'First app with Nextjs 13',
  description: 'Generated by create next app'
}

// this component wraps all our app
export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}