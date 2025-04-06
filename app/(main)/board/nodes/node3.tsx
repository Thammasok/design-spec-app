import { CheckCircleIcon, HardDriveIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type INode3 = {}

export default function Node3({}: INode3) {
  return (
    <div className='grid gap-4 items-start justify-items-center grid-cols-1'>
      <div>
        <Link
          href='#'
          target='_blank'
          rel='noreferrer'
          className='focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 node flex flex-col justify-between pointer-events-auto relative bg-background cursor-pointer focus:!ring-0 border-y dark:border-gray-100 hover:bg-secondaryBg hover:dark:bg-gray-100 sm:w-[288px] sm:h-[144px] sm:mx-0 sm:p-6 sm:shadow-sm sm:rounded-xl sm:border sm:border-gray-200 sm:dark:border-gray-200 sm:translate-x-px sm:translate-y-px sm:relative sm:z-10 hover:sm:border-pink-200 hover:sm:bg-background hover:sm:shadow-[0px_0px_0px_4px_rgba(166,_103,_228,_0.06)] hover:sm:dark:shadow-none hover:sm:dark:border-gray-200 hover:sm:dark:bg-gray-100 w-[288px] h-[144px] mx-0 p-6 shadow-sm rounded-xl border border-gray-100 dark:bg-gray-100'
          as='div'
        >
          <div className='flex space-x-3 items-start pr-4'>
            <div
              className='text-current icon-container icon-lg text-2xl flex-shrink-0'
              aria-hidden='true'
            >
              <Image
                src='https://files.isdev.co/api/public/dl/yG0Vklxa/RailwayIcons/chromadb.png'
                alt=''
                width={24}
                height={24}
              />
            </div>
            <div className='flex flex-col space-y-1 max-w-full w-full'>
              <p className='text-h6 font-semibold capitalize truncate' title='Chroma'>
                Chroma
              </p>
              <p
                className='text-sm text-gray-600 truncate'
                style={{ maxWidth: 'calc(100% - 12px)' }}
              >
                chroma-core/chroma:0.6.3
              </p>
            </div>
          </div>
          <div className='flex space-x-4 items-center'>
            <div className='icon-container icon-sm text-lg text-green-500' aria-hidden='true'>
              <CheckCircleIcon />
            </div>
            <p className='text-sm text-gray-600'>Just deployed</p>
          </div>
        </Link>
        <Link
          href='#'
          target='_blank'
          rel='noreferrer'
          as='div'
          className='bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 node-modifier relative grid px-4 -mx-4 py-4 sm:bg-secondaryBg overflow-hidden sm:grid sm:grid-cols-[auto_1fr] sm:items-center sm:gap-4 sm:border sm:rounded-xl sm:translate-x-px sm:-mt-[24px] sm:pt-[24px] sm:pb-0 sm:mx-0'
          style={{ height: '72px' }}
        >
          <div className='icon-container icon-sm text-lg text-gray-300' aria-hidden='true'>
            <HardDriveIcon />
          </div>
          <p className='text-sm text-gray-500'>/chroma/chroma</p>
        </Link>
      </div>
    </div>
  )
}
