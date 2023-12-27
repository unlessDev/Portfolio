import NavBar from '@/components/navbar'
import '@/styles/globals.css'
import { Ysabeau_SC } from 'next/font/google'
import Head from 'next/head'

const ysabeau = Ysabeau_SC({
  weight: ['600', '800'],
  subsets: ['latin'],
  variable: '--font-ysab'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${ysabeau.variable} font-ysab bg-light w-full min-h-screen`}>
        <NavBar></NavBar>
        <Component {...pageProps} />
      </main>
    </>
  )
}
