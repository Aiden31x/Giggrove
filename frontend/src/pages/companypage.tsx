"use client";
import React from "react";
import { BackgroundBeamsDemo } from "./worker-dashboard/header";
import Card from "../components/companiescard";

export function GridBackgroundDemo() {
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-whote dark:bg-dot-white/[0.1] bg-dot-black/[0.9] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-whote [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    );
}



export const CompN = () => {
    return (
        <div className="p-4">
            <BackgroundBeamsDemo
                className="items-left"
                title="Apple"
                description="For the Round pegs in the Square Holes"
                align="left" // Ensure left alignment if needed
            />

            {/* Heading for the section */}
            <h2 className="mt-8 p-6 text-2xl font-bold text-left dark:text-neutral-200">
                Round Peg in the Square Holes
            </h2>

            {/* Hyperlink that opens in a new tab */}
            <a
                href="https://www.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700 block mb-2 pl-6"
            >
                Apple
            </a>

            {/* Content about Apple */}
            <p className="p-6 text-left max-w-prose dark:text-neutral-200">
                Apple Inc. is a global leader in technology and innovation. Known for its
                groundbreaking products like the iPhone, iPad, and Mac, Apple constantly
                pushes the boundaries of what is possible in technology. The company's
                commitment to design, user experience, and ecosystem integration has set it
                apart as a beloved brand worldwide.
            </p>

            {/* Section with Gigs heading */}
            <div className="relative rounded-md bg-whote">
                <div className="pl-2 max-w-full mx-auto bg-whote">
                    <h1 className="font-mono justify text-center text-4xl">Gigs</h1>
                </div>
                <GridBackgroundDemo />

                {/* Cards section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4">
                    <Card job="Card 1" domain="ML" subdomain="regression" description="This is the first card description.You need to be greajbfitnknaskdnn  kan akd w aknden fjclkslkjndiout ajuin hui theuo ajui asir  jnadjjf " />
                    <Card title="Card 2" description="This is the second card description." />
                    <Card title="Card 3" description="This is the third card description." />
                </div>
            </div>
        </div>
    );
};
