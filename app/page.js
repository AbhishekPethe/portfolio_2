"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import NewProjects from "./components/NewProjects"
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Contact from './components/Contact'



export default function Home() {

    const [mousePos, setMousePos] = useState({
      x: 0,
      y:0
  })

  // const mousePos = useRef({x:0 , y:0})

  const [cursorVariant, setCursorVariant] = useState("default")
  const [cursorText , setCursorText] = useState("a")
  
  useEffect(() => {
      const mouseMove = e => {
          // console.log(e.clientX , e.clientY);
        // mousePos.current = { x: e.clientX, y: e.clientY }
        setMousePos({
          x: e.clientX,
          y : e.clientY
        })
      
          
      }

      window.addEventListener("mousemove", mouseMove)
      
      return () => {
          window.removeEventListener("mousemove", mouseMove)
      }
  }, [])

  

  const variants = {
    default: {
        x: mousePos.x-15,
        y: mousePos.y-15,
       
       
    },
    heading: {
        height: 100,
        width : 100,
        x: mousePos.x -50,
        y: mousePos.y - 50,
        // backgroundColor: "black",
      mixBlendMode: "difference",
      
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
    },
    text: {
      height: 90,
      width: 90,
      x: mousePos.x - 45,
      y: mousePos.y - 45,
      backgroundColor : "black"
    }
    
}

  return (
    <main className='text-white mt-7 mx-5'
   
    >
      <motion.div
                  variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
                  className='cursor h-[28px] w-[28px] bg-white fixed top-0 left-0 rounded-full border-2 border-red-500 pointer-events-none z-50 flex justify-center items-center '>
                  
        <span className='font-semibold text-white'>
          {cursorText}
        </span>
      </motion.div>
   
    
      <Navbar setCursorVariant={setCursorVariant} />
      <Hero setCursorVariant={setCursorVariant} />
      <NewProjects setCursorVariant={setCursorVariant} setCursorText={setCursorText} />
      {/* <Projects setCursorVariant={setCursorVariant} setCursorText={setCursorText} /> */}
      {/* <Contact /> */}
    </main>
  )
}

