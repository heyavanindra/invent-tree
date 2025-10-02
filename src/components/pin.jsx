"use client"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"



export default function Pin({className}){
 return <motion.div
    className={cn("absolute z-40 flex flex-col items-center mb-3",className)}
    initial={{
      y: -50,
      opacity: 0,
      scale: 0.5,
    }}
    whileInView={{
      y: 0,
      opacity: 1,
      scale: 1,
    }}
    viewport={{ margin: "0px -300px 0px -100px" }}
    transition={{
      type: "spring",
      stiffness: 900,
      damping: 15,
      mass: 0.8,
    }}
  >
    <div className="w-16 p-2 h-16 rounded-full flex items-center justify-center shadow-lg relative z-10 bg-[#BED5E9]">
      <img src="/logo/Invent-Tree logo Favicon-08.png" alt="pin" />
    </div>
    <div className="mt-1 w-1 h-1 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#8777a9]"></div>
  </motion.div>

}