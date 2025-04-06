interface IDBTableNode {}

export default function DBTableNode({}: IDBTableNode) {
  return (
    <div className='w-xl rounded-lg bg-white p-4 shadow-md'>
      <div>Table Name</div>
      <div className='flex flex-col'>
        <div className='grid grid-cols-5 grid-rows-5 gap-4'>
          <div>Field name</div>
          <div>Type</div>
          <div>@id @default(autoincrement())</div>
        </div>
      </div>
    </div>
  )
}
