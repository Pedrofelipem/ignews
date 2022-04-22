import {AppProps} from 'next/app'
import { Header } from '../components/Header/header'
import { SessionProvider as NextAuthProvider} from 'next-auth/react'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session} basePath={process.env.NEXTAUTH_URL}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
