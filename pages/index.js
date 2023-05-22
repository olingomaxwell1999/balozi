import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
const Homebanner = dynamic(() => import('@/components/Homebanner') , { ssr: false })
const Aboutteam = dynamic(() => import('@/components/Aboutteam') , { ssr: false })
const Cover = dynamic(() => import('@/components/Cover') , { ssr: false })
const City = dynamic(() => import('@/components/City') , { ssr: false })
const Covertwo = dynamic(() => import('@/components/Covertwo') , { ssr: false })
const Studiobedroom = dynamic(() => import('@/components/Studiobedroom') , { ssr: false })
const Revealarea = dynamic(() => import('@/components/Revealarea') , { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>Balozi Suites</title>
        <meta name="description" content="The official balozi suites is an area of residence ready to be bought. Here you will find all the information you need." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"fa199c8d48c8cf04b58c065d5c96587b"})});
            `,
          }}
        ></script>
        
      </Head>
      
      <Homebanner/>
      <Revealarea/>
      <Studiobedroom/>
      <Covertwo/>
      <City/>
      <Cover/>
      <Aboutteam/>
    
    </>
  )
}
