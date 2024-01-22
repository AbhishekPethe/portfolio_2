import React from 'react'
import { useCursorContext } from '../Context/context'

let skills = ["html" , "css" , "js" , "ts" , "react" , "tailwind" , "redux" , "nextjs"  , "mongo"  ]



const TechStack = () => {

    const { onEnter } = useCursorContext()
    return (
      <div className='mt-16 flex flex-col justify-center items-center gap-5 md:gap-10'>
            <h1 className='font-semibold text-3xl md:text-4xl'
             onMouseEnter={()=>onEnter("HoverName")}
             onMouseLeave={()=>onEnter("default")}
            >Tech Stack  </h1>
          <div className='flex flex-row flex-wrap gap-4 justify-center'>
              {
                  skills.map((each , i) => {
                      return (
                          <img src={`https://skillicons.dev/icons?i=${each}`} alt="img" key={i} />
                      )
                  })
              }
          </div>
      </div>
  )
}

export default TechStack