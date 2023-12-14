/* eslint-disable react/jsx-key */
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
import { caveat } from '../fonts';
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa"
import { SiCss3, SiJavascript, SiTailwindcss, SiStyledcomponents, SiAuth0 , SiRedux } from "react-icons/si"
import { TbBrandVite, TbBrandFramerMotion, TbBrandFigma } from "react-icons/tb"
import { IoLogoJavascript } from "react-icons/io";


const cards = [
  {
    url: "E-shoppee.webp",
    title: "E-Shoppee",
    id: 1,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-eshoppee.netlify.app/",
    details : [ <IoLogoJavascript /> ,<FaReact /> , <SiStyledcomponents /> , <SiAuth0 /> , <TbBrandVite />  ]
  },
  {
    url: "rental.webp",
    title: "Car Rental",
    id: 2,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-rental.netlify.app/",
    details : [<SiTailwindcss /> , <IoLogoJavascript /> , <FaReact /> , <TbBrandVite /> ]
  },
  {
    url: "ahead.webp",
    title: "Ahead App",
    id: 3,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-aheadapp.netlify.app/",
    details : [<SiTailwindcss /> , <IoLogoJavascript /> , <FaReact /> , <TbBrandVite /> , <TbBrandFramerMotion /> ]
  },
  {
    url: "nike.webp",
    title: "Nike Store",
    id: 4,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-nike.netlify.app/",
    details : [ <FaReact /> , <SiTailwindcss/> , <SiRedux /> ,<TbBrandVite /> ]
  },
  {
    url: "RealEstate.webp",
    title: "Real Estate",
    id: 5,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-realestate.netlify.app/",
    details : [ <IoLogoJavascript /> ,<FaReact /> , <SiStyledcomponents /> , <TbBrandVite /> , <TbBrandFramerMotion /> ]
  },
  {
    url: "Pro-fitness.webp",
    title: "Pro Fitness",
    id: 6,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-profitness.netlify.app/",
    details : [<SiCss3 /> , <IoLogoJavascript /> , <FaReact /> , <TbBrandVite /> ]
  },
  {
    url: "Krypto.webp",
    title: "Krypto",
    id: 7,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-crypto.netlify.app/",
    details : [<SiTailwindcss /> , <IoLogoJavascript /> , <FaReact /> , <TbBrandVite /> ]
  },
  {
    url: "office.webp",
    title: "Office Rent",
    id: 8,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-office.netlify.app/",
    details : [<SiTailwindcss /> , <IoLogoJavascript /> , <FaReact /> , <TbBrandVite /> , <TbBrandFramerMotion /> ]
  },
  {
    url: "Metaverse.webp",
    title: "Meta-Verse",
    id: 9,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-framer.netlify.app/",
    details : [<SiTailwindcss /> , <IoLogoJavascript /> , <FaReact /> , <TbBrandVite /> , <TbBrandFramerMotion /> ]
  },
  {
    url: "Space.webp",
    title: "Space Tour",
    id: 10,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-space.netlify.app/",
    details : [<SiTailwindcss /> , <IoLogoJavascript /> , <FaReact /> , <TbBrandVite /> ]
  },
  {
    url: "Modern UI.webp",
    title: "Modern UI",
    id: 11,
    github: "https://github.com/AbhishekPethe",
    demo: "https://chatgpt3-portfolio.netlify.app",
    details : [<TbBrandFigma /> , <SiCss3 /> , <FaReact /> ]
  },
  {
    url: "BusinessUI.webp",
    title: "Business UI",
    id: 12,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-business.netlify.app/",
    details : [<SiTailwindcss /> , <FaReact /> , <TbBrandVite /> , <TbBrandFigma />  ]
  },
  {
    url: "portfolio.webp",
    title: "Portfolio website #2",
    id: 13,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-myportfolio.netlify.app",
    details : [<SiCss3 /> , <IoLogoJavascript /> , <FaReact /> ]
  },
  {
    url: "Digital Agency.webp",
    title: "Digital Agency",
    id: 14,
    github: "https://github.com/AbhishekPethe",
    demo: "https://abdev-agency.netlify.app/",
    details : [<FaReact /> , <SiStyledcomponents /> , <TbBrandVite />  ]
  },
];



const HorizontalScrollCarousel = ({setCursorVariant , setCursorText}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-95%"]);

  return (
    <section ref={targetRef} className=" relative h-[500vh] bg-transparent">
      <div className="sticky top-0 flex h-[80vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} setCursorVariant={setCursorVariant} setCursorText={setCursorText} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card , setCursorVariant , setCursorText}) => {
  const {Icon} = card
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[650px] overflow-hidden bg-transparent "
    >
      <div className='relative w-full h-full brightness-70  '>

      <Image
        src={`/${card.url}`}
        alt='img'
        quality={100}
        fill
        placeholder='empty'
       
        className="absolute w-full h-full inset-0 z-0 transition-transform duration-1000  opacity-100 bg-auto bg-center group-hover:-z-10 "
        />

        <div className="absolute inset-0 bg-gradient-to-tl from-[#9bf8f4] to-[#6f7bf7] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 " >
          <div className='relative z-10 duration-300 flex flex-col gap-10 p-5 py-14'>
            <h3
              onMouseEnter={() => setCursorVariant("heading")}
              onMouseLeave={() => setCursorVariant("default")}
              className="font-bold text-5xl text-black w-[50%] ">
            {card.title}
            </h3>
            
            <div className='flex flex-row gap-8'>

            {
              card.details.map((each , i) => {
                return <span key={i} className='text-black text-3xl'>{each}</span>
              })
            }
            </div>

          </div>
          <p className="text-black absolute -top-10 -right-5 text-[12rem] font-extrabold z-10 duration-300 opacity-20">
            #{card.id}
          </p>
          <div className='absolute w-full flex flex-row justify-between bottom-0 p-10 text-black text-4xl'>
            <a href={card.github}>
            <FaGithub
              onMouseEnter={() => {
                setCursorText("Github"),
                setCursorVariant("text")
              }}
              
              onMouseLeave={() => {
                setCursorText("")
                setCursorVariant("default")
              }}
              className=''
              />
            </a>

            <a href={card.demo}>

            <IoArrowForwardCircleOutline 
              onMouseEnter={() => {
                setCursorText("Visit site"),
                  setCursorVariant("text")
              }}
            
              onMouseLeave={() => {
                setCursorText("")
                setCursorVariant("default")
              }}/>
              </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};





const Projects = ({setCursorVariant , setCursorText}) => {
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
      
      <div className="bg-transparent hidden lg:block">
      
        <HorizontalScrollCarousel setCursorVariant={setCursorVariant} setCursorText={setCursorText} />
      
    </div>


      </div>




      
  )
}

export default Projects



//one after the other effect 
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
