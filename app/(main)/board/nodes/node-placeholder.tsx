import { memo } from 'react'
import { NodeProps } from '@xyflow/react'
import { PlaceholderNode } from '@/components/placeholder-node'

const NodePlaceholder = memo(({ selected }: NodeProps) => {
  return (
    <PlaceholderNode selected={selected}>
      <div>+</div>
    </PlaceholderNode>
  )
})

export default NodePlaceholder
