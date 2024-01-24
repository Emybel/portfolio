"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'

import { useSectionInView } from '@/lib/hooks'

function Projects() {
  const {ref} = useSectionInView('Projects',0.25);
  
  return (
    <section id='projects' className='scroll-mt-28' ref={ref}>
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
