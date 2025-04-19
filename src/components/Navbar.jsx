import { AlignLeft } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li className="ml-4">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-4">
        <NavLink to="/listed-books">Listed Books</NavLink>
      </li>
      <li className="ml-4">
        <NavLink to="/pages-to-read">Pages to Read</NavLink>
      </li>
    </>
  );

  return (
    <header>
      <nav className="navbar  shadow-sm">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <button>
                <AlignLeft></AlignLeft>
              </button>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black  rounded-box z-1  w-32 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" text-xl">StoryCorner</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"> {links}</ul>
        </div>
        <div className="navbar-end mr-4 gap-3">
          <a className="btn bg-[#23BE0A]">Sign In </a>
          <a className="btn bg-[#59C6D2]">Sign Up</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
