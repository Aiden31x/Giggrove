"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
export function BackgroundBeamsDemo() {
    return (
      <div className="h-[40rem] w-full rounded-none bg-[linear-gradient(110deg,#333_0.6%,#2868ce)] relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-3xl md:text-7xl bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-mono font-bold leading-tight p-2 text-[#eaeaea]">
        Organisations
        </h1>

          <p></p>
          <p className="text-neutral-200  max-w-lg mx-auto my-2 text-sm font-medium text-center relative z-10">
            Find Companies to work with
          </p>

          
          
        </div>
        <BackgroundBeams />
      </div>
    );
  }