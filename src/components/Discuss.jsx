import React from 'react';
import { motion } from 'framer-motion';
import Button from '../elements/Button';
import UseScrollAnimation from '../elements/Scroller/UseScrollAnimation';

const Discuss = () => {
  const { controls, cardsRef } = UseScrollAnimation();

  return (
    <motion.section
      className="flex container mx-auto justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{ opacity: 0, y: 100 }}
    >
      <div className="flex flex-col w-10/12 sm:w-11/12 xl:w-10/12 rounded-2xl bg-theme-purple text-gray-100 py-14 sm:px-12 sm:py-20 xl:px-16 shadow-2xl discuss" ref={cardsRef}>
        <div className="flex flex-col sm:flex-row mb-3 sm:mb-9 p-5 sm:p-0 sm:items-center">
          <h1 className="w-2/3 text-5xl sm:text-6xl leading-tight font-semibold">
            Have an awesome project in mind?
          </h1>
          <Button href="/discuss-project" type="link" className="flex bg-white bg-yellow-300 text-blue-800 text-xl lg:text-2xl xl:text-xl tracking-wider items-center justify-center w-56 lg:w-96 lg:h-24 xl:w-56 h-20 p-5 border-2 border-dark-theme-purple shadow-xl rounded-full mt-6 sm:mt-0 sm:ml-4 lg:ml-0 xl:ml-12 transform transition duration-600 hover:scale-105">
            Lets Discuss!
          </Button>
        </div>
        <p className="font-light p-5 sm:p-0 text-lg sm:text-xl lg:text-2xl xl:text-xl mb-1">Lets discuss it and make your dream software come true!</p>
      </div>
    </motion.section>
  );
};

export default Discuss;
