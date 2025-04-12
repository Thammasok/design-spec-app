import ExampleNode from '../nodes/example'
import ApiNode from '../nodes/api'
import PostItNode from '../nodes/post-it'
import PostIt2Node from '../nodes/node2'
import DBTableNode from '../nodes/db-table'
import Node3 from '../nodes/node3'
import Node1 from '../nodes/node1'
import Node2 from '../nodes/node2'
import circle from '../nodes/flowchart/circle'

const nodeTypes = {
  example: ExampleNode,
  api: ApiNode,
  postIt: PostItNode,
  dbTable: DBTableNode,
  node1: Node1,
  node2: Node2,
  node3: Node3,
  circle: circle,
}

export default nodeTypes
