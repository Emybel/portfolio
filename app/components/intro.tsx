'use client';

import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import {FaGithubSquare} from 'react-icons/fa';
export default function Intro() {

return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
    
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        type:"tween",
                        duration: 0.2,
                    }}
                >
                    <Image src="/myPic.jpg"
                    alt="My Picture"
                    width= "192"
                    height= "192"
                    quality= "95"
                    priority= {true}
                    className='h-34 w-34 rounded-full object-cover border-[0.35rem] border-white shadow-xl '
                    />
                </motion.div>
                <motion.span 
                initial={{opacity:0, scale:0}}
                animate={{opacity:1, scale:1}}
                transition={{
                    type: 'spring',
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7
                }}
                className="text-4xl absolute bottom-0 right-0 ">
                    👋
                </motion.span>
            </div>
        </div>

        <motion.h1
            className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            Hey there, <span className="font-bold">I'm Imane.</span> a budding{" "} <span className="font-bold">front-end developer</span> with a focus on  {" "} <span className="underline font-bold"> React, especially (Next.js)</span>. I love building{" "} <span className="font-bold">sleek and interactive{" "} </span> websites and applications to create engaging user experiences.
            
        </motion.h1>

        <motion.div 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{
                delay: 0.1,
            }}
            className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium ' >
            <Link 
                href="#contact"
                className=' group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full shadow-md outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all' 
                > Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition ' /> 
            </Link>

            <a 
                className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full shadow-md outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer border border-black/10 '
                href='/CV.pdf' download>
                Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
            </a>

            <a 
                className=' bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full shadow-md focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition-all cursor-pointer border border-black/10 '
                href='https://www.linkedin.com/in/imene-belaid/' target='_blank' rel='noopener'
                > <BsLinkedin/>
            </a>
            <a 
                className=' bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full shadow-md focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer border border-black/10 '
                href='https://github.com/Emybel' target='_blank'
rel='noopener'
                > <FaGithubSquare /> 
            </a>
        </motion.div>

    </section>
    )
}
