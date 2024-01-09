import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useCursorContext } from '../Context/context'

const CustomCursor = () => {

    const [mousePos, setMousePos] = useState({
        x: 0,
        y:0
    })
  
    // // const mousePos = useRef({x:0 , y:0})
  
    // const [cursorVariant, setCursorVariant] = useState("default")
    // const [cursorText , setCursorText] = useState("a")
    
    const { cursorText , cursorVariant } = useCursorContext()
    console.log(cursorText);
  
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
    <motion.div
                  variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
                  className='h-[28px] w-[28px] bg-white fixed top-0 left-0 rounded-full border-2 border-red-500 pointer-events-none z-50 flex justify-center items-center max-[800px]:hidden'>
                  
        <span className='font-semibold text-white'>
          {cursorText}
        </span>
      </motion.div>
  )
}

export default CustomCursor