import { BaseEdge, EdgeLabelRenderer, getBezierPath, useReactFlow } from '@xyflow/react'
import { XIcon } from 'lucide-react'

interface ICustomEdge {
  id: string
  sourceX: number
  sourceY: number
  targetX: number
  targetY: number
}

export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }: ICustomEdge) {
  const { setEdges } = useReactFlow()
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  })

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{ strokeWidth: 2, stroke: '#4EBC7E', strokeDasharray: '5 5' }}
      />
      <EdgeLabelRenderer>
        <button
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
          className='nodrag nopan p-1 bg-gray-200 rounded-full'
          onClick={() => {
            setEdges((es) => es.filter((e) => e.id !== id))
          }}
        >
          <XIcon width={12} height={12} />
        </button>
      </EdgeLabelRenderer>
    </>
  )
}
