import Image from 'next/image'
import React from 'react'
import { DetailsObj, cards } from '../data'
import { BsAsterisk } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useCursorContext } from '../Context/context';


const NewProjectComponent = ({ each, setCursorVariant, setCursorText }) => {

    const { onEnter } = useCursorContext()

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    type: 'tween',
                    ease: 'easeIn',
                    duration: 0.5
                },
            }}
            viewport={{ once: true, amount: 0.25 }}


            className='flex flex-col md:flex-row gap-1 md:gap-5'>
            {/* image */}
            <div className=' rounded-3xl hover:rounded-[40px] border-2 border-transparent hover:border-white  ease-linear duration-200 
                            border-dotted hover:border-dashed group hover:py-2'>
                <div className='group-hover:scale-90 bg-[#FBF9F1]  rounded-3xl ease-in-out duration-200'
                    onClick={() => {
                        window.open(`${each.demo}`)
                    }}
                >

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
                        onMouseEnter={() => onEnter({ variant: "HoverName" })}
                        onMouseLeave={() => onEnter({ variant: "default" })}>
                        #{each.id}
                    </motion.h1>
                    <div className='w-full h-2 bg-gray-600 max-[768px]:hidden' />
                    <motion.h1 className='text-2xl md:text-3xl lg:text-4xl flex flex-row gap-3 w-fit'
                        onMouseEnter={() => onEnter({ variant: "HoverName" })}
                        onMouseLeave={() => onEnter({ variant: "default" })}
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

                                />
                            )
                        })

                    }
                </div>

                <div className='flex flex-row justify-between items-center text-2xl md:text-[34px] '>
                    <a href={`${each.demo}`}><IoArrowForwardCircleOutline
                        onMouseEnter={() => {
                            onEnter({ variant: "HoverSite" })
                        }}

                        onMouseLeave={() => {
                            onEnter({ variant: "default" })
                        }}
                    /></a>
                    <a href={`${each.github}`}><FaGithub
                        onMouseEnter={() => {
                            onEnter({ variant: "HoverGithub" })
                        }}

                        onMouseLeave={() => {
                            onEnter({ variant: "default" })
                        }} /></a>

                </div>

            </div>
        </motion.div>
    )
}

const Tabs = ({ icon, text, setCursorVariant }) => {

    const { onEnter } = useCursorContext()
    return (
        <motion.div className='flex flex-row justify-center items-center gap-1 text-xs md:text-sm bg-white text-black border-2 border-dotted border-black hover:border-solid rounded-xl w-fit p-1'
            onMouseEnter={() => onEnter({ variant: "HoverNavbar" })}
            onMouseLeave={() => onEnter({ variant: "default" })}
        >
            <span>
                {icon}
            </span>
            <p>{text}</p>

        </motion.div>
    )
}

export default NewProjectComponent