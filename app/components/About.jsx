/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Heading from './Heading'
import { SiWipro } from "react-icons/si";
const About = () => {
  return (
      <div className='mt-20 flex flex-col'>
          <Heading text="About ME" />
          <div className='mx-9 flex flex-col md:flex-row  gap-10  md:gap-32 justify-center items-center '>
              <div className='flex flex-col gap-4 md:gap-7 self-start'>
                  <div className='flex flex-col gap-1'>
                      <h1>Education</h1>
                      <div className='w-full h-[2px] bg-gray-600 ' />
                      <h1>Computer Science</h1>
                  </div>
                  <div className='flex flex-col gap-1'>
                      <h1>Experience</h1>
                      <div className='w-full h-[2px] bg-gray-600 ' />
                      <h1 className='flex gap-5'>&lt; 1 YOE @ Wipro LTD.</h1>
                  </div>
                  <div className='flex flex-col gap-1'>
                      <h1>Tech</h1>
                      <div className='w-full h-[2px] bg-gray-600 ' />
                      <h1>Front-End , SAP </h1>
                  </div>
              </div>

              <div className='w-[350px] leading-8'>
                  <p>Hello I'm Abhishek. I'm a front-end developer located in Maharashtra , India. I love to create simple yet beautiful websites with great user experience. I'm interested in the whole frontend stack especially in React. Currently trying new things and building great projects. My inbox is always open. Feel free to drop a message. Can't wait to collaborate and work with you !</p>
              </div>
          </div>  
      </div>
  )
}

export default About