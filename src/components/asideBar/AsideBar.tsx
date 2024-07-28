"use client";
import React, { useState } from "react";
import SidebarContent from "./SidebarContent";
import MenuIcon from "../../app/icons/MenuIcon";
import MenuClose from "@/app/icons/MenuClose";
// ASIDE BAR
const AsideBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);

  return (
    <>
      {/* Mobile */}
      <div className={`lg:hidden fixed top-40 left-0 z-50 p-4 bg-slate-200 ${open ? 'w-56' : 'w-16'} transition-all duration-300`}>
        <button onClick={handleMenu} className="text-2xl">
         {open ? <MenuClose /> : <MenuIcon />}
        </button>
        {open && <SidebarContent open={open} />}
      </div>

      {/* Desktop */}
      <div className="min-w-[256px] max-w-[256px] h-screen bg-slate-200 fixed hidden lg:block">
        <SidebarContent open={true} />
      </div>
    </>
  );
};

export default AsideBar;
