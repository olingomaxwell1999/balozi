import Locationbanner from '@/components/Locationbanner'
import Locationcover from '@/components/Locationcover'
import Locationfirst from '@/components/Locationfirst'
import React from 'react'

function location() {
  return (
    <div>
      <Locationbanner/>
      <Locationfirst/>
      <Locationcover/>
    </div>
  )
}

export default location