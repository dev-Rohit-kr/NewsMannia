import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Load Poppins font dynamically
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] min-h-screen">
      <header className="bg-white shadow-md">
        <nav className="flex justify-between items-center w-[92%] mx-auto py-2">
          <div>
            <img
              className="w-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt="Logo"
            />
          </div>
          <div
            className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
              menuOpen ? 'top-[9%]' : 'top-[-100%]'
            } md:w-auto w-full flex items-center px-5 z-10`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Solution
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Developers
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button>
            <div className="text-3xl md:hidden cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
