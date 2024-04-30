import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

export default function Header() {
  const location = useLocation();
  const [isCollapse, setIsCollapse] = useState(false);
  const path = location ? location.pathname : '';

  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex justify-between w-full'
      >
        <div className="flex justify-between w-full lg:w-auto px-4 lg:px-0">
          <BrandIcon />

          <button className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
          <li>
            <Button
              className={`${path === '/' ? 'active-link' : ''} text-lg px-5 no-underline hover:underline font-semibold`}
              type="link"
              href="/"
            >
              Home
            </Button>
          </li>
          <li className="py-2 lg:py-0">
            <Button
              className={`${path === '/team' ? 'active-link' : ''} text-lg px-5 no-underline hover:underline font-semibold`}
              type="link"
              href="/team"
            >
              Team
            </Button>
          </li>
          <li className="py-2 lg:py-0">
            <Button
              className={`${path === '/project' ? 'active-link' : ''} text-lg px-5 no-underline hover:underline font-semibold`}
              type="link"
              href="/project"
            >
              Project
            </Button>
          </li>
          <li>
            <Button
              className="text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 font-semibold"
              type="link"
              href="/discuss-project"
            >
              Discuss Project
            </Button>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute w-full lg:hidden flex justify-between"
        style={{ top: '4rem' }}
      >
        <ul className={`${isCollapse ? 'block' : 'hidden'} z-50 flex flex-col text-theme-blue tracking-widest my-6 bg-white w-full border-b-2 border-gray-300`}>
          <li className="py-2 bg-white">
            <Button
              className={`${path === '/' ? 'active-link' : ''} px-10 no-underline hover:underline`}
              type="link"
              href="/"
            >
              Home
            </Button>
          </li>
          <li className="py-2 bg-white">
            <Button
              className={`${path === '/team' ? 'active-link' : ''} px-10 no-underline hover:underline`}
              type="link"
              href="/team"
            >
              Team
            </Button>
          </li>
          <li className="py-2 bg-white">
            <Button
              className={`${path === '/project' ? 'active-link' : ''} px-10 no-underline hover:underline`}
              type="link"
              href="/project"
            >
              Project
            </Button>
          </li>
          <li className="mx-auto my-9 bg-white">
            <Button
              className="mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
              type="link"
              href="/discuss-project"
            >
              Discuss Project
            </Button>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}
