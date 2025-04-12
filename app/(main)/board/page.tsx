'use client'

import '@xyflow/react/dist/style.css'
import '@/assets/styles/xy-theme.css'
import { useCallback, useState } from 'react'
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Controls,
  EdgeChange,
  MiniMap,
  Node,
  NodeChange,
  ReactFlow,
} from '@xyflow/react'
import nodeTypes from './initial/nodes'
import edgeTypes from './initial/edges'
import initialNodes from './initial/initial-node'

const nodeClassName = (node: Node) => node.type

export default function Page() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState([])

  const onNodesChange = useCallback(
    (
      changes: NodeChange<
        | { id: string; data: { label: string }; position: { x: number; y: number }; type: string }
        | {
            id: string
            data: { label: string }
            position: { x: number; y: number }
            type?: undefined
          }
      >[],
    ) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  )
  const onEdgesChange = useCallback(
    (changes: EdgeChange<never>[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  )

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = { ...connection, type: 'custom-edge' }
      setEdges((eds) => addEdge(edge, eds) as never[])
    },
    [setEdges],
  )

  return (
    <div className='h-[calc(100vh-80px)] w-[calc(100vw-265px)]'>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <MiniMap zoomable pannable nodeClassName={nodeClassName as any} />
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
