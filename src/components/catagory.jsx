import React from 'react'
import Icon from './icon'

export default function Catagory({title,desc}) {
  return (
    <div className='flex items-center w-full gap-4 justify-start bg-[#FFFFFF] rounded-md shadow-sm'>
        <div className='w-[40px] rounded-lg h-[40px]'>
            <Icon/>
        </div>
        <div>
            <h1 className='text-xl font-normal leading-8'>{title}</h1>
            <p className='text-[14px] font-normal leading-5'>{desc}</p>
        </div>
    </div>
  )
}
