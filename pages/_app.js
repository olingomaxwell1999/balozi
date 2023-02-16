import '../styles/globals.css'

import Head from 'next/head'

import Layout from '../components/Layout'

function MyApp ({Component, pageProps}) {

  return (
    <>
      <Head>
        
      </Head>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}

export default MyApp