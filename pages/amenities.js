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

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var $zoho=$zoho || {};
              $zoho.salesiq = $zoho.salesiq || {widgetcode: "e9d202d9e744bd817759ea6dab3438a3be85a8fdad626057265123f3d5af7add1e873f1fea789d2454eec55d29ee6f4e", values:{},ready:function(){}};
              var d=document;
              s=d.createElement("script");
              s.type="text/javascript";
              s.id="zsiqscript";
              s.defer=true;
              s.src="https://salesiq.zoho.com/widget";
              t=d.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(s,t);
            `,
          }}
        />

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