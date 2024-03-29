import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SWRConfig } from 'swr';
import fallback from '../store/fallback';
import themeOptions from '../lib/theme/themeOptions';
import '../styles/globals.css';

const theme = createTheme(themeOptions);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>Nextjs-starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default appWithTranslation(MyApp);
