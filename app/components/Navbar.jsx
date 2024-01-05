"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Navbar = ({mousePos , cursorVariant , setCursorVariant}) => {

  const [menu, setMenu] = useState(false)

    
  return (
        <div className='flex justify-between items-center'>
      <motion.p className=' text-2xl md:text-3xl mx-5'
        onMouseEnter={() => setCursorVariant("heading")}
        onMouseLeave={()=> setCursorVariant("default")}
      >
            O_O
          </motion.p>

          {/* menu for desktop and tablet */}
          
          <div className='flex justify-between gap-8 mr-10 
          [&>*:nth-child(n)]:text-lg
          [&>*:nth-child(n)]:px-3
          hover:[&>*:nth-child(n)]:font-semibold
          ease-out duration-1000
          max-sm:hidden
          '>
             
          {
            ["About", "Resume", "Projects", "Contact"].map((each , i) => {
              return (
                <motion.a href={`#${each}`} key={i}
                  onMouseEnter={()=>setCursorVariant("navbar")}
                  onMouseLeave={()=>setCursorVariant("default")}
                >{each}</motion.a>
              )
            })
                    }
          </div>

          {/* menu for mobile  */}
          <div className='max-sm:block md:hidden text-3xl'>
              <MdOutlineKeyboardDoubleArrowDown onClick={()=>setMenu(true)} />
        
                  <div className={`fixed bg-white z-50 h-[100vh] left-0  w-full text-black flex flex-col justify-center items-center gap-20 ease-out duration-700 ${menu === true ? 'top-0' : '-top-[130%]'} [&>*:nth-child(n)]:font-bold `}>
          <MdOutlineKeyboardDoubleArrowUp className='' onClick={() => setMenu(false)} />
          

          {
            ["About", "Resume", "Projects", "Contact"].map((each , i) => {
              return (
                <motion.a
             
                  href={`#${each}`} key={i}
                 
                >{each}</motion.a>
              )
            })
                    }

                    {/* <a href="#about">About</a>
              <a href="#resume">Resume</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a> */}
                </div>
          
          </div>


        </div>
  )
}

export default Navbar


// hover:[&>*:nth-child(n)]:text-black
// hover:[&>*:nth-child(n)]:before:block
// hover:[&>*:nth-child(n)]:before:absolute
// hover:[&>*:nth-child(n)]:before:bg-white
// hover:[&>*:nth-child(n)]:before:-inset-1
// hover:[&>*:nth-child(n)]:before:-skew-y-6
// hover:[&>*:nth-child(n)]:relative
// hover:[&>*:nth-child(n)]:before:-z-10

// hover:[&>*:nth-child(n)]:font-bold
// [&>*:nth-child(n)]:ease-out
// [&>*:nth-child(n)]:duration-300