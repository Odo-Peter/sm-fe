import React from 'react';
import logo from '../assets/sm.png';

const navItems = ['About us', 'Projects', 'Contact us'];

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-50 flex items-center justify-between px-16 py-4 shadow-md bg-white">
      <div>
        <img src={logo} alt="logo" className="h-10" />
      </div>

      <div className="flex items-center gap-x-4">
        {navItems.map((item, i) => (
          <a href="/item" key={i} className="">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
