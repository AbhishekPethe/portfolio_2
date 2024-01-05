'use client'
import Image from 'next/image'
import React from 'react'
import { DetailsObj , cards } from '../data'
import { BsAsterisk } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const newArr = cards.slice(0, 4)
console.log(newArr);

let textArray = []
for (let i in DetailsObj) {
    textArray.push(i)
}
console.log(textArray);

const NewProjects = ({setCursorVariant , setCursorText }) => {
    return (
        <div>
            <h1 className='font-semibold text-2xl md:text-4xl lg:text-4xl flex items-center mb-10 w-fit'
        onMouseEnter={() => setCursorVariant("name")}
        onMouseLeave={() => setCursorVariant("default")}>
          <span className='text-gray-600'>#</span>
          Projects
          
          <motion.div
            
            animate={{
              rotate: [0, 360],
            }}
            transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 5
            }}
            className='ml-4'
        >
          <BsAsterisk className='text-pink-400 ' />
        </motion.div>
      </h1>
       
        <div className='flex flex-col gap-7 md:gap-10 lg:gap-14 mx-3'>
            {
                newArr.map((each, i) => {
                    return (
                        <div key={i}
                            className='flex flex-col md:flex-row gap-1 md:gap-5'>
                            {/* image */}
                            <div className=' rounded-3xl hover:rounded-[40px] border-2 border-transparent hover:border-white  ease-linear duration-200 
                            border-dotted hover:border-dashed group hover:py-2'>
                                <div className='group-hover:scale-90 bg-[#FBF9F1]  rounded-3xl ease-in-out duration-200'>
                                {/*  */}
                                    <Image
                                        src={`/${each.url}`}
                                        alt='img'
                                        width={800}
                                        height={800}
                                        className=''
                                    />
                                </div>
                            </div>

                            {/* details */}
                            <div className='flex flex-col justify-between max-sm:gap-3 md:w-[50%]'>

                                <div className='flex flex-row md:flex-col justify-between'>
                                    <motion.h1 className='text-2xl md:text-4xl lg:text-5xl opacity-30 w-fit'
                                        onMouseEnter={() => setCursorVariant("name")}
                                        onMouseLeave={() => setCursorVariant("default")}>
                                        #{each.id}
                                    </motion.h1>
                                    <div className='w-full h-2 bg-gray-600 max-[768px]:hidden' />
                                    <motion.h1 className='text-2xl md:text-3xl lg:text-4xl flex flex-row gap-3 w-fit'
                                        onMouseEnter={() => setCursorVariant("name")}
                                        onMouseLeave={() => setCursorVariant("default")}
                                        >
                                        <i className='opacity-75'>
                                            {each.title.split(" ")[0]}
                                        </i>
                                        <p className='font-extrabold'>
                                            {each.title.split(" ").slice(1)}
                                        </p>
                                    </motion.h1>
                                </div>

                                <div className='flex flex-row gap-2 md:flex-col flex-wrap '>
                                    {
                                        
                                        each.details.map((item, i) => {
                                        
                                        return (
                                            <Tabs icon={item[0]} text={item[1]} key={i}
                                                setCursorVariant={setCursorVariant}
                                                setCursorText={setCursorText}
                                            />
                                        )
                                        })
                                       
                                    }
                                </div>

                                <div className='flex flex-row justify-between items-center text-2xl md:text-[34px] '>
                                    <a href={`${each.demo}`}><IoArrowForwardCircleOutline
                                    onMouseEnter={() => {
                                        setCursorText("Visit"),
                                        setCursorVariant("text")
                                      }}
                                      
                                      onMouseLeave={() => {
                                        setCursorText("")
                                        setCursorVariant("default")
                                      }}
                                    /></a>
                                    <a href={`${each.github}`}><FaGithub
                                    onMouseEnter={() => {
                                        setCursorText("Github"),
                                          setCursorVariant("text")
                                      }}
                                    
                                      onMouseLeave={() => {
                                        setCursorText("")
                                        setCursorVariant("default")
                                      }}/></a>

                                </div>
                                
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

const Tabs = ({icon , text , setCursorText , setCursorVariant}) => {
    return (
        <motion.div className='flex flex-row justify-center items-center gap-1 text-xs md:text-sm bg-white text-black border-2 border-dotted border-black hover:border-solid rounded-xl w-fit p-1'
        onMouseEnter={() => setCursorVariant("navbar")}
        onMouseLeave={() => setCursorVariant("default")}
        >
            <span>
            {icon}
            </span>
            <p>{text}</p>
           
        </motion.div>
    )
}

export default NewProjects