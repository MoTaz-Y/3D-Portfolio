import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => {
        return (
          <li key={item.id} className="nav-li">
            <a
              className="nav-li_a text-neutral-400 hover:text-white transition-colors"
              href={item.href}
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
const NavBar = () => {
  const [open, setOpen] = useState(true);
  const toggleMenu = () => setOpen((prevOpen) => !prevOpen);
  return (
    <headrer className="text-white fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto c-space py-5 flex justify-between items-center">
          <a
            className="text-neutral-400 font-generalsans text-xl font-bold hover:text-white transition-colors"
            href="/"
          >
            MoTaz
          </a>{" "}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="toggle menu"
          >
            <img
              src={open ? "public/assets/close.svg" : "public/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden justify-between items-center">
            <NavItems />
          </nav>
        </div>{" "}
      </div>
      <div className={`nav-sidebar ${open ? "max-h-screen" : "max-h-0"}`}>
        <nav className="py-5">
          <NavItems />
        </nav>
      </div>
    </headrer>
  );
};

export default NavBar;
