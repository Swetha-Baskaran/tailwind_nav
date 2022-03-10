import React from 'react'

import { RiArrowDownSLine } from "react-icons/ri"
import { BsCalendarWeek } from "react-icons/bs"
import { IoSettings } from "react-icons/io5"

function DatePart( { value } ) {
  return (
    <div className='flex justify-evenly items-center border-slate-300 border-2 border-solid mx-3 rounded md:px-2 px-0 py-1 bg-white'>
        {
          (value === 0) ? <div className='flex md:mx-3 px-1 items-center'>
              <div className='text-2xl text-gray-500 mx-1'><BsCalendarWeek /></div>
              <div className='mx-3 hidden md:block'>
                <div>Expire date</div>
                <div>1-Mar-2022</div>
              </div>
              <div className='text-2xl text-gray-400 mx-1 hidden md:block'><RiArrowDownSLine /></div>
          </div>
          :
          <div className='text-2xl text-gray-400 mx-1'><IoSettings /></div>
        }
    </div>
  )
}

export default DatePart