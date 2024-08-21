"use client";
// helpothers

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

// AuroraBackgroundDemo component
export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Get Started
        </button>
      </motion.div>
    </AuroraBackground>
  );
}

// FloatingNavDemo component with dynamic navbar items
export function FloatingNavDemo() {
  const [navItems, setNavItems] = useState([
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollYProgress.get();
      
      if (scrollPosition > 0.1 && scrollPosition < 0.8) {  // Adjust based on AuroraBackground's position
        setNavItems([
          {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
          
        ]);
      } else {
        setNavItems([
          {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
          {
            name: "About",
            link: "/about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
          {
            name: "Contact",
            link: "/contact",
            icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
        ]);
      }
    };

    handleScroll();
    const unsubscribe = scrollYProgress.onChange(handleScroll);

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}

// DummyContent component for FloatingNavDemo
const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
      <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
        Scroll back up to reveal Navbar
      </p>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};

// Home component incorporating AuroraBackgroundDemo and FloatingNavDemo
export const Home = () => {
  return (
    <div>
      <FloatingNavDemo />
      <AuroraBackgroundDemo />
      <div className="px-4 py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Additional Content</h2>
        <div className="space-y-6">
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Section 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Section 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Section 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Section 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Section 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Section 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Section 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Section 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
