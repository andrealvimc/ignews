import { AppProps } from 'next/app';
import { Header } from '../components/Header'
import { Provider as NextAuhProvider } from 'next-auth/client';

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuhProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuhProvider>
  )
}

export default MyApp
