import React from 'react'
import IconBox from './top/iconBox'
import SecondBar from './top/secondBar'
import TopCont from './top/topCont'

function TopNav() {
  return (
    <div>
        <div className="part1 flex justify-between items-center">
           <TopCont />           
           <IconBox />
        </div>
        
        <SecondBar />
    </div>
  )
}

export default TopNav