'use client'
import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';


function About() {

  const {ref} = useSectionInView('About',0.5);

  return (
    <motion.section
    ref={ref}
    className='mb-28 max-w-[50rem] text-center leading-7 sm:mb-40 scroll-mt-28 '
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.175}}
    id='about'
    >
        <SectionHeading>About me</SectionHeading>

        <p className='mb-3'>
        The click of the keyboard, the hum of the computer, and the magic of an idea turning into reality - that's the world of coding for me. It wasn't always like this, though. Once, I traded in code for administrative tasks, but the thrill of problem-solving never left me. Then, I took a leap and dived into a coding bootcamp, a whirlwind of late nights fueled by caffeine and the exhilaration of seeing lines of code morph into websites.
        </p>

        <p className='mb-3'>
        They say every problem has a solution, and for me, that solution often involves code. Cracking the code, so to speak, and finding that elegant, efficient answer is what gets me going. Whether it's building sleek websites with React and Next.js, wielding the power of JavaScript and TypeScript, or adding a dash of style with Tailwind CSS, I approach coding with a creative problem-solver's mindset. And the learning never stops, because the tech world is an ever-evolving adventure.

        </p>

        <p className='mb-3'>
        Right now, I'm always looking for new opportunities where I can put my skills to the test and create impactful projects. But coding isn't my only passion. When I'm not tapping away at the keyboard, I'm exploring the hidden corners of the internet, finding inspiration for new projects in the stories I devour, or letting the rhythm of cooking guide me to innovative solutions.
        </p>

        <p className='mb-3'>
        Join me on this exciting journey where tech meets creativity, and every line of code becomes a story of innovation. Let's write the next chapter together! If you're looking for a passionate developer with a dash of creativity, let's chat!
        </p>

    </motion.section>
  )
}
export default About







