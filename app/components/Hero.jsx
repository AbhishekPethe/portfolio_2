import Image from 'next/image'
import React from 'react'
import profile from "../../public/profile.webp"
import { GiFireAce } from "react-icons/gi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { FaHandPeace } from "react-icons/fa6";
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
          <div className='flex flex-col gap-5 '>
              <p className='text-2xl md:text-4xl lg:text-3xl flex gap-4 font-semibold justify-center'>Hi, I&apos;m Abhishek <FaHandPeace /></p>
              
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

              <div className='text-gray-400 text-xl md:text-3xl lg:text-2xl mt-10 lg:leading-10'>
                  <p>a <span className='font-semibold'>Front End React </span> Developer based in INDIA.</p>
                  <p>I specialize in <span className='font-semibold'>UI/UX Development</span>  , <span className='font-semibold'>Responsive web design</span></p>
                  <p>and <span className='font-semibold'>Visual Development</span></p>
              </div>
          </div>
      </div>
  )
}

export default Hero
