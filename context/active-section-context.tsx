'use client'

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";
import { error } from "console";

type sectionName = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
    children: React.ReactNode
};

type ActiveSectionContextType = {
  activeSection: sectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>
};


export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

function ActiveSectionContextProvider({children} : ActiveSectionContextProviderProps) {
  
  const [activeSection, setActiveSection] = useState<sectionName>("Home");

  return (
    <ActiveSectionContext.Provider
    value={{
      activeSection,
      setActiveSection
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
