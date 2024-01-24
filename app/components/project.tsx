"use client";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];
function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8,1]);
  const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6,1]);
  

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="group bg-gray-100 max-w-[50rem] border-black/5 overflow-hidden sm:pr-8 relative sm:h-[22rem] rounded-lg drop-shadow-md group:even:pl-4 hover:bg-gray-200 transition">
        <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:max-w-[50%] flex flex-col h-full group-even:ml-[26rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="mt-2 leading-relaxed text-gray-700 text-sm">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.5rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute top-8 -right-40 w-[30.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3 group-hover:scale-[1.05] "
        />
      </section>
    </motion.div>
  );
}
export default Project;
