import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Homebanner from '@/components/Homebanner'
import Aboutteam from '@/components/Aboutteam'
import Cover from '@/components/Cover'
import City from '@/components/City'
import Covertwo from '@/components/Covertwo'
import Studiobedroom from '@/components/Studiobedroom'
import Revealarea from '@/components/Revealarea'

export default function Home() {
  return (
    <>
      <Head>
        <title>Balozi Suites</title>
        <meta name="description" content="The official balozi suites is an area of residence ready to be bought. Here you will find all the information you need." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
