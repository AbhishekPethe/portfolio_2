import { motion } from 'framer-motion'
import React from 'react'
import { BsAsterisk } from 'react-icons/bs'
import { useCursorContext } from '../Context/context'


const Heading = ({ text, setCursorVariant }) => {

  const { cursorVariant, onEnter } = useCursorContext()


  return (
    <h1 className='font-semibold text-3xl md:text-4xl flex items-center my-10 w-fit'
      onMouseEnter={() => onEnter({ variant: "HoverName" })}
      onMouseLeave={() => onEnter({ variant: "default" })}>
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