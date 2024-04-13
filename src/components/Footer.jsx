import React from 'react';
import logo from '../assets/sm.png';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const footerItems = ['About us', 'Projects', 'Contact us'];

const Footer = () => {
  return (
    <div className="px-24 mt-8 py-6 bg-gray-200">
      <div className="flex items-center justify-between border-b border-gray-300 pb-6">
        <div>
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <div className="flex items-center gap-x-4">
          {footerItems.map((item, i) => (
            <a href="/item" key={i} className="">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-4">
          <AiFillFacebook className="w-8 h-8" />
          <AiFillTwitterCircle className="w-8 h-8" />
          <AiFillInstagram className="w-8 h-8" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <p className="text-xs text-gray-600">
          &#169;{new Date().getFullYear()} by SmartChain Limited | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
