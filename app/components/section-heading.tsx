import React from 'react'

type sectionHeadingProps ={
    children : React.ReactNode;
};

function SectionHeading({children}: sectionHeadingProps) {
  return (
    <h2
    className='text-3xl font-medium capitalize mb-8'
    >{children}</h2>
  )
}
export default SectionHeading
