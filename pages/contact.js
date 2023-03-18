import dynamic from 'next/dynamic'
import Head from 'next/head'
const Contactarea = dynamic(() => import('@/components/Contactarea') , { ssr: false })
const Contactsbanner = dynamic(() => import('@/components/Contactsbanner') , { ssr: false })
const Locationcover = dynamic(() => import('@/components/Locationcover') , { ssr: false }) 

function contact() {

  return (
    <div>
      <Head>
        <title>Contact Us | Balozi Suites</title>
        <meta name="description" content="Come to The Reveal and we shall offer you the best housing you need while in Nairobi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contactsbanner/>
      <Contactarea/>
      <Locationcover/>
    </div>
  )
}

export default contact