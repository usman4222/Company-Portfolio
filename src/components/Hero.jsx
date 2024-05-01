import React from 'react';
import BuildWebsite from '../assets/images/Startup.png';
import { motion } from 'framer-motion';
import Button from '../elements/Button';

const Hero = () => {
    return (
        <div>
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 250 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8"
                >
                    <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
                        Growing Your Business
                        {' '}
                        <br />
                        Is Our Calling
                    </h1>

                    <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
                        We provide developers & designers using latest technologies
                        to help you scale up your business.
                    </p>

                    <Button href="/project" type="link" className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200">
                        <span>See Our Work</span>
                        <motion.svg
                            initial={{ x: -10 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                            className="ml-5 w-7 h-7 text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <motion.path
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"
                            />
                        </motion.svg>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 250 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2"
                >
                    <img className="" src={BuildWebsite} alt="Build Website" />
                </motion.div>
            </section>
        </div>
    );
};

export default Hero;
