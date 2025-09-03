"use client"

const { createContext, useState } = require("react");
export const ScrollContext = createContext();
export const ScrollContextWraper = ({ children }) => {
  const [isInView, setIsInView] = useState(false);
  const [activeScene, setActiveScene] = useState(null)
  return (
    <ScrollContext.Provider value={{ isInView, setIsInView ,activeScene,setActiveScene}}>
      {children}
    </ScrollContext.Provider>
  );
};
