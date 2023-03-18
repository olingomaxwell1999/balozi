import dynamic from 'next/dynamic'
import Head from 'next/head'
const Amenitiesfirst = dynamic(() => import('@/components/Amenitiesfirst') , { ssr: false })
const Amenitiessecond = dynamic(() => import('@/components/Amenitiessecond') , { ssr: false })
const Amenitiesslider = dynamic(() => import('@/components/Amenitiesslider') , { ssr: false })
const BannerAmenities = dynamic(() => import('@/components/BannerAmenities') , { ssr: false })
const Cityamenities = dynamic(() => import('@/components/Cityamenities') , { ssr: false })
const Coveramenities = dynamic(() => import('@/components/Coveramenities') , { ssr: false })

function amenities() {
  return (
    <div>
      <Head>
        <title>Amenities | Balozi Suites</title>
        <meta name="description" content="Come to The Reveal and we shall offer you the best housing you need while in Nairobi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerAmenities/>
      <Amenitiesfirst/>
      <Coveramenities/>
      <Amenitiessecond/>
      <Amenitiesslider/>
      <Cityamenities/>
    </div>
  )
}

export default amenities