
import React from 'react';
import Fade from 'react-reveal/Fade';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import SashaImage from '../assets/images/Sasha.jpg';
import KrugerImage from '../assets/images/Kruger.jpg';
import ReinerImage from '../assets/images/Reiner.jpg';

export default function Testimonial({ data }) {
    return (
        <Fade bottom>
            <section className="container mx-auto">
                <h1 className="text-5xl text-theme-blue text-center font-bold">Testimonials</h1>

                <p className="font-light text-lg text-gray-400 text-center mb-3 sm:mb-3 xl:mb-4">
                    What they said about us.
                </p>

                <Splide
                    options={{
                        type: 'loop',
                        autoplay: true,
                    }}
                >
                    {
                        data.map((item) => (
                            <SplideSlide key={item.name}>
                                <div className="flex-col xl:w-4/5 rounded-2xl shadow-xl sm:shadow-2xl border border-light-theme-purple px-8 py-6 mx-2 mb-6 mt-6 xl:mx-auto sm:mx-6 sm:mb-12">
                                    <div className="flex items-center mb-5">
                                        {/* Use imported images directly */}
                                        {item.name === 'Sasha Rose' && <img src={SashaImage} alt="Sasha Rose" className="w-20 h-20 rounded-full" />}
                                        {item.name === 'Kruger Khan' && <img src={KrugerImage} alt="Kruger Khan" className="w-20 h-20 rounded-full" />}
                                        {item.name === 'Reiner John' && <img src={ReinerImage} alt="Reiner John" className="w-20 h-20 rounded-full" />}
                                        <div className="flex-col pl-5">
                                            <h2 className="text-theme-blue text-2xl">{item.name}</h2>
                                            <p className="font-light text-gray-400">{item.company}</p>
                                        </div>
                                    </div>
                                    <p className="font-light text-2xl text-gray-400 pl-5 pt-3 pb-1">
                                        {item.testimoni}
                                    </p>
                                </div>
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </section>
        </Fade>
    );
}
