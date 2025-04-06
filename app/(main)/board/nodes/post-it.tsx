import { memo, useState, useRef, useEffect, KeyboardEvent } from 'react'
import { Handle, Position } from '@xyflow/react'

interface IPostItNode {
  data: {
    title: string
    content: string
    color: string
    date: string
  }
  isConnectable: boolean
  selected: boolean
}

const PostItNode = ({ data, isConnectable, selected }: IPostItNode) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [isEditingContent, setIsEditingContent] = useState(false)
  const [title, setTitle] = useState(data.title || '')
  const [content, setContent] = useState(data.content || 'Add your note here')

  const titleRef = useRef(null)
  const contentRef = useRef(null)

  const backgroundColor = data.color || 'bg-yellow-200'

  // Update component data when finished editing
  const handleTitleBlur = () => {
    setIsEditingTitle(false)
    data.title = title
  }

  const handleContentBlur = () => {
    setIsEditingContent(false)
    data.content = content
  }

  // Focus input when editing starts
  useEffect(() => {
    if (isEditingTitle && titleRef.current) {
      ;(titleRef.current as HTMLInputElement).focus()
    }
  }, [isEditingTitle])

  useEffect(() => {
    if (isEditingContent && contentRef.current) {
      ;(contentRef.current as HTMLTextAreaElement).focus()
    }
  }, [isEditingContent])

  // Handle key presses
  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: 'title' | 'content',
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (type === 'title') {
        setIsEditingTitle(false)
        data.title = title
      } else {
        // For content, allow Enter for new lines with Shift key
        // otherwise finish editing
        setIsEditingContent(false)
        data.content = content
      }
    } else if (e.key === 'Escape') {
      if (type === 'title') {
        setIsEditingTitle(false)
        setTitle(data.title || '') // Revert to original
      } else {
        setIsEditingContent(false)
        setContent(data.content || 'Add your note here') // Revert to original
      }
    }
  }

  return (
    <div
      className={`shadow-md rounded-sm ${backgroundColor} p-4 w-64 hover:shadow-lg ${
        selected ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      {/* Top handle for connections */}
      <Handle
        type='target'
        position={Position.Top}
        className='w-3 h-3 border-2 border-gray-400 bg-white rounded-full'
        isConnectable={isConnectable}
      />

      {/* Title section - editable */}
      <div className='mb-2 border-b border-gray-400 pb-1'>
        {isEditingTitle ? (
          <textarea
            ref={titleRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleTitleBlur}
            onKeyDown={(e) => handleKeyDown(e, 'title')}
            className='w-full h-auto bg-transparent font-bold text-gray-800 focus:outline-none'
            placeholder='Add title...'
          />
        ) : (
          <div
            className='font-bold text-gray-800 cursor-text'
            onClick={() => setIsEditingTitle(true)}
          >
            {title || <span className='text-gray-500 italic'>Add title...</span>}
          </div>
        )}
      </div>

      {/* Content section - editable */}
      <div>
        {isEditingContent ? (
          <textarea
            ref={contentRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={handleContentBlur}
            onKeyDown={(e) => handleKeyDown(e, 'content')}
            className='w-full bg-transparent text-sm text-gray-700 focus:outline-none resize-none'
            rows={4}
            placeholder='Add your note here'
            autoComplete='off'
            autoCorrect='off'
            spellCheck='false'
          />
        ) : (
          <div
            className='text-sm text-gray-700 whitespace-pre-wrap cursor-text'
            onClick={() => setIsEditingContent(true)}
          >
            {content}
          </div>
        )}
      </div>

      {/* Optional footer with metadata */}
      {data.date && <div className='text-xs text-gray-500 mt-3 italic'>{data.date}</div>}

      {/* Bottom handle for connections */}
      <Handle
        type='source'
        position={Position.Bottom}
        className='w-3 h-3 border-2 border-gray-400 bg-white rounded-full'
        isConnectable={isConnectable}
      />
    </div>
  )
}

// Using memo to prevent unnecessary re-renders
export default memo(PostItNode)
