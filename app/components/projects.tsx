import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'

function Projects() {
  return (
    <section>
      <SectionHeading> My Projects </SectionHeading>
      <div>
        {projectsData.map((project,index) => (
            <React.Fragment key={index} >
                <Project {...project} />
            </React.Fragment> 
        )
        )}
      </div>
    </section>
  )
}
export default  Projects


type ProjectProps = typeof projectsData[number];
function Project({title,description,tags,imageUrl}: ProjectProps){
    return(
        <section
        className='group bg-gray-100 max-w-[50rem] border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem] mb-3 sm:mb-8 last:mb-0'
        >
            <div
            className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:max-w-[50%] flex flex-col h-full group-even: ml-[26rem]'
            >
                <h3
                className='text-2xl font-semibold'
                >{title}</h3>

                <p
                className='mt-2 leading-relaxed text-gray-700 text-sm'
                >{description}</p>
                <ul
                className='flex flex-wrap mt-4 gap-2 sm:mt-auto'
                >
                    {tags.map((tag, index) =>(
                        <li 
                        className='bg-black/[0.7] px-3 py-1 text-[0.5rem] uppercase tracking-wider text-white rounded-full'
                        key={index}>{tag}</li>
                    ))}
                </ul>
            </div>

            <Image
                src={imageUrl}
                alt='Project I worked on'
                quality={95}
                className='absolute top-8 -right-40 w-[30.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40'
            />
        </section>)
}