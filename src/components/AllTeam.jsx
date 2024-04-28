import React from 'react';
import Fade from 'react-reveal/Fade';

// Import team images
import CEOImage from '../assets/images/CEO.jpg';
import HRDImage from '../assets/images/HRD.jpg';
import FinanceImage from '../assets/images/Finance.jpg';
import ProjectManagerImage from '../assets/images/Project-manager.jpg';
import Frontend1Image from '../assets/images/Frontend1.jpg';
import Frontend2Image from '../assets/images/Frontend2.jpg';
import Backend1Image from '../assets/images/Backend1.jpg';
import Backend2Image from '../assets/images/Backend2.jpg';
import Mobile1Image from '../assets/images/Mobile1.jpg';
import Mobile2Image from '../assets/images/Mobile2.jpg';
import UIUX2Image from '../assets/images/UIUX2.jpg';
import UIUX1Image from '../assets/images/UIUX1.jpg';

export default function AllTeam() {
    // Define team data with image URLs
    const team = [
        {
            name: "Rach David",
            position: "CEO",
            imageUrl: CEOImage
        },
        {
            name: "Pauline Sydney",
            position: "HRD",
            imageUrl: HRDImage
        },
        {
            name: "Granger Watterson",
            position: "Finance",
            imageUrl: FinanceImage
        },
        {
            name: "Tom Jimmy",
            position: "Project Manager",
            imageUrl: ProjectManagerImage
        },
        {
            name: "Jim Hendrix",
            position: "Front-end Developer",
            imageUrl: Frontend1Image
        },
        {
            name: "Calvin Max",
            position: "Front-end Developer",
            imageUrl: Frontend2Image
        },
        {
            name: "Hawkins Jim",
            position: "Back-end Developer",
            imageUrl: Backend1Image
        },
        {
            name: "Don Bizaro",
            position: "Back-end Developer",
            imageUrl: Backend2Image
        },
        {
            name: "Bill Markinson",
            position: "Mobile Developer",
            imageUrl: Mobile1Image
        },
        {
            name: "Igor Kavarov",
            position: "Mobile Developer",
            imageUrl: Mobile2Image
        },
        {
            name: "Freddie Curl",
            position: "UI/UX Designer",
            imageUrl: UIUX2Image
        },
        {
            name: "Monica Lovegood",
            position: "UI/UX Designer",
            imageUrl: UIUX1Image
        }
    ];

    return (
        <section className="container mx-0 sm:mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-32 sm:gap-14 lg:gap-10 mx-16 justify-items-center">
                {
                    team.map((item, index) => (
                        <Fade bottom delay={200 * index} key={index}>
                            <div>
                                <div className="flex flex-col w-44 h-60 sm:w-56 sm:h-72 rounded-xl shadow-xl border border-light-theme-purple justify-center transform transition duration-500 hover:scale-105">
                                    <div className="flex justify-center xl:mb-5">
                                        <img src={item.imageUrl} alt="Team Member" className="flex w-32 h-32 rounded-full" />
                                    </div>
                                    <h2 className="text-theme-blue text-center text-xl">{item.name}</h2>
                                    <p className="font-light text-gray-400 text-center mb-3">{item.position}</p>
                                </div>
                            </div>
                        </Fade>
                    ))
                }
            </div>
        </section>
    );
}
