import React, { useRef, useState } from 'react'
import music from "../../public/song.mp3"
import { motion } from 'framer-motion';
import { useCursorContext } from '../Context/context';


const SoundBar = () => {
    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const { onEnter } = useCursorContext()


    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    return (
        <motion.div
            className="flex cursor-none gap-1 absolute top-[6%] left-[50%] translate-x-[-50%] max-[500px]:translate-y-[-100%] md:invisible
            lg:visible lg:translate-y-[-30%] z-10  "
            onClick={handleClick}
            onMouseEnter={() => {
                let current = click ? "Pause" : "Play"
                onEnter({ variant: "HoverSong", value: current })
            }}

            onMouseLeave={() => {
                onEnter({ variant: "default" })
            }}
        >
            {[0.2, 0.3, 0.4, 0.5, 0.8].map((delay, index) => (
                <span
                    key={index}
                    className={`bg-current border border-current h-4 w-[2px] rounded-xl mx-px
                    ${click ? 'animate-play' : ''}`}
                    style={{ animationDelay: `${delay}s` }}
                />
            ))}

            <audio src={music} ref={ref} loop />
        </motion.div>
    )
}

export default SoundBar
