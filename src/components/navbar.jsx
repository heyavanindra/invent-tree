"use client"

import React, { useState } from "react";
import { MenuButton } from "./menu-button";
import Image from "next/image";
import Logo from "../../public/logo/logo3.webp"

const Navbar = () => {
    const [open , setOpen] = useState(false)
  return (
    <nav className="">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between ">
        
            <Image src={Logo} alt="Logo" height={200} width={200}>

            </Image>
        
        <div className="relative flex items-center h-[40px] w-[100px] mx-10">
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
      </div>
    </nav>
  );
};

export default Navbar;
