"use client"
import Image from 'next/image'
import React from 'react'
import profile from "../../public/profile.webp"
import { GiFireAce } from "react-icons/gi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { FaHandPeace } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
      <div className='mt-10 md:mt-32 lg:mt-10 flex flex-col gap-10 md:gap-14 lg:gap-10 items-center justify-center text-center'>
          {/* <Image
            src={profile}
            alt='profile'
              placeholder="empty"
              quality={100}
              className='w-28 h-28 bg-white rounded-full'
          /> */}
          <GiFireAce className='text-9xl' />
          <motion.div className='flex flex-col gap-5 items-center'>
              <motion.p
                  initial={{
                      opacity: 0,
                      scale:0
                      
                      
                  }}
                  animate={{
                      opacity: 1,
                      scale:1,
                  }}
                 
                  transition={{
                      type: 'spring',
                      duration : 2
                    
                  }}
                  className='text-2xl md:text-4xl lg:text-3xl flex gap-4 font-semibold justify-center'>Hi, I&apos;m Abhishek <FaHandPeace /></motion.p>
            
              
              <div className='text-4xl tracking-wide leading-[50px] md:leading-[85px] md:text-7xl font-bold '>
                  <p className='relative inline-block'>
                    Building digital
                      <span className='absolute -bottom-4 left-0 w-full overflow-hidden -z-10'>

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
                  <br /> </p>
                  <p>experiences  where <br /> Pixels meet Purpose</p>
              </div>

              <div className='text-gray-400 text-lg md:text-2xl lg:text-[22px] mt-10 lg:leading-10'>
                  <p>a <span className='font-semibold'>Front End React </span> Developer based in INDIA.</p>
                  <p>I specialize in <span className='font-semibold'>UI/UX Development</span>  , <span className='font-semibold'>Responsive web design</span></p>
                  <p>and <span className='font-semibold'>Visual Development</span></p>
              </div>

              <button className="rounded-2xl w-fit px-10 py-3 mt-6 border-2 border-dashed border-white bg-black  uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] ">
      Contact ME
    </button>
          </motion.div>
      </div>
  )
}

export default Hero
