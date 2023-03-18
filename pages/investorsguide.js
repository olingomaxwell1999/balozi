import dynamic from 'next/dynamic'
import Head from 'next/head'
const InvestmentPlan = dynamic(() => import('@/components/InvestorsPlan') , { ssr: false })
const InvestorsGuideBanner = dynamic(() => import('@/components/InvesrorsGuideBanner') , { ssr: false }) 
const Purchase = dynamic(() => import('@/components/Purchase'), {ssr: false})

function investorsguide() {
  return (
    <div>
      <Head>
        <title>Investors Guide | Balozi Suites</title>
        <meta name="description" content="Come to The Reveal and we shall offer you the best housing you need while in Nairobi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InvestorsGuideBanner/>
      <InvestmentPlan/>
      <Purchase/>
    </div>
  )
}

export default investorsguide