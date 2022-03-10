import React from 'react'

import { BsSpeedometer2, BsStack, BsGraphUp } from "react-icons/bs"
import { MdNavigateNext } from "react-icons/md"
import { GrBarChart } from "react-icons/gr"


function SideNav() {
  return (
    <div className="p-3" style={{"width" : "300px"}}>
        <div className="text-4xl my-4 flex justify-between">
            <div className='flex justify-evenly'>
              <div className='px-3'><BsSpeedometer2/></div>
              <div className='text-bold px-3'>
                 TealVue
              </div>    
            </div>    
            <div>
                o
            </div>
        </div>

        <div className="my-5 flex justify-between">
            <div className='flex justify-evenly'>
              <div className='px-3'><BsSpeedometer2/></div>
              <div className='px-3'>
                 Dashboard
              </div>    
              </div> 
            <MdNavigateNext/>   
        </div>

        <div className='px-5 py-4'>
            <h1 className="text-gray-400 uppercase">screener</h1>
            <ol className='my-9'>
                <li className='my-5 flex justify-between'>
                   <div className='flex justify-evenly px-4'><BsStack/><div className='px-3'>Future</div></div>    
                   <MdNavigateNext/>
                </li>
                <li className='my-5 flex justify-between'>
                   <div className='flex justify-evenly px-4'><BsStack/><div className='px-3'>Future</div></div>    
                   <MdNavigateNext/>
                </li>
                <li className='my-5 flex justify-between'>
                   <div className='flex justify-evenly px-4'><BsStack/><div className='px-3'>Future</div></div>    
                   <MdNavigateNext/>
                </li>
                
            </ol>

            <ol className='my-9'>
            <h1 className="text-gray-400 uppercase">others</h1>
                <li className='my-5 flex justify-between'>
                   <div className='flex justify-evenly px-4'><BsStack/><div className='px-3'>Future</div></div>    
                   <MdNavigateNext/>
                </li>
                <li className='my-5 flex justify-between'>
                   <div className='flex justify-evenly px-4'><BsStack/><div className='px-3'>Future</div></div>    
                   <MdNavigateNext/>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default SideNav