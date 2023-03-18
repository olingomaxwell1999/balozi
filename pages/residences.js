import dynamic from 'next/dynamic'
import Head from 'next/head'
const Onebedroomcover = dynamic(() => import('@/components/Onebedroomcover'), {ssr: false})
const Onebedroomfirst = dynamic(() => import('@/components/Onebedroomfirst'), {ssr: false})
const Onebedroomslider = dynamic(() => import('@/components/Onebedroomslider'), {ssr: false})
const ResidenceBanner = dynamic(() => import('@/components/ResidenceBanner'), {ssr: false})
const Studiofirst = dynamic(() => import('@/components/Studiofirst'), {ssr: false})
const Studiosecond = dynamic(() => import('@/components/Studiosecond'), {ssr: false})

function residences() {
  return (
    <div>
      <Head>
        <title>Residences | Balozi Suites</title>
        <meta name="description" content="Come to The Reveal and we shall offer you the best housing you need while in Nairobi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResidenceBanner/>
      <Onebedroomfirst/>
      <Studiofirst/>
      <Onebedroomslider/>
      <Onebedroomcover/>
      <Studiosecond/>
    </div>
  )
}

export default residences