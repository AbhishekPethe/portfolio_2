"use client"
// export default Projects

// import React from 'react';
// import su from '../../public/profile.webp';
// import Image from 'next/image';

// const Projects = () => {
//   return (
//     <div className="border-2 border-white mb-20 w-[300px] h-[300px] overflow-hidden relative group">
//       <div className="absolute bottom-0 left-0 w-full h-full group-hover:w-[150px] group-hover:h-[150px] ease-in duration-500 border-2  ">
//         <Image src={su} alt="f" layout="fill" objectFit="cover" />
//       </div>
//     </div>
//   );
// };

// export default Projects;


import { motion , useTransform, useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import { BsAsterisk } from "react-icons/bs";
import data from "../data"
import Image from 'next/image';




const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          
         
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};



const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];

const Projects = ({setCursorVariant}) => {
  return (
      <div className='mt-10 '>
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
      
      <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>


      </div>




      
  )
}

export default Projects


{/* <div className='flex justify-center items-center'>
<div className='w-[100vw] h-[50vh] md:w-[90vw] md:h-[50vh] lg:h-[90vh] overflow-scroll'>
  {
    data.map((each , i) => {
      return (
        <div key={i} className='w-full h-full sticky top-1 flex flex-col lg:flex-row lg:justify-between items-center bg-[#121111]   '>
          <div className='w-[100vw] h-[240px] md:h-[400px] lg:w-[80vw] lg:h-[80%] '>

          <Image
            src={each.image}
            alt={each.title}
            className='w-full h-full'
            
            />
            </div>
          <div className='flex flex-col justify-center'>
            <h1>{each.title}</h1>
            <p>{each.github}</p>
          </div>
        </div>
      )
    })   */}

    
     {/* [1, 2, 3, 4, 5, 6].map((each , i) => {
      const clas = `z-${each}0`
      return (
        <div className={`w-full h-full flex justify-center items-center text-5xl sticky top-1 card ${clas} bg-black border-white border-2`} key={i} >{ each}</div>
      )
    })
  }
</div>      
</div> */}
