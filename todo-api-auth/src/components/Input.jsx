import React from 'react'

const InputText = ({ type, placeholder, onChange, value, id }) => {
  return (
    <input 
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        className='outline-none ring-1 ring-gray-300 px-2 py-2 rounded-md focus:ring-2 focus:ring-blue-500 mb-4'
    />
  )
}

export default InputText