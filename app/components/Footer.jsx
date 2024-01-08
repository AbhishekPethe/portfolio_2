import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear()
  return (
      <div className='text-center flex flex-col justify-center items-center -mx-5 mt-5'>
          <div className='w-full h-1 bg-gray-600' />
          <p className='pt-5 pb-3'>Code and Design @ Abhishek</p>
          <p>&copy;{year}</p>
      </div>
  )
}

export default Footer