"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "bg-[linear-gradient(110deg,#333_0.6%,#2868ce)] p-4 max-w-none h-full w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600",
          className
        )}
      >
        <div className="flex justify-center items-center w-full">
          <Illustration />
        </div>
        <div className="px-2 pb-6">{children}</div>
      </div>
    );
  };
  

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p className={cn(" pl-1 pt-1 text-xs font-light text-white max-w-[16rem]", className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2 className={cn("font-bold text-4xl text-[#eaeaea]", className)}>
      {children}
    </h2>
  );
};

export const Illustration = () => {
  const stars = 108; // Total number of stars
  const columns = 18; // Number of columns in the grid layout
  const [glowingStars, setGlowingStars] = useState<number[]>([]); // State to keep track of glowing stars
  const highlightedStars = useRef<number[]>([]); // Ref to store the randomly selected glowing stars

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select 10 stars to glow every 1.5 seconds
      highlightedStars.current = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]); // Update state with the new glowing stars
    }, 1500); // Interval duration in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="h-48 p-1 w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`, // Set the grid layout with specified columns
        gap: `1px`, // Small gap between stars
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx); // Check if the star is glowing
        const delay = (starIdx % 10) * 0.1; // Calculate a delay for the glow animation
        const staticDelay = starIdx * 0.01; // Delay for the static glow effect

        return (
          <div
            key={`matrix-col-${starIdx}`}
            className="relative flex items-center justify-center"
          >
            <Star isGlowing={isGlowing} delay={delay} />
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={delay} />} // Render glow if the star is glowing
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1, // Initial scale of the star
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1, // Scale animation if the star is glowing
        background: isGlowing ? "#fff" : "#666", // Change background color if the star is glowing
      }}
      transition={{
        duration: 1, // Faster animation duration
        ease: "easeInOut", // Animation easing
        delay: delay, // Delay for the animation
      }}
      className={cn("bg-[#666] h-[1px] w-[1px] rounded-full relative z-20")}
    ></motion.div>
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0, // Initial opacity
      }}
      animate={{
        opacity: 1, // Animation to fade in
      }}
      transition={{
        duration: 1, // Faster duration of the glow animation
        ease: "easeInOut", // Easing of the glow animation
        delay: delay, // Delay before the glow animation starts
      }}
      exit={{
        opacity: 0, // Fade out when exiting
      }}
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400"
    />
  );
};
