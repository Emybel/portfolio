'use client'
import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
    className='mb-28 max-w-[50rem] text-center leading-7 sm:mb-40 scroll-mt-28 '
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.175}}
    id='about'
    >
        <SectionHeading>About me</SectionHeading>

        <p className='mb-3'>
        Armed with a degree in Computer Science, my journey veered from administrative roles to embrace the realm of programming. Choosing a coding bootcamp, I immersed myself in full-stack web development, reveling in the joy of problem-solving. The thrill of problem-solving is my driving force, that 'aha 💡' moment when the solution clicks is my ultimate satisfaction. My coding arsenal boasts React, Next.js, JavaScript, and TypeScript, accompanied by an affinity for Tailwind CSS, a touch of elegance in my projects.
        </p>

        <p>
        In my perpetual pursuit of knowledge, I am drawn to the ever-expanding tech landscape. Currently seeking a full-time position as a software developer, I'm geared up to apply my problem-solving skills to impactful projects. Beyond the coding arena, my interests span a spectrum—from exploring the digital wonders to savoring captivating books, cooking up a storm, and plunging into the refreshing waters for a swim. Join me in this exciting narrative where tech meets creativity, and every line of code tells a story of innovation.

        </p>

    </motion.section>
  )
}
export default About
