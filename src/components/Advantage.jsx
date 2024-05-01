import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import CommunicativeImage from '../assets/images/Communicative.png';
import ManagementImage from '../assets/images/Management.png';
import UseScrollAnimation from '../elements/Scroller/UseScrollAnimation';

const Advantage = ({ data }) => {
    const { controls, cardsRef } = UseScrollAnimation();

    return (
        <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
            <div className="container mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl text-theme-blue text-center font-bold"
                >
                    Why Choose Us
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-light text-lg text-gray-400 text-center mb-12 sm:mb-5 xl:mb-0"
                >
                    Why you should choose us to handle your project.
                </motion.p>

                <div className="flex flex-col sm:flex-row" ref={cardsRef}>
                    <div className="flex-col">
                        {data[0].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 500 }}
                                animate={controls}
                                transition={{ duration: 1, delay: 0.5 + index * 0.5 }}
                                style={{ opacity: 0, y: 500 }}
                                className="my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7"
                            >
                                <div className="bg-white flex flex-row items-center p-3 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                                    <img src={CommunicativeImage} alt="" className="w-1/3" />
                                    <div className="flex-col pl-5">
                                        <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                                        <p className="font-light text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex-col -mt-4 sm:mt-14">
                        {data[1].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 500 }}
                                animate={controls}
                                transition={{ duration: 1, delay: 0.5 + index * 0.5 }}
                                style={{ opacity: 0, y: 500 }}
                                className="my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7"
                            >
                                <div className="bg-white flex flex-row items-center p-3 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                                    <img src={ManagementImage} alt="" className="w-1/3" />
                                    <div className="flex-col pl-5">
                                        <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                                        <p className="font-light text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

Advantage.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Advantage;
