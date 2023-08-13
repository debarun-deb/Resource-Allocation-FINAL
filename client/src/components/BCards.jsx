import React from 'react'

const Bcards = (props) => {
  return (
    <div className='py-3 cursor-pointer flex px-3'>
      <div className='w-[400px] h-[200px] shadow-lg shadow-gray-600 rounded overflow-hidden'>
        <h1 className='text-md font-semibold p-2'>Event Name: {props.books.eventName}</h1>
        <h1 className='text-md font-semibold p-2'>From Date: {props.books.startDate}</h1>
        <h1 className='text-md font-semibold p-2'>To Date:{props.books.endDate}</h1>
        <h1 className='text-md font-semibold p-2'>Status:</h1>

      </div>
    </div>
  )
}

export default Bcards