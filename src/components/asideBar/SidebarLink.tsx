import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
// LINK SIDEBAR
interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, children }) => (
  <Button className="bg-hov hover:bg-butt">
    <Link className="text-slate-100 font-bold" href={href}>
      {children}
    </Link>
  </Button>
);

export default SidebarLink;
