import React from 'react'

import { HiOutlineMoon } from "react-icons/hi"
import { FaRegCalendarAlt } from "react-icons/fa"
import { BsPlayCircle } from "react-icons/bs"
import { VscBellDot } from "react-icons/vsc"
import { BsFillBasket2Fill } from "react-icons/bs"
import { IoIosContact } from "react-icons/io"

function IconBox() {
  return (
    <div>
       <ol className='flex justify-evenly items-center m-5 p-3  bg-white md:shadow-md rounded-md mr-5'>
        <div className='hidden md:flex'>
          <li className='text-2xl px-3'><HiOutlineMoon /></li>
          <li className='text-2xl px-3'><BsPlayCircle /></li>
          <li className='text-2xl px-3'><FaRegCalendarAlt /></li>
          <li className='text-2xl px-3'><BsFillBasket2Fill /></li>
          <li className='text-2xl px-3'><VscBellDot /></li>
        </div>
        <li className='text-xl text-gray-500 px-4 hidden md:block'>Sham</li>
        <li className='text-5xl md:text-4xl px-1 md:px-5 border-3 border-solid border-yellow-400'style={{"border-radius": "50%","padding" : "1px","border" : "1px solid hsl(45deg 100% 47%)"}}><IoIosContact /></li>
       </ol>
    </div>
  )
}

export default IconBox