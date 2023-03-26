import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { GlobalStyle } from '@/styles/GlobalStyle'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <GlobalStyle/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </main>
  )
}
