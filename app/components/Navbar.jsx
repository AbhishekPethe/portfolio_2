"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { useCursorContext } from '../Context/context';

import Link from 'next/link';
const Navbar = ({mousePos , cursorVariant , setCursorVariant}) => {

  const [menu, setMenu] = useState(false)

  const {onEnter} = useCursorContext()
    
  return (
        <div className='flex justify-between items-center'>
      <motion.p className=' text-2xl md:text-3xl mx-5'
        onMouseEnter={()=>onEnter("HoverHeading")}
        onMouseLeave={()=>onEnter("default")}>
      
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
          ["About", "Resume", "Projects", "Contact"].map((each, i) => {
            if (each==="Resume") {
              return <Link href="./Abhishek_Pethe_Resume.pdf" target='_blank' key={i}
              onMouseEnter={()=>onEnter("HoverNavbar")}
              onMouseLeave={()=>onEnter("default")}>Resume</Link>
            }
              return (
                <motion.a href={`#${each}`} key={i}
                onMouseEnter={()=>onEnter("HoverNavbar")}
                onMouseLeave={()=>onEnter("default")}>
                {each}</motion.a>
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
            ["About", "Resume", "Projects", "Contact"].map((each, i) => {
              if (each==="Resume") {
                return <Link href="./Abhishek_Pethe_Resume.pdf" target='_blank' key={i}
                onClick={() => setMenu(false)} 
                >Resume</Link>
              }
              return (
                <motion.a
             
                  href={`#${each}`} key={i}
                  onClick={() => setMenu(false)} 
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


