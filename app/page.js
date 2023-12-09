"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {

    const [mousePos, setMousePos] = useState({
      x: 0,
      y:0
  })

  const [cursorVariant , setCursorVariant] = useState("default")

  useEffect(() => {
      const mouseMove = e => {
          // console.log(e.clientX , e.clientY);
          setMousePos({
              x: e.clientX,
              y:e.clientY
          })
          
      }

      window.addEventListener("mousemove", mouseMove)
      
      return () => {
          window.removeEventListener("mousemove", mouseMove)
      }
  }, [])

  const variants = {
    default: {
        x: mousePos.x -14,
        y: mousePos.y - 14,
       
    },
    heading: {
        height: 100,
        width : 100,
        x: mousePos.x -50,
        y: mousePos.y - 50,
        // backgroundColor: "black",
        mixBlendMode : "difference"
    },
    navbar: {
      height: 60,
      width: 60,
      x: mousePos.x - 30,
      y: mousePos.y -30,
      mixBlendMode: "difference"
    },
    name:{
      height: 70,
      width: 70,
      x: mousePos.x - 35,
      y: mousePos.y - 35,
      mixBlendMode : "difference"
    }
    
}

  return (
    <main className='text-white mt-7 mx-5 '>
      <motion.div
                  variants={variants}
                  animate={cursorVariant}
                  
                  className='cursor h-[28px] w-[28px] bg-white fixed top-0 left-0 rounded-full border-2 border-red-500 pointer-events-none z-50 '>
                  
      </motion.div>
      <Navbar mousePos={mousePos} cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
      <Hero mousePos={mousePos} cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
      <Projects setCursorVariant={setCursorVariant}/>
    </main>
  )
}
