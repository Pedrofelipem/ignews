import {AppProps} from 'next/app'
import { Header } from '../components/Header/header'
import { SessionProvider as NextAuthProvider} from 'next-auth/react'

import '../styles/global.scss'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../providers/prismic'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session} basePath={process.env.NEXTAUTH_URL}>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>
              {children}
            </a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          
            <Header />
            <Component {...pageProps} />
          
        </PrismicPreview>
      </PrismicProvider>
    </NextAuthProvider>
  )
}

export default MyApp
