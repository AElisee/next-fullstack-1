"use client";

import Link from "next/link.js";
import { usePathname } from "next/navigation.js";

const NavLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`px-2 py-1 ${
        pathname == item.path && "bg-white text-black rounded-lg"
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
