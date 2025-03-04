"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "@/data/navbarData";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {navLinks.map((link, index) => {
        const isActive =
          link.path === pathname || pathname.startsWith(`${link.path}/`);

        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              isActive ? "text-accent border-b-2 border-accent" : ""
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
