'use client'
import React from 'react'
import { cards } from '../data'
import NewProjectComponent from '../components/NewProjectComponent'
import { useRouter } from 'next/navigation'
import CustomCursor from '../components/CustomCursor'
import Heading from '../components/Heading'


const AllProjects = () => {
    
    
  return (
    <div className='text-white mt-4 md:mt-10'>
          <CustomCursor />
          <Heading text="Projects" />
      <div className="flex flex-col gap-6 md:gap-10 text-white mx-5">
        {cards.map((each, i) => {
          return <NewProjectComponent key={i} each={each} />;
        })}
      </div>
    </div>
  );
}

export default AllProjects