import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import WebImage from '../assets/images/Web.png';
import MobileImage from '../assets/images/Mobile.png';
import DesignImage from '../assets/images/Design.png';

const Service = ({ data }) => {
  const controls = useAnimation();
  const cardsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const elementPosition = cardsRef.current.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight / 1.5;

      if (elementPosition < scrollPosition && !isVisible) {
        setIsVisible(true);
      }
    };

    const updateAnimation = async () => {
      if (isVisible) {
        await controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener('scroll', scrollHandler);

    updateAnimation();

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [controls, isVisible]);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-20 pb-28" ref={cardsRef}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-5xl text-theme-blue text-center font-bold"
        >
          Our Service
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-light text-lg text-gray-400 text-center mb-12"
        >
          We are ready to scale up your business with our great service.
        </motion.p>

        <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data && data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 500 }}
              animate={controls}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              style={{ opacity: 0, y: 500 }}
            >
              <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                {item.title === 'Web Development' && <img src={WebImage} alt="Service" className="w-full rounded-t-2xl" />}
                {item.title === 'Mobile Development' && <img src={MobileImage} alt="Service" className="w-full rounded-t-2xl" />}
                {item.title === 'UI/UX Design' && <img src={DesignImage} alt="Service" className="w-full rounded-t-2xl" />}
                <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">{item.title}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
