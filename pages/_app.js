import '../styles/globals.css'

import Head from 'next/head'

import Layout from '../components/Layout'
import Script from 'next/script'

function MyApp ({Component, pageProps}) {


  return (
    <>

      
    
      <Head>
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
      <Layout>
        <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-ZTSB4BN10X'/>

        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZTSB4BN10X', {
              page_path: window.location.pathname
            })
          `}
        </Script>
        <Component {...pageProps}/>
      </Layout>
    </>
  )
}

export default MyApp