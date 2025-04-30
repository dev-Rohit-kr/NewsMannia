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
    <div className="font-[Poppins] ">
      <header className="bg-white shadow-md">
        <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
          <div>
            <h1 className='font-bold-700 text-lg'>NewsMannia.in</h1>
          </div>
          <div
            className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
              menuOpen ? 'top-[9%]' : 'top-[-100%]'
            } md:w-auto w-full flex items-center px-5 z-10`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Business
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Technology
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  India
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Finance
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
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
