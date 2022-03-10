import React from 'react'

import { RiArrowDownSLine } from "react-icons/ri"
import { BsCalendarWeek } from "react-icons/bs"
import { IoSettings } from "react-icons/io5"

function DatePart( { value } ) {
  return (
    <div className='flex justify-evenly items-center border-slate-200 border-2 border-solid mx-3 rounded px-2 py-1 bg-white'>
        {
          (value === 0) ? <div className='flex mx-3 items-center'>
              <div className='text-2xl text-gray-400 mx-1'><BsCalendarWeek /></div>
              <div className='mx-3'>
                <div>Expire date</div>
                <div>1-Mar-2022</div>
              </div>
              <div className='text-2xl text-gray-400 mx-1'><RiArrowDownSLine /></div>
          </div>
          :
          <div className='text-2xl text-gray-400 mx-1'><IoSettings /></div>
        }
    </div>
  )
}

export default DatePart