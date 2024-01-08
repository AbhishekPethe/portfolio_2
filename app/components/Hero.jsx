"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { GiFireAce } from "react-icons/gi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { FaHandPeace } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useCursorContext } from '../Context/context';


const Hero = ({mousePos , cursorVariant , setCursorVariant}) => {

    const {onEnter} = useCursorContext()

   return (
      <div className='mt-10 md:mt-32 lg:mt-10 flex flex-col gap-10 md:gap-14 lg:gap-10 items-center justify-center text-center'>

          <GiFireAce className='text-9xl' />
          <motion.div className='flex flex-col gap-5 items-center'>
              <motion.p
                  onMouseEnter={()=>onEnter("HoverName")}
                  onMouseLeave={()=>onEnter("default")}
                  className='text-2xl md:text-4xl lg:text-3xl flex gap-4 font-semibold justify-center'>Hi, I&apos;m Abhishek <FaHandPeace /></motion.p>
            
              
              

              <div className='text-4xl tracking-wide leading-[50px] md:leading-[85px] md:text-7xl font-bold '
                  onMouseEnter={()=>onEnter("HoverHeading")}
                  onMouseLeave={()=>onEnter("default")}
              >
                  <p className=' inline-block'>
                      Building digital 

                      <br /> </p>

                  <p>experiences  where <br />
                      <span className='relative text-red-500'>
                          <span className='absolute -bottom-4 left-0 w-full overflow-hidden '>

                              <svg width="400" height="35" xmlns="http://www.w3.org/2000/svg" >
                                  <path
                                      id="pathItem"
                                      d="M5 20 Q 80 5 190 25"
                                      stroke="gray"
                                      fill="transparent"
                                      stroke-width="7"
                                      stroke-linecap="round"

                                  />
                              </svg>
                          </span>
                          Pixels&nbsp;
                      </span>
                      meet Purpose</p>


              </div>

              <div className='text-gray-400 text-lg md:text-2xl lg:text-[22px] mt-10 lg:leading-10'
                  onMouseEnter={()=>onEnter("HoverName")}
                  onMouseLeave={()=>onEnter("default")}
                >
                  <p>a <span className='font-semibold'>Front End React </span> Developer based in INDIA.</p>
                  <p>I specialize in <span className='font-semibold'>UI/UX Development</span>  , <span className='font-semibold'>Responsive web design</span></p>
                  <p>and <span className='font-semibold'>Visual Development</span></p>
              </div>

              <a href="#Contact" className="btn-primary">
        Hire ME !
    </a>
          </motion.div>
      </div>
  )
}

export default Hero
