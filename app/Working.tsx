"use client"
import React from 'react'

const Working = () => {

  return (

    <>
        <div className='flex items-center justify-center text-center sm:mt-30 mt-25'>
            <h3 className='sm:font-bold font-extrabold font-JB sm:text-[48px] text-[30px] text-gray-700'>How Does it Work ?</h3>
        </div>
        <div className='flex items-center justify-center mt-8 mb-15'>
        <div className='w-auto h-auto flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-15 md:flex-nowrap items-center'>
            
            <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
            <div className='w-full h-[80px] rounded-2xl first'></div>
            <div className='w-full text-xs font-JB text-black text-center p-3'>
                <span className='text-xs font-JB font-extrabold text-blue-600'>Create</span> a Project
            </div>
            </div>

            <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
            <div className='w-full h-[80px] rounded-2xl second'></div>
            <div className='w-full text-xs font-JB text-black text-center p-3'>
                <span className='text-xs font-JB font-extrabold text-pink-600'>Copy</span> the Code
            </div>
            </div>

            <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
            <div className='w-full h-[80px] rounded-2xl third'></div>
            <div className='w-full text-xs font-JB text-black text-center p-3 text-nowrap'>
                <span className='text-xs font-JB font-extrabold text-green-700'>Paste</span> into Project
            </div>
            </div>

            <div className='w-[45%] md:w-auto h-full rounded-2xl border-2 border-gray-400 py-2'>
            <div className='w-full h-[80px] rounded-2xl fourth'></div>
            <div className='w-full text-xs font-JB text-black text-center p-3'>
                <span className='text-xs font-JB font-extrabold text-fuchsia-600'>Enjoy</span> the Vibe
            </div>
            </div>

        </div>
        </div>

    </>

  )
}

export default Working