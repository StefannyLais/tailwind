import type {AppProps} from 'next/app'

import '../styles/global.css'

export default function _document({Component, pageProps}:AppProps){
  return (
    <Component {...pageProps} />
  )
}