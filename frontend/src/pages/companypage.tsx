"use client";
import React from "react";
import { BackgroundBeamsDemo } from "./worker-dashboard/header";
import CardM from "../components/companiescard";

export function GridBackgroundDemo() {
    return (
        <div className="h-[70rem] w-full dark:bg-black bg-whote dark:bg-dot-white/[0.1] bg-dot-black/[0.9] absolute inset-0 flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-whote [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    );
}

export const CompN = () => {
    return (
        <div className="relative p-4 ">
            <BackgroundBeamsDemo
                className="items-left"
                title="Apple"
                description="For the Round pegs in the Square Holes"
                align="left"
            />

            {/* Section for Technologies and Fields */}
            <section className="mt-8 p-6 text-left dark:text-neutral-200">
                <div className="flex flex-col md:flex-row">
                    {/* Technologies */}
                    <div className="flex flex-col pr-6">
                        <h3 className="text-l font-normal text-writer mb-2">Technologies</h3>
                        <p className="text-zinc-500">
                            {/* Add your technologies text here */}
                            Here you can add a list or description of technologies used.
                        </p>
                    </div>
                    
                    {/* Fields */}
                    <div className="flex flex-col ml-6">
                        <h3 className="text-l font-normal mb-2 text-writer">Fields</h3>
                        <p className="text-zinc-500">
                            {/* Add your fields text here */}
                            Here you can add a list or description of fields related to the content.
                        </p>
                    </div>
                </div>
                {/* Hyperlink that opens in a new tab */}
                <a
                    href="https://www.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline text-xl hover:text-blue-700 block pt-3 pb-2 mb-2"
                >
                    Apple
                </a>

                {/* Heading for the section */}
                <h2 className="text-3xl font-medium pb-5">Round Peg in the Square Holes</h2>

                {/* Content about Apple */}
                <p className="max-w-prose text-l">
                    Apple Inc. is a global leader in technology and innovation. Known for its
                    groundbreaking products like the iPhone, iPad, and Mac, Apple constantly
                    pushes the boundaries of what is possible in technology. The company's
                    commitment to design, user experience, and ecosystem integration has set it
                    apart as a beloved brand worldwide.
                </p>
            </section>

            {/* Section with Gigs heading and cards */}
            <section className="relative">
                <GridBackgroundDemo />
                <div className="relative z-10 p-8">
                    <div className="pl-2 max-w-full mx-auto">
                        <h1 className="font-normal font-extrabold text-left pl-11 text-5xl">Gigs</h1>
                    </div>
                    {/* Cards section */}
                    <div className="flex flex-col items-center space-y-8 pt-11">
                        <CardM 
                            job="Full Stack Developer" 
                            domain="Web Development" 
                            subdomain="React JS" 
                            description="We're seeking a skilled Full Stack Developer to join our dynamic team. You'll be responsible for developing and maintaining web applications using React for the frontend and Node.js for the backend. The ideal candidate should have a strong understanding of web technologies and be comfortable working in an agile environment." 
                            link="#"
                            bidvalue="$50"
                        />
                        <CardM 
                            job="UI/UX Designer" 
                            domain="Design" 
                            subdomain="User Interface" 
                            description="We are looking for a creative UI/UX Designer to join our team. The ideal candidate should have a strong portfolio showcasing design skills and the ability to create user-friendly interfaces." 
                            link="#"
                            bidvalue="$12"
                        />
                        {/* Add more CardM components as needed */}
                    </div>
                </div>
            </section>
        </div>
    );
};
