"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import NewProjects from "./components/NewProjects"
import { useContext, useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Contact from './components/Contact'
import { CursorContext, CursorProvider, useCursorContext } from './Context/context'
import CustomCursor from './components/CustomCursor'
import TechStack from './components/TechStack'




export default function Home() {


  return (
    
    <main className='text-white mt-7 mx-5'
   
    >
      {/* <motion.div
                  variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
                  className='cursor h-[28px] w-[28px] bg-white fixed top-0 left-0 rounded-full border-2 border-red-500 pointer-events-none z-50 flex justify-center items-center '>
                  
        <span className='font-semibold text-white'>
          {cursorText}
        </span>
      </motion.div> */}
   
      <CustomCursor />
    
      <Navbar  />
      <Hero />
      <TechStack />
      <NewProjects  />
      {/* <Projects setCursorVariant={setCursorVariant} setCursorText={setCursorText} /> */}
      <Contact />
      </main>
      
  )
}

