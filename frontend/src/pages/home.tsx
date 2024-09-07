"use client";
import React, { useState, useEffect, useRef } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Got skills but no work
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Don't worry we got you
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Get Started
        </button>
      </div>
    </AuroraBackground>
  );
}

export function FloatingNavDemo() {
  const [isAuroraCrossed, setIsAuroraCrossed] = useState(false);
  const auroraRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsAuroraCrossed(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (auroraRef.current) {
      observer.observe(auroraRef.current);
    }

    return () => {
      if (auroraRef.current) {
        observer.unobserve(auroraRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      <FloatingNav navItems={[]} isAuroraCrossed={isAuroraCrossed} />
      <div ref={auroraRef}>
        <AuroraBackgroundDemo />
      </div>
    </div>
  );
}

export const Home = () => {
  return (
    <div>
      <FloatingNavDemo />
      <div className="px-4 py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Additional Content</h2>
        <div className="space-y-6">
          {Array.from({ length: 8 }, (_, index) => (
            <section
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold">{`Section ${index + 1}`}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
