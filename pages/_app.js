import '../styles/globals.css'

import Head from 'next/head'

import Layout from '../components/Layout'
import Script from 'next/script'

function MyApp ({Component, pageProps}) {


  return (
    <>

      
    
      <Head>
        
      </Head>
      <Layout>
        <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-ZTSB4BN10X'/>

        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZTSB4BN10X')
          `}
        </Script>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}

export default MyApp