'use client'

import { useDetectClickOutside } from 'react-detect-click-outside'
import { Handle, NodeResizer, Position } from '@xyflow/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BellRingIcon, CheckIcon, XIcon } from 'lucide-react'
import { memo, use, useEffect, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface IApiNode {
  data: {
    label: string
  }
  isConnectable: boolean
  selected: boolean
}
function ApiNode({ data, isConnectable, selected }: IApiNode) {
  const [edit, setEdit] = useState(false)
  // const [selected, setSelected] = useState(false)

  const handleEdit = () => {
    setEdit(true)
  }

  useEffect(() => {
    if (edit) {
      const input = document.getElementById('service-name') as HTMLInputElement
      input.focus()
    }
  }, [edit])

  return (
    <div className='group'>
      <NodeResizer
        color='#3C41C2'
        handleStyle={{
          width: '8px',
          height: '8px',
          border: '1px solid #3C41C2',
          background: 'rgba(255, 255, 255, 0.5)',
        }}
        isVisible={selected}
        minWidth={100}
        minHeight={30}
      />
      <div className='h-auto w-auto'>
        <>
          {edit ? (
            <div className='flex items-center space-x-2'>
              <Input id='service-name' value={data.label} className='border-none' />
              <div className='flex space-x-1'>
                <Button onClick={() => setEdit(false)}>
                  <CheckIcon />
                </Button>
                <Button variant='outline' onClick={() => setEdit(false)}>
                  <XIcon />
                </Button>
              </div>
            </div>
          ) : (
            <div onDoubleClick={handleEdit}>{data.label}</div>
          )}
        </>
      </div>

      <div className='group-hover:visible invisible'>
        <Handle type='target' position={Position.Top} isConnectable={isConnectable} />
        <Handle type='target' position={Position.Bottom} isConnectable={isConnectable} />
        <Handle type='target' position={Position.Left} isConnectable={isConnectable} />
        <Handle type='target' position={Position.Right} isConnectable={isConnectable} />
        <Handle id='a-a' type='source' position={Position.Top} isConnectable={isConnectable} />
        <Handle id='a-b' type='source' position={Position.Top} isConnectable={isConnectable} />
        <Handle id='b-a' type='source' position={Position.Bottom} isConnectable={isConnectable} />
        <Handle id='b-b' type='source' position={Position.Bottom} isConnectable={isConnectable} />
        <Handle id='c-a' type='source' position={Position.Left} isConnectable={isConnectable} />
        <Handle id='c-b' type='source' position={Position.Left} isConnectable={isConnectable} />
        <Handle id='d-a' type='source' position={Position.Right} isConnectable={isConnectable} />
        <Handle id='d-b' type='source' position={Position.Right} isConnectable={isConnectable} />
      </div>
    </div>
  )
}

export default memo(ApiNode)
