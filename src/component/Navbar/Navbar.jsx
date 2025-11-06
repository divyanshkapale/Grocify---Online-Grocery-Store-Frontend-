import React from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 ">
      <nav className="flex max-w-full h-[14vh] items-center px-30 mx-auto justify-between bg-white">
        {/* mobile logo */}

        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>cify
        </a>

        {/* desktop anchor */}
        <ul className="flex items-center gap-x-15">
          <li>
            <a
              href="#"
              className="font-semibold text-orange-500 tracking-wider"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-zinc-800 tracking-wider hover:text-orange-500"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-zinc-800 tracking-wider hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-zinc-800 tracking-wider hover:text-orange-500"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* nav action */}
        <div className="flex items-center gap-x-5">
          {/* input feild */}
          <div className="flex p-1 rounded-full border-2 border-orange-500">
            <input className="flex-1 h-[5vh] px-3 focus:outline-none"
              type="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
            />
            <button className="bg-gradient-to-b from-orange-600 to-orange-500 h-10 w-10 flex items-center justify-center rounded-full text-xl text-white ">
              <IoSearch />
            </button>
          </div>
          <a href="#" className="text-2xl text-zinc-800">
            <GoHeartFill />
          </a>
          <a href="#" className="text-2xl text-zinc-800">
            <HiShoppingBag />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
