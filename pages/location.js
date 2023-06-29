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
      <Locationbanner/>
      <Locationfirst/>
      <Locationcover/>
    </div>
  )
}

export default location