import { PlusIcon } from 'lucide-react'
import { ConnectionState, Node, Position, useConnection } from '@xyflow/react'

import { ButtonHandle } from '@/components/button-handle'
import { BaseNode } from '@/components/base-node'

import { Button } from '@/components/ui/button'

const onClick = () => {
  window.alert(`Handle button has been clicked!`)
}

const selector = (connection: ConnectionState) => {
  return connection.inProgress
}

interface INodeWithHandleProps extends Node {
  data: {
    label: string
  }
}

const NodeWithHandle = ({ data }: INodeWithHandleProps) => {
  const connectionInProgress = useConnection(selector)

  return (
    <BaseNode>
      <div>{data.label}</div>
      <ButtonHandle type='target' position={Position.Bottom} showButton={!connectionInProgress}>
        <Button
          onClick={onClick}
          size='sm'
          variant='secondary'
          className='rounded-full cursor-pointer'
        >
          <PlusIcon size={10} />
        </Button>
      </ButtonHandle>
    </BaseNode>
  )
}

export default NodeWithHandle
