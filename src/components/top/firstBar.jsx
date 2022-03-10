import React from 'react'

import IconBox from './iconBox'
import TopCont from './topCont'

function FirstBar() {
  return (
    <div className="part1 flex justify-between items-center">
      <TopCont />           
      <IconBox />
    </div>
  )
}

export default FirstBar