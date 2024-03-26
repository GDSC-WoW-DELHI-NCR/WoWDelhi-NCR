import { useState } from "react";
import logo from "../../assets/images/wow_logo.png";
import NavbarItem from "./NavbarItem";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const hamburgerClicked = () => {
    console.log("clicked");
    setIsActive(!isActive);
  };

  return (
    <div className="bg-background/60 fixed z-50 w-full backdrop-blur-md">
      <nav className="fixed top-0 flex w-full items-center justify-between bg-[#1E1E1E1E] py-5 md:px-16 ">
        <img src={logo} alt="GDSC WOW Logo" className="px-8" />
        <ul className="hidden items-center md:flex md:space-x-10">
          {NavbarItem.map((item, index) => {
            return (
              <li key={index}>
                <a className=" text-base text-[#F8F9FA] " href={item.href}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className="z-40 flex flex-col items-start justify-evenly gap-1 px-8 md:hidden"
          onClick={hamburgerClicked}
        >
          <span
            className={`block h-[2.5px] w-6 origin-top-left rounded-full bg-white duration-300
                  ${
                    isActive
                      ? "translate-x-0 translate-y-0 rotate-45 bg-green-400"
                      : ""
                  }`}
          ></span>
          <span
            className={`block h-[2.5px] w-6 origin-center rounded-full bg-white duration-300
                  ${isActive ? "translate-x-4 bg-green-400 opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-[2.5px] w-6 origin-bottom-left rounded-full bg-white duration-300
                  ${
                    isActive
                      ? "translate-x-0 translate-y-[3px] -rotate-45 bg-green-400"
                      : ""
                  }`}
          ></span>
        </button>
      </nav>
      <div
        className={`duration-400 bg-background/90 z-100 fixed left-2/4 hidden h-screen w-4/6 translate-x-full backdrop-blur-lg
          ${isActive ? "block translate-x-0" : "hidden"}`}
      >
        <ul className="ml-8 mt-12 flex flex-col items-start gap-2">
          {NavbarItem.map((item, index) => (
            <li key={index}>
              <a className=" text-base text-[#F8F9FA] " href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
