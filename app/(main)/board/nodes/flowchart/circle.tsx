import React, { memo } from 'react'
import {
  Handle,
  useStore,
  Position,
  InternalNode,
  Node,
  NodeResizer,
  ResizeParams,
} from '@xyflow/react'

interface ICircleProps extends Node {
  id: string
}

export default memo(({ id, selected, focusable }: ICircleProps) => {
  const [size, setSize] = React.useState({ width: 48, height: 48 })
  const [font, setFont] = React.useState({
    fontType: 'auto', // 'auto' | 'custom'
    fontFamily: 'monospace',
    fontSize: 4,
    fontWeight: 'normal',
    color: '#000',
    textAlign: 'center' as const,
    textOverflow: 'ellipsis', // 'ellipsis' | 'clip'
    overflow: 'hidden',
  })
  const [border, setBorder] = React.useState({
    color: '#000',
    width: 1,
    style: 'dashed', // 'dashed' | 'dotted' | 'solid'
  })
  const [background, setBackground] = React.useState({
    color: '#fff',
  })

  const label = useStore((s) => {
    const node = s.nodeLookup.get(id)

    if (!node) {
      return null
    }

    return `Position x:${parseInt(node.position.x.toString())} y:${parseInt(
      node.position.y.toString(),
    )}`
  })

  const onResize = (_: any, data: ResizeParams) => {
    calculateFontSize(data)

    setSize({ width: data.width, height: data.height })
  }

  const calculateFontSize = (data: ResizeParams) => {
    if (font.fontType === 'auto') {
      const nodeWidth = data.width || 48
      const nodeHeight = data.height || 48
      const minSize = Math.min(nodeWidth, nodeHeight)
      const fontSize = Math.floor(minSize / 12) // Adjust the divisor to change the font size

      setFont((prevFont) => ({
        ...prevFont,
        fontSize: fontSize,
      }))
    }
  }

  console.log('circle', id, selected, focusable)

  return (
    <div className='group'>
      <NodeResizer
        minHeight={48}
        minWidth={48}
        isVisible={selected}
        onResize={onResize}
        keepAspectRatio
      />
      <div
        data-id={id}
        data-type='circle'
        className='min-w-12 min-h-12 text-center rounded-[100%] flex justify-center items-center'
        style={{
          fontFamily: font.fontFamily,
          fontSize: font.fontSize + 'px',
          fontWeight: font.fontWeight,
          color: font.color,
          textAlign: font.textAlign,
          textOverflow: font.textOverflow,
          overflow: font.overflow,
          width: size.width || 48 + 'px',
          height: size.height || 48 + 'px',
          borderColor: border.color,
          borderWidth: border.width + 'px',
          borderStyle: border.style,
          backgroundColor: background.color,
        }}
      >
        {label || 'no node connected'}
      </div>

      <div className='group-hover:opacity-100 opacity-0 transition-opacity duration-300'>
        <Handle type='target' position={Position.Top} />
        <Handle type='target' position={Position.Left} />
        <Handle type='source' position={Position.Right} />
        <Handle type='source' position={Position.Bottom} />
      </div>
    </div>
  )
})
