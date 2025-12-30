
import { useState } from "react";
import pic from "/avin.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", link: "Home" },
    { id: 2, text: "About", link: "About" },
    { id: 3, text: "Portfolio", link: "Portfolio" },
    { id: 4, text: "Skills", link: "Skills" },
    { id: 5, text: "Contact", link: "Contact" },
  ];

  return (
    <div
      className="
        max-w-screen-2xl container mx-auto px-4 md:px-20
        fixed top-0 left-0 right-0 z-50
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
        shadow-lg text-white
      "
    >
      {/* Navbar */}
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={pic}
            alt="profile"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <div>
            <h1 className="text-xl font-bold">Avinash Kumar</h1>
            <p className="text-sm text-gray-200">Web Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map(({ id, text, link }) => (
            <li
              key={id}
              className="cursor-pointer hover:text-yellow-300 duration-200"
            >
              <Link to={link} smooth duration={500} offset={-70}>
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div
          className="
            md:hidden
            absolute
            top-16
            left-0
            w-full
            h-[calc(100vh-4rem)]
            bg-gradient-to-b from-indigo-600 to-purple-700
            overflow-y-auto
            z-40
          "
        >
          <ul className="flex flex-col items-start px-8 py-6 space-y-6 text-xl font-semibold">
            {navItems.map(({ id, text, link }) => (
              <li key={id} className="hover:text-yellow-300">
                <Link
                  to={link}
                  smooth
                  duration={500}
                  offset={-70}
                  onClick={() => setMenu(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

