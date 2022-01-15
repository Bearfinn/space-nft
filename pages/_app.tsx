import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from 'components/shared/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='bg-black text-white min-h-screen'>
    <Navbar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
