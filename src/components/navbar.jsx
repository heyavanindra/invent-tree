"use client";

import React, { useState } from "react";
import { MenuButton } from "./menu-button";
import Image from "next/image";
import Logo from "../../public/logo/logo3.webp";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="">
      
        <Image className="fixed top-0 z-30 left-0 h-[100px] w-[150px]" src={Logo} alt="Logo" height={200} width={200}></Image>

        <div className="fixed  right-7 top-7 sm:top-7 sm:right-7 flex items-center sm:h-[40px] sm:w-[100px] z-60 sm:mx-10">
          <MenuButton
            isOpen={open}
            onClick={() => setOpen(!open)}
            strokeWidth="4"
            color="#3399cc"
            transition={{ ease: "easeOut", duration: 0.2 }}
            width="64"
            height="24"
            className="h-[20px] w-[100px] max-sm:w-[34] cursor-pointer"
          ></MenuButton>
        </div>
      {/* on open */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="fixed inset-0 z-30 bg-neutral-100 "
          ></motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
