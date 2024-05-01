import React from 'react';
import { motion } from 'framer-motion';
import Button from '../elements/Button';
import NotFound from '../assets/images/NotFound.png';
import recruitingImage from '../assets/images/Recruiting.png';
import streamImage from '../assets/images/Stream.png';
import freelanceImage from '../assets/images/Freelance.png';
import auraImage from '../assets/images/Aura.png';
import surtidoImage from '../assets/images/Surtido.png';
import managementImage from '../assets/images/ManagementApp.png';

const images = {
  '../assets/images/Recruiting.png': recruitingImage,
  '../assets/images/Stream.png': streamImage,
  '../assets/images/Freelance.png': freelanceImage,
  '../assets/images/Aura.png': auraImage,
  '../assets/images/Surtido.png': surtidoImage,
  '../assets/images/ManagementApp.png': managementImage,
};

const PortfolioDetail = ({ data }) => {
  if (data === null) {
    return (
      <section className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12 mt-5" />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Project Not Found
            </h1>
            <div className="flex justify-center">
              <Button href="/project" type="link" className="flex w-30 h-10 px-5 mt-5 bg-theme-blue text-white items-center rounded transform transition duration-500 hover:bg-gray-900">
                Go Back
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Button type="link" href="/project" className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline">
          <svg className="w-5 h-5 text-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          See All Project
        </Button>
      </motion.div>

      {data.map((item) => (
        <div className="flex flex-col mt-8 justify-center" key={item.id}>
          <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl text-theme-blue text-center font-bold">{item.title}</h1>
            <p className="font-light text-xl text-gray-400 text-center mb-10">{item.type}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <div className="flex justify-center xl:mb-6">
              <img src={images[item.imageUrl]} alt="Project" className="flex w-4/5 sm:w-4/6" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
            <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-theme-blue font-bold mb-3">Project Detail</h1>
              <p className="font-light text-lg text-gray-400 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-theme-blue font-bold mb-5">Project Responsibilities</h1>
              <div className="flex flex-row ml-1">
                {item.responsibility.map((responsibility) => (
                  <div className="mr-4 px-6 py-3 text-theme-purple border border-theme-purple rounded-full shadow-lg" key={responsibility}>
                    {responsibility}
                  </div>
                ))}
              </div>
            </div>

            <p className="font-light italic text-gray-400 mt-16 mx-8 sm:mx-16 xl:mx-28">
              * This project is just an example.
              <br />
              Original project:
              {' '}
              <Button type="link" href={item.credit} target="_blank" className="text-theme-purple" isExternal>{item.credit}</Button>
            </p>
          </motion.div>
        </div>
      ))}
    </section>
  );
}

export default PortfolioDetail;