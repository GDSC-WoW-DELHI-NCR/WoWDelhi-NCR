import logo from '../../assets/images/wow_logo.png';
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full py-5 md:px-16 fixed top-0 z-10 bg-[#1E1E1E1E] ">
      <img src={logo} alt="GDSC WOW Logo" />
      <ul className="flex items-center md:space-x-10">
        {NavbarItem.map((item, index) => {
          return (
            <li key={index}>
              <a className=" text-[#F8F9FA] text-base " href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Navbar