'use client'

import '@xyflow/react/dist/style.css'
import { useCallback, useState } from 'react'
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Controls,
  EdgeChange,
  NodeChange,
  ReactFlow,
} from '@xyflow/react'
import ExampleNode from './nodes/example'
import CustomEdge from './edges/example'
import ApiNode from './nodes/api'
import PostItNode from './nodes/post-it'

const initialNodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
  {
    id: 'node-1',
    type: 'example',
    position: { x: 0, y: 200 },
    data: { label: 'Node 1' },
  },
  {
    id: 'node-2',
    type: 'api',
    position: { x: 400, y: 200 },
    data: { label: 'service' },
  },
  {
    id: 'node-3',
    type: 'postIt',
    position: { x: 600, y: 200 },
    data: {
      label: 'service',
      content: 'This is a post-it note',
      color: 'bg-white',
      date: '2023-10-01',
    },
  },
]

const nodeTypes = { example: ExampleNode, api: ApiNode, postIt: PostItNode }
const edgeTypes = {
  'custom-edge': CustomEdge,
}

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
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
