'use client'

import React, { useState, createContext, useContext } from "react";

import { error } from "console";
import type { sectionName } from "@/lib/types";



type ActiveSectionContextProviderProps = {
    children: React.ReactNode
};

type ActiveSectionContextType = {
  activeSection: sectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>,
  timeOfLastClick:number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>,
};


export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

function ActiveSectionContextProvider({children} : ActiveSectionContextProviderProps) {
  
  const [activeSection, setActiveSection] = useState<sectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // We need to keep track of this to disable the observer temporarily when user click on a link.

  return (
    <ActiveSectionContext.Provider
    value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick
    }}
    >{children}</ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider;

export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("useActiveSectionContext must be  used within an ActiveSectionContextProvider");
  }
  return context;
}
