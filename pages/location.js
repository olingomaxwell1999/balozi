import Locationbanner from '@/components/Locationbanner'
import Locationcover from '@/components/Locationcover'
import Locationfirst from '@/components/Locationfirst'
import Head from 'next/head'
import React from 'react'

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