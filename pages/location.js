import dynamic from 'next/dynamic'
import Head from 'next/head'
const Locationbanner = dynamic(() => import('@/components/Locationbanner'), {ssr: false})
const Locationcover = dynamic(() => import('@/components/Locationcover'), {ssr: false})
const Locationfirst = dynamic(() => import('@/components/Locationfirst'), {ssr: false}) 

function location() {
  return (
    <div>
      <Head>
        <title>Location | Balozi Suites</title>
        <meta name="description" content="Come to The Reveal and we shall offer you the best housing you need while in Nairobi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Locationbanner/>
      <Locationfirst/>
      <Locationcover/>
    </div>
  )
}

export default location