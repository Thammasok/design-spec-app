import { BinaryIcon, PlusIcon } from 'lucide-react'
import React from 'react'

interface INode2 {
  data: {
    title: string
    content: string
    color: string
    date: string
  }
  isConnectable: boolean
  selected: boolean
}

export default function Node2({}: INode2) {
  return (
    <div>
      <div className='indigo bg-indigo-200 dark:bg-indigo-300 block-note rounded-lg p-4'>
        <div className='flex items-center border-b pb-2'>
          <PlusIcon />
          <p className='mx-2 flex-1 font-semibold'>Note</p>
          <div className='ui-popover inline-block note-color'>
            <div className='ui-popover__trigger inline-block h-full' aria-expanded='false'></div>
          </div>
          <hr className='mx-2 h-7 border-r' />
          <BinaryIcon />
        </div>
        <textarea
          className='text-base mt-2 bg-transparent focus:ring-0'
          placeholder='Write a note here...'
          cols={30}
          rows={7}
          value='Read the documentation about the Google Sheets block before running this workflow'
          style={{
            width: '87px',
            height: '21px',
            resize: 'both',
            minWidth: '280px',
            minHeight: '168px',
          }}
        ></textarea>
      </div>
    </div>
  )
}
