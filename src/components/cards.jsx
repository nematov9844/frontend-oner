import React from 'react'

export default function Cards({data ,title, desc}) {
  return (
    
 <div className='flex flex-col gap-4 mt-5 justify-center'>
    <div className='flex w-full items-center justify-between'>
<h1 className='font-normal text-[24px] leading-[34px]'>{title}</h1>
<p  className='text-[14px] font-normal leading-5 text-[#5946D7] bg-blue-200 rounded-md px-2 py-1'>{desc ? desc :"" }</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full'>
        {
            data?.map(item =>
            (
                <div className="max-w-xs rounded-lg border border-gray-200 bg-white p-4 shadow-md">
                <div className="relative">
                  <img src={item.imagie} alt="Product Image" className="w-full h-48 rounded-lg" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Артикул: 153789</span>
                    <div className="flex items-center">
                      <span className="text-orange-400 text-sm">★ ★ ★ ★ ☆</span>
                      <span className="ml-1 text-gray-400">{item.rewiews}</span>
                    </div>
                  </div>
                  <h2 className="mt-2 text-gray-800 text-lg font-semibold">
                  {item.name}
                  </h2>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-gray-800">{item.price_current} ₽</span>
                      <span className="ml-2 text-sm text-gray-500 line-through">{item.price_old} ₽</span>
                    </div>
                    <button className="flex items-center justify-center w-10 h-10 shadow-md shadow-blue-300 bg-blue-50 text-white rounded-md border-2 border-blue-500 hover:bg-blue-600">
                      🛒
                    </button>
                  </div>
                </div>
              </div>
              
            )
            )
        }
    </div>
 </div>
  )
}
