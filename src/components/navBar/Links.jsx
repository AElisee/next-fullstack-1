import Link from "next/link.js";
import NavLink from "./NavLink.jsx";
const links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
    { title: "Admin", path: "/admin" },
  ];
  return (
    <div className="flex gap-5">
      {links.map((link, index) => (
        <NavLink key={index} item={link} />
      ))}
    </div>
  );
};

export default links;
