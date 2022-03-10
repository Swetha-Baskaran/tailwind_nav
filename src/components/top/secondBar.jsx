import React from 'react'
import DatePart from './date'

import { AiOutlineHome } from "react-icons/ai"

function SecondBar() {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center px-3'>
            <div className='text-2xl mx-3 text-bold'>Options</div>
            <div className='flex items-center text-gray-400 mx-3 text-sm'><AiOutlineHome /> . Dashboard</div>
        </div>
        <div className='flex justify-between'>
           <DatePart value={0} />
           <DatePart value={1} />
        </div>
    </div>
  )
}

export default SecondBar