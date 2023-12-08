"use client"
// export default Projects

// import React from 'react';
// import su from '../../public/profile.webp';
// import Image from 'next/image';

// const Projects = () => {
//   return (
//     <div className="border-2 border-white mb-20 w-[300px] h-[300px] overflow-hidden relative group">
//       <div className="absolute bottom-0 left-0 w-full h-full group-hover:w-[150px] group-hover:h-[150px] ease-in duration-500 border-2  ">
//         <Image src={su} alt="f" layout="fill" objectFit="cover" />
//       </div>
//     </div>
//   );
// };

// export default Projects;


import { motion } from 'framer-motion';
import React from 'react'
import { BsAsterisk } from "react-icons/bs";
import data from "../data"
import Image from 'next/image';

const Projects = () => {
  return (
      <div className='mt-10 '>
        <h1 className='font-semibold text-2xl md:text-4xl lg:text-3xl flex items-center mb-10'>
          <span className='text-gray-600'>#</span>
          Projects
          
          <motion.div
            initial={{
              rotate: 0
            }}
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
      </div>




      
  )
}

export default Projects


{/* <div className='flex justify-center items-center'>
<div className='w-[100vw] h-[50vh] md:w-[90vw] md:h-[50vh] lg:h-[90vh] overflow-scroll'>
  {
    data.map((each , i) => {
      return (
        <div key={i} className='w-full h-full sticky top-1 flex flex-col lg:flex-row lg:justify-between items-center bg-[#121111]   '>
          <div className='w-[100vw] h-[240px] md:h-[400px] lg:w-[80vw] lg:h-[80%] '>

          <Image
            src={each.image}
            alt={each.title}
            className='w-full h-full'
            
            />
            </div>
          <div className='flex flex-col justify-center'>
            <h1>{each.title}</h1>
            <p>{each.github}</p>
          </div>
        </div>
      )
    })   */}

    
     {/* [1, 2, 3, 4, 5, 6].map((each , i) => {
      const clas = `z-${each}0`
      return (
        <div className={`w-full h-full flex justify-center items-center text-5xl sticky top-1 card ${clas} bg-black border-white border-2`} key={i} >{ each}</div>
      )
    })
  }
</div>      
</div> */}
