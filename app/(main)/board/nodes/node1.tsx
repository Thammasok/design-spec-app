import { InfoIcon, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React, { ReactElement } from 'react'

interface INode1 {}

export default function Node1({}: INode1) {
  return (
    <Link
      href=''
      target='_blank'
      rel='noreferrer'
      id='empty'
      as='div'
      className='focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 node flex-col justify-between pointer-events-auto relative cursor-pointer focus:!ring-0 -mx-5 px-5 py-4 border-y border-gray-100 dark:border-gray-100 hover:bg-secondaryBg hover:dark:bg-gray-100 sm:w-[288px] sm:h-[144px] sm:mx-0 sm:p-6 sm:shadow-sm sm:rounded-xl sm:border sm:translate-x-px sm:translate-y-px sm:relative sm:z-10 hover:sm:border-pink-200 hover:sm:bg-background hover:sm:shadow-[0px_0px_0px_4px_rgba(166,_103,_228,_0.06)] hover:sm:dark:shadow-none hover:sm:dark:border-gray-200 hover:sm:dark:bg-gray-100 hidden sm:flex border-dashed sm:border-gray-400 sm:dark:border-gray-300 bg-secondaryBg dark:bg-background shadow-none'
    >
      <div className='flex space-x-3 items-start'>
        <div
          className='icon-container icon-md text-2xl mt-1 flex items-center justify-center bg-pink-500 text-white p-1 rounded-full'
          aria-hidden='true'
        >
          <PlusIcon />
        </div>
        <div className='flex flex-col min-w-0'>
          <p className='text-base font-semibold truncate text-left mb-1 sm:mb-0'>Add a Service</p>
          <p className='text-sm'>⌘K -&gt; New Service</p>
        </div>
      </div>
      <div className='flex space-x-4 items-center mt-3'>
        <div className='icon-container icon-md text-2xl text-gray-500' aria-hidden='true'>
          <InfoIcon />
        </div>
        <p className='text-sm text-gray-600'>or top-right button is fine too.</p>
      </div>
    </Link>
  )
}
