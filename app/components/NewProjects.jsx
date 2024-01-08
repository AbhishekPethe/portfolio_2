'use client'
import Image from 'next/image'
import React from 'react'
import { DetailsObj , cards } from '../data'
import { BsAsterisk } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import NewProjectComponent from './NewProjectComponent';
import Heading from './Heading';
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";

const HomeArray = cards.slice(0, 4)

const NewProjects = ({setCursorVariant , setCursorText }) => {
    return (
        <div className='mt-20' id="Projects">
            <Heading setCursorVariant={setCursorVariant} text="Projects"  />
       
            <div className='flex flex-col gap-7 md:gap-10 lg:gap-14 mx-3'>
            {
                HomeArray.map((each, i) => {
                    return (
                        <NewProjectComponent key={i} each={each} setCursorText={setCursorText} setCursorVariant={setCursorVariant} />
                    )
                })
            }
            </div>

            <div>
                <Link href="/AllProjects" className='flex items-center justify-center mt-10 '>
                    <button className='btn-primary flex flex-row items-center gap-5'>
                        View All Projects <MdOutlineArrowOutward className='text-2xl' />
                    </button>
                </Link>

            </div>
        </div>
    )
}



export default NewProjects