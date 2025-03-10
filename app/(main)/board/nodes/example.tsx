import { Handle, Position } from '@xyflow/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { BellRingIcon, CheckIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]

function ExampleNode({
  data,
  isConnectable,
}: {
  data: {
    label: string
  }
  isConnectable: boolean
}) {
  return (
    <div className='text-updater-node'>
      <div>
        <Card className={cn('w-[380px]')}>
          <CardHeader>
            <CardTitle>{data.label}</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <div className=' flex items-center space-x-4 rounded-md border p-4'>
              <BellRingIcon />
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>Push Notifications</p>
                <p className='text-sm text-muted-foreground'>Send notifications to device.</p>
              </div>
              <Switch />
            </div>
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'
                >
                  <span className='flex h-2 w-2 translate-y-1 rounded-full bg-sky-500' />
                  <div className='space-y-1'>
                    <p className='text-sm font-medium leading-none'>{notification.title}</p>
                    <p className='text-sm text-muted-foreground'>{notification.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className='w-full'>
              <CheckIcon /> Mark all as read
            </Button>
          </CardFooter>
        </Card>
      </div>
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
  )
}

export default ExampleNode
