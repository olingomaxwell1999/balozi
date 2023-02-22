import InvestmentPlan from '@/components/InvestorsPlan'
import InvestorsGuideBanner from '@/components/InvesrorsGuideBanner'
import React from 'react'
import Purchase from '@/components/Purchase'

function investorsguide() {
  return (
    <div>
      <InvestorsGuideBanner/>
      <InvestmentPlan/>
      <Purchase/>
    </div>
  )
}

export default investorsguide