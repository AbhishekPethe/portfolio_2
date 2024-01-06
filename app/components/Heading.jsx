import { motion } from 'framer-motion'
import React from 'react'
import { BsAsterisk } from 'react-icons/bs'


const Heading = ({ text , setCursorVariant}) => {
  return (
    <h1 className='font-semibold text-2xl md:text-4xl lg:text-4xl flex items-center mb-10 w-fit'
        onMouseEnter={() => setCursorVariant("name")}
        onMouseLeave={() => setCursorVariant("default")}>
          <span className='text-gray-600'>#</span>
          {text}
          
          <motion.div
            
            animate={{
              rotate: [0, 360],
            }}
            transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 5
            }}
            className='ml-4'
        >
          <BsAsterisk className='text-pink-400 ' />
        </motion.div>
      </h1>
  )
}

export default Heading