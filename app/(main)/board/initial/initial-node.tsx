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
    type: 'node3',
    position: { x: 600, y: 200 },
    data: {
      label: 'service',
      content: 'This is a post-it note',
      color: 'bg-white',
      date: '2023-10-01',
    },
  },
  {
    id: 'node-4',
    type: 'node1',
    position: { x: 600, y: 600 },
    data: {
      label: 'service',
      content: 'This is a post-it note',
      color: 'bg-white',
      date: '2023-10-01',
    },
  },
  {
    id: 'circle-1',
    data: { label: 'World' },
    position: { x: -100, y: 100 },
    type: 'circle',
  },
]

export default initialNodes