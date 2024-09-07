"use client";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundBeamsDemo } from "./worker-dashboard/header";
import { FilterButton } from "./worker-dashboard/filter-button";

export function BentoGridDemo() {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Items to be displayed in the grid
  const items = [
    {
      title: "NVIDIA",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <img
          src="/nvidia.png"
          alt="NVIDIA"
          className="w-auto h-32 object-contain"
        />
      ),
    },
    {
      title: "APPLE",
      description: "Dive into the transformative power of technology.",
      header: (
        <img
          src="/apple.png"
          alt="APPLE"
          className="w-auto h-32 object-contain"
        />
      ),
    },
    {
      title: "MICROSOFT",
      description: "Discover the beauty of thoughtful and functional design.",
      header: (
        <img
          src="/microsoft.png"
          alt="MICROSOFT"
          className="w-auto h-32 object-contain"
        />
      ),
    },
    {
      title: "META",
      description: "Understand the impact of effective communication in our lives.",
      header: (
        <img
          src="/Meta-Logo.png"
          alt="META"
          className="w-auto h-32 object-contain"
        />
      ),
    },
    {
      title: "THALES",
      description: "Join the quest for understanding and enlightenment.",
      header: (
        <img
          src="/thales.png"
          alt="THALES"
          className="w-auto h-32 object-contain"
        />
      ),
    },
    {
      title: "NETFLIX",
      description: "Experience the thrill of bringing ideas to life.",
      header: (
        <img
          src="/netflix.png"
          alt="NETFLIX"
          className="w-auto h-32 object-contain"
        />
      ),
    },
    {
      title: "HINGE",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: (
        <img
          src="/hinge.jpg"
          alt="HINGE"
          className="w-auto h-32 object-contain"
        />
      ),
    },
    {
      title: "OPENAI",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <img
          src="/openai.png"
          alt="OPENAI"
          className="w-auto h-32 object-contain"
        />
      ),
    },
    {
      title: "PERPLEXITY",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: (
        <img
          src="/perplexoty.jpg"
          alt="PERPLEXITY"
          className="w-auto h-32 object-contain"
        />
      ),
    },
  ];

  // Filter items based on the search query
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Bento Grid */}
      <BentoGrid className="max-w-4xl mx-auto">
        {filteredItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

export const WorkExpl = () => {
  return (
    <div>
      <BackgroundBeamsDemo
      title="Organisations" 
      description="Find companies to work with"  />
      <FilterButton />
      <BentoGridDemo />
    </div>
  );
};
