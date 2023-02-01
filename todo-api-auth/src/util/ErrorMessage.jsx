import React from 'react'

const ErrorMessage = ({ msg }) => {
  return (
        <div className='w-full h-14 bg-red-300 text-slate-700 rounded-md text-sm px-2 py-1'>
            { msg }
        </div>
  )
}

export default ErrorMessage