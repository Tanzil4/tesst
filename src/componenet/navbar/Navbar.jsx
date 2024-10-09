import React, { useState } from 'react';
import image from './image/Group 112.png'



const Navbar = () => {
  // State to handle menu open/close for mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto w-full">
          {/* navbar */}
          <nav className="flex justify-between bg-[#49BBBD] text-white w-full">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              

              <img className="w-24" src={image} alt="" />

              {/* Nav Links */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Category
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Collections
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>

              {/* Header Icons */}
              <div className="hidden md:flex items-center space-x-5">
                <button className='w-28 h-12 bg-white text-black rounded-3xl'>
                  Login
                </button>
               <button className='w-28 h-12 bg-[#57e0e2] text-white rounded-3xl '>
                  Sign up
                </button>
              </div>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="xl:hidden flex items-center mr-6">
              <button
                className="navbar-burger flex items-center"
                aria-label="Mobile menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="flex flex-col bg-[#49BBBD] text-white space-y-4 py-4 px-6 xl:hidden">
              <li>
                <a className="hover:text-gray-200" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#">
                  Category
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#">
                  Collections
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <button className='w-full h-12 bg-white text-black rounded-3xl'>
                  Login
                </button>
              </li>
              <li>
                <button className='w-full h-12 bg-white text-black rounded-3xl'>
                  Sign up
                </button>
              </li>
            </ul>
          )}
        </section>
      </div>
    </>
  );
};

export default Navbar;
