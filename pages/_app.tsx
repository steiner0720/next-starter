import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { SWRConfig } from 'swr'
import fallback from '../store/fallback'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>Nextjs-starter</title>
      </Head>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default appWithTranslation(MyApp)
