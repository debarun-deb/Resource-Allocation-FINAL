import React from 'react'
import dayjs from "dayjs";
const Bcards = (props) => {
  return (
    <div className='py-3 cursor-pointer flex px-3'>
      <div className='w-[400px] h-[200px] shadow-lg shadow-gray-600 rounded-xl overflow-hidden'>
        <h1 className='text-md font-semibold p-4'>{props.books.resourceName}</h1>
        <h1 className='text-md font-semibold p-2'>Event Name: {props.books.eventName}</h1>
        <h1 className='text-md font-semibold p-2'>From Date: {dayjs(props.books.startDate).format("DD MMM YYYY")}</h1>
        <h1 className='text-md font-semibold p-2'>To Date: {dayjs(props.books.endDate).format("DD MMM YYYY")}</h1>
        <h1 className='text-md font-semibold p-2'>Status: {props.books.status}</h1>

      </div>
    </div>
  )
}

export default Bcards