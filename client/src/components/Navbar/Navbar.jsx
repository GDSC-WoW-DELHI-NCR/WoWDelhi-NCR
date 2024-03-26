import { useState } from "react";
import logo from "../../assets/images/wow_logo.png";
import NavbarItem from "./NavbarItem";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full py-5 md:px-16 fixed top-0 z-20 bg-[#1e1e1e67] backdrop-blur-lg">
      <img src={logo} alt="GDSC WOW Logo" className="px-10 md:px-0"/>

      <div
        onClick={() => setOpen(!open)}
        className="text-4xl absolute right-0 top-8 flex cursor-pointer md:hidden px-10 md:px-0"
      >
        {open ? <IoClose /> : <CgMenuRightAlt />}
      </div>

      <ul
        className={`md:flex md:flex-row flex flex-col justify-center gap-20 items-center bg-[#1E1E1E] md:bg-transparent text-center w-full h-screen md:h-auto md:shadow-none p-5 md:p-0 md:z-auto z-[-1] right-4 rounded-md absolute top-[95px] md:static md:w-auto md:gap-3 transition-all duration-300 ease-in md:space-x-5 ${
          open ? "right-[0px]" : "right-[800px]"
        }`}
      >
        {NavbarItem.map((item, index) => {
          return (
            <li key={index}>
              <a onClick={() => setOpen(false)} className=" text-[#F8F9FA] text-3xl md:text-base" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
